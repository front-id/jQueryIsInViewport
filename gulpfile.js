'use strict';
const gulp = require('gulp');
const minify = require('gulp-minify');

/**
 * Compiles SASS files.
 */
const jsTask = () => {
  return gulp.src('isInViewport.jquery.js')
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.min.js',
      },
      exclude: ['tasks'],
      ignoreFiles: ['-min.js'],
    }))
    .pipe(gulp.dest('dist'))
};

exports.build = jsTask;
