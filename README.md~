# grunt-buddha

> Buddha\'s grace illuminates code as sunshine.

## Project reference
[Project Page](http://wubinhong.github.io/grunt-buddha)

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-buddha --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-buddha');
```

## The "buddha" task

### Overview
In your project's Gruntfile, add a section named `buddha` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  buddha: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.who
Type: `String`
Default value: `buddha`

Choose an object to protect our code, with two option: buddha | alpaca

#### options.commentSymbol
Type: `String`
Default value: `//`

A comment symbol to comment the string picture which will be add in front of the target source file

### Usage Examples

#### Default Options
在该示例中，定义了一个任务目标`js`，将指定目录下的匹配文件输出至目标文件目录。
其参数：`cwd`表示要加字符图形的文件路径（仅支持一级目录），`src`表示匹配的文件类型（支持正则表达式），`dest`表示要输出的文件目录路径

```js
grunt.initConfig({
  buddha: {
    js: [{
      cwd: 'app/javascript',
      src: ['*.js'],
      dest: '.tmp/javascript/buddha'
    }],
  },
})
```

#### Custom Options
该示例对options做了特殊配置，有2个参数可以配置：
`who`：选择哪个卡通图案，可选项：`buddha` | `alpaca`，默认为`buddha`
`commentSymbol`：卡通图案的注释符，默认为`//`

```js
grunt.initConfig({
  buddha: {
    options: {
      who: 'buddha',
      commentSymbol: '//'
    },
    js: [{
      cwd: 'app/javascript',
      src: ['*.js'],
      dest: '.tmp/javascript/buddha'
    }],
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
2015-05-14&nbsp;&nbsp;&nbsp;v0.0.1&nbsp;&nbsp;&nbsp;init

## License
Copyright (c) 2015 wubinhong. Licensed under the MIT license.
