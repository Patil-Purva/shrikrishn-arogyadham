"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app/app.component");
const app_1 = require("@angular/fire/app");
const auth_1 = require("@angular/fire/auth");
const firestore_1 = require("@angular/fire/firestore");
const router_1 = require("@angular/router");
const app_routes_1 = require("./app/app.routes");
const environment_1 = require("./environments/environment");
(0, platform_browser_1.bootstrapApplication)(app_component_1.AppComponent, {
    providers: [
        (0, router_1.provideRouter)(app_routes_1.routes),
        (0, app_1.provideFirebaseApp)(() => (0, app_1.initializeApp)(environment_1.environment.firebase)),
        (0, auth_1.provideAuth)(() => (0, auth_1.getAuth)()),
        (0, firestore_1.provideFirestore)(() => (0, firestore_1.getFirestore)()),
    ],
});
