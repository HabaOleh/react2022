import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userService={
    getAll:()=>axiosService.get(urls.users),
    getById:(id)=>axiosService.get(`${urls.users}/${id}`),
    getUserPosts:(userId)=>axiosService.get(`${urls.users}/${userId}${urls.posts}`)

}
export {userService}
