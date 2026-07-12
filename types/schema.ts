import type { AppData } from "./app";
import type { Artist } from "./content";
import type { Facility } from "./map";
import type { FestivalData } from "./content";
import type { HomeNavItem } from "./navigation";
import type { HomeSection } from "./navigation";
import type { Location } from "./map";
import type { LocationType } from "./map";
import type { MapAsset } from "./map";
import type { NavigationData } from "./navigation";
import type { Notification } from "./notifications";
import type { Token } from "./tokens";

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
