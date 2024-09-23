import { defineQuery } from "next-sanity";

export const layoutQuery = defineQuery(`*[_type in ["settings", "cookie", "privacy", "accommodation", "about"]]`);

export const accommodationQuery = defineQuery(`*[_type in ["accommodation"]][0]`);
export const privacyQuery = defineQuery(`*[_type in ["privacy"]][0]`);
export const cookieQuery = defineQuery(`*[_type in ["cookie"]][0]`);
export const aboutQuery = defineQuery(`*[_type in ["about"]][0]`);
