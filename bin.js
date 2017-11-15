#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

if (process.argv.length < 3) {
  throw new Error('Provide a file to execute')
}

const consumerDir = fs.realpathSync(process.cwd())
const fileToExec = process.argv[process.argv.length - 1]

require('babel-polyfill')
require('babel-register')({
  babelrc: false,
  presets: [['babel-preset-env', {targets: {node: 'current'}}]],
})

require(path.resolve(consumerDir, fileToExec))
