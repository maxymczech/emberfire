/// <reference types="rsvp" />
import Evented from '@ember/object/evented';
import EmberObject from '@ember/object';
import Ember from 'ember';
import FirebaseAppService from '../services/firebase-app';
declare const FirebaseSessionStore_base: Readonly<typeof EmberObject> & (new (properties?: object | undefined) => Evented & {
    firebaseApp: import("@ember/object/computed").default<FirebaseAppService, FirebaseAppService>;
} & EmberObject) & (new (...args: any[]) => Evented & {
    firebaseApp: import("@ember/object/computed").default<FirebaseAppService, FirebaseAppService>;
} & EmberObject);
export default class FirebaseSessionStore extends FirebaseSessionStore_base {
    firebaseApp: Ember.ComputedProperty<FirebaseAppService, FirebaseAppService>;
    restoring: boolean;
    persist: typeof import("rsvp").default.Promise.resolve;
    clear: typeof import("rsvp").default.Promise.resolve;
    restore(): import("rsvp").default.Promise<unknown>;
}
export {};
