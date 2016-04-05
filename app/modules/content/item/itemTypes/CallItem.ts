import {Component, View, bootstrap} from 'angular2/angular2';
import {itemService} from 'content/services/itemService';
import {item} from 'content/item/item';

@Component({
    selector: 'CallItem'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/item/itemTypes/CallItem.html'
})
export class CallItem extends item {

    constructor(data) {
        super(data);
    }

}