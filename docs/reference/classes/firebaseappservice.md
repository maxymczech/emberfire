[EmberFire](../README.md) > [FirebaseAppService](../classes/firebaseappservice.md)

# Class: FirebaseAppService

## Hierarchy

 `object` & `Service`<`this`>

**↳ FirebaseAppService**

## Index

### Properties

* [firebase](firebaseappservice.md#firebase)
* [name](firebaseappservice.md#name)
* [options](firebaseappservice.md#options)

### Methods

* [analytics](firebaseappservice.md#analytics)
* [auth](firebaseappservice.md#auth)
* [database](firebaseappservice.md#database)
* [delete](firebaseappservice.md#delete)
* [firestore](firebaseappservice.md#firestore)
* [functions](firebaseappservice.md#functions)
* [init](firebaseappservice.md#init)
* [messaging](firebaseappservice.md#messaging)
* [performance](firebaseappservice.md#performance)
* [remoteConfig](firebaseappservice.md#remoteconfig)
* [storage](firebaseappservice.md#storage)

---

## Properties

<a id="firebase"></a>

###  firebase

**● firebase**: *`ComputedProperty`<[FirebaseService](firebaseservice.md), [FirebaseService](firebaseservice.md)>*

*Defined in services/firebase-app.ts:22*

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`undefined` \| `string`*

*Defined in services/firebase-app.ts:22*

___
<a id="options"></a>

### `<Optional>` options

**● options**: *`undefined` \| `object`*

*Defined in services/firebase-app.ts:24*

___

## Methods

<a id="analytics"></a>

###  analytics

▸ **analytics**(): `Promise`<`Analytics`>

*Defined in services/firebase-app.ts:29*

**Returns:** `Promise`<`Analytics`>

___
<a id="auth"></a>

###  auth

▸ **auth**(): `Promise`<`Auth`>

*Defined in services/firebase-app.ts:28*

**Returns:** `Promise`<`Auth`>

___
<a id="database"></a>

###  database

▸ **database**(url?: *`undefined` \| `string`*): `Promise`<`Database`>

*Defined in services/firebase-app.ts:35*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` url | `undefined` \| `string` |

**Returns:** `Promise`<`Database`>

___
<a id="delete"></a>

###  delete

▸ **delete**(): `Promise`<`any`>

*Defined in services/firebase-app.ts:26*

**Returns:** `Promise`<`any`>

___
<a id="firestore"></a>

###  firestore

▸ **firestore**(): `Promise`<`Firestore`>

*Defined in services/firebase-app.ts:30*

**Returns:** `Promise`<`Firestore`>

___
<a id="functions"></a>

###  functions

▸ **functions**(region?: *`undefined` \| `string`*): `Promise`<`Functions`>

*Defined in services/firebase-app.ts:36*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` region | `undefined` \| `string` |

**Returns:** `Promise`<`Functions`>

___
<a id="init"></a>

###  init

▸ **init**(...args: *`any`[]*): `void`

*Defined in services/firebase-app.ts:39*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `any`[] |

**Returns:** `void`

___
<a id="messaging"></a>

###  messaging

▸ **messaging**(): `Promise`<`Messaging`>

*Defined in services/firebase-app.ts:31*

**Returns:** `Promise`<`Messaging`>

___
<a id="performance"></a>

###  performance

▸ **performance**(): `Promise`<`Performance`>

*Defined in services/firebase-app.ts:32*

**Returns:** `Promise`<`Performance`>

___
<a id="remoteconfig"></a>

###  remoteConfig

▸ **remoteConfig**(): `Promise`<`RemoteConfig`>

*Defined in services/firebase-app.ts:33*

**Returns:** `Promise`<`RemoteConfig`>

___
<a id="storage"></a>

###  storage

▸ **storage**(url?: *`undefined` \| `string`*): `Promise`<`Storage`>

*Defined in services/firebase-app.ts:37*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` url | `undefined` \| `string` |

**Returns:** `Promise`<`Storage`>

___

