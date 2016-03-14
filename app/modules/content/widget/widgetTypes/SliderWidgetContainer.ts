import {Component, View, Input} from 'angular2/angular2';
import {item} from 'content/item/item';
import {widget} from 'content/widget/widget';

@Component({
    selector: 'sliderwidgetcontainer'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/widget/widgetTypes/sliderwidgetcontainer.html'
})
export class sliderwidgetcontainer {

    @Input() widgetlocal: widget;

}
