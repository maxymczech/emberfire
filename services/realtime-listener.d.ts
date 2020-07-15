import Service from '@ember/service';
import DS from 'ember-data';
export declare const subscribe: (route: Object, model: DS.Model) => false | void;
export declare const unsubscribe: (route: Object, model?: DS.Model | undefined) => false | void;
declare const RealtimeListenerService_base: Readonly<typeof Service> & (new (properties?: object | undefined) => {
    routeSubscriptions: {
        [key: string]: {
            [key: string]: () => void;
        };
    };
} & Service) & (new (...args: any[]) => {
    routeSubscriptions: {
        [key: string]: {
            [key: string]: () => void;
        };
    };
} & Service);
export default class RealtimeListenerService extends RealtimeListenerService_base {
    subscribe(route: Object, model: any, parentModel?: any, relationship?: any): void;
    unsubscribe(route: Object, model?: DS.Model): void;
}
declare module '@ember/service' {
    interface Registry {
        "realtime-listener": RealtimeListenerService;
    }
}
export {};
