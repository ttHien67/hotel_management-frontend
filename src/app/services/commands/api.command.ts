
import { enviroment } from "src/app/enviroments/enviroment"
export class CommandURL {
    // Room
    public static ROOM = enviroment.PROCESS_SERVICE + '/api/hotel/room'

    // Review
    public static REVIEW = enviroment.PROCESS_SERVICE + '/api/hotel/review'

    // User
    public static USER = enviroment.PROCESS_SERVICE + '/api/hotel/user'

}