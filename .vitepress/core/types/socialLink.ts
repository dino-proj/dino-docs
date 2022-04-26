export interface SocialLink {
  icon: SocialLinkIcon;
  link: string;
}

export type SocialLinkIcon =
  | "discord"
  | "facebook"
  | "github"
  | "gitee"
  | "linkedin"
  | "slack"
  | "twitter"
  | "languages";

export type SocialLinkSize = "small" | "medium";
