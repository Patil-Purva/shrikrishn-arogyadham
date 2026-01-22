"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const auth_guard_1 = require("./guards/auth.guard"); // Correct import
exports.routes = [
    {
        path: '',
        loadComponent: () => Promise.resolve().then(() => __importStar(require('./pages/home/home.component'))).then(m => m.HomeComponent),
    },
    {
        path: 'books',
        loadComponent: () => Promise.resolve().then(() => __importStar(require('./pages/books/books.component'))).then(m => m.BooksComponent),
    },
    {
        path: 'youtube',
        loadComponent: () => Promise.resolve().then(() => __importStar(require('./pages/youtube/youtube.component'))).then(m => m.YoutubeComponent),
    },
    {
        path: 'signup',
        loadComponent: () => Promise.resolve().then(() => __importStar(require('./pages/auth/signup/signup.component'))).then(m => m.SignupComponent),
    },
    {
        path: 'login',
        loadComponent: () => Promise.resolve().then(() => __importStar(require('./pages/auth/login/login.component'))).then(m => m.LoginComponent),
    },
    {
        path: 'courses',
        canActivate: [auth_guard_1.authGuard], // Guard applied here
        loadComponent: () => Promise.resolve().then(() => __importStar(require('./pages/courses/courses.component'))).then(m => m.CoursesComponent),
    },
    // Service routes
    {
        path: 'panchakarma',
        loadComponent: () => Promise.resolve().then(() => __importStar(require('./pages/panchakarma/panchakarma.component'))).then(m => m.PanchakarmaComponent),
    },
    {
        path: 'herbal-medicine',
        loadComponent: () => Promise.resolve().then(() => __importStar(require('./pages/herbal-medicine/herbal-medicine.component'))).then(m => m.HerbalMedicineComponent),
    },
    {
        path: 'diet-consultation',
        loadComponent: () => Promise.resolve().then(() => __importStar(require('./pages/diet-consultation/diet-consultation.component'))).then(m => m.DietConsultationComponent),
    },
    {
        path: 'ayurvedic-massage',
        loadComponent: () => Promise.resolve().then(() => __importStar(require('./pages/ayurvedic-massage/ayurvedic-massage.component'))).then(m => m.AyurvedicMassageComponent),
    },
    {
        path: 'book-appointment',
        loadComponent: () => Promise.resolve().then(() => __importStar(require('./pages/book-appointment/book-appointment.component'))).then(m => m.BookAppointmentComponent),
    },
];
