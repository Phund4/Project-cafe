const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync'); 
const concat = require('gulp-concat'); 
const uglify = require('gulp-uglifyjs'); 
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename'); 
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const cache = require('gulp-cache');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-css-minify');
const sourcemaps = require('gulp-sourcemaps');
const react = require('gulp-react');
const htmlreplace = require('gulp-html-replace');
const babel = require('gulp-babel')

gulp.task('sass', function(){
	return gulp.src('src/sass/**/*.sass')
		.pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) 
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('minify-css', function() {
    return gulp.src(['src/**/*.css'])	
      .pipe(sourcemaps.init())
      .pipe(minifyCSS())
      .pipe(rename({suffix: '.min'}))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist'));
  });

gulp.task('browser-sync', function() {
	browserSync({ 
		server: { 
			baseDir: 'src'
		},
		notify: false
	});
});

gulp.task('scripts', function() {
    return gulp.src([
		'src/libs/jquery/dist/jquery.min.js',
		'src/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
		])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/js'))
        .pipe(browserSync.reload({ stream: true }));
});
 
gulp.task('code', function() {
	return gulp.src('src/*.html')
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('clean', function() {
	return gulp.src('dist', {allowEmpty: true}).pipe(clean());
});

gulp.task('img', function() {
	return gulp.src('src/img/**/*')
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('prebuild', async function() {
 
	let buildFonts = gulp.src('src/fonts/**/*')
	.pipe(gulp.dest('src/fonts'))
 
	let buildJs = gulp.src('src/js/**/*')
	.pipe(gulp.dest('dist/js'))
 
	let buildHtml = gulp.src('src/*.html')
	.pipe(gulp.dest('dist'));
 
});

gulp.task('clear', function (callback) {
	return cache.clearAll();
})

gulp.task('watch', function() {
	gulp.watch('src/sass/**/*.sass', gulp.parallel('sass')); 
	gulp.watch('src/*.html', gulp.parallel('code')); 
	gulp.watch(['src/js/common.js'], gulp.parallel('scripts')); 
});

gulp.task('default', gulp.parallel('sass', 'scripts', 'browser-sync', 'watch'));
gulp.task('build', gulp.series('clean', 'prebuild', 'minify-css', 'img', 'sass', 'scripts'));

