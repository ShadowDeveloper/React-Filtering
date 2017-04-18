var gulp = require('gulp');
var rename = require('gulp-rename');
var reactEasy = require('gulp-react-easy');
var browserSync = require('browser-sync').create();


gulp.task('default',['js','w','browser-sync']);

gulp.task('w', function(done) {
  gulp.watch('./src/js/**/*',['js']).on('change', browserSync.reload);
  gulp.watch("./*.html").on('change', browserSync.reload);
  done();
});

gulp.task('js', function() {
  return reactEasy({
      file: './src/js/app.jsx',
      debug: true // optional, false by default
    })
    .to('app.js')
    .pipe(gulp.dest('./dist/js/'));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
