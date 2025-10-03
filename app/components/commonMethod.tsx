export const convertToSlug = (text: string) => {
  return text
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading/trailing whitespace
    .replace(/[\s\W-]+/g, "-"); // Replace spaces and non-word characters with "-"
};
