/**
 * Compiles SASS and SCSS files to both 'src' and 'dest' folders, and generates sourcemap
 *
 * Use `gulp sass --prod` to disable sourcemaps
 *
 * @version  2.1.0
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

/**
 * @requires  The following modules
 * https://www.npmjs.com/package/gulp-plumber
 * https://www.npmjs.com/package/gulp-sass
 * https://www.npmjs.com/package/gulp-sourcemaps
 * https://www.npmjs.com/package/gulp-util
 */
module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('\r\n\r\n----------> Compiling SASS');

		/**
		 * Sass Options
		 * @type {Object}
		 */
		var objOptions = {
			// outputStyle: 'compressed',
			outputStyle: 'expanded',
		};

		if (plugins.util.env.prod) {
			console.log('----------> Production Mode');
			gulp.src(config.src.scss + '/**/*.{sass,scss}')
			.pipe(plugins.plumber({ errorHandler: handleError }))
			.pipe(plugins.sass(objOptions))
			.pipe(gulp.dest(config.src.css))
			.pipe(gulp.dest(config.dest.css))
			.on('end', cb);
		} else {
			console.log('----------> Dev Mode');
			gulp.src(config.src.scss + '/**/*.{sass,scss}')
			.pipe(plugins.sourcemaps.init('debug'))
			.pipe(plugins.plumber({ errorHandler: handleError }))
			.pipe(plugins.sass(objOptions))
			.pipe(gulp.dest(config.src.css))
			.pipe(plugins.sourcemaps.write())
			.pipe(gulp.dest(config.src.css))
			.pipe(gulp.dest(config.dest.css))
			.on('end', cb);
		}
	};
};
