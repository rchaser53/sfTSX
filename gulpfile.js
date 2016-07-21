const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsConfig = require('./tsconfig.json').compilerOptions;
const project = ts.createProject(tsConfig);

gulp.task("tsCompile",()=>{
    return gulp.src([	"src/declare.d.ts",
						"typings/browser.d.ts",
						"typings/bundle.d.ts",
						'src/**/*.ts',
						'src/**/*.tsx'])
				.pipe(ts(project)).js
				.pipe(gulp.dest('./build'));
});

const sass = require('gulp-sass');
const concat = require('gulp-concat');

// Sassコンパイルタスク
gulp.task('sassCompile', function(){
  gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./workplace'));
});