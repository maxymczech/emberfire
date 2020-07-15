/// <reference types="rsvp" />
import Service from '@ember/service';
import Ember from 'ember';
import FirebaseService from './firebase';
declare const FirebaseAppService_base: Readonly<typeof Service> & (new (properties?: object | undefined) => {
    name: undefined;
    firebase: import("@ember/object/computed").default<FirebaseService, FirebaseService>;
} & Service) & (new (...args: any[]) => {
    name: undefined;
    firebase: import("@ember/object/computed").default<FirebaseService, FirebaseService>;
} & Service);
export default class FirebaseAppService extends FirebaseAppService_base {
    firebase: Ember.ComputedProperty<FirebaseService, FirebaseService>;
    name?: string;
    options?: object;
    delete: () => Promise<any>;
    auth: () => import("rsvp").default.Promise<import("firebase").auth.Auth>;
    analytics: () => import("rsvp").default.Promise<import("firebase").analytics.Analytics>;
    firestore: () => import("rsvp").default.Promise<import("firebase").firestore.Firestore>;
    messaging: () => import("rsvp").default.Promise<import("firebase").messaging.Messaging>;
    performance: () => import("rsvp").default.Promise<import("firebase").performance.Performance>;
    remoteConfig: () => import("rsvp").default.Promise<import("firebase").remoteConfig.RemoteConfig>;
    database: (url?: string | undefined) => import("rsvp").default.Promise<import("firebase").database.Database>;
    functions: (region?: string | undefined) => import("rsvp").default.Promise<import("firebase").functions.Functions>;
    storage: (url?: string | undefined) => import("rsvp").default.Promise<import("firebase").storage.Storage>;
    init(...args: any[]): void;
}
declare module '@ember/service' {
    interface Registry {
        "firebase-app": FirebaseAppService;
    }
}
export {};
