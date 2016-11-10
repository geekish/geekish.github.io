Geeki.sh
========

Powered by [Sculpin][link-sculpin]. Based on the Sculpin [blog skeleton][link-skeleton],
built on [Bootstrap][link-bootstrap], and hosted with Github Pages.

## How this works

- I use [Composer][link-composer] to manage dependencies, in this case, Sculpin.
- I execute Sculpin commands via `./vendor/bin/sculpin` (in the project root).
- To deploy, I'm using the `publish.sh` script from the blog skeleton.

# To Do:

- [ ] Somehow get category feeds working. See: sculpin/sculpin#9

## License

Content in `source/_posts` may not be used or redistributed without my permission.
As for everything else, [DBAD][link-license]. See [LICENSE.md](LICENSE.md).

[link-sculpin]: //sculpin.io
[link-skeleton]: //github.com/sculpin/sculpin-blog-skeleton
[link-bootstrap]: //getbootstrap.com
[link-composer]: //getcomposer
[link-license]: //dbad-license.org
