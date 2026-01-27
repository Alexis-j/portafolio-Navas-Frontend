export const getImageUrl = (url) => {
  if (!url) return "/default-placeholder.jpg";

  // Si ya es una URL completa (Cloudinary)
  if (url.startsWith("http")) return url;

  // Fallback por si quedó algo viejo
  return url;
};
