import { Grid, SectionTitle, Wrapper } from "./styles";

import PriceCard from "../PricingCard";
import { pricingData } from "../../Data/pricingData";
import { useParams } from "react-router-dom";

export default function CategoryPricing() {
  const { category } = useParams();
  const categoryData = pricingData.filter(pkg => pkg.category === category);

  if (!categoryData.length) return <p>No plans found</p>;

  return (
    <Wrapper>
      <SectionTitle>{category.replace("-", " ")}</SectionTitle>
      <Grid>
        {categoryData.map(pkg => (
          <PriceCard key={pkg.id} data={pkg} />
        ))}
      </Grid>
    </Wrapper>
  );
}
