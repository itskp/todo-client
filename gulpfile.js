const gulp = require('gulp')
const webserver = require('gulp-webserver')

gulp.task('default',['serve'])

gulp.task('serve', function () {
    gulp.src('src')
        .pipe(webserver({
            port: 8080,
            livereload: true,
            directoryListing: false,
            open: 'http://localhost:8080/'
        }))
})