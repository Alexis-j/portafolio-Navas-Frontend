import { CategoryCard, GalleryWrapper } from "./styles";
import React, { useEffect, useState } from "react";

import Button from "../ui/Button";
import Title from "../ui/Title";
import api from "../../services/api";
import { getImageUrl } from "../../utils/getImageUrl";

function GalleryPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/gallery/categories");
        // Aseguramos que siempre sea un array
        const data = Array.isArray(res.data) ? res.data : [];
        setCategories(data);
      } catch (err) {
        console.error("Error al cargar categorías:", err);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) return <p>Cargando categorías...</p>;
  if (categories.length === 0) return <p>No hay categorías disponibles.</p>;

  return (
    <GalleryWrapper>
      <Title>Gallery</Title>
      {categories.map((cat) => {
        const imageUrl = getImageUrl(cat.cover_image);
        return (
          <CategoryCard key={cat.id} $image={imageUrl}>
          <Button to={`/gallery/${cat.slug}`} variant="portfolio">
            {cat.name}
          </Button>
        </CategoryCard>

        );
      })}
    </GalleryWrapper>
  );
}

export default GalleryPage;
