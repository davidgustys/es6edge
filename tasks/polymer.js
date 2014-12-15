//Polymer Task
var Gulp = require('gulp');
var Vulcanize = require('gulp-vulcanize');


module.exports = function() {
    return Gulp.src('./app/polymer-deps.html')
    .pipe(Vulcanize({
        dest: './.tmp/',
        inline: true,
        csp: true,
        strip: true
    }))
//  .pipe(minifyHtml({
//      quotes: true,
//      empty: true
//  }))
    .pipe(Gulp.dest('./.tmp/'))
    .on('error', function (err) { console.error(err); });
};
