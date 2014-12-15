Gulp = require('gulp');

module.exports = function(cb){

    var copyAssets = function(cb){
        Gulp.src([
            './assets/**',
        ])
        .pipe(Gulp.dest('./dist/assets/'))
        .on('end', cb);
    };

    var copyTemp = function(cb){
        Gulp.src([
            './**',
        ], {cwd: './.tmp'})
        .pipe(Gulp.dest('./dist/'))
        .on('end', cb);

    };

    var copyComponents = function(cb){
        Gulp.src([
            './**',
        ], {cwd: './bower_components'})
        .pipe(Gulp.dest('./dist/bower_components/'))
        .on('end', cb);
    }


    //fastest, simplest, dumbest approach - but gets the job done
    copyAssets(function(){

        //copy from temp directory
        copyTemp(function(){


            copyComponents(function(){

                cb();

            });


        });
    });

}
