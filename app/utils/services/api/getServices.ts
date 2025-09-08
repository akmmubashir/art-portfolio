import { getData } from "./getData";

export async function getGeneralInfo() {
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
