const gulp = require('gulp');
const {src, dest, watch, series, parallel} = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass')(require('node-sass'));
const browserSync = require('browser-sync').create();
var ts = require('gulp-typescript');

//sökvägar
const files = {
    htmlPath: 'src/**/*.html',
    cssPath: 'src/**/*.css',
    jsPath: 'src/**/*.js',
    picPath: 'src/**/*.jpg',
    sassPath: 'src/**/*.scss'
}

// HTML-Task, kopiera filer
function copyHTML() {
    return src(files.htmlPath)
    .pipe(dest('pub'))
}

// JS-task, konkatinera, minifiera
function jsTask() {
    return src(files.jsPath)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest('pub/js'));
}

// CSS-task, konkatinera
// function cssTask() {
//     return src(files.cssPath)
//     .pipe(concat('main.css'))
//     .pipe(dest('pub/css'));
// }

// SASS-task, konvertering och konkatnirering
function sassTask() {
    return src(files.sassPath)
        .pipe(sass().on("error", sass.logError))
        .pipe(concat('main.css'))
        .pipe(dest("pub/css"));
}
     

//Bild-Task
function picTask() {
    return src(files.picPath)
    .pipe(dest('pub/pic'));
}

// watchTasken kör typescript 
function watchTask() {
    browserSync.init({
        server: {
            baseDir: './pub'
        }
        
    });
    gulp.watch('src/**/*.scss').on('change', browserSync.reload);
    gulp.watch('src/**/*.html').on('change', browserSync.reload);
    gulp.watch('src/**/*.css').on('change', browserSync.reload);
    gulp.watch('src/**/*.js',).on('change', browserSync.reload);
    gulp.watch('src/**/*.jpg',).on('change', browserSync.reload);
    watch(files.sassPath, sassTask);
    watch([files.htmlPath, files.jsPath, files.picPath], parallel(copyHTML, jsTask, picTask));
}

var tsProject = ts.createProject("tsconfig.json");
function tsTask() {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("pub/js"));
};
exports.default = series(
    sassTask,tsTask,
    parallel(copyHTML, jsTask, picTask),
    watchTask
);


