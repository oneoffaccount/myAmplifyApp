import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);
Amplify.configure(awsconfig)

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
