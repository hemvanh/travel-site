var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');

gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: 'app',
        }
    });
    watch('./app/index.html', () => {
        browserSync.reload();
    });
    watch('./app/assets/styles/**/*.css', () => {
        gulp.start('cssInject');
    });
});
