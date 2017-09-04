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

var gulp = require('gulp'),
  livereload = require('gulp-livereload');


var bases = {
  pages: ['home', 'login', 'speak'],
  src: 'src',
  home: 'src/home/',
  login: 'src/login/',
  speak: 'src/speak/',

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




gulp.task('lib', function () {
  // copy modernizr to dist directly
  gulp.src('bower_components/**/*.*')
    .pipe(gulp.dest(bases.dist + '/bower_components'));
});



gulp.task('html', function () {
  bases.pages.forEach(function (item, index) {
    gulp.src(bases.src + '/' + item + '/*.html')
      .pipe(htmlmin({
        collapseWhitespace: true
      }))
      .pipe(gulp.dest(bases.dist + '/' + item))
      .pipe(reload({
        stream: true
      }))
      .pipe(livereload());
  });

});

gulp.task('css', function () {
  bases.pages.forEach(function (item, index) {
    gulp.src(bases.src + '/' + item + '/*.css')
      .pipe(gulp.dest(bases.dist + '/' + item))
      .pipe(livereload());
  });
});


gulp.task('img', function () {
  // copy modernizr to dist directly
  bases.pages.forEach(function (item, index) {
    gulp.src(bases.src + '/' + item + '/img/**/*.*')
      .pipe(gulp.dest(bases.dist + '/' + item + '/img'))
      .pipe(livereload());
  });
});



gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(bases.src + '/**/*.html', ['html']);
  gulp.watch(bases.src + '/**/*.css', ['css']);
  gulp.watch(bases.src + '/**/img/*', ['img']);

});

// BUILD TASKS
// ------------



gulp.task('default', function (done) {
  runSequence('build', done);
});

gulp.task('build', function (done) {
  runSequence('clean:dist', 'html', 'css', 'img', 'lib', done);
});