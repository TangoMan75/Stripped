/**
 * Deletes all css/js files that are not minified in the dist folder
 *
* @version  1.0.1
* @author   Matthias Morin <matthias.morin@gmail.com>
* @note     Will run synchronouly since del is not a gulp plugin
 */

module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('\r\n\r\n----------> Cleaning');

		// Delete files and folders
		// https://www.npmjs.com/package/del
		var del = require('del');
		// Not automatically loaded by "gulp-load-plugins" since not a Gulp plugin

		/**
		 * Del Options
		 *
		 * Deletes all files that are not minified
		 * @type {Array}
		 */
		var arTarget = [
			config.dest.css + '/*.*',
			'!' + config.dest.css + '/*.min.css',
			config.dest.js + '/*.*',
			'!' + config.dest.js + '/*.min.js',
		];

		if (config.clean) {
			console.log('----------> Removing all non-minified ".css" & ".js" files in "dest" folder');
			del(arTarget);
		} else {
			console.log('----------> Config setting defined on "false"');
		}
		cb();
	};
};
