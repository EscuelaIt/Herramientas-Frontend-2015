'use strict'

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify')

gulp.task('mi-tarea', () => {
	gulp
		.src('source/*.js')
		.pipe( concat('./todo.js') )
		.pipe( uglify() )
		.pipe( gulp.dest('./') )
})