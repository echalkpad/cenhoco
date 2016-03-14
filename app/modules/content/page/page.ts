import {Component, View, bootstrap} from 'angular2/angular2';
import {widget} from 'content/widget/widget';

@Component({
    selector: 'page'
})
@View({
    directives: [],
    //templateUrl: './scripts/modules/content/page/page.html'
})
export class page {

    public id;
    public title;
    public icon;
    public link;
    public leaf;
    public widgetList: widget[];

    constructor(data) {
        if (data) {
            if (data.id) {
                this.id = data.id;
            }
            if (data.title) {
                this.title = data.title;
            }
            if (data.icon) {
                this.icon = data.icon;
            }
            if (data.link) {
                this.link = data.link;
            }
            if (data.leaf) {
                this.leaf = data.leaf;
            }
        }
        else {
            this.id = 'Loading';
            this.title = 'Loading';
            this.icon = 'Loading';
            this.link = 'Loading';
            this.leaf = false;
            this.widgetList = [];
        }
    }

}

