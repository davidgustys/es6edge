var Gulp = require('gulp');
var Browserify = require('browserify');
var Es6ify = require('es6ify');
var Size = require('gulp-size');
var Source = require('vinyl-source-stream');
var Buffer = require('vinyl-buffer');


module.exports = function(){
    //Paths
    var paths = {
        source: './app/app.js',
        dest: './.tmp/'
    };


    //Browserify bundler
    var bundler = Browserify([Es6ify.runtime], {
        debug: true
    });


    var bundle = function(){

        return bundler
        .transform(Es6ify)
        .require(paths.source, { entry: true })
        .bundle()
        .pipe(Source('app.js'))
        .pipe(Buffer())
        .pipe(Size())
        .pipe(Gulp.dest(paths.dest))
        .on('error', function (err) { console.error(err); });

    };


    return bundle();
}
