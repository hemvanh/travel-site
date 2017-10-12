var gulp = require('gulp');
var watch=require('gulp-watch');
var postcss=require('gulp-postcss');
var autoprefixer=require('autoprefixer');
var cssvars=require('postcss-simple-vars');
var nested=require('postcss-nested');
var cssImport=require('postcss-import');

gulp.task('default',()=>{
    console.log('this is the gulp default task');
});


gulp.task('html',()=>{
    console.log('this is HTML task running');
});
gulp.task('styles',()=>{
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport,autoprefixer,cssvars,nested]))
    .pipe(gulp.dest('./app/temp/style'));
});

gulp.task('watch',()=>{
    watch('./app/index.html',()=>{
        gulp.start('html');

    });

    watch('./app/assets/styles/**/*.css',()=>{
        gulp.start('styles');

    })
})

