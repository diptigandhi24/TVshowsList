export interface TvShow {
  id: number;
  url: string;
  buttonTest?: string;
  summary: string;
  image: TvShowImage;
  name: string;
}
interface TvShowImage {
  medium: string;
  original: string;
}
