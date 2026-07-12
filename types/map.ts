import { Timestamp, GeoPoint } from "firebase/firestore";

export interface LocationTypeIcon {
  sf_symbol?: string;
  color?: string;
  assetName?: string;
}

export interface LocationType {
  id?: string;
  name: string; // e.g., "Stage", "Entrance", "Parking"
  type?: string;
  iconUrl?: string;
  icon?: LocationTypeIcon;
  showMore?: boolean;
  listTitle?: string;
}

export interface Location {
  id: string;
  name: string;
  typeId: string; // References a document ID in 'locationTypes'
  coordinates: GeoPoint;
  description?: string;
  visible?: boolean;
  target?: { id: string };
  icon?: LocationTypeIcon;
  showMore?: boolean;
  type?: string;
  tag?: string;
  stageOrder?: number;
}

export interface Facility {
  name: string;
  type:
    | "toilet"
    | "bar"
    | "food"
    | "first_aid"
    | "info"
    | "merchandise"
    | string;
  coordinates: GeoPoint;
  accessible: boolean;
}

export interface MapAsset {
  assetUrl: string;
  fileName: string;
  uploadedAt: Timestamp;
  isActive: boolean;
}
