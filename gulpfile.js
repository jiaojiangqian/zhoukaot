/*
 * @Author: 焦江倩 
 * @Date: 2018-12-03 19:16:26 
 * @Last Modified by: 焦江倩
 * @Last Modified time: 2018-12-03 23:29:25
 */

var gulp = require('gulp');

var sass = require('gulp-sass');

var minCss = require('gulp-clean-css');

var uglify = require('gulp-uglify');

var concat = require('gulp-concat');

var server = require('gulp-webserver');

var url = require('url');

var path = require('path');

var fs = require('fs');

// 编译压缩 css
gulp.task('scss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(minCss())
        .pipe(gulp.dest('./src/css'))
})

// 监听 css,js
gulp.task('watch', function() {
    gulp.watch('./src/scss/*.scss', gulp.series('scss'))
    gulp.watch('./src/js/**/*.js', gulp.series('bUglify'))
})

// 起服务
gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: 9999,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                console.log(pathname);

                if (pathname === "/favicon.ico") {
                    res.end('');
                    return;
                }

                pathname = pathname === "/" ? 'index.html' : pathname;
                var state = fs.readFileSync(path.join(__dirname, 'src', pathname));
                res.end(state);
            }
        }))
})

// 压缩 js
gulp.task('bUglify', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./src/minjs'))
})

gulp.task('copyImg', function() {
    return gulp.src('./src/img/*.png')
        .pipe(gulp.dest('./src/copyImg'))
})

gulp.task('default', gulp.series('scss', 'bUglify', 'copyImg', 'server', 'watch'));