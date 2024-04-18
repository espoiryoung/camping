
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@router': './src/router',
          '@pages': './src/pages',
          '@components': './src/components',
          '@icons': './src/assets/icons',
          '@images': './src/assets/images',
          '@libs': './src/libs',
          '@styles': './src/styles',
          '@apis': './src/apis',
        },
      },
    ],
  ], 
};