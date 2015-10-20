import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'main'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/main.html'
})
export class mainApp {
    name: string;
    hello(): void {
        //alert("hello, " + this.name);
        this.name = "Jochen";
    }
    constructor() {
        this.name = "John Doe";
        console.log('mainApp constructor executed');
    }
}

bootstrap(mainApp);

