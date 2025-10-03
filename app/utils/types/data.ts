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
    social: [
      {
        id: number;
        name: string;
        link: string;
        dayIcon?: { url: string };
        nightIcon?: { url: string };
      }
    ];
    email: string;
    countryCode: string;
    phoneNumber: string;
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
export type ArtProjectsData = {
  data: {
    id: number;
    documentId: string;
    pageTitle: string;
    ogTitle: string;
    ogDescription: string;
    metaTitle: string;
    metaDescription: string;
    heading: string;
    subHeading: string;
    description: string;
    ogImage?: { url: string };
    bannerBg?: { url: string };
    bannerBgMob?: { url: string };
    images: [
      {
        id: number;
        width: string;
        image?: { url: string };
      }
    ];
    video: [
      {
        id: number;
        width: string;
        video?: { url: string };
      }
    ];
  };
};
export type EducationProjectsData = {
  data: {
    id: number;
    documentId: string;
    pageTitle: string;
    ogTitle: string;
    ogDescription: string;
    metaTitle: string;
    metaDescription: string;
    heading: string;
    subHeading: string;
    description: string;
    ogImage?: { url: string };
    bannerBg?: { url: string };
    bannerBgMob?: { url: string };
    images: [
      {
        id: number;
        width: string;
        image?: { url: string };
      }
    ];
    video: [
      {
        id: number;
        width: string;
        video?: { url: string };
      }
    ];
  };
};
export type OriginsProjectsData = {
  data: {
    id: number;
    documentId: string;
    pageTitle: string;
    ogTitle: string;
    ogDescription: string;
    metaTitle: string;
    metaDescription: string;
    heading: string;
    subHeading: string;
    description: string;
    ogImage?: { url: string };
    bannerBg?: { url: string };
    bannerBgMob?: { url: string };
    images: [
      {
        id: number;
        width: string;
        image?: { url: string };
      }
    ];
    video: [
      {
        id: number;
        width: string;
        video?: { url: string };
      }
    ];
  };
};
export type ProfessionalProjectsData = {
  data: {
    length: number;
    id: number;
    documentId: string;
    pageTitle: string;
    ogTitle: string;
    ogDescription: string;
    metaTitle: string;
    metaDescription: string;
    heading: string;
    subHeading: string;
    description: string;
    ogImage?: { url: string };
    bannerBg?: { url: string };
    bannerBgMob?: { url: string };
    companies: [
      {
        id: number;
        companyName: string;
        location: string;
        info: string;
        website: string;
        role: string;
        companyImage?: { url: string };
        bgImage?: { url: string };
        bgMobile?: { url: string };
        duration?: string;
        projects: [
          {
            id: number;
            projectName: string;
            title: string;
            description: string;
            duration: string;
            images: [
              {
                id: number;
                width: string;
                image?: { url: string };
              }
            ];
            videos: [
              {
                id: number;
                width: string;
                video?: { url: string };
              }
            ];
          }
        ];
      }
    ];
  };
};
