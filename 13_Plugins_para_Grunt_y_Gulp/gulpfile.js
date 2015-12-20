'use strict'

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	minifycss = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin'),
	connect = require('gulp-connect'),
	cssFiles = [
		'./src/css/jquery.fancybox.css',
		'./src/css/flexslider.css'
	],
	jsFiles = [
		'./src/js/jquery.min.js',
		'./src/js/jquery.mousewheel-3.0.6.pack.js',
		'./src/js/jquery.fancybox.js',
		'./src/js/jquery.fancybox-media.js',
		'./src/js/jquery.flexslider.js',
		'./src/js/codigos.js'
	],
	minCSS = './dist/css/style.min.css',
	minJS = './dist/js/scripts.min.js',
	pathDist = './',
	//images = './src/img/*',
	//images = './src/img/**/*.png',
	//images = './src/img/**/!*.png',
	images = './src/img/**',
	imagesMin = './dist/img'

gulp.task('css', () => {
	gulp
		.src( cssFiles )
		.pipe( concat( minCSS ) )
		.pipe( minifycss() )
		.pipe( gulp.dest( pathDist ) )
})

gulp.task('js', () => {
	gulp
		.src( jsFiles )
		.pipe( concat( minJS ) )
		.pipe( uglify() )
		.pipe( gulp.dest( pathDist ) )
})

gulp.task('img', () => {
	gulp
		.src( images )
		.pipe( imagemin() )
		.pipe( gulp.dest( imagesMin ) )
})

gulp.task('min', ['css', 'js', 'img'])

gulp.task('server', () => {
	connect.server({
		root : './src',
		port : 3000,
		livereload : true
	})
})

gulp.task('reload', () => {
	gulp
		.src(['./src/**/*.*'])
		.pipe( connect.reload() )
})

gulp.task('watch', () => {
	gulp
		.watch(['./src/**/*.*'], ['reload'])
})

gulp.task('start', ['server', 'watch'])