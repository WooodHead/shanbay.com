var gulp = require('gulp'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  cleanCSS = require('gulp-clean-css'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  jshint = require('gulp-jshint'),
  prefix = require('gulp-autoprefixer'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  htmlmin = require('gulp-htmlmin'),
  size = require('gulp-size'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  plumber = require('gulp-plumber'),
  deploy = require('gulp-gh-pages'),
  notify = require('gulp-notify'),
  sassLint = require('gulp-sass-lint'),
  del = require('del'),
  vinylPaths = require('vinyl-paths'),
  sourcemaps = require('gulp-sourcemaps'),
  colors = require('colors'),
  sassdoc = require('sassdoc'),
  // Temporary solution until gulp 4
  // https://github.com/gulpjs/gulp/issues/355
  runSequence = require('run-sequence');

var bases = {
  login: 'src/login/',
  src: 'src',

  dist: 'dist/',
};

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

var displayError = function (error) {
  // Initial building up of the error
  var errorString = '[' + error.plugin.error.bold + ']';
  errorString += ' ' + error.message.replace("\n", ''); // Removes new line at the end

  // If the error contains the filename or line number add it to the string
  if (error.fileName)
    errorString += ' in ' + error.fileName;

  if (error.lineNumber)
    errorString += ' on line ' + error.lineNumber.bold;

  // This will output an error like the following:
  // [gulp-sass] error message in file_name on line 1
  console.error(errorString);
}

var onError = function (err) {
  notify.onError({
    title: "Gulp",
    subtitle: "Failure!",
    message: "Error: <%= error.message %>",
    sound: "Basso"
  })(err);
  this.emit('end');
};

var sassOptions = {
  outputStyle: 'expanded'
};

var prefixerOptions = {
  browsers: ['last 2 versions']
};

// BUILD SUBTASKS
// ---------------

gulp.task('clean:dist', function () {
  return gulp.src(bases.dist)
    .pipe(vinylPaths(del));
});



gulp.task('minify-html', function () {
  gulp.src(bases.login + './*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(bases.dist))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('css', function () {
  gulp.src(bases.login + '/*.css')
    .pipe(gulp.dest(bases.dist));
});

gulp.task('lib', function () {
  // copy modernizr to dist directly
  gulp.src('bower_components/**/*.*')
    .pipe(gulp.dest(bases.dist + '/bower_components'));
});

gulp.task('img', function () {
  // copy modernizr to dist directly
  gulp.src(bases.login + '/img/**/*.*')
    .pipe(gulp.dest(bases.dist + '/img'));
});

gulp.task('watch', function () {
  gulp.watch(bases.login + './*.html', ['minify-html']);
  gulp.watch(bases.login + './*.css', ['css']);
});
// BUILD TASKS
// ------------

gulp.task('default', function (done) {
  runSequence('build', done);
});

gulp.task('build', function (done) {
  runSequence('clean:dist', 'minify-html', 'css', 'img', 'lib', done);
});