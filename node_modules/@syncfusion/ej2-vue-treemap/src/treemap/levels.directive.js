var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { EJComponentDecorator } from '@syncfusion/ej2-vue-base';
var LevelsDirective = /** @class */ (function (_super) {
    __extends(LevelsDirective, _super);
    function LevelsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelsDirective.prototype.render = function () {
        return;
    };
    LevelsDirective = __decorate([
        EJComponentDecorator({})
    ], LevelsDirective);
    return LevelsDirective;
}(Vue));
export { LevelsDirective };
export var LevelsPlugin = {
    name: 'e-levels',
    install: function (Vue) {
        Vue.component(LevelsPlugin.name, LevelsDirective);
    }
};
/**
 * `LevelsDirective` directive represent a levels of the react treemap.
 * ```vue
 * <ejs-treemap>
 * <e-levels>
 * <e-level></e-level>
 * </e-levels>
 * </ejs-treemap>
 * ```
 */
var LevelDirective = /** @class */ (function (_super) {
    __extends(LevelDirective, _super);
    function LevelDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelDirective.prototype.render = function () {
        return;
    };
    LevelDirective = __decorate([
        EJComponentDecorator({})
    ], LevelDirective);
    return LevelDirective;
}(Vue));
export { LevelDirective };
export var LevelPlugin = {
    name: 'e-level',
    install: function (Vue) {
        Vue.component(LevelPlugin.name, LevelDirective);
    }
};
