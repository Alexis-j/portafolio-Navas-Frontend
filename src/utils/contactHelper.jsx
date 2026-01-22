// src/utils/contactHelper.js

export const sessionTypeMap = {
  wedding: "Wedding",
  "family-Session": "Portrait",
  "couple-Session": "Portrait",
  brand: "Commercial",
  colab: "Commercial",
  "monthly-Content": "Commercial",
};

export const getSessionTypeFromCategory = (category) => {
  return sessionTypeMap[category] || "";
};

export const buildContactMessage = ({ packageTitle, price }) => {
  if (!packageTitle || !price) return "";

  return `Hi! I'm interested in the "${packageTitle}" package (${price}).`;
};
