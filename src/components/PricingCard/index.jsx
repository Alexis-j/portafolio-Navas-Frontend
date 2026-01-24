import { Card, CardTitle, Desc, Icon, List, Note, Price } from "./styles";

import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

export default function PricingCard({ data }) {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact", {
      state: {
        sessionType: data.category,
        packageTitle: data.title,
        price: `${data.currency} ${data.price}`,
      },
    });
  };

  return (
    <Card>
      <Icon>{data.icon}</Icon>
      <CardTitle>{data.title}</CardTitle>

      <Price>
        {data.currency} {data.price}
      </Price>

      {data.description && <Desc>{data.description}</Desc>}

      <List>
        {data.features.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </List>

      {data.note && <Note>{data.note}</Note>}

      <Button variant="request" onClick={goToContact}>
        Send Request
      </Button>
    </Card>
  );
}
