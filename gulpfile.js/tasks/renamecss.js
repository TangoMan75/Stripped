/**
 * Renames and moves css files
 * 
 * @version  0.1.0
 * @author   Matthias Morin <matthias.morin@gmail.com>
 */

// https://www.npmjs.com/package/gulp-rename
module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('\r\n\r\n----------> Renaming CSS Files');

		/**
		 * Source Config
		 * @type {Array}
		 */
		var arSrc = [
			config.src.css + '/*.css',
			'!' + config.src.css + '/*.min.css',
		];

		gulp.src(arSrc)
		.pipe(plugins.rename({ suffix: '.min' }))
		.pipe(gulp.dest(config.dest.css))
		.on('end', cb)
	};
};
