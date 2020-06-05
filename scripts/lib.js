const bash = require('./bash');

bash('rimraf lib');
// babel编译
bash('cross-env BUILD_ENV=lib babel src -D -d lib --ignore src/**/__tests__');
// sass编译
bash('sass lib/components --no-source-map');
// 删除sass文件
bash('rimraf lib/components/**/*.scss');
// 删除单元测试文件
bash('rimraf lib/components/**/__tests__');
// 删除md文件
bash('rimraf lib/components/**/*.md');
// 删除demo
bash('rimraf lib/components/**/demo');
