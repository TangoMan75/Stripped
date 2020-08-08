/**
 * Concatenates all `_*.js` files from your source folder to distribution folder
 * Prefix files you want concatenated with "_"
 *
 * @version  2.0.0
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

		console.log('\r\n\r\n----------> Merging Javascript');
		console.log('----------> Note: Prefix your javascript files with "_" to concatenate');

		/**
		 * Concat Source Config
		 *
		 * @note You can force desired combination placing pathes in order in this array
		 * @type {Array}
		 */
		var arSrc = [
			config.src.js + '/**/_*.js'
		];

		if (plugins.util.env.prod) {
			console.log('----------> Production Mode');
			gulp.src(arSrc)
			.pipe(plugins.plumber({ errorHandler: handleError }))
			.pipe(plugins.concat(config.project.name + '-' + config.project.version + '.js'))
			.pipe(gulp.dest(config.dest.js))
			.on('end', cb);
		} else {
			console.log('----------> Dev Mode');
			gulp.src(arSrc)
			.pipe(plugins.plumber({ errorHandler: handleError }))
			.pipe(plugins.concat(config.project.name + '-' + config.project.version + '.js'))
			.pipe(gulp.dest(config.src.js))
			.pipe(gulp.dest(config.dest.js))
			.on('end', cb);
		}
	};
};
