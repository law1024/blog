fis.config.merge({
    modules: {
        // 编译器插件配置
        parser: {
            less: 'less',
            jade: 'jade'
        },
        // 编译后处理器配置
        postprocessor: {
            js  : 'jswrapper, require-async',
            html: 'require-async'
        },
        // 替换打包后的静态资源引用
        postpackager: ['autoload', 'simple'],
        // 单文件编译过程中的代码检查插件配置
        lint: {
            js: 'jshint'
        },
        // 文件优化配置
        optimizer: {
            html: 'html-minifier',
            js  : 'uglify-js',
            css : 'clean-css'
        }
    },
    roadmap: {
        ext: {
            less: 'css',
            jade: 'html'
        },
        path: [
            {
                reg: 'README.md',
                release: false
            },
            {
                reg: 'layout.jade',
                release: false
            },
            {
                reg: 'inc/**.jade',
                release: false
            },
            {
                reg: /^\/page\/(index\.jade)$/i,
                isMod: true,
                release: '/$1',
                extras: {
                    isPage: true
                }
            }/*,
            {
                reg: /^\/page\/(.+)(\.jade)$/i,
                isMod: true,
                release: '$1/index.html',
                extras: {
                    isPage: true
                }
            }*/
        ]
    }
});