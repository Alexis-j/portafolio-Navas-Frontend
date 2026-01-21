import { CategoryCard, CategoryPhoto, InfoBox, PhotoWrapper, Wrapper } from './styles';

import Button from "../ui/Button";
import { Link } from "react-router-dom";
import Title from "../ui/Title"
import { categoryImages } from '../../Data/categoryImages';
import { pricingData } from '../../Data/pricingData';

export default function PricingSection() {
  const categories = [...new Set(pricingData.map(pkg => pkg.category))];

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
        <h2>{category.replace("-", " ")}</h2>
        <Button
          as={Link}
          to={`/pricing/${category}`}
          variant="more"
        >
          Mehr erfahren
        </Button>
      </InfoBox>
    </CategoryCard>
  ))}
</Wrapper>

  );
}
