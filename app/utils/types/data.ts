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
    pageTitle: string;
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
    pageTitle: string;
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
export type ContactData = {
  data: {
    pageTitle: string;
    ogTitle: string;
    ogDescription: string;
    metaTitle: string;
    metaDescription: string;
    heading: string;
    description: string;
    ogImage?: { url: string };
  };
};
export type ProjectsData = {
  data: {
    pageTitle: string;
    ogTitle: string;
    ogDescription: string;
    metaTitle: string;
    metaDescription: string;
    heading: string;
    description: string;
    ogImage?: { url: string };
    list: [
      {
        id: number;
        title: string;
        subTitle: string;
        color: string;
        avatar?: { url: string };
        bgVector?: { url: string };
        bgImage?: { url: string };
        bgImageMob?: { url: string };
      }
    ];
  };
};
