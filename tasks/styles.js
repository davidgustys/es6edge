var Gulp = require('gulp');
var Concat = require('gulp-concat');


module.exports = function(cb){

    return Gulp.src([
        './bower_components/skeleton/css/normalize.css',
        './bower_components/skeleton/css/skeleton.css',
        './assets/css/vendor/ionicons/ionicons.css'
    ])
    .pipe(Concat('build.css'))
    .pipe(Gulp.dest('./assets/css/'))
    
}
