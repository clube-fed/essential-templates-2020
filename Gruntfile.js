module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            dist: {
                src: [
                    './js/components/jqueryExtends.js',
                    './js/components/base.js',
                    './js/components/banner.js',                    
                    './js/components/bootstrapNav.js', 
                    './js/components/header.js',
                    './js/components/headerScroll.js',
                    //'./js/components/headerOpt2.js',
                    './js/components/headerOpt4.js',
                    //'./js/components/calOpt1.js',
                    //'./js/components/calOpt2.js',
                    './js/components/calOpt3.js',
                    //'./js/components/calOpt4.js',
                    //'./js/components/articleOpt3.js',
                    './js/components/login.js',
                    './js/components/modules.js',
                    './js/components/ada.js',
                    './js/components/resize.js',
                    './js/components/onLoad.js',
                    './js/components/modules.js',
                    './js/components/subnav.js',
                    './js/components/trumpTheBurger.js',
                    './js/components/headInject.js',
                    './js/components/quicklinks1.js',
                    //'./js/components/quicklinks2.js',
                    //'./js/components/cardOpt1.js',
                    //'./js/components/cardOpt2.js',
                    //'./js/components/cardOpt3.js',
                    './js/components/cardOpt4.js',
                    './js/components/forms.js',
                    './js/components/lightbox.js'
                ],
                dest: './js/globalScripts.js'
            }
        },
        watch: {
            scripts: {
            files: ['**/*.js'],
            tasks: ['concat'],
            }
        },
    })

    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default.js', ['watch']);
}
