var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var browserSync = require('browser-sync');
var mixins = require('postcss-mixins');
var hexrgba = require('postcss-hexrgba');

var tskStyles = gulp.task('styles', () => {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
        .on('error', (err) => {
            console.log(err.toString());
            tskStyles.emit('end');
        })
        .pipe(gulp.dest('./app/temp/style'));
});

gulp.task('cssInject', ['styles'], () => {
    return gulp.src('./app/temp/style/styles.css')
        .pipe(browserSync.stream());
});