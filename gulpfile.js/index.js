/**
 * TangoMan Gulp Boilerplate
 * =========================
 *
 * Set up your front-end Gulp workflow in minutes
 * ----------------------------------------------
 *
 * @version  1.0.0
 * @licence  MIT
 * @author   Matthias Morin <matthias.morin@gmail.com>
 */



/**************************************************
 * Requires
 **************************************************/

// https://www.npmjs.com/package/gulp
var gulp = require('gulp');	// The streaming build system

// Automatically load any gulp plugins in your package.json
// https://www.npmjs.com/package/gulp-load-plugins
// Which is way more efficient than https://www.npmjs.com/package/gulp-require-dir method
var plugins = require('gulp-load-plugins')();	

// Loads gulpfile configuration
config = require('./config.json');



/**************************************************
 * getTask
 **************************************************/

/**
 * Returns specified task from task folder
 *
 * This is a function I found from
 * http://macr.ae/article/splitting-gulpfile-multiple-files.html
 *
 * @param  {String} task Task name
 * @return {Object}      Task as a module
 */
function getTask(task){

	/**
	 * getTask Configuration
	 *
	 * @type {String} Tasks source folder
	 */
	var tasksDirectory = './tasks/';

	return require(tasksDirectory + task)(gulp, plugins, config);
};



/**************************************************
 * Individual tasks
 * 'command' -> 'file'
 **************************************************/

gulp.task('clean',      getTask('clean'));
gulp.task('concatjs',   getTask('concatjs'));
gulp.task('csscomb',    getTask('csscomb'));
gulp.task('dump',       getTask('dump'));
gulp.task('inject',     getTask('inject'));
gulp.task('mincss',     getTask('mincss'));
gulp.task('minjs',      getTask('minjs'));
gulp.task('prefix',     getTask('prefix'));
gulp.task('renamecss',  getTask('renamecss'));
gulp.task('sasscomp',   getTask('sasscomp'));
gulp.task('strip',      getTask('strip'));
gulp.task('uncss',      getTask('uncss'));
gulp.task('watch',      getTask('watch'));



/**************************************************
 * CSS task sequences
 **************************************************/

var cssDev  = function(cb){
	plugins.sequence('csscomb', config.inject?'inject':'', cb);
};
var cssProd = function(cb){
	plugins.sequence('csscomb', 'prefix', 'mincss', config.inject?'inject':'', config.clean?'clean':'', cb);
};

gulp.task('css', plugins.util.env.prod ? cssProd : cssDev);



/**************************************************
 * SASS task sequences
 **************************************************/

var sassDev  = function(cb){
	plugins.sequence('sasscomp', 'csscomb', config.inject?'inject':'', cb);
};
var sassProd = function(cb){
	plugins.sequence('sasscomp', 'csscomb', 'prefix', 'mincss', config.inject?'inject':'', config.clean?'clean':'', cb);
};

gulp.task('sass', plugins.util.env.prod ? sassProd : sassDev);



/**************************************************
 * Javascript task sequences
 **************************************************/

var jsDev  = function(cb){
	plugins.sequence('concatjs', config.inject?'inject':'', cb);
};
var jsProd = function(cb){
	plugins.sequence('concatjs', 'strip', 'minjs', config.inject?'inject':'', config.clean?'clean':'', cb);
};

gulp.task('js', plugins.util.env.prod ? jsProd : jsDev);



/**************************************************
 * Default Task
 **************************************************/

var defaultDev  = function(cb){
	plugins.sequence(['sasscomp', 'concatjs'], 'csscomb', config.inject?'inject':'', cb);
};
var defaultProd = function(cb){
	plugins.sequence(['sasscomp', 'concatjs'], 'csscomb', ['prefix', 'strip'], ['mincss', 'minjs'], config.inject?'inject':'', config.clean?'clean':'', cb);
};

gulp.task('default', plugins.util.env.prod ? defaultProd : defaultDev);
