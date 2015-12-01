import {Component, View, bootstrap} from 'angular2/angular2';
import {RouterLink, Router} from 'angular2/router';
import {home} from 'content/home/home';
import {configuration} from 'content/configuration/configuration';

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

    constructor(router: Router)
    {
        this.isHome = true;
        this.router = router;
        this.buttonText = 'Configuration';
    }

    onClick(event) //TODO: build for various sub-stages
    {
        if (this.isHome == true) {
            this.router.navigateByUrl('/Configuration');
            this.buttonText = 'Back';
            this.isHome = false;
        }
        else {
            this.router.navigateByUrl('/Home');
            this.buttonText = 'Configuration';
            this.isHome = true;
        }
    }
}
