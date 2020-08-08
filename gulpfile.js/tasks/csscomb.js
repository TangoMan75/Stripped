/**
 * Formats all CSS from both 'src' and 'dest' folders
 * 
 * @version  1.1.0
 * @author   Matthias Morin <matthias.morin@gmail.com>
 */

// https://www.npmjs.com/package/gulp-csscomb
// http://csscomb.com/config
module.exports = function(gulp, plugins, config){
	return function(cb){

		// gulp-csscomb is so bad! You need to have this json inside a .csscomb.json file present in the same folder as the source file(s), or in the project root folder.
		// Passing arguments directly as a parameter is NOT POSSIBLE!!!
		ojbSetting = {
			"remove-empty-rulesets": true,
			"always-semicolon": true,
			"color-case": "upper",
			"block-indent": "\t",
			"color-shorthand": true,
			"element-case": "lower",
			"eof-newline": true,
			"leading-zero": false,
			"quotes": "double",
			"space-before-colon": "",
			"space-after-colon": " ",
			"space-before-combinator": " ",
			"space-after-combinator": " ",
			"space-between-declarations": "\n",
			"space-before-opening-brace": " ",
			"space-after-opening-brace": "\n",
			"space-after-selector-delimiter": "\n",
			"space-before-selector-delimiter": "",
			"space-before-closing-brace": "\n",
			"strip-spaces": false,
			"unitless-zero": true,
			"vendor-prefix-align": true
		};

		console.log('\r\n\r\n----------> Combing CSS');

		gulp.src(config.src.css + '/*.css')
		.pipe(plugins.csscomb(ojbSetting))
		.pipe(gulp.dest(config.src.css))
		.pipe(gulp.dest(config.dest.css))
		.on('end', cb)
	};
};
