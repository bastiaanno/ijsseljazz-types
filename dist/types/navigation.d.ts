import type { BadgeTone } from "./ui.js";
export interface HomeNavItemBadge {
    count: number;
    tone?: BadgeTone;
}
export interface HomeNavItemNewVersion {
    from: string;
    target?: {
        screen?: string;
        name?: string;
    };
}
export interface HomeNavItem {
    id?: string;
    label?: string;
    title?: string;
    route?: string;
    target: string;
    iconName?: string;
    order: number;
    visible: boolean;
    badge?: HomeNavItemBadge;
    newVersion?: HomeNavItemNewVersion;
}
export interface HomeSection {
    id?: string;
    title: string;
    visible: boolean;
    order: number;
    type: "artists" | "news" | "banners" | string;
}
export interface HomeNavigation {
    backgroundImageName?: string;
    footer?: string;
    header?: string;
    logoVisible?: boolean;
    titleVisible?: boolean;
    welcomeText?: string;
}
export interface NavigationData {
    home?: HomeNavigation;
}
//# sourceMappingURL=navigation.d.ts.map