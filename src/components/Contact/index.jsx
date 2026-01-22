import {
  AltContact,
  ContactDescription,
  ContactTitle,
  ContactWrapper,
  Form,
  Input,
  LeftSide,
  Photo,
  RightSide,
  Select,
  TextArea,
} from "./styles";
import React, { useEffect, useState } from "react";

import Button from "../ui/Button";
import Title from "../ui/Title";
import api from "../../services/api";
import { buildContactMessage } from "../../utils/contactHelper";
import { getImageUrl } from "../../utils/getImageUrl";
import { pricingData } from "../../Data/pricingData";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";

function Contact() {
  const theme = useTheme();
  const { state } = useLocation();
  const [about, setAbout] = useState(null);
  const categoryOptions = Array.from(new Set(pricingData.map(pkg => pkg.category)));
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "",
    message: "",
  });
  const handleTextAreaInput = (e) => {
  setForm({ ...form, message: e.target.value });

  e.target.style.height = "auto";
  e.target.style.height = e.target.scrollHeight + "px";
};


  useEffect(() => {
    if (state) {
      setForm(prev => ({
        ...prev,
        sessionType: state.sessionType,
        message: buildContactMessage({
          packageTitle: state.packageTitle,
          price: state.price,
        }),
      }));
    }
  }, [state]);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await api.get("/about");
        const data = Array.isArray(res.data) ? res.data[0] : res.data;
        setAbout(data);
      } catch (err) {
        console.error("Error loading About:", err);
      }
    };
    fetchAbout();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/contact", form);
      if (res.status === 200) {
        alert("Message sent successfully");
        setForm({
          name: "",
          email: "",
          phone: "",
          sessionType: "",
          message: "",
        });
      } else {
        alert("Error sending the message");
      }
    } catch (err) {
      console.error("Error sending:", err);
      alert("Error sending the message");
    }
  };

  if (!about) return <p>Loading...</p>;

  const imgSrc =
    theme.colors.background === "#2c2c2c"
      ? getImageUrl(about.imagen_dark)
      : getImageUrl(about.imagen_light);

  return (
    <>
      <Title>Contact</Title>
      <ContactWrapper>
        <LeftSide>
          <ContactTitle>Do you have an idea in mind?</ContactTitle>
          <ContactDescription>
            Tell me the details and I will get in touch with you.
          </ContactDescription>

          <Form onSubmit={handleSubmit}>
            <Input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              value={form.phone}
              onChange={handleChange}
            />

            <Select
              name="sessionType"
              value={form.sessionType}
              onChange={handleChange}
              required
            >
              <option value="">Session type</option>
              {categoryOptions.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </Select>

            <TextArea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleTextAreaInput}
              required
            />

            <Button $variant="send">Send</Button>
          </Form>

          <AltContact href="mailto:andreynavas11@gmail.com">
            Or write directly to <strong>andreynavas11@gmail.com</strong>
          </AltContact>
        </LeftSide>

        <RightSide>
          <Photo src={imgSrc} alt="Contact" />
        </RightSide>
      </ContactWrapper>
    </>
  );
}

export default Contact;
