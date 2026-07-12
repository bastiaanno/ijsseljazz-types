import type { AppData } from "./app.js";
import type { Artist } from "./content.js";
import type { Facility } from "./map.js";
import type { FestivalData } from "./content.js";
import type { HomeNavItem } from "./navigation.js";
import type { HomeSection } from "./navigation.js";
import type { Location } from "./map.js";
import type { LocationType } from "./map.js";
import type { MapAsset } from "./map.js";
import type { NavigationData } from "./navigation.js";
import type { Notification } from "./notifications.js";
import type { Token } from "./tokens.js";
/**
 * Root Schema mapping your full Firestore database structure.
 */
export interface FirestoreSchema {
    app: Record<string, AppData>;
    artists: Record<string, Artist>;
    facilities: Record<string, Facility>;
    festival: Record<string, FestivalData>;
    homeNavItems: Record<string, HomeNavItem>;
    homeSections: Record<string, HomeSection>;
    locationTypes: Record<string, LocationType>;
    locations: Record<string, Location>;
    mapAssets: Record<string, MapAsset>;
    navigation: Record<string, NavigationData>;
    notifications: Record<string, Notification>;
    tokens: Record<string, Token>;
}
//# sourceMappingURL=schema.d.ts.map