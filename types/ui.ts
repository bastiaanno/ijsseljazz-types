export type BadgeToneName =
  | "neutral"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

export type BadgeTone =
  | BadgeToneName
  | {
      bg: string; // background color
      fg: string; // text/icon color
      border?: string; // optional border color (for outline/subtle)
    };
