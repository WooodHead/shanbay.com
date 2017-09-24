var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var htmlmin = require('gulp-htmlmin')

var concatCss = require('gulp-concat-css');



const PATHS = {
  output: 'dist',
  templates: 'src/templates',
  pages: 'src/pages',
  lib: 'bower_components',
  src: 'src',
  img: 'img'
}

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: PATHS.output
    },
  });
});


gulp.task('watch', function () {
  // trigger Nunjucks render when pages or templates changes
  gulp.watch([PATHS.pages + '/**/*.+(html|js)', PATHS.templates + '/**/*.+(html|js)'], ['nunjucks'])
  gulp.watch([PATHS.templates + '/**/*.+(css)'], ['css'])

  // reload browsersync when `dist` changes
  gulp.watch(PATHS.output + '/*').on('change', browserSync.reload);

});


gulp.task('lib', function () {
  return gulp.src(PATHS.lib + '/**/*.*')
    .pipe(gulp.dest(PATHS.output + '/bower_components'));
});


gulp.task('img', function () {
  return gulp.src(PATHS.img + '/**/*.*')
    .pipe(gulp.dest(PATHS.output + '/img'));
});

gulp.task('css', function () {
  return gulp.src(PATHS.src + '/**/*.css')
    // .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest(PATHS.output));
});

gulp.task('js', function () {
  return gulp.src(PATHS.src + '/**/*.js')
    .pipe(gulp.dest(PATHS.output));
});

gulp.task('html', function () {
  return gulp.src(PATHS.src + '/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      cssmin: true,
      jsmin: true
    }))
    .pipe(gulp.dest(PATHS.output));
});

gulp.task('watch', function () {
  // trigger Nunjucks render when pages or templates changes
  gulp.watch(PATHS.src + '/**/*.html', ['html'])
  gulp.watch(PATHS.src + '/**/*.css', ['css'])
  gulp.watch(PATHS.lib + '/**/*.*', ['lib'])
  gulp.watch(PATHS.img + '/**/*.*', ['img'])
  gulp.watch(PATHS.src + '/**/*.js', ['js'])


  // reload browsersync when `dist` changes
  gulp.watch(PATHS.output + '/*').on('change', browserSync.reload)

});

gulp.task('auto', ['browserSync', 'watch']);

gulp.task('default', ['auto']);