import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
// import { UpgradeModule, downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';
import './app/rxjsOperations';
// import { AppModule } from "./app/app.module";
import { AppModuleNgFactory } from '../aot/public/app/app.module.ngfactory';
// import { downgradeItems } from "./downgrades";
// import { setUpLocationSync } from '@angular/router/upgrade';


enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
//   .then(platformRef => {
//   // downgrades
//   downgradeItems();

//   const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
//   upgrade.bootstrap(document.documentElement, ['app']);
//   setUpLocationSync(upgrade);

//   console.log('hybrid app bootstrapped');
// })