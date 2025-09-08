import { getData } from "./getData";
import { GeneralInfo, HomeData } from "../../types/data";

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
