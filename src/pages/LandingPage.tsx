import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import Readme from '../../README.md'

export default function LandingPage() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(Readme)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <Container>
      <ReactMarkdown children={content} />
    </Container>
  );
}