/**
 * Removes console.logs from javascript in 'dest' folder
 * 
 * @version  1.0.0
 * @author   Matthias Morin <matthias.morin@gmail.com>
 */

// https://www.npmjs.com/package/gulp-strip-debug
module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('\r\n\r\n----------> Removing console.logs');

		gulp.src(config.src.js + '/*.js')
		.pipe(plugins.stripDebug())
		.pipe(gulp.dest(config.dest.js))
		.on('end', cb)
	};
};
