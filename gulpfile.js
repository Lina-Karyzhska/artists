const { src, dest, watch, parallel, series } = require("gulp");

const scss         = require("gulp-sass"),
      autoprefixer = require("gulp-autoprefixer"), 
      imagemin     = require("gulp-imagemin"),
      concat       = require("gulp-concat"),
      uglify       = require("gulp-uglify"),
      sourcemaps   = require("gulp-sourcemaps"),
      browserSync  = require("browser-sync").create(),
      del          = require("del"),
      fileinclude  = require("gulp-file-include");

function html() {
    return src(['src/*.html', "!src/_*.html"])
        .pipe(fileinclude())
        .pipe(dest("dist"))
        .pipe(browserSync.stream());
}

function styles() {
    return src([
        'node_modules/slick-slider/slick/slick.scss',
        'src/scss/jquery.mCustomScrollbar.css',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
        "src/scss/**/*.scss"
    ])
        .pipe(sourcemaps.init())
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 5 versions'],
            grid: true,
            cascade: true
         }))
        .pipe(concat('styles.min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(dest("dist/css"))
        .pipe(browserSync.stream());
};

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-slider/slick/slick.min.js',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
        'src/js/*.js'
    ])
        .pipe(concat('main.min.js')) 
        .pipe(uglify())
        .pipe(dest("dist/js"))
        .pipe(browserSync.stream());
};

function imgs() {
    return src("src/images/**/*.{jpg,png,svg,gif,ico,webp}")
        // .pipe(imagemin([
        //     imagemin.gifsicle({interlaced: true}),
        //     imagemin.mozjpeg({quality: 75, progressive: true}),
        //     imagemin.optipng({optimizationLevel: 5}),
        //     imagemin.svgo({
        //         plugins: [
        //             {removeViewBox: true},
        //             {cleanupIDs: false}
        //         ]
        //     })
        // ]))
        .pipe(dest("./dist/images"))
        .pipe(browserSync.stream());
};

function sync() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        },
        port: 3000
    });
};

function cleanDist() {
    return del('dist');
}

function watching() {
    watch(["src/*.html"], html);
    watch(["src/js/**/*.js"], scripts);
    watch(["src/scss/**/*.scss"], styles);
    watch(["src/images/**/*.{jpg,png,svg,gif,ico,webp}"], imgs);
};

exports.styles = styles;
exports.watching = watching;
exports.browserSync = sync;
exports.scripts = scripts;
exports.imgs = imgs;
exports.cleanDist = cleanDist;

const build = series(cleanDist, parallel(html, styles, imgs, scripts));
exports.default = parallel(build, sync, watching);