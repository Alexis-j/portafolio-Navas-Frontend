import { Card, CardTitle, Desc, Icon, List, Note, Price } from "./styles";

import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

export default function PriceCard({ data }) {
  const navigate = useNavigate();

  const goToContact = () => {
    const nav = () =>
      navigate("/contact", {
        state: {
          sessionType: data.category,
          packageTitle: data.title,
          price: `${data.currency} ${data.price}`,
        },
      });

    if (document.startViewTransition) {
      document.startViewTransition(nav);
    } else {
      nav();
    }
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
