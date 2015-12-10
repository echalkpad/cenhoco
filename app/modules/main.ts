import {Component, View, bootstrap} from 'angular2/angular2';
import {RouterOutlet, RouteConfig, RouterLink, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {navigation} from 'navigation/navigation';
import {home} from 'content/home/home';
import {configuration} from 'content/configuration/configuration';
import {footer} from 'footer/footer';
import {localStorageService} from 'content/services/localStorageService';
import {cenHoCoConfig} from 'content/configuration/cenHoCoConfig';
import {DataContainer} from 'DataContainer';

@RouteConfig([
    { path: '/Home', component: home, as: 'Home' },
    { path: '/Configuration', component: configuration, as: 'Configuration' },
])

@Component({
    selector: 'main',
    providers: []
})
    @View({
    directives: [RouterOutlet, navigation, home, configuration, footer, RouterLink, ROUTER_DIRECTIVES],
    templateUrl: './scripts/modules/main.html'
})
export class mainApp {

    constructor(router: Router)
    {
        console.log('main constructor called');
        var storageService: localStorageService;
        storageService = new localStorageService();
        DataContainer.Config = storageService.loadFromStorage();
        //DataContainer.GlobalMessage.Message = ''; // GlobalMessage default  TODO: Get this to be accepted
        console.log('main.ts loads loadfromstorage');
        if (DataContainer.Config && DataContainer.Config.isConfigured) {
            router.navigateByUrl('/Home');
        }
        else {
            router.navigateByUrl('/Configuration');
            console.log('current localUrl: ' + DataContainer.Config.localUrl);
        }
    }         
}
 
bootstrap(mainApp, [ROUTER_PROVIDERS]);

