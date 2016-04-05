import {Component, View, bootstrap} from 'angular2/angular2';
import {itemService} from 'content/services/itemService';
import {item} from 'content/item/item';

@Component({
    selector: 'DateTimeItem'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/item/itemTypes/DateTimeItem.html'
})
export class DateTimeItem extends item {

    constructor(data) {
        super(data);
    }

}