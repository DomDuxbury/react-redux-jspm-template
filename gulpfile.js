var gulp = require('gulp');
var jspm = require('gulp-jspm-build');
var eslint = require('gulp-eslint');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var htmlreplace = require('gulp-html-replace');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

gulp.task('build-js', function() {
    return jspm({
            bundleSfx: true,
            bundles: [{
                src: 'src/app/main',
                dst: 'bundle.min.js'
            }]
        })
        .pipe(uglify())
        .pipe(gulp.dest('build/'));
});

gulp.task('build-html', function() {
    return gulp.src('src/index.html')
        .pipe(htmlreplace({
            'css': 'styles.min.css',
            'js': 'bundle.min.js'
        }))
        .pipe(gulp.dest('build/'));
})

gulp.task('less', function() {
    return gulp.src('src/less/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('src'))
        .pipe(browserSync.stream());
});

gulp.task('build-less', function() {
    return gulp.src('src/less/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(concat('styles.min.css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('build'))
});

gulp.task('browser-sync', function() {
    return browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('lint', function() {
    return gulp.src('src/**/*.{js,jsx}')
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('dev', ['browser-sync'], function() {
    gulp.watch('src/**/*.{js,jsx}', function() {
        browserSync.reload();
    });
    gulp.watch('src/less/*.less', ['less']);
});

gulp.task('build', ['build-js', 'build-less', 'build-html'])