import DS from 'ember-data';
import { firestore } from 'firebase/app';
export declare type DocumentSnapshot = firestore.DocumentSnapshot | firestore.QueryDocumentSnapshot;
export declare type Snapshot = firestore.DocumentSnapshot | firestore.QuerySnapshot;
export default class FirestoreSerializer extends DS.JSONSerializer {
    applyTransforms: (a: DS.Model, b: any) => void;
    normalizeSingleResponse(store: DS.Store, primaryModelClass: DS.Model, payload: firestore.DocumentSnapshot, _id: string | number, _requestType: string): {
        meta: firestore.SnapshotMetadata | {
            query: firestore.Query;
            hasPendingWrites: boolean;
            fromCache: boolean;
            isEqual(other: firestore.SnapshotMetadata): boolean;
        };
        data: {
            id: string;
            type: any;
            attributes: {
                _ref: firestore.DocumentReference;
            };
            relationships: {
                [field: string]: any;
            };
        };
        included: any[];
    };
    normalizeArrayResponse(store: DS.Store, primaryModelClass: DS.Model, payload: firestore.QuerySnapshot, _id: string | number, _requestType: string): {
        data: {
            id: string;
            type: any;
            attributes: {
                _ref: firestore.DocumentReference;
            };
            relationships: {
                [field: string]: any;
            };
        }[];
        included: any[];
        meta: firestore.SnapshotMetadata | {
            query: firestore.Query;
            hasPendingWrites: boolean;
            fromCache: boolean;
            isEqual(other: firestore.SnapshotMetadata): boolean;
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
        'firestore': FirestoreSerializer;
    }
}
export declare const normalize: (store: DS.Store, modelClass: DS.Model, snapshot: DocumentSnapshot) => {
    data: {
        id: string;
        type: any;
        attributes: {
            _ref: firestore.DocumentReference;
        };
        relationships: {
            [field: string]: any;
        };
    };
    included: any[];
};
