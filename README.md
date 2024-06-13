# capstone-cpu-investor-angular
CPU Investor Center Angular Application Capstone project

# Implementations
Angular Workspaces Monorepo concept with Applications and Libaries
Lazy loading based routing components (Reduced build size from 1.19 MB to 518 kB)
Capacitor for Android using Angular
Angular Material components

# Commands
ng g application my-app
ng g library my-lib
npm install @capacitor/angular --force
npm install @capacitor/core @capacitor/cli
npm install @capacitor/android --force
npx cap init
ng build CapstoneCpuInvestorAngular --configuration production --aot
ng serve CapstoneCpuInvestorAngular
npx cap add android
npx cap sync (or) npx cap copy (Make sure webDir points to dist -> index.html)
npx cap open android (Had to enable SVM from bios to run emulator)
