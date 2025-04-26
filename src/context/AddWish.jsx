import React , { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import toast  from "react-hot-toast"



export const wishContext = createContext();
export function WishContextProvider(props){



    const[wish , setWish] = useState([]);

    function addWishlist(data){
      let selectProduct = wish.find( e => e.title === data.title )
  if (! selectProduct) {
    toast.success('You have a new heart! ❤');
       setWish([...wish,data])
  }else{
    Swal.fire({
      icon: "info",
      title : "You already add product in  wishlist" ,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    })
    
  }
  
    }

    function deleteWishlist(product) {
        Swal.fire({
          icon: "warning",
          title : `Are You sure to delete product (${product.title})` ,
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
        
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
        let newArr = wish.filter( el => el.title !== product.title )
        setWish(newArr)
      
      }
      });
      
    }


      useEffect(()=>{
        if (localStorage.getItem('wish')) {
          setWish(JSON.parse(localStorage.getItem('wish')))
        }else{
          setWish([])
        }
      } , [])
      
      useEffect(()=>{
      
        localStorage.setItem('wish' ,JSON.stringify(wish))
      
      }, [wish])

    return(
        <wishContext.Provider value={{ deleteWishlist,wish,addWishlist}}>
           {props.children}     
        </wishContext.Provider>
    )
    // Provider
//   {props.children}
}