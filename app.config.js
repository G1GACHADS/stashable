module.exports = {
  entryPoint: './src/app.jsx',
  name: 'stashable',
  slug: 'stashable',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './src/assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './src/assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#FFFFFE',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    bundleIdentifier: 'com.gigachads.stashable',
    supportsTablet: true,
  },
  android: {
    package: 'com.gigachads.stashable',
    adaptiveIcon: {
      foregroundImage: './src/assets/adaptive-icon.png',
      backgroundColor: '#FFFFFE',
    },
  },
  web: {
    favicon: './src/assets/favicon.png',
  },
  extra: {
    backendURL: process.env.BACKEND_URL ?? 'http://192.168.1.8:5000',
    eas: {
      projectId: 'c9bf37d3-2d96-402d-928d-ffa330140c41',
    },
  },
  plugins: [['expo-image-picker']],
}
