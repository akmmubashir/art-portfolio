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
      `/contact?populate=*`,
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
      `/projec?populate=*`,
      60 // Revalidate every 60 seconds
    );
  } catch (error) {
    console.error("Failed to fetch about data:", error);
    // throw notFound();
  }
}
