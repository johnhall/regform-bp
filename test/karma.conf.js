module.exports = function (config) {
    config.set({

        basePath: '../',

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-bootstrap/ui-bootstrap.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/jquery/dist/jquery.js',
            'dist/uploader.js',
            '*.js',
            'test/unit/*.js',
            '*.html',
            // if you wanna load template files in nested directories, you must use this
            '**/*.html'
        ],

        autoWatch: true,
        logLevel: config.LOG_DEBUG,

        frameworks: ['jasmine', 'qunit'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-ng-html2js-preprocessor',
            'karma-jasmine',
            'karma-qunit'
        ],

        preprocessors: {
            '**/*.html': ['ng-html2js']
        },

        // if you have defined plugins explicitly, add karma-ng-html2js-preprocessor
        // plugins: [
        //     <your plugins>
        //     'karma-ng-html2js-preprocessor',
        // ]

        ngHtml2JsPreprocessor: {
            // strip this from the file path
            stripPrefix: 'test/',
            //stripSuffix: '.ext',
            // prepend this to the
            //prependPrefix: 'templates/',

            // or define a custom transform function
            // - cacheId returned is used to load template
            //   module(cacheId) will return template at filepath
/*
            cacheIdFromPath: function (filepath) {
                // example strips 'public/' from anywhere in the path
                // module(app/templates/template.html) => app/public/templates/template.html
                var cacheId = filepath.strip('test/', '');
                return cacheId;
            },
*/

            // - setting this option will create only a single module that contains templates
            //   from all the files, so you can load them all with module('foo')
            // - you may provide a function(htmlPath, originalPath) instead of a string
            //   if you'd like to generate modules dynamically
            //   htmlPath is a originalPath stripped and/or prepended
            //   with all provided suffixes and prefixes
            moduleName: 'uploadModule'
        },

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};