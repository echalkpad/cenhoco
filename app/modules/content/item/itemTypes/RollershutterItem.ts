import {Component, View, bootstrap} from 'angular2/angular2';
import {itemService} from 'content/services/itemService';
import {item} from 'content/item/item';

@Component({
    selector: 'RollershutterItem'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/item/itemTypes/RollershutterItem.html'
})
export class RollershutterItem extends item {

    constructor(data) {
        super(data);
    }

}