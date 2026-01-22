import { Card, CardTitle, Desc, Icon, List, Note, Price } from './styles';

import Button from "../ui/Button";

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

      <Button variant='request' >Anfrage senden</Button>
    </Card>
  );
}
