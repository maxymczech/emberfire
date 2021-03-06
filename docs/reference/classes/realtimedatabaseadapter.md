[EmberFire](../README.md) > [RealtimeDatabaseAdapter](../classes/realtimedatabaseadapter.md)

# Class: RealtimeDatabaseAdapter

Persist your Ember Data models in the Firebase Realtime Database

```js
// app/adapters/application.js
import RealtimeDatabaseAdapter from 'emberfire/adapters/realtime-database';

export default RealtimeDatabaseAdapter.extend({
  // configuration goes here
});
```

## Hierarchy

 `object` & `Adapter`<`this`>

**↳ RealtimeDatabaseAdapter**

## Index

### Properties

* [databaseURL](realtimedatabaseadapter.md#databaseurl)
* [firebaseApp](realtimedatabaseadapter.md#firebaseapp)
* [namespace](realtimedatabaseadapter.md#namespace)

### Methods

* [createRecord](realtimedatabaseadapter.md#createrecord)
* [deleteRecord](realtimedatabaseadapter.md#deleterecord)
* [findAll](realtimedatabaseadapter.md#findall)
* [findBelongsTo](realtimedatabaseadapter.md#findbelongsto)
* [findHasMany](realtimedatabaseadapter.md#findhasmany)
* [findRecord](realtimedatabaseadapter.md#findrecord)
* [query](realtimedatabaseadapter.md#query)
* [queryRecord](realtimedatabaseadapter.md#queryrecord)
* [shouldBackgroundReloadRecord](realtimedatabaseadapter.md#shouldbackgroundreloadrecord)
* [updateRecord](realtimedatabaseadapter.md#updaterecord)

---

## Properties

<a id="databaseurl"></a>

### `<Optional>` databaseURL

**● databaseURL**: *`undefined` \| `string`*

*Defined in adapters/realtime-database.ts:83*

Override the default database used by the RealtimeDatabaseAdapter

```js
// app/adapters/application.js
import RealtimeDatabaseAdapter from 'emberfire/adapters/realtime-database';

export default RealtimeDatabaseAdapter.extend({
  databaseURL: 'https://DIFFERENT_DATABASE.firebaseio.com'
});
```

___
<a id="firebaseapp"></a>

###  firebaseApp

**● firebaseApp**: *`ComputedProperty`<[FirebaseAppService](firebaseappservice.md), [FirebaseAppService](firebaseappservice.md)>*

*Defined in adapters/realtime-database.ts:50*

Override the default FirebaseApp Service used by the RealtimeDatabaseAdapter: `service('firebase-app')`

```js
// app/adapters/application.js
import RealtimeDatabaseAdapter from 'emberfire/adapters/realtime-database';
import { inject as service } from '@ember/service';

export default RealtimeDatabaseAdapter.extend({
  firebaseApp: service('firebase-different-app')
});
```

___
<a id="namespace"></a>

###  namespace

**● namespace**: *`string` \| `undefined`*

*Defined in adapters/realtime-database.ts:67*

Namespace all of the paths

```js
// app/adapters/application.js
import RealtimeDatabaseAdapter from 'emberfire/adapters/realtime-database';

export default RealtimeDatabaseAdapter.extend({
  namespace: 'environments/production'
});
```

___

## Methods

<a id="createrecord"></a>

###  createRecord

▸ **createRecord**<`K`>(_store: *`Store`*, type: *`ModelRegistry[K]`*, snapshot: *`Snapshot`<`K`>*): `Promise`<`object`>

*Defined in adapters/realtime-database.ts:144*

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

▸ **deleteRecord**<`K`>(_: *`Store`*, type: *`ModelRegistry[K]`*, snapshot: *`Snapshot`<`K`>*): `Promise`<`any`>

*Defined in adapters/realtime-database.ts:157*

**Type parameters:**

#### K :  `keyof ModelRegistry`
**Parameters:**

| Name | Type |
| ------ | ------ |
| _ | `Store` |
| type | `ModelRegistry[K]` |
| snapshot | `Snapshot`<`K`> |

**Returns:** `Promise`<`any`>

___
<a id="findall"></a>

###  findAll

▸ **findAll**<`K`>(store: *`Store`*, type: *`ModelRegistry[K]`*): `Promise`<`DataSnapshot`>

*Defined in adapters/realtime-database.ts:89*

**Type parameters:**

#### K :  `keyof ModelRegistry`
**Parameters:**

| Name | Type |
| ------ | ------ |
| store | `Store` |
| type | `ModelRegistry[K]` |

**Returns:** `Promise`<`DataSnapshot`>

___
<a id="findbelongsto"></a>

###  findBelongsTo

▸ **findBelongsTo**<`K`>(store: *`Store`*, snapshot: *`Snapshot`<`K`>*, url: *`any`*, relationship: *`any`*): `Promise`<`any`>

*Defined in adapters/realtime-database.ts:107*

**Type parameters:**

#### K :  `keyof ModelRegistry`
**Parameters:**

| Name | Type |
| ------ | ------ |
| store | `Store` |
| snapshot | `Snapshot`<`K`> |
| url | `any` |
| relationship | `any` |

**Returns:** `Promise`<`any`>

___
<a id="findhasmany"></a>

###  findHasMany

▸ **findHasMany**<`K`>(store: *`Store`*, snapshot: *`Snapshot`<`K`>*, url: *`string`*, relationship: *`object`*): `Promise`<`any`>

*Defined in adapters/realtime-database.ts:93*

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

▸ **findRecord**<`K`>(_store: *`Store`*, type: *`ModelRegistry[K]`*, id: *`string`*): `Promise`<`DataSnapshot`>

*Defined in adapters/realtime-database.ts:85*

**Type parameters:**

#### K :  `keyof ModelRegistry`
**Parameters:**

| Name | Type |
| ------ | ------ |
| _store | `Store` |
| type | `ModelRegistry[K]` |
| id | `string` |

**Returns:** `Promise`<`DataSnapshot`>

___
<a id="query"></a>

###  query

▸ **query**<`K`>(_store: *`Store`*, type: *`ModelRegistry[K]`*, options?: *[QueryOptions](../#queryoptions)*): `Promise`<`DataSnapshot`>

*Defined in adapters/realtime-database.ts:116*

**Type parameters:**

#### K :  `keyof ModelRegistry`
**Parameters:**

| Name | Type |
| ------ | ------ |
| _store | `Store` |
| type | `ModelRegistry[K]` |
| `Optional` options | [QueryOptions](../#queryoptions) |

**Returns:** `Promise`<`DataSnapshot`>

___
<a id="queryrecord"></a>

###  queryRecord

▸ **queryRecord**<`K`>(_store: *`Store`*, type: *`ModelRegistry[K]`*, options?: *[QueryOptions](../#queryoptions)*): `Promise`<`DataSnapshot`>

*Defined in adapters/realtime-database.ts:120*

**Type parameters:**

#### K :  `keyof ModelRegistry`
**Parameters:**

| Name | Type |
| ------ | ------ |
| _store | `Store` |
| type | `ModelRegistry[K]` |
| `Optional` options | [QueryOptions](../#queryoptions) |

**Returns:** `Promise`<`DataSnapshot`>

___
<a id="shouldbackgroundreloadrecord"></a>

###  shouldBackgroundReloadRecord

▸ **shouldBackgroundReloadRecord**(): `boolean`

*Defined in adapters/realtime-database.ts:133*

**Returns:** `boolean`

___
<a id="updaterecord"></a>

###  updateRecord

▸ **updateRecord**<`K`>(_: *`Store`*, type: *`ModelRegistry[K]`*, snapshot: *`Snapshot`<`K`>*): `Promise`<`any`>

*Defined in adapters/realtime-database.ts:137*

**Type parameters:**

#### K :  `keyof ModelRegistry`
**Parameters:**

| Name | Type |
| ------ | ------ |
| _ | `Store` |
| type | `ModelRegistry[K]` |
| snapshot | `Snapshot`<`K`> |

**Returns:** `Promise`<`any`>

___

