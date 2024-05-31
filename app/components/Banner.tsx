"use client";
import styled from "styled-components";
import type { StaticImageData } from "next/image";

interface DivProps {
  image: StaticImageData;
}

interface BannerProps {
  image: StaticImageData;
  text: string;
  smallText: string;
}

const Banner = ({ image, text, smallText }: BannerProps) => {
  return (
    <>
      <Div image={image}>
        <H1>{text}</H1>
        <Span>{smallText!}</Span>
      </Div>
    </>
  );
};

export default Banner;

const Div = styled.div<DivProps>`
  width: 100%;
  height: 40vh;
  background: linear-gradient(
      to bottom,
      rgba(12, 8, 90, 0.7),
      rgba(83, 7, 101, 0.7)
    ),
    url(${(props) => props.image.src}) no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0;
`;

const H1 = styled.h1`
  font-size: bold;
  font-size: 3rem;
  color: white;
  text-align: center;
  margin: 0;
`;

const Span = styled.span`
  color: white;
  margin-top: -10px;
  font-weight: bold;
`;
