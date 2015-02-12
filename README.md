Github theme starter
===

A starter config to create your own Github page theme using modern front-end tools : 

- [Gulp](http://gulpjs.com/), task runner
- [Bower](http://bower.io/), package manager
- [Sass](http://sass-lang.com/), super CSS preprocessor
- [Bourbon](http://bourbon.io/), mixin library for Sass
- [Modernizr](http://modernizr.com/), modern browser detector 
- [Font Awesome](http://fortawesome.github.io/Font-Awesome/), icons for the web
- [Animate](http://daneden.github.io/animate.css/), fast css3 animations
- [Initializer](http://www.initializr.com/), HTML5 template


## Features

- Livereload
- Nodejs server
- Sass compilation + vendor import (manual config)
- Head scripts concatenation, uglify + vendor import (manual config)
- Body end scripts concatenation, uglify + vendor import (manual config)
- Index.html Boilerplate with responsive meta
- Gulpfile.js uses the package.json description to personnalize your output files


## Working on

Be sure you have Nodejs, Gulp, Bower and Ruby installed. If not, click on the previous link list. 


### Init packages and dependencies

	npm install && bower install


### Development mod 

Default Gulp task will enable livereload and only compiles Sass files to optimize the stream. It also concatenates scripts files.
Once you've started the server, go the ```http://localhost:1337/```.

	gulp

You can also test the production build with 

	gulp --type production


### Ready for Production

Show you the output files with concatenation, minification, css prefix, and personnal header, like it should be when you'll deploy.

	gulp build


## Deploy your project

According to the [Github pages](https://pages.github.com/) (Home -> Project site -> Start from scratch), pull your project to the ```gh-pages``` branch.


[![Analytics](https://ga-beacon.appspot.com/UA-59640055-1/github-theme-starter/readme)](https://github.com/igrigorik/ga-beacon)
