import {Component, View, bootstrap} from 'angular2/angular2';
import {DataContainer} from 'DataContainer';

@Component({
    selector: 'home',
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/footer/GlobalMessages/GlobalMessages.html'
})
export class GlobalMessages {

   // text: string; // set to whatever the error is through function

    constructor() {
       // this.text = ''; // default value, check where to reset
    }

    public setText(errorMessage: string) { // call wherever error is caught
        //this.text = errorMessage;
        DataContainer.GlobalMessage.Message = errorMessage;
    };
}

