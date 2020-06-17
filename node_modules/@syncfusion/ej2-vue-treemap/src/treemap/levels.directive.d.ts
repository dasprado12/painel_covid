import Vue from 'vue';
export declare class LevelsDirective extends Vue {
    render(): void;
}
export declare const LevelsPlugin: {
    name: string;
    install(Vue: any): void;
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
export declare class LevelDirective extends Vue {
    render(): void;
}
export declare const LevelPlugin: {
    name: string;
    install(Vue: any): void;
};
