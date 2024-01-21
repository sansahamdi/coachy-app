import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.coachy.app',
  appName: 'coachy',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
