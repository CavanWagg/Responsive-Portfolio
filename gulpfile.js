const gulp = require('gulp');
const browserSync = require('browser-sync').create();


//watch stylus/html files
gulp.task('browser-sync', function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("*.css").on('change', browserSync.reload);
});




gulp.task('default', ['browser-sync']);