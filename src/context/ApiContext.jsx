import React , { createContext, useEffect, useState } from "react";
import { allProducts, spcificCategory } from "../components/ProductJson";
import axios from "axios";



export const apicontext = createContext()

export function ApicontextProvider(props){

    const [catApi,setCat] = useState([]);
    const [allData,setAllData] = useState([]);
    const [sort , setSort] = useState(null)
    
    

    async function getAllData() {
        let {data} = await axios.get('https://dummyjson.com/products')
        setAllData(allProducts.concat(data.products))
      }
      
      async function getApicatgoery() {
        
        let {data} = await axios.get('https://dummyjson.com/products/categories')
        setCat(data)
      }
      
      async function getcatAPi(url) {
        let {data} = await axios.get(url);
       setAllData(data.products)
        
        
      }

      function changeSort(e) {
      let val = e.target.value
      if (val === 'Name( A-Z )') {
        allData.sort((a , b)=>(a.title > b.title ? 1 : -1 ))
        setSort('Name( A-Z )')
      }else if (val === 'Name( Z-A )') {
        allData.sort((a , b )=>(a.title < b.title ? 1 : -1 ))
        setSort('Name( Z-A )')
      }else if (val === 'Price( Low-Hight )') {
      allData.sort((a , b)=>(a.price - b.price ));
        setSort('Price( Low-Hight ) )')
      }else if (val === 'Price( Hight-Low )') {
      allData.sort((a , b)=>(b.price - a.price));
        setSort('Price( Hight-Low )')
      } else if (val === 'Default') {
        getAllData()
        setSort('Default')
      }
      setAllData([...allData])
      }
      function getcatJSON(i) {
        let newArr = spcificCategory[i].products
        setAllData(newArr);
        
        }

      useEffect(()=>{
        getAllData()
        getApicatgoery()
      },[])


      return(
       <apicontext.Provider value={{catApi ,allData ,sort ,getcatAPi ,changeSort ,getcatJSON , getAllData}}>
        { props.children }
       </apicontext.Provider>
      )
}