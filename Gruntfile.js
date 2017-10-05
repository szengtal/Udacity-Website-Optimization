module.exports = function(grunt) {
 require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		  //清除目录
       clean: {
        all: ['dest/**', 'dest/*.*']
      },
	  
	       useminPrepare: {
          html: 'index.html',
          options: {
            dest: 'dest'
          }
      },
	    copy: {
        src: {
          files: [
            {expand: true, src: ['*.html'], dest: 'dest/'}
          ]
        },
       image: {
         files: [
          {expand: true, src: ['img/*.{png,jpg,jpeg,gif,webp}'], dest: 'dest/'}
          ]
        }
     },
		
		
		concat: {
			build: {
				src: "js/*.js",
				dest: "dest/js/<%= pkg.name %>.js"
			},
			cssbuild: {
				src: "css/*.css",
				dest: "dest/css/<%= pkg.name %>.css"
			}
			
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			bulid: {
			  // 动态文件映射，
			  // 当任务运行时会自动在 "lib/" 目录下查找 "**/*.js" 并构建文件映射，
			  // 添加或删除文件时不需要更新 Gruntfile。
			  files: [
				{
					"dest/bin/<%= pkg.name %>.min.js": ['<%= concat.build.dest %>']
				},
			  ],
			}
		},		
		cssmin: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
				beautify: {
					ascii_only: true
				}				
			},
			build: {
				files: [{
					"dest/css/<%= pkg.name %>.min.css": ['<%= concat.cssbuild.dest %>']
				}]
			}
		},
		 //压缩图片
     imagemin: {
       prod: {
          options: {
            optimizationLevel: 3,
            pngquant: true
          },
        files: [
           {expand: true, cwd: 'dest/', src: ['img/*.{png,jpg,jpeg,gif,webp,svg}'], dest: 'dest/'}
         ]
       }
    },
    // 处理html中css、js 引入合并问题
    usemin: {
      html: 'dest/*.html'
     },

    //压缩HTML
     htmlmin: {
      options: {
         removeComments: true,
        removeCommentsFromCDATA: true,
        collapseWhitespace: true,
         collapseBooleanAttributes: true,
         removeAttributeQuotes: true,
        removeRedundantAttributes: true,
         useShortDoctype: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true
       },
       html: {
         files: [
         {expand: true, cwd: 'dest/', src: ['*.html'], dest: 'dest/'}
       ]
       }
    }

	
	
	});
	
    grunt.registerTask('default', ['clean','copy','useminPrepare','concat','uglify','cssmin','imagemin', 'usemin', 'htmlmin']);
}