import { defineQuery } from "next-sanity";

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`); // LEGACY

// export const settingsQuery = defineQuery(`*[_type == "settings" || _type == "cookie" || _type == "privacy"]`);

export const layoutQuery = defineQuery(`*[_type in ["settings", "cookie", "privacy", "accommodation", "about"]]`);
export const accommodationQuery = defineQuery(`*[_type in ["accommodation"]][0]`);
export const aboutQuery = defineQuery(`*[_type in ["about"]][0]`);
export const cookieQuery = defineQuery(`*[_type in ["cookie"]][0]`);
export const privacyQuery = defineQuery(`*[_type in ["privacy"]][0]`);

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{"name": coalesce(name, "Anonymous"), picture},
`;

export const heroQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {
    content,
    ${postFields}
  }
`);

export const moreStoriesQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`);

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content,
    ${postFields}
  }
`);
