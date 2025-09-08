import { getData } from "./getData";
import { GeneralInfo } from "../../types/general";

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
