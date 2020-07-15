import DS from 'ember-data';
import { database } from 'firebase/app';
export default class RealtimeDatabaseSerializer extends DS.JSONSerializer {
    applyTransforms: (a: DS.Model, b: any) => void;
    normalizeSingleResponse(store: DS.Store, primaryModelClass: DS.Model, payload: database.DataSnapshot, _id: string | number, _requestType: string): {
        data: {
            id: string | null;
            type: any;
            attributes: any;
            relationships: {
                [field: string]: any;
            };
        };
        included: any[];
    };
    normalizeArrayResponse(store: DS.Store, primaryModelClass: DS.Model, payload: database.DataSnapshot, _id: string | number, _requestType: string): {
        data: any[];
        included: any[];
        meta: {
            query: any;
        };
    };
    normalizeCreateRecordResponse(_store: DS.Store, _primaryModelClass: DS.Model, payload: any, id: string | number, _requestType: string): {
        data: {
            id: any;
            attributes: any;
        };
    };
}
declare module 'ember-data' {
    interface SerializerRegistry {
        'realtime-database': RealtimeDatabaseSerializer;
    }
}
export declare const normalize: (store: DS.Store, modelClass: DS.Model, snapshot: database.DataSnapshot) => {
    data: {
        id: string | null;
        type: any;
        attributes: any;
        relationships: {
            [field: string]: any;
        };
    };
    included: any[];
};
