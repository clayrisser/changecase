var gulp = require('gulp');
var dest = require('gulp-dest');
var browserify = require('gulp-browserify');

gulp.task('build', function() {
  gulp.src('src/changecase.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production
    })).pipe(dest('./'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['build']);
