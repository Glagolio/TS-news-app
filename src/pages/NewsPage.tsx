import React, { useState, useEffect } from "react";
import NewsCard from "../components/newsCard/NewsCard";
import { NewsPageContent } from "../components/NewsPageContent/NewsPageContent.styled";
import { LoadMoreButtonStyled } from "../components/LoadMoreButton/LoadMoreButton.styled";

// TODO: ADD IDs FOR NEWS

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

const NewsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [news, setNews] = useState<INews[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<INews[]> => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=Apple&from=2023-02-20&sortBy=popularity&apiKey=6aee5c8f9c164ec69a9b4b96a6e2bf9c&pageSize=12&page=${currentPage}`
      );
      if (!response.ok) {
        throw new Error("something wrong with API");
      }
      const data = await response.json();

      return data.articles.map((article: INews) => {
        return {
          author: article.author,
          content: article.content,
          publishedAt: new Date(article.publishedAt),
          title: article.title,
          urlToImage: article.urlToImage,
          url: article.url,
          source: {
            id: article.source.id,
            name: article.source.name,
          },
          description: article.description,
        };
      });
    };
    const data = fetchData();
    fetchData().then((data) => setNews((prevState) => [...prevState, ...data]));
  }, [currentPage]);

  return (
    <NewsPageContent>
      {news.length > 0 && news.map((item) => <NewsCard info={item} />)}
      <LoadMoreButtonStyled
        onClick={() => setCurrentPage((prevState) => prevState + 1)}
      >
        Load MORE
      </LoadMoreButtonStyled>
    </NewsPageContent>
  );
};

export default NewsPage;
