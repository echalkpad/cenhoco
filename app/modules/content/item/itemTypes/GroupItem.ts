import {Component, View, bootstrap} from 'angular2/angular2';
import {itemService} from 'content/services/itemService';
import {item} from 'content/item/item';

@Component({
    selector: 'GroupItem'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/item/itemTypes/GroupItem.html'
})
export class GroupItem extends item {

    constructor(data) {
        super(data);
    }

}