import {Component, View, Input} from 'angular2/angular2';
import {item} from 'content/item/item';
import {widget} from 'content/widget/widget';

@Component({
    selector: 'colorpickerwidgetcontainer'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/widget/widgetTypes/colorpickerwidgetcontainer.html'
})
export class colorpickerwidgetcontainer {

    @Input() widgetlocal: widget;

}
