var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var del = require('del');
var usemin = require('gulp-usemin');
gulp.task('deleteDistFolder', () => {
    return del('./dist');
})
gulp.task('optimizeImages', ['deleteDistFolder'], () => {
    return gulp.src(['./app/assets/images/**/*',
            '!./app/assets/images/icons',
            '!./app/assets/images/icons/**/*'
        ])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest('./dist/assets/images'));
});
gulp.task('usemin', ['deleteDistFolder'], () => {
    return gulp.src('./app/index.html')
        .pipe(usemin())
        .pipe(gulp.dest('./dist'));
});
gulp.task('build', ['deleteDistFolder', 'usemin', 'optimizeImages'], () => {

});