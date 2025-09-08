interface ApiError extends Error {
  status?: number;
  statusText?: string;
  url?: string;
}

export const getData = async <T = unknown>(
  url: string,
  revalidate: number = 60
): Promise<T> => {
  try {
    const headers: HeadersInit = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN || ""}`,
    };

    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${url}`;

    if (!process.env.NEXT_PUBLIC_BASE_URL) {
      console.warn("NEXT_PUBLIC_BASE_URL is not set");
    }

    // console.debug("API Request:", {
    //   url: apiUrl,
    //   method: "GET",
    //   headers: { ...headers, Authorization: "Bearer [REDACTED]" },
    //   revalidate,
    // });

    const res = await fetch(apiUrl, {
      method: "GET",
      headers,
      next: { revalidate },
    });

    if (!res.ok) {
      const error: ApiError = new Error(
        `HTTP error! status: ${res.status} ${res.statusText}`
      );
      error.status = res.status;
      error.statusText = res.statusText;
      error.url = apiUrl;

      console.error("API Error:", {
        status: res.status,
        statusText: res.statusText,
        url: apiUrl,
        headers: Object.fromEntries(res.headers.entries()),
      });

      if (res.status === 401) {
        if (typeof window !== "undefined") {
          localStorage?.removeItem("token");
        }
        error.message = "Unauthorized - Please log in again";
        throw error;
      }

      if (res.status === 403) {
        error.message =
          "Access Denied - You do not have permission to access this resource";
        throw error;
      }

      if (res.status === 429) {
        error.message = "Rate limit exceeded - Please try again later";
        throw error;
      }

      try {
        const errorData = await res.json();
        error.message = errorData?.message || error.message;
      } catch (e) {
        console.error("Failed to parse error response:", e);
      }

      throw error;
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error("API Request Failed:", {
      error: error instanceof Error ? error.message : "Unknown error",
      url,
      timestamp: new Date().toISOString(),
    });
    throw error;
  }
};
