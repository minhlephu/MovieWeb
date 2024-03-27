import { baseService } from "./baseService";

export class CinemaService extends baseService {
  getListCinema = (param) => {
    return this.get(`Cinema/Cinemas?${param}`)
  }

  createNewCinema = (datajson) => {
    return this.post (
      `Cinema/CreateCinema`,
      datajson
    )
  }

  removeCinema = (id) => {
    return this.delete(`Cinema/DeleteCinema?id=${id}`)
  }

  updateCinema = (id, datajson) => {
    return this.put (
      `Cinema/${id}`,
      datajson
    )
  }
}

export const cinemaService = new CinemaService()