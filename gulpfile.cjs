'use strict';

const { src, dest, watch } = require('gulp');
const sass                 = require('gulp-sass')(require('sass'))
const plumber              = require('gulp-plumber');
const gulpif               = require('gulp-if');
const cache                = require('gulp-cached');
const cleanCSS             = require('gulp-clean-css');
const autoprefixer         = require('gulp-autoprefixer');
const rename               = require('gulp-rename');
const notify               = require('gulp-notify');

const enableSourcemaps = false;
const enableNotifications = true;

const scssFiles = [
    'styles.scss',
];

function css() {
    let sassErrorCount = 0;
    let generalErrors = [];
    return src(scssFiles, { base: '.', sourcemaps: enableSourcemaps })
        .pipe(plumber({
            errorHandler: function(err) {
                if (err.plugin === 'gulp-sass') {
                    sassErrorCount++;
                } else {
                    generalErrors.push(err);
                }
            }
        }))
        .pipe(gulpif(global.isWatching, cache('scss', { optimizeMemory: true })))
        .pipe(sass()).on('error', sass.logError)
        .pipe(autoprefixer())
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(rename(function(path) {
            if (/(\\|\/)css(\\|\/)scss$/i.test(path.dirname)) {
                path.dirname += '/..';
            }
        }))
        .pipe(dest('./', { sourcemaps: '/sourcemaps' }))
        .on('end', function() {
            const totalErrorCount = sassErrorCount + generalErrors.length;
            if (enableNotifications && totalErrorCount > 0) {
                notify.onError({
                    appID: 'Gulp: ' + __dirname,
                    title: 'Gulp CSS',
                    message: 'Error compiling Sass files, see console for details',
                    sound: false,
                    wait: true
                })(0);
            }
            generalErrors.forEach(error => console.error(error.message));
        });
}

exports.css = css;
exports.default = function() {
    global.isWatching = true;
    watch(scssFiles, { ignoreInitial: false }, css);
};