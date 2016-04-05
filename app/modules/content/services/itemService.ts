/// <reference path="../../../typings/jquery/jquery.d.ts" /> 

import {Component} from 'angular2/angular2';
import {DataContainer} from 'DataContainer';
import {item} from 'content/item/item';
import {CallItem} from 'content/item/itemTypes/CallItem';
import {ColorItem} from 'content/item/itemTypes/ColorItem';
import {ContactItem} from 'content/item/itemTypes/ContactItem';
import {DateTimeItem} from 'content/item/itemTypes/DateTimeItem';
import {DimmerItem} from 'content/item/itemTypes/DimmerItem';
import {GroupItem} from 'content/item/itemTypes/GroupItem';
import {LocationItem} from 'content/item/itemTypes/LocationItem';
import {NumberItem} from 'content/item/itemTypes/NumberItem';
import {RollershutterItem} from 'content/item/itemTypes/RollershutterItem';
import {StringItem} from 'content/item/itemTypes/StringItem';
import {SwitchItem} from 'content/item/itemTypes/SwitchItem';

@Component({
})
export class itemService {

    public itemList: item[];

    constructor() {
    }

    // TODO: set successCallBack and errorCallBack functionality
    //public callGetItems() {
    //    this.getItems(DataContainer.Config.localUrl + '/' + DataContainer.Config.sitemap, successCallBack, errorCallBack);
    //}


    // define top level List for items and widgets globally, otherwise the function would create a new seperate List every time. 
    // New List inside function should be sub-level to the global List. How to connect them?

    public extractItems(data: any): item[]{

        var itemList: item[]; // needed with the global itemList?

        if (!data || (!data.item && !data.items)) {
            //errorCallBack(jqXHR, 'parserError', 'Widget data was empty');
            console.log('Item data was empty');
            return null;
        }

        // still fitting?
        if (!data.items.length || (data.items.length < 1)) {
            //errorCallBack(jqXHR, 'parserError', 'Widget Collection was empty');
            console.log('Item Collection was empty');
            return null;
        }

        if (data.item) {
            this.itemList = [this.getTypedItem(data.widget)];
        }
        else {
            for (var widgetElement in data.widgets) {
                this.itemList.push(this.getTypedItem(widgetElement));
            }
        }

        return itemList;
    }

    public getTypedItem(item: any) {

        var returnItem: item;
        
        // switch case with "new" calls for each item Type
        switch (item.type) {
            case "SwitchItem":
                returnItem = new SwitchItem(item);
                break;
            case "CallItem":
                returnItem = new CallItem(item);
                break;
            case "ColorItem":
                returnItem = new SwitchItem(item);
                break;
            case "DateTimeItem":
                returnItem = new DateTimeItem(item);
                break;
            case "DimmerItem":
                returnItem = new DimmerItem(item);
                break;
            case "GroupItem":
                returnItem = new GroupItem(item);
                break;
            case "GroupItem":
                returnItem = new GroupItem(item);
                break;
            case "LocationItem":
                returnItem = new LocationItem(item);
                break;
            case "NumberItem":
                returnItem = new NumberItem(item);
                break;
            case "RollershutterItem":
                returnItem = new RollershutterItem(item);
                break;
            case "StringItem":
                returnItem = new StringItem(item);
                break;
        }

        return returnItem;

    }

}