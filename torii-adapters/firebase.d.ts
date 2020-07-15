/// <reference types="rsvp" />
import EmberObject from '@ember/object';
import Ember from 'ember';
import FirebaseAppService from '../services/firebase-app';
declare const FirebaseToriiAdapter_base: Readonly<typeof EmberObject> & (new (properties?: object | undefined) => {
    firebaseApp: import("@ember/object/computed").default<FirebaseAppService, FirebaseAppService>;
} & EmberObject) & (new (...args: any[]) => {
    firebaseApp: import("@ember/object/computed").default<FirebaseAppService, FirebaseAppService>;
} & EmberObject);
export default class FirebaseToriiAdapter extends FirebaseToriiAdapter_base {
    firebaseApp: Ember.ComputedProperty<FirebaseAppService, FirebaseAppService>;
    open(user: any): import("rsvp").default.Promise<any>;
    restore(): import("rsvp").default.Promise<unknown>;
    close(): import("rsvp").default.Promise<void>;
}
export {};
