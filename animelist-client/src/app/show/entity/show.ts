export type Show = {
  slug: string,
  title: string,
  thumbnail: string,
  description: string,
  episodes: number,
};

export type ShowDetail = {
  slug: string,
  title: string,
  thumbnail: string,
  description: string,
  totalEpisodes: number,
  episodes: any[],
}
