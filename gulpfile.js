var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var browserSync = require('browser-sync');


gulp.task('default', () => {
    console.log('this is the gulp default task');
});


gulp.task('html', () => {
    console.log('this is HTML task running');
});
gulp.task('styles', () => {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, autoprefixer, cssvars, nested]))
        .pipe(gulp.dest('./app/temp/style'));
});

gulp.task('watch', () => {

    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });

    watch('./app/index.html', () => {
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', () => {
        gulp.start('cssInject');

    });
})

gulp.task('cssInject', ['styles'], () => {
    return gulp.src('./app/temp/style/styles.css')
        .pipe(browserSync.stream());
});