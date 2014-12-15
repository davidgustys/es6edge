var Gulp = require('gulp');
var Browserify = require('browserify');
var Es6ify = require('es6ify');
var Sourcemaps = require('gulp-sourcemaps');
var Size = require('gulp-size');
var Source = require('vinyl-source-stream');
var Buffer = require('vinyl-buffer');
//var Uglify = require('gulp-uglify');
var Watchify = require('watchify');
var BrowserSync = require('browser-sync');

module.exports = function(){
    //watch browserify files
    var watchify = function(){
        //Paths
        var paths = {
            source: './app/app.js',
            dest: './.tmp/'
        };


        //Browserify bundler
        var bundler = Browserify([Es6ify.runtime], {
            debug: true
        })
        .transform(Es6ify)
        .require(paths.source, { entry: true });


        var bundle = function(){

            return bundler
            .bundle()
            .pipe(Source('app.js'))
            .pipe(Buffer())
            .pipe(Sourcemaps.init({loadMaps: true}))
            // Add transformation tasks to the pipeline here.
            //.pipe(Uglify())
            .pipe(Sourcemaps.write())
            .pipe(Gulp.dest(paths.dest))
            .pipe(Size())
            .pipe(BrowserSync.reload({stream:true}))
            .on('error', function (err) { console.error(err); });

        };

        //rebudle on change..
        bundler = Watchify(bundler);
        bundler.on('update', bundle);

        bundle();

    }


    //watch index
    Gulp.watch('./app/index.html', ['copyIndex', 'reload']);

    //watch polymer deps
    Gulp.watch('./app/polymer-deps.html', ['polymer', 'reload']);

    //watch js files
    Gulp.watch('./assets/**/*.js', ['reload']);

    //watch css files
    Gulp.watch('./assets/**/*.css', ['reload']);

    //watch less,sass,scss files
    Gulp.watch('./assets/**/*.less', ['styles', 'reload']);
    Gulp.watch('./assets/**/*.sass', ['styles', 'reload']);
    Gulp.watch('./assets/**/*.scss', ['styles', 'reload']);

    //images
    Gulp.watch('../assets/**/*.{png,jpg,gif}', ['reload']);


    watchify();

}
