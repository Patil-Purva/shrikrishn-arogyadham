"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesComponent = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
let CoursesComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-courses',
            standalone: true,
            imports: [common_1.CommonModule],
            templateUrl: './courses.component.html',
            styleUrls: ['./courses.component.css']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var CoursesComponent = _classThis = class {
        constructor(sanitizer) {
            this.sanitizer = sanitizer;
            this.courses = [];
            this.courses = [
                {
                    id: '1',
                    title: 'Padartha Vigyan evam Ayurveda Itihas',
                    description: 'Fundamentals and history of Ayurveda.',
                    price: 799,
                    previewVideoUrl: this.safeUrl('https://www.youtube.com/embed/DFKxy0svG8g'),
                    videos: [
                        { title: 'Introduction to Ayurveda', url: this.safeUrl('https://www.youtube.com/embed/L1k2KzvUZZM') },
                        { title: 'Philosophy of Ayurveda', url: this.safeUrl('https://www.youtube.com/embed/aEo2nZ1yb7o') }
                    ],
                    purchased: false
                },
                {
                    id: '2',
                    title: 'Kriya Sharir',
                    description: 'Ayurvedic physiology and body functions.',
                    price: 899,
                    previewVideoUrl: this.safeUrl('https://www.youtube.com/embed/ZBWy3pQh3Ew'),
                    videos: [
                        { title: 'Doshas and their Role', url: this.safeUrl('https://www.youtube.com/embed/0HYiZZpsJmI') },
                        { title: 'Dhatus and Malas', url: this.safeUrl('https://www.youtube.com/embed/BT8OtDJ3yuk') }
                    ],
                    purchased: false
                },
                {
                    id: '3',
                    title: 'Dravyaguna Vigyan',
                    description: 'Study of Ayurvedic herbs and their properties.',
                    price: 999,
                    previewVideoUrl: this.safeUrl('https://www.youtube.com/embed/Jr0R_3vF3Kc'),
                    videos: [
                        { title: 'Introduction to Medicinal Plants', url: this.safeUrl('https://www.youtube.com/embed/bb7Rya-1Rkk') },
                        { title: 'Herbal Formulations', url: this.safeUrl('https://www.youtube.com/embed/cY3LCQ4HkPg') }
                    ],
                    purchased: false
                }
                // You can add more subjects here similarly
            ];
        }
        safeUrl(url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
        buyCourse(courseId) {
            const course = this.courses.find(c => c.id === courseId);
            if (course) {
                course.purchased = true;
                alert(`✅ You purchased ${course.title}`);
            }
        }
    };
    __setFunctionName(_classThis, "CoursesComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CoursesComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CoursesComponent = _classThis;
})();
exports.CoursesComponent = CoursesComponent;
