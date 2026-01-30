import {
  AboutWrapper,
  Description,
  LeftSide,
  Photo,
  RightSide,
  Title
} from "./styles";
import React, { useEffect } from "react";

import Reviews from "../Reviews";
import api from "../../services/api";
import { getImageUrl } from "../../utils/getImageUrl";
import { useData } from "../../utils/DataContext";
import { useTheme } from "styled-components";

function About() {
  const { about, setAbout } = useData();
  const theme = useTheme();

  useEffect(() => {
    if (!about) {
      const fetchAbout = async () => {
        try {
          const res = await api.get("/about");
          const data = Array.isArray(res.data) ? res.data[0] : res.data;
          setAbout(data);
        } catch (err) {
          console.error("Error al cargar About:", err);
        }
      };

      fetchAbout();
    }
  }, [about, setAbout]);

  if (!about) return <p>Cargando...</p>;

  const imgSrc =
    theme.colors.background === "#2c2c2c"
      ? getImageUrl(about.imagen_dark)
      : getImageUrl(about.imagen_light);

  return (
    <>
      <AboutWrapper>
        <LeftSide>
          <Title>{about.titulo}</Title>
          <Description>{about.descripcion}</Description>
        </LeftSide>

        <RightSide>
          <Photo src={imgSrc} alt="About" />
        </RightSide>
      </AboutWrapper>

      <Reviews />
    </>
  );
}

export default About;
