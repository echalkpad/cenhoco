
// import {Component} from 'angular2/angular2';
import {DataContainer} from 'DataContainer';
import {widget} from 'content/widget/widget';
import {page} from 'content/page/page';
import {widgetService} from 'content/services/widgetService';

export class openhabAdapterService {

    widgetService: widgetService;

    constructor() {
        this.widgetService = new widgetService();
    }

    public getPage(url: string, successCallBack, errorCallBack) {
        console.log('getPage url value: ' + url);
        var self = this;
        $.ajax({
            //url: 'http://localhost:8080/rest/sitemaps',
            url: url,
            headers: { 'Accept': 'application/json' },
            success: function (data, textStatus, jqXHR) {
                self.extractPage(data, textStatus, jqXHR, successCallBack, errorCallBack)
            },
            error: errorCallBack
        });
    }

    public extractPage(data: any, textStatus: string, jqXHR, successCallBack, errorCallBack) {
        var extractedPage: page;
        extractedPage = new page(data);
        if (!data || (!data.id && !data.title)) {
            errorCallBack(jqXHR, 'parserError', 'page data was empty');
            return;
        }

        if (!data.widget && !data.widgets) {
            errorCallBack(jqXHR, 'parserError', 'widget collection was empty');
            return;
        }

        if (data.widget) {
            extractedPage.widgetList = this.widgetService.extractWidgets(data);
        }
        else {
            for (var widgetElement in data.widgets) {
                extractedPage.widgetList = this.widgetService.extractWidgets(widgetElement);
            }
        }
        
        successCallBack(page);
        return;
    }

}