var Package = require('../package.json');
var Gulp = require('gulp');
var Concat = require('gulp-concat');


module.exports = function(){

    var jsFilesToBuild = [];
    var globalJsFiles = [];


    for(k in Package.browser){
        globalJsFiles.push(Package.browser[k]);
    }

    jsFilesToBuild = Array.prototype.concat([] ,globalJsFiles);

    return Gulp.src(jsFilesToBuild)
        .pipe(Concat('globals.js'))
        .pipe(Gulp.dest('./.tmp/'))
}
