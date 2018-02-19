import axios from "axios";

export default {
    saveToDo: function(Data) {
        console.log("axios toDo..API.js", Data);
        return axios.post("/new/saveToDo", Data)
    }
}