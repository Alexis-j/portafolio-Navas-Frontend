import { CategoryCard, CategoryPhoto, InfoBox, PhotoWrapper, Wrapper } from './styles';

import Button from "../ui/Button";
import { Link } from "react-router-dom";
import Title from "../ui/Title";
import { categoryImages } from '../../Data/categoryImages';
import { pricingData } from '../../Data/pricingData';

export default function PricingSection() {
  // Filtra solo paquetes que tienen category definido
  const categories = [
    ...new Set(pricingData
      .filter(pkg => pkg.category)  // ignoramos undefined
      .map(pkg => pkg.category)
    )
  ];

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <Wrapper>
      <Title>Prices</Title>
      {categories.map(category => (
        <CategoryCard key={category}>
          <PhotoWrapper>
            <CategoryPhoto
              src={categoryImages[category] || "/images/default.jpeg"}
              alt={category}
            />
          </PhotoWrapper>
          <InfoBox>
            <h2>{capitalize(category.replace("-", " "))}</h2>
            <Button
              as={Link}
              to={`/pricing/${category.toLowerCase()}`}
              variant="more"
            >
              Learn more
            </Button>
          </InfoBox>
        </CategoryCard>
      ))}
    </Wrapper>
  );
}
