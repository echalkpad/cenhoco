import {widget} from 'content/widget/widget';
import {IWidgetFactory} from 'content/widget/IWidgetFactory';
import {chartwidgetcontainer} from 'content/widget/widgetTypes/chartwidgetcontainer';
import {colorpickerwidgetcontainer} from 'content/widget/widgetTypes/colorpickerwidgetcontainer';
import {framewidgetcontainer} from 'content/widget/widgetTypes/framewidgetcontainer';
import {groupwidgetcontainer} from 'content/widget/widgetTypes/groupwidgetcontainer';
import {imagewidgetcontainer} from 'content/widget/widgetTypes/imagewidgetcontainer';
import {listwidgetcontainer} from 'content/widget/widgetTypes/listwidgetcontainer';
import {selectionwidgetcontainer} from 'content/widget/widgetTypes/selectionwidgetcontainer';
import {setpointwidgetcontainer} from 'content/widget/widgetTypes/setpointwidgetcontainer';
import {sliderwidgetcontainer} from 'content/widget/widgetTypes/sliderwidgetcontainer';
import {switchwidgetcontainer} from 'content/widget/widgetTypes/switchwidgetcontainer';
import {textwidgetcontainer} from 'content/widget/widgetTypes/textwidgetcontainer';
import {videowidgetcontainer} from 'content/widget/widgetTypes/videowidgetcontainer';
import {webviewwidgetcontainer} from 'content/widget/widgetTypes/webviewwidgetcontainer';

export class WidgetFactory implements IWidgetFactory {

    public getWidget(data: any): widget {
        return null;
    }

}