import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [hero, setHero] = useState(() => {
    const saved = sessionStorage.getItem("hero");
    return saved ? JSON.parse(saved) : null;
  });
  const [about, setAbout] = useState(() => {
    const saved = sessionStorage.getItem("about");
    return saved ? JSON.parse(saved) : null;
  });
  const [reviews, setReviews] = useState(() => {
    const saved = sessionStorage.getItem("reviews");
    return saved ? JSON.parse(saved) : null;
  });
  const [gallery, setGallery] = useState(() => {
    const saved = sessionStorage.getItem("gallery");
    return saved ? JSON.parse(saved) : null;
  });
  const [categories, setCategories] = useState(() => {
    const saved = sessionStorage.getItem("categories");
    return saved ? JSON.parse(saved) : null;
  });
  const [galleryPhotos, setGalleryPhotos] = useState(() => {
    const saved = sessionStorage.getItem("galleryPhotos");
    return saved ? JSON.parse(saved) : {};
  });

  // Guardamos automáticamente en sessionStorage cada vez que cambie
  useEffect(() => { if (hero) sessionStorage.setItem("hero", JSON.stringify(hero)); }, [hero]);
  useEffect(() => { if (about) sessionStorage.setItem("about", JSON.stringify(about)); }, [about]);
  useEffect(() => { if (reviews) sessionStorage.setItem("reviews", JSON.stringify(reviews)); }, [reviews]);
  useEffect(() => { if (gallery) sessionStorage.setItem("gallery", JSON.stringify(gallery)); }, [gallery]);
  useEffect(() => { if (categories) sessionStorage.setItem("categories", JSON.stringify(categories)); }, [categories]);
  useEffect(() => { sessionStorage.setItem("galleryPhotos", JSON.stringify(galleryPhotos)); }, [galleryPhotos]);

  return (
    <DataContext.Provider
      value={{
        hero,
        setHero,
        about,
        setAbout,
        reviews,
        setReviews,
        gallery,
        setGallery,
        categories,
        setCategories,
        galleryPhotos,
        setGalleryPhotos,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
