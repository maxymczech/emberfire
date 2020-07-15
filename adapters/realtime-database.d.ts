import RSVP from 'rsvp';
import DS from 'ember-data';
import Ember from 'ember';
import FirebaseAppService from '../services/firebase-app';
import ModelRegistry from 'ember-data/types/registries/model';
import { database } from 'firebase/app';
declare const RealtimeDatabaseAdapter_base: Readonly<typeof DS.Adapter> & (new (properties?: object | undefined) => {
    namespace: string | undefined;
    firebaseApp: import("@ember/object/computed").default<FirebaseAppService, FirebaseAppService>;
    databaseURL: undefined;
    database: RSVP.Promise<database.Database> | undefined;
    defaultSerializer: string;
} & DS.Adapter) & (new (...args: any[]) => {
    namespace: string | undefined;
    firebaseApp: import("@ember/object/computed").default<FirebaseAppService, FirebaseAppService>;
    databaseURL: undefined;
    database: RSVP.Promise<database.Database> | undefined;
    defaultSerializer: string;
} & DS.Adapter);
/**
 * Persist your Ember Data models in the Firebase Realtime Database
 *
 * ```js
 * // app/adapters/application.js
 * import RealtimeDatabaseAdapter from 'emberfire/adapters/realtime-database';
 *
 * export default RealtimeDatabaseAdapter.extend({
 *   // configuration goes here
 * });
 * ```
 *
 */
export default class RealtimeDatabaseAdapter extends RealtimeDatabaseAdapter_base {
    /**
     * Override the default FirebaseApp Service used by the RealtimeDatabaseAdapter: `service('firebase-app')`
     *
     * ```js
     * // app/adapters/application.js
     * import RealtimeDatabaseAdapter from 'emberfire/adapters/realtime-database';
     * import { inject as service } from '@ember/service';
     *
     * export default RealtimeDatabaseAdapter.extend({
     *   firebaseApp: service('firebase-different-app')
     * });
     * ```
     *
     */
    firebaseApp: Ember.ComputedProperty<FirebaseAppService, FirebaseAppService>;
    /**
     * Namespace all of the paths
     *
     * ```js
     * // app/adapters/application.js
     * import RealtimeDatabaseAdapter from 'emberfire/adapters/realtime-database';
     *
     * export default RealtimeDatabaseAdapter.extend({
     *   namespace: 'environments/production'
     * });
     * ```
     *
     */
    namespace: string | undefined;
    /**
     * Override the default database used by the RealtimeDatabaseAdapter
     *
     * ```js
     * // app/adapters/application.js
     * import RealtimeDatabaseAdapter from 'emberfire/adapters/realtime-database';
     *
     * export default RealtimeDatabaseAdapter.extend({
     *   databaseURL: 'https://DIFFERENT_DATABASE.firebaseio.com'
     * });
     * ```
     *
     */
    databaseURL?: string;
    findRecord<K extends keyof ModelRegistry>(_store: DS.Store, type: ModelRegistry[K], id: string): RSVP.Promise<database.DataSnapshot>;
    findAll<K extends keyof ModelRegistry>(store: DS.Store, type: ModelRegistry[K]): RSVP.Promise<database.DataSnapshot>;
    findHasMany<K extends keyof ModelRegistry>(store: DS.Store, snapshot: DS.Snapshot<K>, url: string, relationship: {
        [key: string]: any;
    }): RSVP.Promise<any>;
    findBelongsTo<K extends keyof ModelRegistry>(store: DS.Store, snapshot: DS.Snapshot<K>, url: any, relationship: any): RSVP.Promise<any>;
    query<K extends keyof ModelRegistry>(_store: DS.Store, type: ModelRegistry[K], options?: QueryOptions): RSVP.Promise<database.DataSnapshot>;
    queryRecord<K extends keyof ModelRegistry>(_store: DS.Store, type: ModelRegistry[K], options?: QueryOptions): RSVP.Promise<database.DataSnapshot>;
    shouldBackgroundReloadRecord(): boolean;
    updateRecord<K extends keyof ModelRegistry>(_: DS.Store, type: ModelRegistry[K], snapshot: DS.Snapshot<K>): RSVP.Promise<any>;
    createRecord<K extends keyof ModelRegistry>(_store: DS.Store, type: ModelRegistry[K], snapshot: DS.Snapshot<K>): RSVP.Promise<{
        ref: database.Reference;
        data: {};
    }>;
    deleteRecord<K extends keyof ModelRegistry>(_: DS.Store, type: ModelRegistry[K], snapshot: DS.Snapshot<K>): RSVP.Promise<any>;
}
export declare type ReferenceOrQuery = database.Reference | database.Query;
export declare type ReferenceOrQueryFn = (ref: ReferenceOrQuery) => ReferenceOrQuery;
export declare type QueryFn = (ref: database.Reference) => ReferenceOrQuery;
export declare enum OrderBy {
    Key = "_key",
    Value = "_value",
    Priority = "_priority"
}
export declare type BoundOp = string | number | boolean | null | [string | number | boolean | null, string];
export declare type QueryOptionsOnlyQuery = {
    query: (ref: database.Reference) => database.Reference | database.Query;
};
export declare type QueryOptions = ({
    filter?: {
        [key: string]: string | number | boolean | null;
    };
    endAt?: BoundOp;
    equalTo?: BoundOp;
    limitToFirst?: number;
    limitToLast?: number;
    orderBy?: string | OrderBy;
    startAt?: BoundOp;
} | QueryOptionsOnlyQuery) & {
    include?: string;
};
export declare const rootCollection: (adapter: RealtimeDatabaseAdapter, type: any) => RSVP.Promise<database.Reference>;
declare module 'ember-data' {
    interface AdapterRegistry {
        'realtime-database': RealtimeDatabaseAdapter;
    }
}
export {};
