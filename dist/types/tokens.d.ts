import { Timestamp } from "firebase/firestore";
export interface Token {
    token: string;
    createdAt: Timestamp;
    platform: "web" | "android" | "ios";
    userId?: string | null;
}
//# sourceMappingURL=tokens.d.ts.map