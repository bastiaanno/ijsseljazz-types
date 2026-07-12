export interface AppStore {
    android: {
        uri: string;
    };
    ios: {
        uri: string;
    };
}
export interface AppVersionMinimum {
    android: string;
    ios: string;
}
export interface AppVersion {
    minimum: AppVersionMinimum;
}
export interface AppData {
    store?: AppStore;
    version?: AppVersion;
}
//# sourceMappingURL=app.d.ts.map