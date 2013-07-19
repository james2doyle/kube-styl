/* globals require, __dirname */
/**
 * Module Dependencies
 */

var rework = require('rework');
var fs = require('fs');
var vars = require('rework-vars');
var math = require('rework-math');
var shade = require('rework-shade');
var css = fs.readFileSync(__dirname + '/style.temp.css', 'utf8');

/**
 * Parse
 */

 var res = rework(css)
  .use(vars())
  .use(math())
  .use(shade())
  .toString();

/**
 * Write file
 */

 fs.writeFile(__dirname + '/style.css', res, function (err) {
  if (err) throw err;
  console.log('saved');
});
