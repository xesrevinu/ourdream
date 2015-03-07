var gulp = require('gulp'),
	mocha = require('gulp-mocha'),
	runs = require('gulp-sequence'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish');

var server = './server/**/*.js',
	config = './config/*.js',
	www = './www.js';

var test = './test/*.js';
gulp.task('test', function() {
	return gulp.src(test, {
			read: false
		})
		.pipe(mocha())
})
gulp.task('jshint', function() {
	return gulp.src([server,config,www])
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
})
gulp.task('watchs',function (){
	gulp.watch([server,config,www],'jshint')
	gulp.watch(test,'test')
})

gulp.task('defalut', runs('test','jshint','watchs'))