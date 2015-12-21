'use strict'

module.exports = (grunt) => {
	grunt.initConfig({
		concat : {
			dist : {
				src : 'source/*.js',
				dest : 'todo.js'
			}
		},
		uglify : {
			js : {
				files : {
					'todo.js' : ['source/*.js']
				}
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-concat')
	grunt.loadNpmTasks('grunt-contrib-uglify')

	grunt.registerTask('mi-tarea', ['concat', 'uglify'])
}