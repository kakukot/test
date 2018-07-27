const mix = require('laravel-mix');

mix.js('src/assets/js/script.js', 'public/assets/js')
   .sass('src/assets/sass/style.scss', 'public/assets/css')
  //  .version()
   .browserSync();

   