// define child rescript
module.exports = config => {
  config.target = 'electron-renderer';
  externals = ['pg', 'tedious', 'pg-hstore'];
  return config;
}

