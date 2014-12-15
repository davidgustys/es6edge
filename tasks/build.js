var Gulp = require('gulp');
var Browserify = require('browserify');
var Es6ify = require('es6ify');
var Sourcemaps = require('gulp-sourcemaps');
var Size = require('gulp-size');
var Source = require('vinyl-source-stream');
var Buffer = require('vinyl-buffer');

//Paths
paths = {
    source: './app/app.js',
    dest: './tmp/'
};


//Browserify bundler
var bundler = Browserify([Es6ify.runtime], {
    debug: true
});


var bundle = function(){

    return bundler
    .transform(Es6ify)
    .require(require.resolve(paths.source), { entry: true })
    .bundle()
    .pipe(Source('app.js'))
    .pipe(Buffer())
    .pipe(Sourcemaps.init({loadMaps: true}))
    // Add transformation tasks to the pipeline here.
    //.pipe(Uglify())
    .pipe(Sourcemaps.write())
    .pipe(Size())
    .pipe(Gulp.dest(paths.dest))
    .on('error', function (err) { console.error(err); });

};


//export the stream..
module.exports = bundle();
