import { getData } from "./getData";
import {
  AboutData,
  ContactData,
  GeneralInfo,
  HomeData,
  ProjectsData,
} from "../../types/data";

export async function getGeneralInfo(): Promise<GeneralInfo | undefined> {
  try {
    return await getData(
      `/general-info`,
      60 // Revalidate every 60 seconds
    );
  } catch (error) {
    console.error("Failed to fetch general info data:", error);
    // throw notFound();
  }
}

export async function getHomeData(): Promise<HomeData | undefined> {
  try {
    return await getData(
      `/home?populate=*`,
      60 // Revalidate every 60 seconds
    );
  } catch (error) {
    console.error("Failed to fetch home data:", error);
    // throw notFound();
  }
}
export async function getAboutData(): Promise<AboutData | undefined> {
  try {
    return await getData(
      `/about?populate=*`,
      60 // Revalidate every 60 seconds
    );
  } catch (error) {
    console.error("Failed to fetch about data:", error);
    // throw notFound();
  }
}
export async function getContactData(): Promise<ContactData | undefined> {
  try {
    return await getData(
      `/contact?populate[ogImage][fields][0]=url&populate[social][populate][dayIcon][fields][0]=url&populate[social][populate][nightIcon][fields][0]=url`,
      60 // Revalidate every 60 seconds
    );
  } catch (error) {
    console.error("Failed to fetch about data:", error);
    // throw notFound();
  }
}
export async function getProjectsData(): Promise<ProjectsData | undefined> {
  try {
    return await getData(
      `/projec?populate[ogImage][fields][0]=url&populate[list][populate][avatar][fields][0]=url&populate[list][populate][bgVector][fields][0]=url&populate[list][populate][bgImage][fields][0]=url&populate[list][populate][bgImageMob][fields][0]=url`,
      60 // Revalidate every 60 seconds
    );
  } catch (error) {
    console.error("Failed to fetch about data:", error);
    // throw notFound();
  }
}
// export async function getArtProjectsData(): Promise<ProjectsData | undefined> {
//   try {
//     return await getData(
//       `/art-project?populate[ogImage][fields][0]=url&populate[bannerBg][fields][0]=url&populate[bannerBgMob][fields][0]=url&populate[images][populate][image][fields][0]=url&populate[video][populate][video][fields][0]=url`,
//       60 // Revalidate every 60 seconds
//     );
//   } catch (error) {
//     console.error("Failed to fetch about data:", error);
//     // throw notFound();
//   }
// }
