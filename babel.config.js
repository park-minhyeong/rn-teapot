module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '~': './src',
            '@app': './src/app',
            '@components': './src/components',
            '@design': './src/design',
            '@asset': './src/asset',
            '@shared': './src/shared',
          },
        },
      ],
    ],
  };
};
