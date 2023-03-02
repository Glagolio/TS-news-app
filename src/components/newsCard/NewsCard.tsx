import React from "react";
import { NewsCardStyled } from "./NewsCard.styled";

interface ISource {
  id: string | null | undefined;
  name: string;
}
interface INews {
  author: string;
  content: string;
  publishedAt: string;
  title: string;
  urlToImage: string;
  url: string;
  source: ISource;
  description: string;
}

interface INewsCardProps {
  info: INews;
}

const newsCard: React.FC<INewsCardProps> = ({ info }) => {
  return (
    <NewsCardStyled>
      <h2>{info.title}</h2>
      <img src={info.urlToImage} alt={info.title} width="250px" />
      <p>{info.description}</p>
    </NewsCardStyled>
  );
};

export default newsCard;
