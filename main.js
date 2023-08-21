import "./style.css"
import { getWeather } from "./weather"

getWeather(10,10, Int1.DateTimeFomat().resolvedOptions().timeZone).then(res => {
    console.log(res.data)
})