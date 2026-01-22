import { Card, CardTitle, Desc, Icon, List, Note, Price } from './styles';

import Button from "../ui/Button";
import { Link } from "react-router-dom";

export default function PriceCard({ data }) {
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
      
      <Button
        as={Link}
        to="/contact"
        state={{
          sessionType: data.category,   // wedding, family-Session, etc
          packageTitle: data.title,
          price: `${data.currency} ${data.price}`,
        }}
        variant="request"
      >
        Anfrage senden
      </Button>

    </Card>
  );
}
