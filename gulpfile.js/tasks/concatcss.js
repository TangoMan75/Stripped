/**
 * Concatenates all CSS files from your distribution folder
 *
 * @version  1.1.0
 * @author   Matthias Morin <matthias.morin@gmail.com>
 */

/**
 * Handles errors without stopping watch
 * 
 * @param   {Object}  err  Received error
 * @url     https://github.com/gulpjs/gulp/issues/259
 */
function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

// https://www.npmjs.com/package/gulp-concat
module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('\r\n\r\n----------> Merging CSS');

		/**
		 * Concat Source Config
		 *
		 * @note You can force desired combination placing pathes in order in this array
		 * @type {Array}
		 */
		var arSrc = [
			config.src.css + '/**/*.css'
		];

		if (plugins.util.env.prod) {
			console.log('----------> Production Mode');
			gulp.src(arSrc)
			.pipe(plugins.plumber({ errorHandler: handleError }))
			.pipe(plugins.concat(config.project.name + '-' + config.project.version + '.css'))
			.pipe(gulp.dest(config.dest.css))
			.on('end', cb);
		} else {
			console.log('----------> Dev Mode');
			gulp.src(arSrc)
			.pipe(plugins.plumber({ errorHandler: handleError }))
			.pipe(plugins.concat(config.project.name + '-' + config.project.version + '.css'))
			.pipe(gulp.dest(config.src.css))
			.pipe(gulp.dest(config.dest.css))
			.on('end', cb);
		}
	};
};
