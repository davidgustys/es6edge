es6edge
=======

`Keywords:` *Es6, Traceur, Backbone, Polymer, Gulp, BrowserSync Browserify  boilerplate..*

###Description

Ok so to explain shortly for what i use these libraries:

`Backbone` - Application logic and routing. Usually using models to interact with backend or other data sources.

`Polymer` - For custom elements and components. Incorporates backbone models. Emits, receives events.

`Gulp` - For build automation.

`Browserify` - for client side commonJs style module loading.

`BrowserSync` - to keep your browsers in sync with changes you make.

`Es6 / EcmaScript 6 / Tracur` - for using es6 syntax now, rather than later.



###Directory Structure


`assets` all assets that do not reside in bower_components directory reside here. (css, js, fonts, etc)

`tasks` gulp task files.

`app/models` backbone models.

`app/templates` application html templates (usually to be rendered by backbone views).

`app/views` backbone views, responsible for *context* passing to template and its (templates) rendering.

`dist` application build directory.

###Files

`Gulpfile.js` - loads gulp tasks.

`app/app.js` - Applications JS initialisation file.

`app/index.html` - Applicaiton entry point.

`app/router.js` - Backbone router file, responsible for application routing.

`app/polymer-deps.html` - Polymer dependency import list.



##Setup

This setup assumes that you have **npm**, **bower**, **gulp** installed globally.


1. To install all the packages required by this boilerplate run `npm install && bower install` in the directory where the source code was cloned/downloaded.

2.  *   To run the boilerplate code in **development mode** run `gulp`
    *   To compile a **build** run `gulp build`
