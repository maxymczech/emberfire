import Mixin from '@ember/object/mixin';
import { performance } from 'firebase';
import { Promise } from 'rsvp';
declare const _default: Mixin<{
    firebaseApp: import("@ember/object/computed").default<import("../services/firebase-app").default, import("../services/firebase-app").default>;
    store: any;
    router: import("@ember/object/computed").default<import("@ember/routing/router-service").default, import("@ember/routing/router-service").default>;
    trace: Promise<performance.Trace>;
    init(): void;
    beforeModel(): void;
    afterModel(): void;
}, import("@ember/object").default>;
export default _default;
