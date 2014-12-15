var Gulp = require('gulp')
var RunSequence = require('run-sequence');
var BrowserSync = require('browser-sync');

var tasks = [
    'clean',
    'polymer',
    'styles',
    'browserify',
    'copy',
    'browsersync',
    'watch',
    'javascript'
];

tasks.forEach(function(name){

    Gulp.task(name, require('./tasks/' + name));

});


Gulp.task('copyIndex', function(){

    return Gulp.src([
        'index.html',
    ], {cwd: './app'})
    .pipe(Gulp.dest('./.tmp/'))


});

Gulp.task('reload', function(){
    return BrowserSync.reload();
});


Gulp.task('shared-tasks', ['browserify', 'javascript', 'styles', 'polymer', 'copyIndex']);


Gulp.task('build', function(cb){
    RunSequence('clean', 'shared-tasks', 'copy', cb);
});


Gulp.task('default', function(cb){
    RunSequence('shared-tasks', 'browsersync', 'watch', cb);
});
