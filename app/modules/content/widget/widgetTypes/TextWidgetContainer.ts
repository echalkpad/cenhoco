import {Component, View, Input} from 'angular2/angular2';
import {item} from 'content/item/item';
import {widget} from 'content/widget/widget';

@Component({
    selector: 'textwidgetcontainer'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/widget/widgetTypes/textwidgetcontainer.html'
})
export class textwidgetcontainer {

    @Input() widgetlocal: widget;

}
