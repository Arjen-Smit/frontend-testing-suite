'use strict';

var gulp = require('gulp');
var taskLoader = require('gulp-simple-task-loader');
var config = require('./config.json');

var webserver = require('gulp-webserver');

// Load the tasks usingthe taskloader
taskLoader({
    taskDirectory: 'node_modules/connectholland-gulp-tasks/tasks',
    config: config
}, gulp);

gulp.task('webserver', function() {
  gulp.src('web')
    .pipe(webserver({
      open: true
    }));
});
