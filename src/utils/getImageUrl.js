const BASE_URL = process.env.REACT_APP_API_URL;

export const getImageUrl = (path) => {
  if (!path) return "/default-placeholder.jpg";

  const cleanPath = path.startsWith("/uploads/")
    ? path.replace("/uploads/", "")
    : path;

  const finalUrl = `${BASE_URL}/uploads/${cleanPath}`;

  return finalUrl;
};
