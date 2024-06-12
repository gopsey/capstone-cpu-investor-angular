import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.computershare.capstonecpuinvestorangular',
  appName: 'CapstoneCpuInvestorAngular',
  webDir: 'dist/cpu-investor-computershare/browser',
  server: {
    url: 'http://192.168.29.145:4200',
    cleartext: true
  },
};

export default config;
