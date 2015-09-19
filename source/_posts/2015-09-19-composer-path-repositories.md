---
title: Composer Path Repositories
categories:
    - Composer
---

A recent update of [Composer](//getcomposer.org) brought us the new "path" repository type.
I've been developing packages while I use them in other projects, and this is a much better solution than what I had been using: private [Gitlab](//gitlab.com) repositories. It was working well, except that every single change I made to a package had to be committed and pushed to Gitlab, and then I had to request a `composer update` in the project where I was using the package.

This is also very useful for testing local forks or clones of development branches.
For example, I've been testing the 2.x version of [`league/route`](//github.com/thephpleague/route), which is under the `develop` branch.
After cloning the repo and pulling/checking out the develop branch, I updated my project's `composer.json`:


~~~.language-js
{
...
"repositories": [
    {
        "type": "path",
        "url": "../lib/route"
    }
],
"require": {
    "league/route": "*@dev"
},
...
}
~~~


So far this has worked perfectly. Composer symlinks the package into my vendor directory, and if I need to make a change in the package I don't have to worry about git commits or composer updates.
