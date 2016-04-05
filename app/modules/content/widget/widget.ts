import {Component, View, bootstrap} from 'angular2/angular2';
import {widgetService} from 'content/services/widgetService';
import {item} from 'content/item/item';

export class widget {

    public widgetId;
    public type;
    public label;
    public icon;
    public item: item;
    public linkedPage;
    public widgetSubList: Array<widget>;
    // can have item or widget, how to implement that?
    // make a widget and item attachment, unused ones are NULL (or nothing? check how it's in typescript, if both, use NULL)
    // what about LinkedPage? same as above

    constructor(data) {
        if (data) {
            if (data.widgetId) {
                this.widgetId = data.widgetId;
            }
            if (data.type) {
                this.type = data.type;
            }
            if (data.label) {
                this.label = data.label;
            }
            if (data.icon) {
                this.icon = data.icon;
            }
            if (data.linkedPage) {
                this.linkedPage = data.linkedPage;
            }
        }
    }

}
