import { baseService } from "./baseService";
export class TimeFrameService extends baseService{
    getListTimeFrame =()=>{
        return this.get(`/TimeFrame/TimeFrames`)
    }
    createTimeFrame =(timeFrame)=>{
        return this.post(`/TimeFrame/CreateTimeFrame`,timeFrame)
    }
    updateTimeFrame = (timeFrame)=>{
        return this.put(`/TimeFrame/UpdateTimeFrame`,timeFrame)
    }
    deleteTimeFrame = (id)=>{
        return this.delete(`/TimeFrame/DeleteTimeFrame?id=${id}`)
    }
}
export const timeFrameService = new TimeFrameService();