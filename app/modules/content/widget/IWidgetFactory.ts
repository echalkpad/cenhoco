import {widget} from 'content/widget/widget';

export interface IWidgetFactory {

    getWidget(data: any): widget

}