import {Component, View, Input} from 'angular2/angular2';
import {item} from 'content/item/item';
import {widget} from 'content/widget/widget';

@Component({
    selector: 'imagewidgetcontainer'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/widget/widgetTypes/imagewidgetcontainer.html'
})
export class imagewidgetcontainer {

    @Input() widgetlocal: widget;

}
