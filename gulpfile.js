// JavaScript Document

var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	imagemin = require('gulp-imagemin'),
	browsersync = require('browser-sync').create();


gulp.task('sass',function(){
	return sass('scss/*.scss',{
		style : 'compact'
	})
	.pipe(gulp.dest('css'))
	.pipe(browsersync.stream());
});



gulp.task('image',function(){
	gulp.src('simages/*.{png,gif,jpg,ico}')
	.pipe(imagemin())
	.pipe(gulp.dest('images'))
	.pipe(browsersync.stream());
});


gulp.task('js',function(){
	gulp.src('sjs/*.js')
	.pipe(gulp.dest('js'))
	.pipe(browsersync.stream());
});


gulp.task('reload',function(){
	browsersync.init({
		server : './',
		file : [
			'images/**'
		]
	});
	gulp.watch('scss/*.scss',['sass']);
	gulp.watch('sjs/*.js',['js']);
	gulp.watch('simages/*',['image']);
	gulp.watch('./*.html').on('change',browsersync.reload);;
});

