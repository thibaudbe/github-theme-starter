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
- [BrowserSync](http://www.browsersync.io/), time-saving synchronised browser testing


## Features

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

	gulp

You can also test the production build with 

	gulp --type production


### Ready for Production

Show you the output files with concatenation, minification, css prefix, and personnal header, like it should be when you'll deploy.

	gulp build


## Deploy your project

According to the [Github pages](https://pages.github.com/) (Home -> Project site -> Start from scratch), pull your project to the ```gh-pages``` branch.


## Important

- Remove the 70s line of the .gitignore, otherwise your build folder won't be deploy.
- I've configured the BrowserSync default browser as my personnal dev browser : Google Chrome Canary. Don't forget to change that parameters if you want to automatically open a tab in your current browser.
- If you see these following lines, that's because Neat is still using a deprecated mixins : ```box-sizing```. Once you've imported the Neat package in ```bower_components```, juste remove or comment the line 11 in ```bower_components/neat/app/assets/stylesheets/_neat.scss```.

	ulp-ruby-sass stderr: WARNING: The box-sizing mixin is deprecated and will be removed in the next major version release. This property can now be used un-prefixed.
		on line 410 of bower_components/bourbon/app/assets/stylesheets/_bourbon-deprecated-upcoming.scss, in `box-sizing'
		from line 5 of bower_components/neat/app/assets/stylesheets/grid/_box-sizing.scss
		from line 11 of bower_components/neat/app/assets/stylesheets/_neat.scss
		from line 2 of ./src/scss/main.scss



[![Analytics](https://ga-beacon.appspot.com/UA-59640055-1/github-theme-starter/readme)](https://github.com/igrigorik/ga-beacon)
