var gulp = require('gulp');

var config = require('./config.json');

var autoprefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var header = require('gulp-header');
var path = require('path');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

var nodemon = require('nodemon');
var nodemonConfig = require('./nodemon.json');

gulp.task('build:prism', function() {
  var files = config.prism.lang.split('+').map(
    function(file) {
      return './node_modules/prismjs/components/prism-' + file + '.min.js';
    }
  );
  return gulp.src(files)
  .pipe(header('/***********************************************\n' +
  '    Begin <%= file.relative %>\n' +
  '***********************************************/\n'))
  .pipe(concat('prism.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(config.assets.dest + 'js/'));
});

gulp.task('build:sass', function () {
  return gulp.src(config.sass.compile)
  .pipe(sass({
    includePaths: config.sass.includePaths,
    onError: browserSync.notify,
    outputStyle: config.sass.outputStyle
  }))
  .pipe(autoprefix({
    browsers: config.autoprefix.browsers
  }))
  .pipe(gulp.dest(config.sass.dest))
  .pipe(browserSync.reload({
    stream: true
  }))
  ;
});

gulp.task('watch:sass', function() {
  gulp.watch(config.sass.watch, ['sass']);
});

gulp.task('build:assets', ['build:prism'], function() {
  config.assets.src.forEach(function(file, index) {
    if (path.extname(file) === '.js') {
      gulp.src(file)
      .pipe(gulp.dest(config.assets.dest + 'js/'));
    }
    if (path.extname(file) === '.css') {
      gulp.src(file)
      .pipe(gulp.dest(config.assets.dest + 'css/'));
    }
    if (path.extname(file) === '.*') {
      gulp.src(file)
      .pipe(gulp.dest(config.assets.dest + 'fonts/'));
    }
  });
});

gulp.task('clean', function () {
  gulp.src('./output_dev', { read: false })
    .pipe(gulpClean());
});

gulp.task('watch', ['watch:sass']);

gulp.task('serve', function() {
  nodemon(nodemonConfig)
    .on('log', function (message) {
      console.log(message.colour);
    })
    .on('quit', function () {
      process.exit(0);
    });
});

gulp.task('default', ['serve', 'watch']);
