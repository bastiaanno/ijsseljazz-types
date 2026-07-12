import type { Timestamp } from "firebase/firestore";
export interface NotificationCondition {
    hideAtVersion?: {
        android?: string;
        ios?: string;
    };
}
export interface Notification {
    id?: string;
    title: string;
    body?: string;
    message?: string;
    sentAt?: Timestamp;
    posted_at?: Timestamp | string;
    topic?: string;
    image?: string;
    condition?: NotificationCondition;
}
//# sourceMappingURL=notifications.d.ts.map