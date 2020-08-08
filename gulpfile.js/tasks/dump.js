/**
 * Dumps config and plugins variables in console
 *
 * @version  1.0.0
 * @author   Matthias Morin <matthias.morin@gmail.com>
 */

// https://www.npmjs.com/package/gulp-util
module.exports = function(gulp, plugins, config){

	/**
	 * Dummy task
	 */
	return function(cb){

		console.log('\r\n\r\n----------> Config');
		console.log(config);
		console.log('\r\n\r\n\r\n');
		console.log('\r\n\r\n----------> Plugins');
		console.log(plugins);
		console.log('\r\n\r\n\r\n');
		plugins.util.beep();
		cb();
	};
};
