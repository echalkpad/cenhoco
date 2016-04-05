import {Component, View, bootstrap} from 'angular2/angular2';
import {itemService} from 'content/services/itemService';
import {item} from 'content/item/item';

@Component({
    selector: 'StringItem'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/item/itemTypes/StringItem.html'
})
export class StringItem extends item {

    constructor(data) {
        super(data);
    }

}