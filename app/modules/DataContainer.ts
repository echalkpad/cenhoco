import {cenHoCoConfig} from 'content/configuration/cenHoCoConfig';
import {GlobalMessageText} from 'footer/GlobalMessages/GlobalMessageText';
import {page} from 'content/page/page';
import {SiteMap} from 'content/home/SiteMap';

export class DataContainer {
    static Config: cenHoCoConfig;
    static GlobalMessage: GlobalMessageText;
    static Page: page;
    static SiteMap: SiteMap;
    static ActivePageUrl: string;
}
