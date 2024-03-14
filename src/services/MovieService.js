import { baseService } from "./baseService";

export class MovieServie extends baseService{
    getListMovie =(param)=>{
        return this.get(`Movie/Movies?${param}`);
    }
    createMovie = (movie)=>{
        return this.post(`Movie/CreateMovie`,movie)
    }
}

export const movieSevice = new MovieServie;