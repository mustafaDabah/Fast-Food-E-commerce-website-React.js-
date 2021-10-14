import {useState , useEffect} from 'react';
import axios from "axios";
const URL = 'https://run.mocky.io/v3/219fc12a-4359-4921-9775-33849c8d9d97'

function useFetch() {
    const [data , setData] = useState([]);

    useEffect(() => { 
        const fetchData = async () => {
           try {
             const res = await axios.get(URL)
             setData(res.data);
           }catch (err) {
             console.log(err);
           }
        }
          fetchData();

     },[]);

     return {data} 

}

export default useFetch;
