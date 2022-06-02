import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs';


export const useFetchGif = ( category )=>{
const [state, setState] = useState({
    data:[],
    loading: true
})

    useEffect(() => {
        getGifs(category)
        .then(imgs => {
            
            setTimeout(()=>{

                setState({
                    data:imgs,
                    loading:false
                });
            
            },1000);                   
        })                             //.then(imgs => setState(imgs))
    }, [category]);                   //[]se agrega la category por si en algún futuro cambia



return state;//{data:[],loading: true}

}