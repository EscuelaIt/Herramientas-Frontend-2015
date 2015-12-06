'use strict'

var gulp = require('gulp'),
	jade = require('gulp-jade'),
	locals = {
		title : 'Jade',
		link : 'http://jade-lang.com/',
		description : 'Jade es un “template engine” (motor de plantillas) de alto performance, enfocado en permitir escribir código HTML de forma rápida. Podríamos decir que se trata de un pre-procesador de código html; similar a stylus, sass o less con respecto a CSS. Jade es fuertemente influenciado por HAML e implementado para Javascript con Node. Jade usa la Indentación(sangrado) para definir la jerarquía de nuestro documento html, no tendremos que escribir tags html < />, estos serán generados por jade al momento de compilar nuestro código jade.'
	}
 

gulp.task('jade', () => {
    return gulp.src('./*.jade')
    .pipe(jade({
        pretty: true,
        locals: locals
    }))
    .pipe(gulp.dest('./'))
})

gulp.task('watch', function () {
	gulp.watch(["./*.*"],["jade"]);
})