/// <reference path="../../../typings/jquery/jquery.d.ts" /> 

import {Component} from 'angular2/angular2';
import {DataContainer} from 'DataContainer';
import {widget} from 'content/widget/widget';
import {ChartWidget} from 'content/widget/widgetTypes/ChartWidget';
import {ColorpickerWidget} from 'content/widget/widgetTypes/ColorpickerWidget';
import {FrameWidget} from 'content/widget/widgetTypes/FrameWidget';
import {GroupWidget} from 'content/widget/widgetTypes/GroupWidget';
import {ImageWidget} from 'content/widget/widgetTypes/ImageWidget';
import {ListWidget} from 'content/widget/widgetTypes/ListWidget';
import {SelectionWidget} from 'content/widget/widgetTypes/SelectionWidget';
import {SetpointWidget} from 'content/widget/widgetTypes/SetpointWidget';
import {SliderWidget} from 'content/widget/widgetTypes/SliderWidget';
import {SwitchWidget} from 'content/widget/widgetTypes/SwitchWidget';
import {TextWidget} from 'content/widget/widgetTypes/TextWidget';
import {VideoWidget} from 'content/widget/widgetTypes/VideoWidget';
import {WebviewWidget} from 'content/widget/widgetTypes/WebviewWidget';

@Component({
})
export class widgetService {

    public widgetList: widget[];

    constructor() {
    }

    // TODO: set successCallBack and errorCallBack functionality
    //public callGetItems() {
    //    this.getItems(DataContainer.Config.localUrl + '/' + DataContainer.Config.sitemap, successCallBack, errorCallBack);
    //}

    // define top level List for items and widgets globally, otherwise the function would create a new seperate List every time. 
    // New List inside function should be sub-level to the global List. How to connect them?

    public extractWidgets(data: any): widget[] {

        var widgetList: widget[]; // needed with the global widgetList?

        if (!data || (!data.widget && !data.widgets)) {
            //errorCallBack(jqXHR, 'parserError', 'Widget data was empty');
            console.log('Widget data was empty');
            return null;
        }

        // still fitting?
        if (!data.widgets.length || (data.widgets.length < 1)) {
            //errorCallBack(jqXHR, 'parserError', 'Widget Collection was empty');
            console.log('Widget Collection was empty');
            return null;
        }

        if (data.widget) {
           this.widgetList = [this.getTypedWidget(data.widget)];
        }
        else {
            for (var widgetElement in data.widgets) {
                this.widgetList.push(this.getTypedWidget(widgetElement));
            }
        }

        return widgetList;
    }

    public getTypedWidget(widget: any) {

        var returnWidget: widget;
        
        // switch case with "new" calls for each widget Type
        switch (widget.type) {
            case "Chart":
                returnWidget = new ChartWidget(widget);
                break;
            case "Colorpicker":
                returnWidget = new ColorpickerWidget(widget);
                break;
            case "Frame":
                returnWidget = new FrameWidget(widget);
                break;
            case "Group":
                returnWidget = new GroupWidget(widget);
                break;
            case "Image":
                returnWidget = new ImageWidget(widget);
                break;
            case "List":
                returnWidget = new ListWidget(widget);
                break;
            case "Selection":
                returnWidget = new SelectionWidget(widget);
                break;
            case "Setpoin":
                returnWidget = new SetpointWidget(widget);
                break;
            case "Switch":
                returnWidget = new SwitchWidget(widget);
                break;
            case "Text":
                returnWidget = new TextWidget(widget);
                break;
            case "Video":
                returnWidget = new VideoWidget(widget);
                break;
            case "Webview":
                returnWidget = new WebviewWidget(widget);
                break;
        }

        return returnWidget;

    }

}