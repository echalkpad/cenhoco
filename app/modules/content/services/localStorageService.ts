/// <reference path="../../../typings/jquery/jquery.d.ts" />  // 

import {Component} from 'angular2/angular2';
import {configuration} from 'content/configuration/configuration';
import {cenHoCoConfig} from 'content/configuration/cenHoCoConfig';

@Component({
})
export class localStorageService {

    public loadFromStorage(): cenHoCoConfig {
        console.log('loadFromStorage called');
       var config: cenHoCoConfig;
       var configString: string;
       configString = localStorage.getItem('storedConfig');
       if (configString) {
           console.log('Load Config: ' + configString);
           config = JSON.parse(configString);
       }
       if (!config) {
           config = new cenHoCoConfig();
           config.localUrl = '';
           config.remoteUrl = '';
           config.sitemap = '';
           console.log('Loading Default Config');
       }
       return config;
    }

    public saveToStorage(config: cenHoCoConfig) {    // TODO: Does not save values properly, instead saves empty strings
       console.log('local url before stringify: ' + config.localUrl);
       localStorage.setItem('storedConfig', JSON.stringify(config));
       console.log('saved values to local storage: ' + JSON.stringify(config));
   }
}