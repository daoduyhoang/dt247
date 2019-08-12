const { src, series, parallel, dest, watch } = require('gulp');
const sass = require('gulp-sass');

const sassTask = function(){
    return src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'));
};
const watchTask = function(){
    watch(['src/sass/**/*.scss'],
        parallel(sassTask)
    )
}
exports.default = series(
    parallel(sassTask),
    watchTask
)