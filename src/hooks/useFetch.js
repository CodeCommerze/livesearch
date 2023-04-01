import { useState , useEffect } from "react";


const useFetch = (data, url)=>{
    const [weather , setWeather] = useState([]);
    const [isLoading , setIslaoding] = useEffect(false);
    const [error , setError] = useState('');

    useEffect(() => {},[]);

}