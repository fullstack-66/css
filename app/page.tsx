"use client";

import styled from "styled-components";

export default function Home() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
  `;

  const Title = styled.div`
    font-size: 2em;
    color: #bf4f74;
  `;

  interface ButtonProps {
    $primary?: boolean;
  }

  const Button = styled.button<ButtonProps>`
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid #bf4f74;
    border-radius: 1em;
    cursor: pointer;

    /* Adapt the colors based on primary prop */
    background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
    color: ${(props) => (props.$primary ? "white" : "#BF4F74")};
    &:hover {
      background: ${(props) => (props.$primary ? "white" : "#BF4F74")};
      color: ${(props) => (props.$primary ? "#BF4F74" : "white")};
    }
  `;

  return (
    <Container>
      <Title>Styled Component</Title>
      <Button $primary>Click me</Button>
      <Button>Click me</Button>
    </Container>
  );
}
