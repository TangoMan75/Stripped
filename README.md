Stripped
========

Responsive Mobile-First SASS / CSS Micro Framework Without Classes
------------------------------------------------------------------

Targeting HTML elements with CSS directly is usually source of repetition and considered bad practice.

But if you often find yourself developing single page applications and **don't want to spend a lot of time on CSS design** for each one of these small projects.

And still, some styling is needed to present your work in a decent fashion **without wasting hours adding classes to your HTML for bootstrap** or typing CSS.

Then **Stripped** is for you !

Concept
-------

I've build **Stripped** why simplicity is mind.

**Stripped** layout relies on nesting and HTML semantics, so almost no scaffolding is needed exept the one emerging naturally from your HTML document.

For example: It's common practice to use a `<div>` to contain document elements (hello Boostrap users). But why would we need `<div class="container">` when we could use the `<main>` element to wrap our pages ?
Unlike Bootstrap **Stripped** allows to avoid unecessary nesting, classes definitions, and preserve HTML5 semantics in your source code.

Which should allow for fully W3C compliant HTML5, improved accessibility, lighter code and easy maintenance.

What more could you ask for !

How to use ?
------------

Just link **Stripped** CSS in the `<head>` of your document and you should see **Stripped** theme and layout applied to your page.

Link optional javascript at the end of the `<body>` of your document to use extended **Stripped** features (like animations).

How does it work ?
------------------

**Stripped** relies on the structure of your HTML to apply layout and styling.

For example, first direct `<header>` child element from `<body>` will be considered to have role `banner` and will be displayed as the main banner of the page.

All `<nav>` will be considered to have role `navigation`, `<nav>` placed in the `<header>` will be responsive.

All `<section>` will be displayed as a panel, special design will be applied to first `<header>` and last `<footer>` nested tags.

All `<article>` will be considered to have role `article` and will have special design applied to them, first `<header>` and last `<footer>` will have some special styling as well.

Last `<footer>` tag in the document will be considered to have role `contentinfo` and have special design applied to it.

If you want to dive deeper into **Stripped** structure, I've made source SASS availlable for you to customize as you need.

Features
--------

- Typographic scale.
- Automatic button mixin.
- Automatic kbd design mixin.
- Animations.
- Smooth scrolling.
- Automatic ARIA roles.

Extras
------

I diverged from **Stripped** concept a little, but I felt the need to build an optional **grid system** which adds a layer of flexibility to the framework.

**Stripped** responsive grid system takes advantage of powerful CSS3 flex-box property.

It should be intuitive to use as it kind of works like Bootsrap's one, except that you don't need to nest your HTML into a `<div class="container">`, or a `<div class="row">`. And **Stripped** doesn't add unwanted padding to create gutter between elements. Gutter is simply substracted to elements width percentage value, which lets you free to apply padding, margin and border you like.

How to use **Stripped** grid system ?
-------------------------------------

First, add `class="grid"` to parent container which will set up the necessary flex-box CSS, then add responsive `width` classes.
Example:

```html
<section class="grid">
    <article class="width-sm-12 width-md-6 width-lg-3">
        <p>Lorem ipsum...</p>
    </article>
</section>
```
**Stripped** grid has twelve columns.

Above `<article>` will have 100% width on small screens, 50% width on medium screens, 25% width on large screens.

Separation of concerns
----------------------

**Stripped** was built with separation of concerns in mind. All layout related code on one side, and all styling related code on the other, this allows for easier maintenance and enables the possibility to develop themes on top of **Stripped** structure, without changing the scaffolding of the framework. Or you could change the layout while keeping the default design.

Limitations
-----------

Unfortunately **Stripped** concept has some limitations.

