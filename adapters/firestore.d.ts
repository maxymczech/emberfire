import DS from 'ember-data';
import RSVP from 'rsvp';
import Ember from 'ember';
import FirebaseAppService from '../services/firebase-app';
import ModelRegistry from 'ember-data/types/registries/model';
import { firestore } from 'firebase/app';
declare const FirestoreAdapter_base: Readonly<typeof DS.Adapter> & (new (properties?: object | undefined) => {
    namespace: string | undefined;
    firebaseApp: import("@ember/object/computed").default<FirebaseAppService, FirebaseAppService>;
    settings: firestore.Settings;
    enablePersistence: boolean;
    persistenceSettings: firestore.PersistenceSettings;
    firestore: RSVP.Promise<firestore.Firestore> | undefined;
    defaultSerializer: string;
} & DS.Adapter) & (new (...args: any[]) => {
    namespace: string | undefined;
    firebaseApp: import("@ember/object/computed").default<FirebaseAppService, FirebaseAppService>;
    settings: firestore.Settings;
    enablePersistence: boolean;
    persistenceSettings: firestore.PersistenceSettings;
    firestore: RSVP.Promise<firestore.Firestore> | undefined;
    defaultSerializer: string;
} & DS.Adapter);
/**
 * Persist your Ember Data models in Cloud Firestore
 *
 * ```js
 * // app/adapters/application.js
 * import FirestoreAdapter from 'emberfire/adapters/firestore';
 *
 * export default FirestoreAdapter.extend({
 *   // configuration goes here
 * });
 * ```
 *
 */
export default class FirestoreAdapter extends FirestoreAdapter_base {
    /**
     * Enable offline persistence with Cloud Firestore, it is not enabled by default
     *
     * ```js
     * // app/adapters/application.js
     * import FirestoreAdapter from 'emberfire/adapters/firestore';
     *
     * export default FirestoreAdapter.extend({
     *   enablePersistence: true
     * });
     * ```
     *
     */
    enablePersistence: boolean;
    /**
     * Namespace all of the default collections
     *
     * ```js
     * // app/adapters/application.js
     * import FirestoreAdapter from 'emberfire/adapters/firestore';
     *
     * export default FirestoreAdapter.extend({
     *   namespace: 'environments/production'
     * });
     * ```
     *
     */
    namespace: string | undefined;
    /**
     * Override the default configuration of the Cloud Firestore adapter: `{ timestampsInSnapshots: true }`
     *
     * ```js
     * // app/adapters/application.js
     * import FirestoreAdapter from 'emberfire/adapters/firestore';
     *
     * export default FirestoreAdapter.extend({
     *   settings: { timestampsInSnapshots: true }
     * });
     * ```
     *
     */
    settings: firestore.Settings;
    /**
     * Pass persistence settings to Cloud Firestore, enablePersistence has to be true for these to be used
     *
     * ```js
     * // app/adapters/application.js
     * import FirestoreAdapter from 'emberfire/adapters/firestore';
     *
     * export default FirestoreAdapter.extend({
     *   enablePersistence: true,
     *   persistenceSettings: { synchronizeTabs: true }
     * });
     * ```
     *
     */
    persistenceSettings: firestore.PersistenceSettings;
    /**
     * Override the default FirebaseApp Service used by the FirestoreAdapter: `service('firebase-app')`
     *
     * ```js
     * // app/adapters/application.js
     * import FirestoreAdapter from 'emberfire/adapters/firestore';
     * import { inject as service } from '@ember/service';
     *
     * export default FirestoreAdapter.extend({
     *   firebaseApp: service('firebase-different-app')
     * });
     * ```
     *
     */
    firebaseApp: Ember.ComputedProperty<FirebaseAppService, FirebaseAppService>;
    findRecord<K extends keyof ModelRegistry>(store: DS.Store, type: ModelRegistry[K], id: string, snapshot: any): RSVP.Promise<firestore.DocumentSnapshot>;
    findAll<K extends keyof ModelRegistry>(store: DS.Store, type: ModelRegistry[K]): RSVP.Promise<firestore.QuerySnapshot>;
    findHasMany<K extends keyof ModelRegistry>(store: DS.Store, snapshot: DS.Snapshot<K>, url: string, relationship: {
        [key: string]: any;
    }): RSVP.Promise<any>;
    findBelongsTo<K extends keyof ModelRegistry>(store: DS.Store, snapshot: DS.Snapshot<K>, url: string, relationship: {
        [key: string]: any;
    }): RSVP.Promise<any>;
    query<K extends keyof ModelRegistry>(store: DS.Store, type: ModelRegistry[K], options?: QueryOptions, _recordArray?: DS.AdapterPopulatedRecordArray<any>): RSVP.Promise<firestore.QuerySnapshot>;
    queryRecord<K extends keyof ModelRegistry>(store: DS.Store, type: ModelRegistry[K], options?: QueryOptions | QueryRecordOptions): RSVP.Promise<firestore.DocumentSnapshot>;
    shouldBackgroundReloadRecord(): boolean;
    updateRecord<K extends keyof ModelRegistry>(_store: DS.Store, type: ModelRegistry[K], snapshot: DS.Snapshot<K>): RSVP.Promise<void>;
    createRecord<K extends keyof ModelRegistry>(_store: DS.Store, type: ModelRegistry[K], snapshot: DS.Snapshot<K>): RSVP.Promise<{
        doc: firestore.DocumentReference;
        data: {};
    }>;
    deleteRecord<K extends keyof ModelRegistry>(_store: DS.Store, type: ModelRegistry[K], snapshot: DS.Snapshot<K>): RSVP.Promise<void>;
}
export declare type CollectionReferenceOrQuery = firestore.CollectionReference | firestore.Query;
export declare type QueryFn = (ref: CollectionReferenceOrQuery) => CollectionReferenceOrQuery;
export declare type QueryRecordFn = (ref: firestore.CollectionReference) => firestore.DocumentReference;
export declare type WhereOp = [string | firestore.FieldPath, firestore.WhereFilterOp, any];
export declare type OrderOp = string | {
    [key: string]: "asc" | "desc";
};
export declare type BoundOp = firestore.DocumentSnapshot | any[];
export declare type QueryOptionsOnlyQuery = {
    query: (ref: firestore.CollectionReference) => firestore.CollectionReference | firestore.Query;
};
export declare type QueryOptions = ({
    filter?: {
        [key: string]: any;
    };
    where?: WhereOp | WhereOp[];
    endAt?: BoundOp;
    endBefore?: BoundOp;
    startAt?: BoundOp;
    startAfter?: BoundOp;
    orderBy?: OrderOp;
    limit?: number;
} | QueryOptionsOnlyQuery) & {
    include?: string;
};
export declare type QueryRecordOptions = {
    doc: QueryRecordFn;
    include?: string;
};
export declare const rootCollection: (adapter: FirestoreAdapter, type: any) => RSVP.Promise<firestore.CollectionReference>;
declare module 'ember-data' {
    interface AdapterRegistry {
        'firestore': FirestoreAdapter;
    }
}
export {};
