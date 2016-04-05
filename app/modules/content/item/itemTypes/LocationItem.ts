import {Component, View, bootstrap} from 'angular2/angular2';
import {itemService} from 'content/services/itemService';
import {item} from 'content/item/item';

@Component({
    selector: 'LocationItem'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/item/itemTypes/LocationItem.html'
})
export class LocationItem extends item {

    constructor(data) {
        super(data);
    }

}