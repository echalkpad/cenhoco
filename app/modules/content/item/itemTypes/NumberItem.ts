import {Component, View, bootstrap} from 'angular2/angular2';
import {itemService} from 'content/services/itemService';
import {item} from 'content/item/item';

@Component({
    selector: 'NumberItem'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/item/itemTypes/NumberItem.html'
})
export class NumberItem extends item {

    constructor(data) {
        super(data);
    }

}