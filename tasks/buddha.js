/*
 * grunt-buddha
 *
 *
 * Copyright (c) 2015 wubinhong
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('buddha', 'Buddha\'s grace illuminates code as sunshine.', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      who: 'buddha',
      commentSymbol: '//'
    });

    var path = require('path');

    var who = options.who,
        commentSymbol = options.commentSymbol,
        commentFilepathMap = {
          'buddha': 'assets/buddha.txt',
          'alpaca': 'assets/alpaca.txt'
        };
    // __dirname: 系统内置变量，表示被执行文件所在的目录路径
    var commentFilepath = path.join(__dirname, commentFilepathMap[who]);
    // 获取符号图形的字符串内容，将其转换成数组，遍历数组，为每行添加注释开头
    var commentContent = grunt.file.read(commentFilepath),
        lineContentArr = commentContent.split(grunt.util.normalizelf('\n'));
    lineContentArr = lineContentArr.map(function(line) {
      return commentSymbol + line;
    });
    commentContent = lineContentArr.join(grunt.util.normalizelf('\n'));

    // grunt.log.ok(require('util').inspect(this));
    // 遍历任务，并处理之
    this.files.forEach(function(file) {
      // 遍历文件
      file.src.forEach(function(src, idx, arr) {
        var srcPath = path.join(file.cwd, src),
            destPath = path.join(file.dest, src);
        if(grunt.file.exists(srcPath)) {
          // 在注释后的符号图形后面加上需要应用的代码文件内容
          var srcContent = grunt.file.read(srcPath),
              compoundedContent = commentContent + grunt.util.normalizelf('\n') + srcContent;
          // 将处理后的文件内容输出至指定文件中
          grunt.file.write(destPath, compoundedContent);
          // Print a success message.
          grunt.log.ok('File "' + destPath + '" created.');
        } else {
          grunt.log.warn('Source file "' + srcPath + '" not found.');
        }
      });

    });

  });

};
