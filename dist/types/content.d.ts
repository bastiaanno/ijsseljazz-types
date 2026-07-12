export interface Artist {
    id: string;
    name: string;
    genre?: string;
    description?: string;
    imageUrl?: string;
    imageName?: string;
    stage?: string;
    timeStart?: string;
    timeEnd?: string;
    websiteUrl?: string;
    visible: boolean;
    location?: {
        id?: string;
        tag?: string;
    };
    markdown: string;
}
export interface FestivalTiming {
    definitive: boolean;
    startTime: string;
    endTime: string;
    intervalSize: number;
}
export interface FestivalInformation {
    markdown: string;
}
export interface FestivalDonateButton {
    text: string;
    url: string;
}
export interface FestivalDonate {
    button: FestivalDonateButton;
    disclaimer: string;
    text: string;
    visible: boolean;
}
export interface FestivalAbout {
    visible: boolean;
}
export interface FestivalLeaderVideo {
    name: string;
}
export interface FestivalData {
    about?: FestivalAbout;
    donate?: FestivalDonate;
    editionYear?: number;
    festivalTiming?: FestivalTiming;
    information?: FestivalInformation;
    leaderVideo?: FestivalLeaderVideo;
}
//# sourceMappingURL=content.d.ts.map