export const getImageUrl = (imageName) => {
  if (!imageName) return '';
  if (imageName.startsWith('http')) return imageName;
  return `${process.env.REACT_APP_API_URL}/uploads/${imageName}`; // <- Cambiado a /uploads
};
