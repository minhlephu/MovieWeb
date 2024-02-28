import { baseService } from "./baseService";

export class MovieServie extends baseService{
    getListMovie =()=>{
        return this.get(`/Movie/Movies`);
    }
}

export const movieSevice = new MovieServie;