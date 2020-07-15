/// <reference types="rsvp" />
import EmberObject from '@ember/object';
declare const FirebaseToriiProvider_base: Readonly<typeof EmberObject> & (new (properties?: object | undefined) => import("@ember/object/-private/types").EmberClassArguments & EmberObject) & (new (...args: any[]) => import("@ember/object/-private/types").EmberClassArguments & EmberObject);
export default class FirebaseToriiProvider extends FirebaseToriiProvider_base {
    open(): import("rsvp").default.Promise<never>;
}
export {};
