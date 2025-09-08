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
    ogImage?: {
      data?: {
        attributes?: {
          url: string;
        };
      };
    };
  };
};
