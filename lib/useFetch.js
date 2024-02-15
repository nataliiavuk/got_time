import { useState, useEffect } from "react";
import {databases} from "../lib/appwrite"
import { Query } from "appwrite";


const useFetch = () => {
    const[data, setData]=useState([]);
    const[isLoading, setIsLoading]= useState(false);
    const[error, setError]= useState(null);


    const fetchData = async () => {

        const dbID = "65bf983244ac7c2a59ae";
        const collectionId = "65bf984392c8e5f8b1c1";  
        setIsLoading(true);

        try {
            const response = await databases.listDocuments(
                dbID, 
                collectionId, 
                [
                  Query.isNotNull("title")
                ]
                );

            setData(response.documents);
            console.log('Inside fetchdata:', data);
            setIsLoading(false);

        } catch (error){
            setError(error);
            alert(`${error}`);

        } finally {
            setIsLoading(false);
        }
    }

    

   useEffect (() => {
    fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch}; 
}

export default useFetch;