var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var del = require('del');
var svg2png = require('gulp-svg2png');

var config = {
    shape: {
        spacing: {
            padding: 1
        }
    },
    mode: {
        css: {
            variables: {
                replaceSvgWithPng: () => {
                    return (sprite, render) => {
                        return render(sprite).split('.svg').join('.png');
                    }
                }
            },
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprites.css'
                }
            }
        }
    }
};
gulp.task('beginClean', () => {
    return del(['./app/temp/sprite', './app/assets/images/sprites']);
})
gulp.task('createSprite', ['beginClean'], () => {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'));
});
gulp.task('createPNGCopy', ['createSprite'], () => {
    return gulp.src('./app/temp/sprite/css/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('./app/temp/sprite/css'))
})
gulp.task('copySpriteGraphic', ['createPNGCopy'], () => {
    return (gulp.src('./app/temp/sprite/css/**/*.{svg,png}'))
        .pipe(gulp.dest('./app/assets/images/sprites'));
});
gulp.task('copySpriteCSS', ['createSprite'], () => {
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules'));
});
gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], () => {
    return del('./app/temp/sprite');
})
gulp.task('icons', ['beginClean', 'createSprite', 'createPNGCopy', 'copySpriteGraphic',
    'copySpriteCSS', 'endClean'
]);