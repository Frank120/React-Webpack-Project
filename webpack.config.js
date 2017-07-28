module.exports = function (env) {
  // Use this array to control which entries will be compiled
  // (leave it empty to compile all entries);
  const compileEntries = [
  //  'chunk-demo-1',
  //   'static-html-demo',
  ];

  //eslint-disable-next-line
  return require(`./webpack.${env}.js`)(env, compileEntries);
};
