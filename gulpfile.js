const gulp = require("gulp");
const prettier = require("gulp-prettier");

gulp.task("default", () => {
    return gulp
        .src(["index.js", "api/**/*.js", "data/**/*.js", "gulpfile.js"])
        .pipe(prettier({ editorconfig: true }))
        .pipe(gulp.dest((file) => file.base));
});
