import {Component, View, bootstrap} from 'angular2/angular2';
import {RouterOutlet, RouteConfig, RouterLink, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {navigation} from 'navigation/navigation';
import {home} from 'content/home/home';
import {configuration} from 'content/configuration/configuration';
import {footer} from 'footer/footer';
import {localStorageService} from 'content/services/localStorageService';
import {cenHoCoConfig} from 'content/configuration/cenHoCoConfig';
import {siteMapService} from 'content/services/siteMapService';
import {DataContainer} from 'DataContainer';
import {SiteMap} from 'content/home/SiteMap';

@RouteConfig([
    { path: '/Home', component: home, as: 'Home' },
    { path: '/Configuration', component: configuration, as: 'Configuration' },
])

@Component({
    selector: 'main',
    bindings: []
})
@View({
    directives: [RouterOutlet, navigation, home, configuration, footer, RouterLink, ROUTER_DIRECTIVES],
    templateUrl: './scripts/modules/main.html'
})
export class mainApp {

    private Router: Router;
    private siteMapService: siteMapService;

    constructor(router: Router)
    {
        console.log('main constructor called');
        this.Router = router;
        this.siteMapService = new siteMapService();
        var storageService: localStorageService;
        storageService = new localStorageService();
        DataContainer.Config = storageService.loadFromStorage();
        //DataContainer.GlobalMessage.Message = ''; // GlobalMessage default  TODO: Get this to be accepted
        //console.log('main.ts loads loadfromstorage');
        if (DataContainer.Config && DataContainer.Config.isConfigured) {
            console.log('Config was loaded');
            this.siteMapService.getSiteMap(DataContainer.Config.sitemap, DataContainer.Config.localUrl, (siteMap) => { this.getSiteMapSuccess(siteMap) }, "error"); //TODO: proper errorCallBacks            
        }
        else {
            console.log('Config could not be loaded');
            router.navigateByUrl('/Configuration');
            //console.log('current localUrl: ' + DataContainer.Config.localUrl);
        }
    } 

    public getSiteMapSuccess(siteMap: SiteMap) {
        console.log('getSiteMapSuccess - SiteMap: ' + siteMap);
        DataContainer.SiteMap = siteMap;
        DataContainer.ActivePageUrl = siteMap.Url;
        this.Router.navigateByUrl('/Home');
    }    
}
 
bootstrap(mainApp, [ROUTER_PROVIDERS]);

