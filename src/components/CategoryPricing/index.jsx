import { Grid, Wrapper } from "./styles";

import PriceCard from "../PricingCard";
import Title from "../ui/Title"
import { pricingData } from "../../Data/pricingData";
import { useParams } from "react-router-dom";

export default function CategoryPricing() {
  const { category } = useParams();
  const categoryData = pricingData.filter(pkg => pkg.category === category);
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  if (!categoryData.length) return <p>No plans found</p>;

  return (
    <Wrapper>
      <Title>{capitalize(category.replace("-", " "))}</Title>
      <Grid>
        {categoryData.map(pkg => (
          <PriceCard key={pkg.id} data={pkg} />
        ))}
      </Grid>
    </Wrapper>
  );
}
