module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  Plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix:'~',
        rootPathSuffix: 'src',
      },
    ],
    ['babel-plugin-styled-components'],
  ],
};
