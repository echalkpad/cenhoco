/// <binding BeforeBuild='build-dev' Clean='clean' />
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    typescript = require('gulp-typescript'),
    tsd = require('gulp-tsd'),
    del = require('del'),
    inject = require('gulp-inject'),
    series = require('stream-series');


var config = {
    paths: {
        app: 'app',
        imagesSubPath: 'images',
        stylesSubPath: 'styles',
        stylesFilename: 'styles.css',
        outputPath: 'www',
        scriptsOutput: 'www/scripts',
        vendorOutput: 'www/vendor',
        copyToOutputPathsDev: [
            ['node_modules/jquery/dist/jquery.js', 'www/vendor/4_jquery'],
            ['node_modules/bootstrap/dist/css/bootstrap.css', 'www/vendor/5_bootstrap/css'],
            ['node_modules/bootstrap/dist/js/bootstrap.js', 'www/vendor/5_bootstrap/js'],
            ['node_modules/bootstrap/dist/fonts/*', 'www/vendor/5_bootstrap/fonts'],
            ['node_modules/traceur/bin/traceur-runtime.js', 'www/vendor/1_traceur'],
            ['node_modules/systemjs/dist/system.js', 'www/vendor/2_systemjs'],            
            ['node_modules/angular2/bundles/angular2.dev.js', 'www/vendor/3_angular2']
        ]
    },
    typescript: {
        bundleFileName: 'appBundle.js',
        path: 'app/**/*.ts',
        typingsPath: 'app/typings/tsd.d.ts',
        tsConfigPath: 'app/tsconfig.json'
    }
}

gulp.task('ressources', function() {
    return gulp.src(config.paths.app + '/' + config.paths.imagesSubPath + '/**/*')
        .pipe(gulp.dest(config.paths.outputPath + '/' + config.paths.imagesSubPath));
});

gulp.task('templates', function () {
    return gulp.src(config.paths.app + '/modules/**/*.html')
        .pipe(gulp.dest(config.paths.outputPath + '/scripts/modules'));
});

gulp.task('styles', function() {
    return gulp.src(config.paths.app + '/**/*.css')
        .pipe(concat(config.paths.stylesFilename))
        .pipe(gulp.dest(config.paths.outputPath + '/' + config.paths.stylesSubPath));
});

gulp.task('typescript', ['styles', 'ressources'], function() {
    var tsProject = typescript.createProject(config.typescript.tsConfigPath, { sortOutput: true });

    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject));

    return tsResult.js.pipe(gulp.dest(config.paths.scriptsOutput));
});

gulp.task('clean', function() {
    return del(config.paths.outputPath + '/**/*');
});

gulp.task('vendorComponents', ['ressources', 'typescript'], function () {
    for (var i = 0; i < config.paths.copyToOutputPathsDev.length; i++) {
        gulp.src(config.paths.copyToOutputPathsDev[i][0])
            .pipe(gulp.dest(config.paths.copyToOutputPathsDev[i][1]));
    }
    return;
});

gulp.task('inject', ['typescript', 'vendorComponents'], function() {
    var vendorCss = gulp.src([config.paths.vendorOutput + '/**/*.css'], { read: false });
    var appCss = gulp.src([config.paths.outputPath + '/' + config.paths.stylesSubPath + '/' + config.paths.stylesFilename], { read: false });
    var vendorStream = gulp.src([config.paths.outputPath + '/vendor/**/*.js'], { read: false });
    var appStream = gulp.src([config.paths.scriptsOutput + '/t**/*.js'], { read: false });

    return gulp.src(config.paths.app + '/index.html')
      .pipe(inject(series(vendorCss, appCss, vendorStream, appStream), {
          ignorePath: 'www',
          addRootSlash: false
      }))
      .pipe(gulp.dest(config.paths.outputPath));
});

gulp.task('build-dev', ['styles', 'templates', 'typescript', 'ressources', 'vendorComponents', 'inject']);

gulp.task('default', ['build-dev']);