1. I've developped **Stripped** to take full advantage of latest HTML5 / CSS3 possibilities. So, I assume you're a developper and that you use a modern HTML5 compliant browser. I don't plan to work on ie8 compatibility anytime soon.
2. I cannot guarantee full cross browser consistency, so your page might look different according to how your browser renders CSS. I may try to improve on this, meanwhile try to use [reset](http://meyerweb.com/eric/tools/css/reset/reset.css) or [normalize](https://necolas.github.io/normalize.css/4.1.1/normalize.css).
3. I've intentionally setup very restrictive rules for layout which avoids **Stripped** to conflict with other CSS rules. But on the other hand, if you decide to change you HTML, your design might break. For **Stripped** to work as intended, you should **NOT** use unnecessary nesting, do **NOT** place your elements inside a `<div>` container.
4. Because **Stripped** CSS targets elements directly, and according to CSS specificity rules, all **Stripped** CSS may easilly (and should be) overridden by any other more specific rules.

Developpement
-------------

I you want to contribute and install **Stripped** developpement dependencies locally follow these steps:

### Step 1: Install Node.js

#### Install Node.js (Linux)

On linux machine install node globally with the following commands (requires curl):

```bash
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
$ sudo apt-get install --assume-yes nodejs
```

#### Install Node.js (Windows)

Download and install recommended LTS version from here: [Node.js](https://nodejs.org/en)

#### Optional: Install Yarn

#### Install Yarn (Linux)

On linux machine install yarn globally with the following commands (requires curl):

```bash
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt-get update
$ sudo apt-get install --assume-yes yarn
```

#### Install Yarn (Windows)

Download and install latest version from here: [yarnpkg.com](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

### Step 2. Install Gulp globally

Open a command console and enter following command to download and install the latest stable version:
```bash
$ npm install gulp-cli -g
# or with yarn
$ yarn global add gulp-cli
```
If you want more detailled information on intallation process, have a look at the [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) chapter of the [Gulpjs](https://github.com/gulpjs) documentation on github.

Enter following command to check if *Gulp* installed correctly:
```bash
$ gulp -v
```

### Step 3. Install project dependencies

Execute the following command to download the latest stable version of required **Gulp** dependencies:
```bash
$ npm install
# or
$ yarn install
```
(Do not forget to _gitignore_ `node_modules` folder in your project root.)

How to use
----------

### Availlable commands

Enter `$ gulp watch` to start gulp listening to any change in your source directory and start working without worring about lauching tasks indiviually...
Do a `$ gulp --prod` before you commit to clean the _dist_ directory, and apply specific _production_ tasks. (Notice double dash.)

- `$ gulp clean`: Deletes all files that are not minified in the dist folder.
- `$ gulp concatcss`: Concatenates all .css files.
- `$ gulp concatjs`: Concatenates all .js files.
- `$ gulp csscomb`: Formats CSS.
- `$ gulp dump`: Dumps config and plugins variables in console.
- `$ gulp inject`: Injects minified js and css files into html.
- `$ gulp mincss`: Minifies CSS.
- `$ gulp minjs`: Minifies javascript.
- `$ gulp prefix`: Adds vendor prefixes to CSS.
- `$ gulp sasscomp`: Compiles SASS and SCSS files, and generates sourcemap.
- `$ gulp strip`: Removes console.logs from javascript.
- `$ gulp uncss`: Remove unused CSS selectors.

### Sequences

- `$ gulp`: Starts default sequence. Compiles sass, appends vendor prefixes, combs css, minifies css, injects css and js, and cleans dist directory.
- `$ gulp watch`: Starts watcher on CSS, JS, and HTML files.
- `$ gulp sass`: Compiles sass, appends vendor prefixes, combs css, minifies css, injects css, and cleans dist directory.
- `$ gulp css`: Appends vendor prefixes, combs css, minifies css, injects css, and cleans dist directory.
- `$ gulp js`: Concatenates javascript, minifies js, injects js, and cleans dist directory.

### Developpement or production settings

**TangoMan Gulp Boilerplate** makes it easy to set up specific tasks for developpement or production.
For example you don't need minification or prefixing during developping phase, while you may want to clean your _dist_ folder or to avoid making sourcemaps availlable for your final production.

Use `--prod` argument to your tasks to run Gulp with specific production settings. (Notice double dash.)

### Included plugins

**TangoMan Stripped** package.json includes the following awesome Gulp plugins:

- [del](https://www.npmjs.com/package/del)
- [gulp](https://www.npmjs.com/package/gulp)
- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- [gulp-beautify](https://www.npmjs.com/package/gulp-beautify)
- [gulp-concat](https://www.npmjs.com/package/gulp-concat)
- [gulp-csscomb](https://www.npmjs.com/package/gulp-csscomb)
- [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano)
- [gulp-inject](https://www.npmjs.com/package/gulp-inject)
- [gulp-load](https://www.npmjs.com/package/gulp-load)
- [gulp-notify](https://www.npmjs.com/package/gulp-notify)
- [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
- [gulp-rename](https://www.npmjs.com/package/gulp-rename)
- [gulp-sass](https://www.npmjs.com/package/gulp-sass)
- [gulp-sequence](https://www.npmjs.com/package/gulp-sequence)
- [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
- [gulp-strip](https://www.npmjs.com/package/gulp-strip)
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
- [gulp-uncss](https://www.npmjs.com/package/gulp-uncss)
- [gulp-util](https://www.npmjs.com/package/gulp-util)
- [require-dir](https://www.npmjs.com/package/require-dir)

License
=======

Copyrights (c) 2020 Matthias Morin

[![License][license-MIT]][license-url]
Distributed under the MIT license.

If you like **TangoMan Stripped** please star!
And follow me on GitHub: [TangoMan75](https://github.com/TangoMan75)
... And check my other cool projects.

[Matthias Morin | LinkedIn](https://www.linkedin.com/in/morinmatthias)

[license-MIT]: https://img.shields.io/badge/Licence-MIT-green.svg
[license-url]: LICENSE
