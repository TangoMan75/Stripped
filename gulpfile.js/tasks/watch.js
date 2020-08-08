/**
 * Starts watcher on CSS, JS, IMG, and HTML files
 * 
 * @version  2.0.0
 * @author   Matthias Morin <matthias.morin@gmail.com>
 */

// https://www.npmjs.com/package/gulp-watch
module.exports = function(gulp, plugins, config){
	return function(){

		console.log('\r\n\r\n----------> Watching');

		// Changes in the src directory
		gulp.watch(config.src.js + '/**/*.js', ['js']);
		gulp.watch(config.src.scss + '/**/*.{sass,scss}', ['sass']);
		gulp.watch(config.src.index, ['inject']);
	};
};
