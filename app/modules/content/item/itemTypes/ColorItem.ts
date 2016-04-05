import {Component, View, bootstrap} from 'angular2/angular2';
import {itemService} from 'content/services/itemService';
import {item} from 'content/item/item';

@Component({
    selector: 'ColorItem'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/item/itemTypes/ColorItem.html'
})
export class ColorItem extends item {

    constructor(data) {
        super(data);
    }

}