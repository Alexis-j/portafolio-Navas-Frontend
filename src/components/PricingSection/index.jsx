import { CategoryCard, CategoryPhoto, InfoBox, PhotoWrapper, Wrapper } from './styles';

import Title from "../ui/Title"
import { pricingData } from '../../Data/pricingData';

export default function PricingSection() {
  const categories = [...new Set(pricingData.map(pkg => pkg.category))];

  return (
    <Wrapper>
      <Title>Prices</Title>
  {categories.map(category => (
    <CategoryCard key={category}>
      <PhotoWrapper>
        <CategoryPhoto src="/images/samily-sessiong.jpeg" alt="Family Session" />
      </PhotoWrapper>
      <InfoBox>
        <h2>{category.replace("-", " ")}</h2>
        <button>Mehr erfahren</button>
      </InfoBox>
    </CategoryCard>
  ))}
</Wrapper>

  );
}
