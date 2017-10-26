var gulp = require('gulp');
var webpack = require('webpack');
var browserSync = require('browser-sync');

gulp.task('scripts', ['modernizr'], (callback) => {
    webpack(require('../../webpack.config.js'), (err, stats) => {
        if (err) {
            console.log(err.toString());
        }
        console.log(stats.toString());
        callback();
    });

});
gulp.task('scriptsRefresh', ['scripts'], () => {
    browserSync.reload();
})