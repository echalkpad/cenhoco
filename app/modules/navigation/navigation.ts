import {Component, View, bootstrap} from 'angular2/angular2';
import {RouterLink, Router} from 'angular2/router';
import {home} from 'content/home/home';
import {configuration} from 'content/configuration/configuration';
import {openhabAdapterService} from 'content/services/openhabAdapterService';
import {DataContainer} from 'DataContainer';
import {page} from 'content/page/page';

@Component({
    selector: 'navigation',    
})
@View({
    //directives: [],
    directives: [RouterLink],
    //directives: [home, configuration, RouterLink],
    templateUrl: './scripts/modules/navigation/navigation.html'
})
export class navigation {
    buttonText: string;
    router: Router;
    isHome: boolean;
    private openhabAdapterServiceHome: openhabAdapterService;
    //Page: page;

    constructor(router: Router)
    {
        console.log('Navigation Constructor Called');
        this.openhabAdapterServiceHome = new openhabAdapterService();
        this.isHome = true;
        this.router = router;
        this.buttonText = 'Configuration';
    }

    onClick(event) //TODO: build for various sub-stages with a stack
    {
        if (this.isHome == true) {
            this.router.navigateByUrl('/Configuration');
            this.buttonText = '< Back'; // maybe make a sort of arrow here, like "<- Back" ?
            this.isHome = false;
        }
        else {
            this.openhabAdapterServiceHome.getPage(DataContainer.ActivePageUrl, (page) => { this.setPage(page) }, "error");
            this.buttonText = 'Configuration';
            this.isHome = true;
        }
    }

    public setPage(page: page) {
        console.log("setPage");
        DataContainer.Page = page; // is this fast enough?
        console.log("extracted page title = " + page.title);
        this.router.navigateByUrl('/Home')
    }

}
