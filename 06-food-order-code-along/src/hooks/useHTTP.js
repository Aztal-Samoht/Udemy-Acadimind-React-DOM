import { useState,useCallback } from "react";
import URLs from "../assets/URLs";

const useHTTP = () =>{
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const sendOrder = useCallback(async (data) => {
      setIsLoading(true);
      try{
       const responce = await fetch(URLs.orders, {
           method: 'POST',
           headers: { 
               "Content-Type": "application/json" 
             },
           body: JSON.stringify(data),
       })
       if(!responce.ok){ throw new Error('failed to add order') }
       } catch (e) { setIsLoading(false); setHasError(e.message || 'there was an error, but failed to collect message'); }
      setIsLoading(false);
  },[]);
  
  const sendMeal = async (data) => {
    setIsLoading(true);
    try{
      const responce = await fetch(URLs.meals, {
        method: 'POST',
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(data),
      })
      if(!responce.ok){ throw new Error('failed to add meal') }
    } catch (e) { setIsLoading(false); setHasError(e.message || 'there was an error, but failed to collect message'); }
    setIsLoading(false);
  }
    
  const getMeals = useCallback(async (setMeals) => {
    setIsLoading(true);
    setHasError(false);
    const loadedMeals = [];
    try {
      const responce = await fetch(URLs.meals);
      if (!responce.ok) {
        throw new Error("failed to get available meals");
      }
      const data = await responce.json();
      for (const mealKey in data) {
        loadedMeals.push({
          id: mealKey,
          name: data[mealKey].name,
          description: data[mealKey].description,
          price: +data[mealKey].price,
        });
      }
      setMeals(loadedMeals)
    } catch (e) {
      setHasError( e.message || "there was an error, but failed to collect message" );
    }
    setIsLoading(false);
  }, []);
        
  return{
    isLoading,
    hasError,
    sendMeal, 
    getMeals,
    sendOrder
  }
}; export default useHTTP;