/**
 * 
 * When you decorate a property with @Property() decorator, the change of the property will cause changeDetection.
 * It callse ɵmarkDirty  under the hood.
 * If you dont want to run change detection on change of sertain property then dont decorate it with @Property() decorator.
 */
export declare function Property<T>(): (target: any, key: any) => void;


