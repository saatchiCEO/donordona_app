# Обёртка для node.js, на котором работает Grunt
module.exports = (grunt) ->
    
    # Вспомогательная функция
    now = ()-> (new Date()).getTime()
    
    # Конфигурация Grunt
    grunt.initConfig
        
        clean: 
            pre:
                ['server/public'] 
            post:
                ['client-src/__compiled-js', 'client-src/__translated-html', 'client-src/__minified-html', 'server/public/__compiled-js']
        
        # транслируем coffee и iced скрипты в js
        coffee:
            compileWithMaps: 
                options: 
                    sourceMap: no
                files:
                    'baseScript.js': ['client-src/routes.coffee', 'client-src/controllers/*.{coffee,iced}']
                #expand: yes
                #cwd: 'client-src/controllers'
                #src: '**/*.{coffee,iced}'
                #dest:  'server/public/baseScript.js'
                #ext: '.js'
        
        # транслируем jade в html
        jade: 
            html:
                expand: true
                cwd: 'client-src'
                src: '**/*.jade'
                ext: '.html'
                dest: '.'
                options: 
                    client: false
                    runtime: false


        # транслируем sass в css
        sass: 
            dist:
                expand: yes
                cwd: 'client-src'
                src: '**/*.sass'
                dest: '.'
                ext: '.css'
                options:
                    'style': 'compressed'
        
        # минифицируем и склеиваем содержимое js скриптов 
        uglify: 
            options:
                mangling: true
                compress: true
                report: "gzip"
            'compiled-js':
                expand: true
                cwd: '.'
                src: '*.js'
                ext: '.min.js'
                dest: '.'
            'vanilla-js':
                expand: true
                cwd: 'client-src/'
                src: '**/*.js'
                ext: '.min.js'
                dest: '.'
                    
        
        # остальные файлы (не преобразованные вышеперечисленными средствами)
        # просто скопируем в public
        copy:
            target:
                expand: yes
                cwd: 'client-src'
                src: ['**/*', '!controllers', '!**/*.{sass,jade,coffee,iced}']
                dest: '.'
    
    #grunt.loadNpmTasks 'grunt-iced-coffee'
    grunt.loadNpmTasks 'grunt-contrib-coffee'
    grunt.loadNpmTasks 'grunt-contrib-jade'
    grunt.loadNpmTasks 'grunt-contrib-uglify'
    grunt.loadNpmTasks 'grunt-contrib-sass'
    grunt.loadNpmTasks 'grunt-contrib-copy'
    grunt.loadNpmTasks 'grunt-contrib-clean'
    
    grunt.registerTask 'default', ['coffee','jade', 'sass', 'copy']
  

