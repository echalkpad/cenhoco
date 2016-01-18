import {Component, View, bootstrap} from 'angular2/angular2';
import {itemService} from 'content/services/itemService';
import {item} from 'content/item/item';

@Component({
    selector: 'SwitchItem'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/item/itemTypes/SwitchItem.html'
})
export class SwitchItem extends item {

    constructor(data) {
        super(data);
    }

}