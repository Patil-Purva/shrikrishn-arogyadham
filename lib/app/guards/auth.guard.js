"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authGuard = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const core_2 = require("@angular/core");
const auth_1 = require("@angular/fire/auth");
const authGuard = () => {
    const platformId = (0, core_1.inject)(core_2.PLATFORM_ID);
    const router = (0, core_1.inject)(router_1.Router);
    if (!(0, common_1.isPlatformBrowser)(platformId)) {
        // If on the server, deny access to avoid SSR issues
        return false;
    }
    const auth = (0, core_1.inject)(auth_1.Auth);
    return new Promise(resolve => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            unsubscribe();
            if (user) {
                resolve(true);
            }
            else {
                router.navigate(['/login']);
                resolve(false);
            }
        });
    });
};
exports.authGuard = authGuard;
