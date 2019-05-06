"use strict";

// Load plugins
const browsersync = require("browser-sync").create();
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const exec = require('child_process').exec;
var reload = browsersync.reload;

//runserver
function runServer(done) {
  var proc = exec('python plot_chart/manage.py runserver')
  done();
}

// BrowserSync
function browserSync(done) {
    browsersync.init({
      notify: true,
      proxy: "localhost:8000",
    });
    done();
  }
  
  // BrowserSync Reload
  function browserSyncReload(done) {
    browsersync.reload();
    done();
  }

// Lint scripts
function scriptsLint() {
    return gulp
      .src(["./plot_chart/**/*.js", "./gulpfile.js"])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  }

// Watch files
function watchFiles() {
    gulp.watch("./plot_chart/**/*", gulp.series(scriptsLint));
    gulp.watch(['./**/*.{html,py,js}'], reload);
  }  

// define complex tasks
const build = gulp.series(scriptsLint);
const watch = gulp.parallel(watchFiles, browserSync, runServer);

// export tasks
exports.build = build;
exports.watch = watch;
exports.default = watch;

