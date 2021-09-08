import React, { useEffect, useState } from 'react'
import GlobalStyle from '../../../styles/global'
import PromotionCard from "../../../components/Promotion/Card/Card";
import axios from 'axios'


const PagesPromotionSearch = () =>{   
  const [promotions, setPromotions] = useState([])
  useEffect(() =>{
    axios.get('http://localhost:5000/promotions?_embed=comments')
    .then((response) =>{  
      setPromotions(response.data)
          })
  }, [])
  

  return(
    <>
      {promotions.map((promotion) => (
         <PromotionCard promotion={promotion}/>
      ))}
      <GlobalStyle/>
     
    </>
  )
}



export default PagesPromotionSearch;