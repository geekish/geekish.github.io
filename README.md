Geeki.sh
========

Powered by [Sculpin][link-sculpin]. Based on the Sculpin [blog skeleton][link-skeleton],
built on [Bootstrap][link-bootstrap], and hosted with [Github Pages][link-pages].

## Usage

Install dependencies and prepare assets:
```` bash
composer install
npm install
bower install
gulp bower
gulp sass
````

Build source:
```` bash
./vendor/bin/sculpin generate --env=prod
````

Commit changes to develop branch and run:
```` bash
git push origin `git subtree split --prefix output_prod develop`:master --force
````

## License

Content in `source/_posts` may not be used or redistributed without my permission. As for everything else, see [LICENSE.md](LICENSE.md).

[link-sculpin]: //sculpin.io
[link-skeleton]: //github.com/sculpin/sculpin-blog-skeleton
[link-bootstrap]: //getbootstrap.com
[link-pages]: //pages.github.com
