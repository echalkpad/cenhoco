import {Component, View, Input} from 'angular2/angular2';
import {item} from 'content/item/item';
import {widget} from 'content/widget/widget';

@Component({
    selector: 'webviewwidgetcontainer'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/widget/widgetTypes/webviewwidgetcontainer.html'
})
export class webviewwidgetcontainer {

    @Input() widgetlocal: widget;

}
