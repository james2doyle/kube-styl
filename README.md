kube-styl
========

This is a conversion of the [Kube CSS Framework](http://imperavi.com/kube/). The original is written in [LESS](http://lesscss.org/) and I have rewrote it to work with [Styl](https://github.com/visionmedia/styl) and [Rework](https://github.com/visionmedia/rework).

This project is based off the 2.0.0 version of Kube.

### Diff from LESS version

There are a lot more variables in this version. There were too many hard coded colours so I added a lot more. I also had to remove the mixins file because it didn't apply to Styl/Rework.

Mixins basically just got replaced with the extenders file which is the home for the clearfix class. This gets extended by a lot of different elements.

### Building

In order to build this project you need to have [node.js](http://nodejs.org) with [grunt](http://gruntjs.com/) installed.

Get all the development dependencies

```shell
npm install
```

then run a grunt task

```shell
grunt css
```

There is also a watching task for compiling CSS and JS on the go:

```shell
grunt watch
```
