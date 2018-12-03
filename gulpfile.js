/*
 * @Author: 焦江倩 
 * @Date: 2018-12-03 19:16:26 
 * @Last Modified by: 焦江倩
 * @Last Modified time: 2018-12-03 23:04:14
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