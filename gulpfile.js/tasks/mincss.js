/**
 * Minifies CSS with cssnano
 * 
 * @version  2.0.0
 * @author   Matthias Morin <matthias.morin@gmail.com>
 */

// https://www.npmjs.com/package/gulp-cssnano
// https://www.npmjs.com/package/gulp-rename
module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('\r\n\r\n----------> Minifying CSS');

		/**
		 * Source Config
		 * @type {Array}
		 */
		var arSrc = [
			config.dest.css + '/*.css',
			'!' + config.dest.css + '/*.min.css',
		];

		gulp.src(arSrc)
		.pipe(plugins.rename({ suffix: '.min' }))
		.pipe(plugins.cssnano())
		.pipe(gulp.dest(config.dest.css))
		.on('end', cb)
	};
};
