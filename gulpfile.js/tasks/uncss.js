/**
 * Remove unused CSS selectors
 * 
 * This task is probably useless when you work with a twig template
 *
 * @version  1.0.0 beta
 * @author   Matthias Morin <matthias.morin@gmail.com>
 */

// https://www.npmjs.com/package/gulp-uncss
module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('\r\n\r\n----------> Removing unused CSS');

		/**
		 * uncss Options
		 * @type {Object}
		 */
		var objOption = {
			html: [config.dest.index]
		}

		gulp.src(config.src.css + '/**/*.css')
		.pipe(plugins.uncss(objOption))
		.pipe(gulp.dest(config.dest.css))
		.on('end', cb)
	};
};
