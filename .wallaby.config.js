module.exports = function(wallaby) {
  return {
    files: [
      { pattern: 'tools/testSetup.js', instrument: false, load: true },
      { "pattern": "src/**/*.js"},
      { "pattern": "src/**/*.test.js", "ignore": true },
    ],
    tests: [
      'src/**/*.test.js'
    ],
    compilers: {
       '**/*.js*': wallaby.compilers.babel({
         babel: require('babel-core'),
         presets: ['es2015', 'react']
       })
    },
    env: {
      type: 'node'
    },
    testFramework: 'mocha'
  }
}
