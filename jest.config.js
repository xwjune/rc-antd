const testDir = process.env.TEST_DIR || 'src';

module.exports = {
  roots: [`<rootDir>/${testDir}`],
  setupFiles: ['./tests/setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(s?css|less)$': 'identity-obj-proxy',
  },
};
