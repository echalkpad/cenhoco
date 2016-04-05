import {Component, View, bootstrap} from 'angular2/angular2';
import {itemService} from 'content/services/itemService';
import {item} from 'content/item/item';

@Component({
    selector: 'DimmerItem'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/item/itemTypes/DimmerItem.html'
})
export class DimmerItem extends item {

    constructor(data) {
        super(data);
    }

}