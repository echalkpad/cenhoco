import {Component, View, bootstrap, FORM_DIRECTIVES, NgFor} from 'angular2/angular2'; 
import {RouterOutlet, RouteConfig, RouterLink, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {localStorageService} from 'content/services/localStorageService';
import {cenHoCoConfig} from 'content/configuration/cenHoCoConfig';
import {DataContainer} from 'DataContainer';
import {siteMapService} from 'content/services/siteMapService';
import {SiteMap} from 'content/home/SiteMap';
import {GlobalMessages} from 'footer/GlobalMessages/GlobalMessages';

@Component({
    selector: 'configuration'
})
@View({
    directives: [FORM_DIRECTIVES, NgFor],
    templateUrl: './scripts/modules/content/configuration/configuration.html'
})
export class configuration {

    public config: cenHoCoConfig;
    private storageService: localStorageService;
    private siteMapService: siteMapService;
    public siteMapList: Array<SiteMap>;
    private router;
    public GlobMess: GlobalMessages;

    constructor(router: Router) {
        console.log('configuration constructor called');
        this.storageService = new localStorageService();
        this.config = DataContainer.Config;
        this.siteMapService = new siteMapService();
        this.router = router;
        var siteMap = new SiteMap();
        this.GlobMess = new GlobalMessages();

        if (this.config.localUrl == '') {  //TODO: behavior for wrong Url - probably needed in siteMapService - errorCallBacks getSiteMapListError
            console.log('default sitemap being build');
            siteMap.Label = 'Please enter a valid local Url first';
            siteMap.Url = '';
            siteMap.Name = 'defaultsitemap';
            this.siteMapList = [siteMap];
            //console.log('default sitemap name: ' + siteMap.Name);
        }
        else {
            console.log('constructor getSiteMaps call for present localUrl');
            this.siteMapService.getSiteMaps(this.config.localUrl, (siteMapList) => { this.setSiteMapList(siteMapList) }, this.getSiteMapListError);
        }
    }

    public onCancelClick(event) {
        this.router.navigateByUrl('/Home');
    }

    public onSaveClick(event) {
        console.log('onSaveClick called with event ' + event + ' and this.config ' + this.config);
        this.storageService.saveToStorage(this.config);
        console.log('DataContainer Config: ' + DataContainer.Config);
        DataContainer.Config = this.config; //TODO: verify values + reload server connection   
        //for (var siteMap in this.siteMapList) 
        for (var i = 0; i < this.siteMapList.length; i += 1) {
            console.log('for loop ' + this.siteMapList[i].Name + ' and config.sitemap ' + this.config.sitemap);
            // if (this.siteMapList[i].Name == this.config.sitemap) {    TODO: once select ng-for bug is fixed, use this again
            if (this.siteMapList[i].Name == 'demo') {
                console.log('onSaveClick if runs ' + this.siteMapList[i].Name);
                this.getSiteMapSuccess(this.siteMapList[i]);
                break;
            }
        }
    }

    public onLocalUrlBlur(event) {
        console.log('Blur call');
        this.siteMapService.getSiteMaps(this.config.localUrl, (siteMapList) => { this.setSiteMapList(siteMapList) }, this.getSiteMapListError);
    }

    public setSiteMapList(siteMapData) {
        console.log('setSiteMap ' + siteMapData);
        this.siteMapList = siteMapData;
        //console.log('new sitemaplist first label: ' + this.siteMapList[0].Label);
    }

    public getSiteMapListError(data) {
        //console.log('getSiteMapError ' + data);
        // TODO check which error is thrown, then call GlobalMessages fuctions
        // this.GlobMess.setText('No sitemap data was found');
        // this.GlobMess.setText('No sitemaps were found under this Url');
    }

    public getSiteMapSuccess(siteMap: SiteMap) {
        console.log('getSiteMapSuccess in configuration called');
        DataContainer.SiteMap = siteMap;
        DataContainer.ActivePageUrl = siteMap.Url;
        this.router.navigateByUrl('/Home');
    } 

}

