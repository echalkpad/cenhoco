import {Component, View, bootstrap} from 'angular2/angular2';
import {itemService} from 'content/services/itemService'; 

@Component({
    selector: 'item'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/item/item.html'
})
export class item {

    public type;
    public state;
    public name;
    public link;

    constructor(data) {
        if (data) {
            if (data.type) {
                this.type = data.type;
            }
            if (data.state) {
                this.state = data.state;
            }
            if (data.name) {
                this.name = data.name;
            }
            if (data.link) {
                this.link = data.link;
            }
        }
    }

}

