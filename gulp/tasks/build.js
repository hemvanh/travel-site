var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var del = require('del');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');


gulp.task('previewDist', () => {
    browserSync.init({
        server: {
            baseDir: 'docs',
        }
    });
})

gulp.task('deleteDistFolder', ['icons'], () => {
    return del('./docs');
})
gulp.task('copyGeneralFiles', ['deleteDistFolder'], () => {
    let pathToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**'
    ]
    return gulp.src(pathToCopy)
        .pipe(gulp.dest('./docs'));
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
        .pipe(gulp.dest('./docs/assets/images'));
});
gulp.task('useminTrigger', ['deleteDistFolder'], () => {
    gulp.start('usemin');
})
gulp.task('usemin', ['styles', 'scripts'], () => {
    return gulp.src('./app/index.html')
        .pipe(usemin({
            css: [() => {
                return rev();
            }, () => {
                return cssnano();
            }],
            js: [() => {
                return rev();
            }, () => {
                return uglify();
            }]
        }))
        .pipe(gulp.dest('./docs'));
});
gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger'], () => {

});