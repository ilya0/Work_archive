var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var DEST = 'build/';


gulp.task('build-js', function() {
});

gulp.task('default', function() {
  return gulp.src('./app/**/*.js')
  .pipe(concat('main.js'))
    // This will output the non-minified version
    .pipe(gulp.dest(DEST))
    // This will minify and rename to foo.min.js
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST));
});
