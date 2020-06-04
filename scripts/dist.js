const bash = require('./bash');

bash('rimraf dist');
// webpack编译
bash(`webpack --config ${require.resolve('../webpack.config.dev.js')} --progress`);
bash(`webpack --config ${require.resolve('../webpack.config.prod.js')} --progress`);
