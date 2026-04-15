import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  ogImage?: string;
}

/**
 * PageMeta — sets document.title and key meta tags per route.
 * Uses useEffect to update the static tags already present in index.html.
 * No external dependencies required.
 */
export function PageMeta({ title, description, ogImage = "/brand/ttm-horizontal-master.png" }: PageMetaProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Description
    let descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!descEl) {
      descEl = document.createElement("meta");
      descEl.name = "description";
      document.head.appendChild(descEl);
    }
    descEl.content = description;

    // OG title
    let ogTitleEl = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (!ogTitleEl) {
      ogTitleEl = document.createElement("meta");
      ogTitleEl.setAttribute("property", "og:title");
      document.head.appendChild(ogTitleEl);
    }
    ogTitleEl.content = title;

    // OG description
    let ogDescEl = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (!ogDescEl) {
      ogDescEl = document.createElement("meta");
      ogDescEl.setAttribute("property", "og:description");
      document.head.appendChild(ogDescEl);
    }
    ogDescEl.content = description;

    // OG image
    let ogImgEl = document.querySelector<HTMLMetaElement>('meta[property="og:image"]');
    if (!ogImgEl) {
      ogImgEl = document.createElement("meta");
      ogImgEl.setAttribute("property", "og:image");
      document.head.appendChild(ogImgEl);
    }
    ogImgEl.content = ogImage;
  }, [title, description, ogImage]);

  return null;
}
