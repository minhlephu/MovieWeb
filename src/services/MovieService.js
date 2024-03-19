import { baseService } from "./baseService";

export class MovieServie extends baseService {
  getListMovie = (param) => {
    return this.get(`Movie/Movies?${param}`);
  };
  createMovie = (fileImages, filePoster, datajson) => {
    return this.post(
      `Movie/CreateMovieUpload`,
      fileImages,
      filePoster,
      datajson
    );
  };
  deleteMovie =(id)=>{
    return this.delete(`Movie/${id}`)
  }
  editMovie =(id)=>{
    return this.put(`Movie/${id}`)
  }
}

export const movieSevice = new MovieServie();
