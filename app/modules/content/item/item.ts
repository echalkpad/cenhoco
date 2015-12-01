import {Component, View, bootstrap} from 'angular2/angular2';
import {itemService} from 'content/services/itemService'; 

@Component({
    selector: 'item'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/item/item.html'
})
export class item {

    public Id;
    //will require an itemService Service to work, which also needs to be imported
    //item: itemService;

}

