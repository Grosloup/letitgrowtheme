var gulp = require('gulp');
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {

    return gulp
        .src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(
            {
                browsers: ['last 3 versions']
            }
        ))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function () {
    browserSync.init({server: {baseDir: './'}}); //server: {baseDir: './'},
    gulp.watch('scss/*.scss', ["sass"]);
    gulp.watch(["*.html", "css/*.css", "js/*.js"]).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);