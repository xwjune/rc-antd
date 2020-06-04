const { execSync } = require('child_process');

const bash = (cmd, options = {}) => {
  execSync(cmd, {
    stdio: 'inherit',
    ...options,
  });
};

module.exports = bash;
