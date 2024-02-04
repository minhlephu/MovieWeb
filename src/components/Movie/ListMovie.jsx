import Movie from "./Movie";

const movie = [
    {
      movieID: 1,
      movieName: "Gặp lại chị bầu",
      duration: "120",
      releaseDate: "02/02/2024",
      poster:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202401/11343_103_100004.jpg",
    },
    {
      movieID: 2,
      movieName: "Nhà vịt di cư",
      duration: "110",
      releaseDate: "02/02/2024",
      poster:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202308/11251_103_100001.jpg",
    },
    {
      movieID: 3,

      movieName: "Gặp lại chị bầu",
      duration: "120",
      releaseDate: "02/02/2024",
      poster:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202401/11343_103_100004.jpg",
    },
    {
      movieID: 4,

      movieName: "Nhà vịt di cư",
      duration: "110",
      releaseDate: "02/02/2024",
      poster:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202308/11251_103_100001.jpg",
    },
    {
      movieID: 5,

      movieName: "Gặp lại chị bầu",
      duration: "120",
      releaseDate: "02/02/2024",
      poster:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202401/11343_103_100004.jpg",
    },
    {
      movieID: 6,

      movieName: "Nhà vịt di cư",
      duration: "110",
      releaseDate: "02/02/2024",
      poster:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202308/11251_103_100001.jpg",
    },
    {
      movieID: 7,

      movieName: "Nhà vịt di cư",
      duration: "110",
      releaseDate: "02/02/2024",
      poster:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202308/11251_103_100001.jpg",
    },
    {
      movieID: 8,

      movieName: "Nhà vịt di cư",
      duration: "110",
      releaseDate: "02/02/2024",
      poster:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202308/11251_103_100001.jpg",
    },
  ];
const ListMovie = () => {
   
    return (
        <div className="w-full max-w-[940px] m-auto grid grid-cols-4 gap-10">
        {movie.map((item) => (
          <Movie key={item.movieID} movie={item}></Movie>
        ))}
      </div>
    );
};

export default ListMovie;