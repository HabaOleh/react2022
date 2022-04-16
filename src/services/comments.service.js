
import {axiosService} from "./axios.service";
import {urls} from "../constants";

const commentsService={
    getAll:()=>axiosService.get(urls.comments),
    getById:(commentId)=>axiosService.get(`${urls.comments}/${commentId}`)
}

export {commentsService}
