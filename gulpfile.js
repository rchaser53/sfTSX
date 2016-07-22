const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsConfig = require('./tsconfig.json').compilerOptions;
const project = ts.createProject(tsConfig);
const mocha = require("gulp-mocha");

require("babel-core/register");

gulp.task("test",()=>{
    gulp.src([	"src/declare.d.ts",
						"typings/browser.d.ts",
						"typings/bundle.d.ts",
						'src/**/*.ts',
						'src/**/*.tsx'])
		.pipe(ts(project)).js
		.pipe(gulp.dest('./build'))
		.on("finish",()=>{
			gulp.src('test/**/*.js')
		        .pipe(mocha({
		        	reporter: 'nyan'
		        }));
		});
});

const sass = require('gulp-sass');
const concat = require('gulp-concat');

// Sassコンパイルタスク
gulp.task('sassCompile', ()=>{
  gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./workplace'));
});