import Movie from "./Movie";

const movie = [
  {
    movieID: 1,
    movieName: "Gặp lại chị bầu",
    duration: "120",
    releaseDate: "02/02/2024",
    genre: "Romance, Humor",
    age: "18",
    poster:
      "https://files.betacorp.vn/files/media%2fimages%2f2024%2f01%2f29%2fdieu%2Dnhi%2D141116%2D290124%2D81.jpg",
    trailer: "https://www.youtube.com/embed/krgcyk2rjFc",
  },
  {
    movieID: 2,
    movieName: "Nhà vịt di cư",
    duration: "110",
    releaseDate: "02/02/2024",
    genre: "Romance, Humor",
    age: "16",
    poster:
      "https://files.betacorp.vn/files/media%2fimages%2f2024%2f01%2f26%2ftrang%2D133650%2D260124%2D79.jpg",
    trailer: "https://www.youtube.com/embed/krgcyk2rjFc",
  },
  {
    movieID: 3,

    movieName: "Gặp lại chị bầu",
    duration: "120",
    releaseDate: "02/02/2024",
    genre: "Romance, Humor",
    age: "18",
    poster:
      "https://files.betacorp.vn/files/media%2fimages%2f2024%2f01%2f29%2fdieu%2Dnhi%2D141116%2D290124%2D81.jpg",
  },
  {
    movieID: 4,

    movieName: "Nhà vịt di cư",
    duration: "110",
    releaseDate: "02/02/2024",
    genre: "Romance, Humor",
    age: "16",
    poster:
      "https://files.betacorp.vn/files/media%2fimages%2f2024%2f01%2f26%2ftrang%2D133650%2D260124%2D79.jpg",
  },
  {
    movieID: 5,

    movieName: "Gặp lại chị bầu",
    duration: "120",
    releaseDate: "02/02/2024",
    genre: "Romance, Humor",
    age: "18",
    poster:
      "https://files.betacorp.vn/files/media%2fimages%2f2024%2f01%2f29%2fdieu%2Dnhi%2D141116%2D290124%2D81.jpg",
  },
  {
    movieID: 6,

    movieName: "Nhà vịt di cư",
    duration: "110",
    releaseDate: "02/02/2024",
    genre: "Romance, Humor",
    age: "16",
    poster:
      "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202308/11251_103_100001.jpg",
  },
  {
    movieID: 7,

    movieName: "Nhà vịt di cư",
    duration: "110",
    releaseDate: "02/02/2024",
    genre: "Romance, Humor",
    age: "16",
    poster:
      "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202308/11251_103_100001.jpg",
  },
  {
    movieID: 8,

    movieName: "Nhà vịt di cư",
    duration: "110",
    releaseDate: "02/02/2024",
    genre: "Romance, Humor",
    age: "16",
    poster:
      "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202308/11251_103_100001.jpg",
  },
];
const ListMovie = () => {
  return (
    <div className="w-full max-w-[60%] max-h-[80%]  m-auto grid grid-cols-4 gap-10 pt-10">
      {movie.map((item) => (
        <Movie key={item.movieID} movie={item}></Movie>
      ))}
    </div>
  );
};

export default ListMovie;
