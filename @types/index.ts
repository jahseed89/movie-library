export interface MovieCardProp {
  id: string;
  rate: string;
  date: string;
  poster_path: string;
  title: string;
}

export interface SearchPageProps {
  params: {
    query: string;
  };
}
