const mix = require("laravel-mix");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix 	
	.js("resources/js/request.js", "public/js")
	.js("resources/js/swiper.js", "public/js")
	.js("resources/js/events.js", "public/js")
	.js(['resources/js/site.js', 
		'resources/js/nav.js',
		'resources/js/newsletter-footer.js',
		'resources/js/eye-catcher.js',
	], 'public/js/app.js')
	.sass("resources/scss/main.scss", "public/css")
	.sourceMaps(true, "source-map");

// mix.postCss('resources/css/tailwind.css', 'public/css', [
//     require('postcss-import'),
//     require('tailwindcss'),
//     require('postcss-nested'),
//     require('postcss-preset-env')({stage: 0})
// ])

if (mix.inProduction()) {
	mix.version();
}
mix.browserSync({
	proxy: "eddm.test",
});

mix.disableSuccessNotifications();

/*
 |--------------------------------------------------------------------------
 | Statamic Control Panel
 |--------------------------------------------------------------------------
 |
 | Feel free to add your own JS or CSS to the Statamic Control Panel.
 | https://statamic.dev/extending/control-panel#adding-css-and-js-assets
 |
 */

// mix.js('resources/js/cp.js', 'public/vendor/app/js')
//    .postCss('resources/css/cp.css', 'public/vendor/app/css', [
//     require('postcss-import'),
//     require('tailwindcss'),
//     require('postcss-nested'),
//     require('postcss-preset-env')({stage: 0})
// ])
