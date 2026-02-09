import { CategoryCard, GalleryWrapper } from "./styles";
import React, { useEffect } from "react";

import Button from "../ui/Button";
import Title from "../ui/Title";
import api from "../../services/api";
import { getImageUrl } from "../../utils/getImageUrl";
import { useData } from "../../utils/DataContext";

function GalleryPage() {
  const { categories, setCategories } = useData();

  useEffect(() => {
    if (categories !== null) return; // 🔐 clave

    const fetchCategories = async () => {
      try {
        const res = await api.get("/gallery/categories");
        const data = Array.isArray(res.data) ? res.data : [];
        setCategories(data);
      } catch (err) {
        console.error("Error al cargar categorías:", err);
        setCategories([]); 
      }
    };

    fetchCategories();
  }, [categories, setCategories]);

  if (categories === null) {
    return <p>Cargando categorías...</p>;
  }

  if (categories.length === 0) {
    return <p>No hay categorías disponibles.</p>;
  }

  return (
    <GalleryWrapper>
      <Title>Gallery</Title>

      {categories.map((cat) => {
        const imageUrl = getImageUrl(cat.cover_image);

        return (
          <CategoryCard key={cat.id} $image={imageUrl}>
            <Button
              to={`/gallery/${cat.slug}`}
              variant="portfolio"
            >
              {cat.name}
            </Button>
          </CategoryCard>
        );
      })}
    </GalleryWrapper>
  );
}

export default GalleryPage;
