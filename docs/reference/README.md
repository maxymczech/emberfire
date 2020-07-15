
#  EmberFire

## Index

### Enumerations

* [OrderBy](enums/orderby.md)

### Classes

* [FirebaseAppService](classes/firebaseappservice.md)
* [FirebaseAuthenticator](classes/firebaseauthenticator.md)
* [FirebaseService](classes/firebaseservice.md)
* [FirebaseSessionStore](classes/firebasesessionstore.md)
* [FirebaseToriiAdapter](classes/firebasetoriiadapter.md)
* [FirebaseToriiProvider](classes/firebasetoriiprovider.md)
* [FirestoreAdapter](classes/firestoreadapter.md)
* [FirestoreSerializer](classes/firestoreserializer.md)
* [RealtimeDatabaseAdapter](classes/realtimedatabaseadapter.md)
* [RealtimeDatabaseSerializer](classes/realtimedatabaseserializer.md)
* [RealtimeListenerService](classes/realtimelistenerservice.md)

### Type aliases

* [BoundOp](#boundop)
* [CollectionReferenceOrQuery](#collectionreferenceorquery)
* [DocumentSnapshot](#documentsnapshot)
* [OrderOp](#orderop)
* [QueryFn](#queryfn)
* [QueryOptions](#queryoptions)
* [QueryOptionsOnlyQuery](#queryoptionsonlyquery)
* [QueryRecordFn](#queryrecordfn)
* [QueryRecordOptions](#queryrecordoptions)
* [ReferenceOrQuery](#referenceorquery)
* [ReferenceOrQueryFn](#referenceorqueryfn)
* [Snapshot](#snapshot)
* [WhereOp](#whereop)

### Functions

* [normalize](#normalize)
* [rootCollection](#rootcollection)
* [subscribe](#subscribe)
* [unsubscribe](#unsubscribe)

---

## Type aliases

<a id="boundop"></a>

###  BoundOp

**Ƭ BoundOp**: *`string` \| `number` \| `boolean` \| `null` \| [`string` \| `number` \| `boolean` \| `null`, `string`]*

*Defined in adapters/firestore.ts:212*
*Defined in adapters/realtime-database.ts:170*

___
<a id="collectionreferenceorquery"></a>

###  CollectionReferenceOrQuery

**Ƭ CollectionReferenceOrQuery**: *`CollectionReference` \| `Query`*

*Defined in adapters/firestore.ts:206*

___
<a id="documentsnapshot"></a>

###  DocumentSnapshot

**Ƭ DocumentSnapshot**: *`DocumentSnapshot` \| `QueryDocumentSnapshot`*

*Defined in serializers/firestore.ts:6*

___
<a id="orderop"></a>

###  OrderOp

**Ƭ OrderOp**: *`string` \| `object`*

*Defined in adapters/firestore.ts:211*

___
<a id="queryfn"></a>

###  QueryFn

**Ƭ QueryFn**: *`function`*

*Defined in adapters/firestore.ts:207*
*Defined in adapters/realtime-database.ts:165*

#### Type declaration
▸(ref: *`Reference`*): [ReferenceOrQuery](#referenceorquery)

**Parameters:**

| Name | Type |
| ------ | ------ |
| ref | `Reference` |

**Returns:** [ReferenceOrQuery](#referenceorquery)

___
<a id="queryoptions"></a>

###  QueryOptions

**Ƭ QueryOptions**: *`object` \| `object` & `object`*

*Defined in adapters/firestore.ts:219*
*Defined in adapters/realtime-database.ts:177*

___
<a id="queryoptionsonlyquery"></a>

###  QueryOptionsOnlyQuery

**Ƭ QueryOptionsOnlyQuery**: *`object`*

*Defined in adapters/firestore.ts:214*
*Defined in adapters/realtime-database.ts:172*

#### Type declaration

___
<a id="queryrecordfn"></a>

###  QueryRecordFn

**Ƭ QueryRecordFn**: *`function`*

*Defined in adapters/firestore.ts:208*

#### Type declaration
▸(ref: *`CollectionReference`*): `DocumentReference`

**Parameters:**

| Name | Type |
| ------ | ------ |
| ref | `CollectionReference` |

**Returns:** `DocumentReference`

___
<a id="queryrecordoptions"></a>

###  QueryRecordOptions

**Ƭ QueryRecordOptions**: *`object`*

*Defined in adapters/firestore.ts:230*

#### Type declaration

___
<a id="referenceorquery"></a>

###  ReferenceOrQuery

**Ƭ ReferenceOrQuery**: *`Reference` \| `Query`*

*Defined in adapters/realtime-database.ts:163*

___
<a id="referenceorqueryfn"></a>

###  ReferenceOrQueryFn

**Ƭ ReferenceOrQueryFn**: *`function`*

*Defined in adapters/realtime-database.ts:164*

#### Type declaration
▸(ref: *[ReferenceOrQuery](#referenceorquery)*): [ReferenceOrQuery](#referenceorquery)

**Parameters:**

| Name | Type |
| ------ | ------ |
| ref | [ReferenceOrQuery](#referenceorquery) |

**Returns:** [ReferenceOrQuery](#referenceorquery)

___
<a id="snapshot"></a>

###  Snapshot

**Ƭ Snapshot**: *`DocumentSnapshot` \| `QuerySnapshot`*

*Defined in serializers/firestore.ts:7*

___
<a id="whereop"></a>

###  WhereOp

**Ƭ WhereOp**: *[`string` \| `FieldPath`, `firestore.WhereFilterOp`, `any`]*

*Defined in adapters/firestore.ts:210*

___

## Functions

<a id="normalize"></a>

### `<Const>` normalize

▸ **normalize**(store: *`Store`*, modelClass: *`Model`*, snapshot: *[DocumentSnapshot](#documentsnapshot)*): `object`

▸ **normalize**(store: *`Store`*, modelClass: *`Model`*, snapshot: *`DataSnapshot`*): `object`

*Defined in serializers/firestore.ts:137*

**Parameters:**

| Name | Type |
| ------ | ------ |
| store | `Store` |
| modelClass | `Model` |
| snapshot | [DocumentSnapshot](#documentsnapshot) |

**Returns:** `object`

*Defined in serializers/realtime-database.ts:42*

**Parameters:**

| Name | Type |
| ------ | ------ |
| store | `Store` |
| modelClass | `Model` |
| snapshot | `DataSnapshot` |

**Returns:** `object`

___
<a id="rootcollection"></a>

### `<Const>` rootCollection

▸ **rootCollection**(adapter: *[FirestoreAdapter](classes/firestoreadapter.md)*, type: *`any`*): `Promise`<`CollectionReference`>

▸ **rootCollection**(adapter: *[RealtimeDatabaseAdapter](classes/realtimedatabaseadapter.md)*, type: *`any`*): `Promise`<`Reference`>

*Defined in adapters/firestore.ts:246*

**Parameters:**

| Name | Type |
| ------ | ------ |
| adapter | [FirestoreAdapter](classes/firestoreadapter.md) |
| type | `any` |

**Returns:** `Promise`<`CollectionReference`>

*Defined in adapters/realtime-database.ts:231*

**Parameters:**

| Name | Type |
| ------ | ------ |
| adapter | [RealtimeDatabaseAdapter](classes/realtimedatabaseadapter.md) |
| type | `any` |

**Returns:** `Promise`<`Reference`>

___
<a id="subscribe"></a>

### `<Const>` subscribe

▸ **subscribe**(route: *`Object`*, model: *`Model`*): `false` \| `void`

*Defined in services/realtime-listener.ts:19*

**Parameters:**

| Name | Type |
| ------ | ------ |
| route | `Object` |
| model | `Model` |

**Returns:** `false` \| `void`

___
<a id="unsubscribe"></a>

### `<Const>` unsubscribe

▸ **unsubscribe**(route: *`Object`*, model?: *`DS.Model`*): `false` \| `void`

*Defined in services/realtime-listener.ts:20*

**Parameters:**

| Name | Type |
| ------ | ------ |
| route | `Object` |
| `Optional` model | `DS.Model` |

**Returns:** `false` \| `void`

___

