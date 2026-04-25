export const getAssetPath = (path: string) => {
  if (!path) return "";
  
  // Return absolute URLs and data URIs as is
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("//") || path.startsWith("data:")) {
    return path;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  
  // Avoid double prefixing if basePath is already present
  if (basePath && normalizedPath.startsWith(basePath)) {
    return normalizedPath;
  }

  return `${basePath}${normalizedPath}`;
};
