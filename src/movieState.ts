interface Award {
  title: string;
  description: string;
}

export interface Movie {
  id: string;
  title: string;
  mainImg: string;
  secondaryImg: string;
  url: string;
  awards: Award[];
}

export const movieState: Movie[] = [
  {
    id: "the-athlete",
    title: "The Athlete",
    mainImg: "/images/athlete-small.png",
    secondaryImg: "/images/athlete2.png",
    url: "/work/the-athlete",
    awards: [
      {
        title: "Truly A masterpiece",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "Fresh look on a brutal sport.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "It’s okay lmao.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
    ],
  },
  {
    id: "good-times",
    title: "Good Times",
    mainImg: "/images/goodtimes-small.png",
    url: "/work/good-times",
    secondaryImg: "/images/good-times2.jpg",
    awards: [
      {
        title: "Truly A masterpiece",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "Fresh look on a brutal sport.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "It’s okay lmao.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
    ],
  },
  {
    id: "the-racer",
    title: "The Racer",
    mainImg: "/images/theracer-small.png",
    url: "/work/the-racer",
    secondaryImg: "/images/the-racer2.jpg",
    awards: [
      {
        title: "Truly A masterpiece",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "Fresh look on a brutal sport.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "It’s okay lmao.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
    ],
  },
];
