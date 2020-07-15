[EmberFire](../README.md) > [FirestoreAdapter](../classes/firestoreadapter.md)

# Class: FirestoreAdapter

Persist your Ember Data models in Cloud Firestore

```js
// app/adapters/application.js
import FirestoreAdapter from 'emberfire/adapters/firestore';

export default FirestoreAdapter.extend({
  // configuration goes here
});
```

## Hierarchy

 `object` & `Adapter`<`this`>

**↳ FirestoreAdapter**

## Index

### Properties

* [enablePersistence](firestoreadapter.md#enablepersistence)
* [firebaseApp](firestoreadapter.md#firebaseapp)
* [namespace](firestoreadapter.md#namespace)
* [persistenceSettings](firestoreadapter.md#persistencesettings)
* [settings](firestoreadapter.md#settings)

### Methods

* [createRecord](firestoreadapter.md#createrecord)
* [deleteRecord](firestoreadapter.md#deleterecord)
* [findAll](firestoreadapter.md#findall)
* [findBelongsTo](firestoreadapter.md#findbelongsto)
* [findHasMany](firestoreadapter.md#findhasmany)
* [findRecord](firestoreadapter.md#findrecord)
* [query](firestoreadapter.md#query)
* [queryRecord](firestoreadapter.md#queryrecord)
* [shouldBackgroundReloadRecord](firestoreadapter.md#shouldbackgroundreloadrecord)
* [updateRecord](firestoreadapter.md#updaterecord)

---

## Properties

<a id="enablepersistence"></a>

###  enablePersistence

**● enablePersistence**: *`boolean`*

*Defined in adapters/firestore.ts:52*

Enable offline persistence with Cloud Firestore, it is not enabled by default

```js
// app/adapters/application.js
import FirestoreAdapter from 'emberfire/adapters/firestore';

export default FirestoreAdapter.extend({
  enablePersistence: true
});
```

___
<a id="firebaseapp"></a>

###  firebaseApp

**● firebaseApp**: *`ComputedProperty`<[FirebaseAppService](firebaseappservice.md), [FirebaseAppService](firebaseappservice.md)>*

*Defined in adapters/firestore.ts:118*

Override the default FirebaseApp Service used by the FirestoreAdapter: `service('firebase-app')`

```js
// app/adapters/application.js
import FirestoreAdapter from 'emberfire/adapters/firestore';
import { inject as service } from '@ember/service';

export default FirestoreAdapter.extend({
  firebaseApp: service('firebase-different-app')
});
```

___
<a id="namespace"></a>

###  namespace

**● namespace**: *`string` \| `undefined`*

*Defined in adapters/firestore.ts:68*

Namespace all of the default collections

```js
// app/adapters/application.js
import FirestoreAdapter from 'emberfire/adapters/firestore';

export default FirestoreAdapter.extend({
  namespace: 'environments/production'
});
```

___
<a id="persistencesettings"></a>

###  persistenceSettings

**● persistenceSettings**: *`PersistenceSettings`*

*Defined in adapters/firestore.ts:101*

Pass persistence settings to Cloud Firestore, enablePersistence has to be true for these to be used

```js
// app/adapters/application.js
import FirestoreAdapter from 'emberfire/adapters/firestore';

export default FirestoreAdapter.extend({
  enablePersistence: true,
  persistenceSettings: { synchronizeTabs: true }
});
```

___
<a id="settings"></a>

###  settings

**● settings**: *`Settings`*

*Defined in adapters/firestore.ts:84*

Override the default configuration of the Cloud Firestore adapter: `{ timestampsInSnapshots: true }`

```js
// app/adapters/application.js
import FirestoreAdapter from 'emberfire/adapters/firestore';

export default FirestoreAdapter.extend({
  settings: { timestampsInSnapshots: true }
});
```

___

## Methods

<a id="createrecord"></a>

###  createRecord

▸ **createRecord**<`K`>(_store: *`Store`*, type: *`ModelRegistry[K]`*, snapshot: *`Snapshot`<`K`>*): `Promise`<`object`>

*Defined in adapters/firestore.ts:186*

**Type parameters:**

#### K :  `keyof ModelRegistry`
**Parameters:**

| Name | Type |
| ------ | ------ |
| _store | `Store` |
| type | `ModelRegistry[K]` |
| snapshot | `Snapshot`<`K`> |

**Returns:** `Promise`<`object`>

___
<a id="deleterecord"></a>

###  deleteRecord

▸ **deleteRecord**<`K`>(_store: *`Store`*, type: *`ModelRegistry[K]`*, snapshot: *`Snapshot`<`K`>*): `Promise`<`void`>

*Defined in adapters/firestore.ts:200*

**Type parameters:**

#### K :  `keyof ModelRegistry`
**Parameters:**

| Name | Type |
| ------ | ------ |
| _store | `Store` |
| type | `ModelRegistry[K]` |
| snapshot | `Snapshot`<`K`> |

**Returns:** `Promise`<`void`>

___
<a id="findall"></a>

###  findAll

▸ **findAll**<`K`>(store: *`Store`*, type: *`ModelRegistry[K]`*): `Promise`<`QuerySnapshot`>

*Defined in adapters/firestore.ts:126*

**Type parameters:**

#### K :  `keyof ModelRegistry`
**Parameters:**

| Name | Type |
| ------ | ------ |
| store | `Store` |
| type | `ModelRegistry[K]` |

**Returns:** `Promise`<`QuerySnapshot`>

___
<a id="findbelongsto"></a>

###  findBelongsTo

▸ **findBelongsTo**<`K`>(store: *`Store`*, snapshot: *`Snapshot`<`K`>*, url: *`string`*, relationship: *`object`*): `Promise`<`any`>

*Defined in adapters/firestore.ts:141*

**Type parameters:**

#### K :  `keyof ModelRegistry`
**Parameters:**

| Name | Type |
| ------ | ------ |
| store | `Store` |
| snapshot | `Snapshot`<`K`> |
| url | `string` |
| relationship | `object` |

**Returns:** `Promise`<`any`>

___
<a id="findhasmany"></a>

###  findHasMany

▸ **findHasMany**<`K`>(store: *`Store`*, snapshot: *`Snapshot`<`K`>*, url: *`string`*, relationship: *`object`*): `Promise`<`any`>

*Defined in adapters/firestore.ts:130*

**Type parameters:**

#### K :  `keyof ModelRegistry`
**Parameters:**

| Name | Type |
| ------ | ------ |
| store | `Store` |
| snapshot | `Snapshot`<`K`> |
| url | `string` |
| relationship | `object` |

**Returns:** `Promise`<`any`>

___
<a id="findrecord"></a>

###  findRecord

▸ **findRecord**<`K`>(store: *`Store`*, type: *`ModelRegistry[K]`*, id: *`string`*, snapshot: *`any`*): `Promise`<`DocumentSnapshot`>

*Defined in adapters/firestore.ts:120*

**Type parameters:**

#### K :  `keyof ModelRegistry`
**Parameters:**

| Name | Type |
| ------ | ------ |
| store | `Store` |
| type | `ModelRegistry[K]` |
| id | `string` |
| snapshot | `any` |

**Returns:** `Promise`<`DocumentSnapshot`>

___
<a id="query"></a>

###  query

▸ **query**<`K`>(store: *`Store`*, type: *`ModelRegistry[K]`*, options?: *[QueryOptions](../#queryoptions)*, _recordArray?: *`DS.AdapterPopulatedRecordArray`<`any`>*): `Promise`<`QuerySnapshot`>

*Defined in adapters/firestore.ts:150*

**Type parameters:**

#### K :  `keyof ModelRegistry`
**Parameters:**

| Name | Type |
| ------ | ------ |
| store | `Store` |
| type | `ModelRegistry[K]` |
| `Optional` options | [QueryOptions](../#queryoptions) |
| `Optional` _recordArray | `DS.AdapterPopulatedRecordArray`<`any`> |

**Returns:** `Promise`<`QuerySnapshot`>

___
<a id="queryrecord"></a>

###  queryRecord

▸ **queryRecord**<`K`>(store: *`Store`*, type: *`ModelRegistry[K]`*, options?: *[QueryOptions](../#queryoptions) \| [QueryRecordOptions](../#queryrecordoptions)*): `Promise`<`QueryDocumentSnapshot`>

*Defined in adapters/firestore.ts:156*

**Type parameters:**

#### K :  `keyof ModelRegistry`
**Parameters:**

| Name | Type |
| ------ | ------ |
| store | `Store` |
| type | `ModelRegistry[K]` |
| `Optional` options | [QueryOptions](../#queryoptions) \| [QueryRecordOptions](../#queryrecordoptions) |

**Returns:** `Promise`<`QueryDocumentSnapshot`>

___
<a id="shouldbackgroundreloadrecord"></a>

###  shouldBackgroundReloadRecord

▸ **shouldBackgroundReloadRecord**(): `boolean`

*Defined in adapters/firestore.ts:175*

**Returns:** `boolean`

___
<a id="updaterecord"></a>

###  updateRecord

▸ **updateRecord**<`K`>(_store: *`Store`*, type: *`ModelRegistry[K]`*, snapshot: *`Snapshot`<`K`>*): `Promise`<`void`>

*Defined in adapters/firestore.ts:179*

**Type parameters:**

#### K :  `keyof ModelRegistry`
**Parameters:**

| Name | Type |
| ------ | ------ |
| _store | `Store` |
| type | `ModelRegistry[K]` |
| snapshot | `Snapshot`<`K`> |

**Returns:** `Promise`<`void`>

___

