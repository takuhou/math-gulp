var gulp = require('gulp');
var mocha = require('gulp-mocha');
var uglify = require('gulp-uglify');

gulp.task('mocha', function() {
	return gulp.src(['test/math.test.js'], {read: false})
	.pipe(mocha({ reporter: 'list'}))
});

gulp.task('compress', ['mocha'], function() {
	gulp.src(['math.js'])
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['mocha','compress']);