module.exports = function(grunt) {
    require("jit-grunt")(grunt); // automatically search for plugin from task name and load

    grunt.initConfig({
        concat: {
            options: {
                separator: ";\n\n"
            },
            vendorJS: {
                src: [
                    "node_modules/jquery/dist/jquery.min.js",
                    "node_modules/underscore/underscore-min.js",
                    "node_modules/backbone/backbone-min.js",
                    "node_modules/handlebars/dist/handlebars.min.js",
                    "build/template.js", // compiled hbs templates
                    "node_modules/bootstrap/dist/js/bootstrap.min.js",
                ],
                dest: "build/vendor.js"
            },
            js: {
                src: [
                    "js/**/*.js"
                ],
                dest: "build/app.js"
            },
            vendorCSS: {
                src: [
                    "node_modules/bootstrap/dist/css/bootstrap.min.css"
                ],
                dest: "build/vendor.css"
            }
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "build/app.css": "less/*.less"
                }
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: "HBS"
                },
                files: {
                    "build/template.js": ["hbs/**/*.hbs"]
                }
            }
        },
        watch: {
            options: { livereload: true },
            js: {
                files: ["js/**/*.js"],
                tasks: ["concat:js"]
            },
            hbs: {
                files: ["hbs/**/*.hbs"],
                tasks: ["handlebars"]
            },
            css: {
                files: ["less/*.less"],
                tasks: ["less"]
            },
            html: {
                files: ["index.html"]
            }
        }
    });

    grunt.registerTask("default", ["less", "concat", "handlebars", "watch"]);
};
