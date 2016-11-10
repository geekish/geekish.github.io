var gulp = require('gulp');

/**
 * WORK IN PROGRESS.
 */

var config = require('./config.json');

var autoprefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var path = require('path');
var php = require('gulp-connect-php');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
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
            stream:true
        }))
        ;
});

gulp.task('watch:sass', function() {
    gulp.watch(config.sass.watch, ['sass']);
});

gulp.task('bower', function() {
    config.bower.src.forEach(function(file, index) {
        if (path.extname(file) === '.js') {
            gulp.src(file)
                .pipe(gulp.dest(config.bower.dest + 'js/'));
        }
        if (path.extname(file) === '.css') {
            gulp.src(file)
                .pipe(gulp.dest(config.bower.dest + 'css/'));
        }
        if (path.extname(file) === '.*') {
            gulp.src(file)
                .pipe(gulp.dest(config.bower.dest + 'fonts/'));
        }
    });
});
