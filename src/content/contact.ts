export const PHONE_DISPLAY = "061 528 4908";
export const PHONE_HREF = "tel:+27615284908";

/**
 * Live on the Play Store; the App Store listing is still propagating, so
 * there's no equivalent constant for it yet — iOS download links stay "#"
 * with a "(coming soon)" label until Apple's review clears.
 */
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.flagrr.loyalty&hl=en";

export interface SocialLink {
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/flagrrgolf/?hl=en" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61593132815437" },
];
