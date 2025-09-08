export interface Media {
  id: number;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
}

export type GeneralInfo = {
  data: {
    rights: string;
  };
};

export type HomeData = {
  data: {
    ogTitle: string;
    ogDescription: string;
    metaTitle: string;
    metaDescription: string;
    heading: string;
    subHeading: string;
    ogImage?: { url: string };
    heroImage?: { url: string };
  };
};

export type AboutData = {
  data: {
    ogTitle: string;
    ogDescription: string;
    metaTitle: string;
    metaDescription: string;
    heading: string;
    description: string;
    ogImage?: { url: string };
    aboutImage?: { url: string };
    resume?: { url: string };
  };
};
