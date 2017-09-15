// gulpfile.js
const gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    htmlmin = require('gulp-htmlmin'),
    nunjucksRender = require('gulp-nunjucks-render'); // importing the plugin

var concatCss = require('gulp-concat-css');


const PATHS = {
    output: 'dist',
    templates: 'src/templates',
    pages: 'src/pages',
}

// writing up the gulp nunjucks task
gulp.task('nunjucks', function () {
    console.log('Rendering nunjucks files..');
    return gulp.src(PATHS.pages + '/**/*.+(html|js)')
        .pipe(nunjucksRender({
            path: [PATHS.templates],
            watch: true,
        }))
        .pipe(gulp.dest(PATHS.output));
});

gulp.task('helpPage', function () {
    console.log('Rendering nunjucks files..');
    return gulp.src(PATHS.pages + '/help/help/**/*.+(html|js|css)')
        .pipe(nunjucksRender({
            path: [PATHS.template],
            watch: true,
        }))
        .pipe(gulp.dest(PATHS.output));
});


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



gulp.task('css', function () {
    return gulp.src(PATHS.templates + '/**/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest(PATHS.output));
});


gulp.task('minify', function () {
    return gulp.src(PATHS.output + '/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            cssmin: true,
            jsmin: true,
            removeOptionalTags: true,
            removeComments: false
        }))
        .pipe(gulp.dest(PATHS.output));
});

// run browserSync auto-reload together with nunjucks auto-render
gulp.task('auto', ['browserSync', 'watch']);

//default task to be run with gulp
gulp.task('default', ['css', 'nunjucks']);