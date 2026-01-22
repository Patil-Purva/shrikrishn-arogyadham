"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseProviders = void 0;
// firebase.providers.ts
const app_1 = require("@angular/fire/app");
const auth_1 = require("@angular/fire/auth");
const environment_1 = require("../environments/environment");
const firestore_1 = require("@angular/fire/firestore");
exports.firebaseProviders = [
    (0, app_1.provideFirebaseApp)(() => (0, app_1.initializeApp)(environment_1.environment.firebase)),
    (0, auth_1.provideAuth)(() => (0, auth_1.getAuth)()),
    (0, firestore_1.provideFirestore)(() => (0, firestore_1.getFirestore)()),
];
