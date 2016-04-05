import {Component, View, bootstrap} from 'angular2/angular2';
import {itemService} from 'content/services/itemService';
import {item} from 'content/item/item';

@Component({
    selector: 'ContactItem'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/item/itemTypes/ContactItem.html'
})
export class ContactItem extends item {

    constructor(data) {
        super(data);
    }

}