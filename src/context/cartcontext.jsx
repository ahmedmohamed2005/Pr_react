import React , { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import toast  from "react-hot-toast"




export const cartContext = createContext();
export function CartContextProvider(props){


  
// ChangeDir At Component Shop
const[flexDir,SetFlexDir]=useState('row') ;

function AppFlexDir(state) {
  if (state === 'row') {
    SetFlexDir('row')
  }else if (state === 'col') {
    SetFlexDir('col')
  }
}

// ------
  const [cart,setCart] = useState([])


  function addToCart(product) {
    let selectProduct = cart.find( e => e.title === product.title )
  
    if (! selectProduct) {
      setCart([...cart, {...product , amount: 1}])
      toast.success('Successfully toasted!')  
    }else{
      
      Swal.fire({
        icon: "info",
        title : "Add One More..." ,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
  
          selectProduct.amount += 1
          setCart([...cart])
  
      toast.success(`You now have ${selectProduct.amount} from ${selectProduct.title.split(" " , 2)}`)
        
        }
      });
      
    }
  
    
  }
  
  function deleteCart(product) {
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
  let newArr = cart.filter( el => el.title !== product.title )
  setCart(newArr)

}
});
if (product == "all") {

  Swal.fire({
    icon: "warning",
    title : `Are You sure to delete All products ` ,
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
  setCart([])
  
  }
  });
  
}


  
  }
  
  function changeAmount(e , product){
   product.amount = +e.target.value
   setCart[[...cart]]
   toast.success(`You have ${product.amount} product ${product.title}` , {duration : 1000})
  }
  
  function otherChangeAmount(state , product){
  if (state === 'plus') {
    ++product.amount
  toast.success(`You have ${product.amount} product ${product.title}` , {duration : 1000})
  }else if(state === "miuns"){
    if (product.amount > 1) {
      --product.amount
    }else{
  deleteCart(product)
    }
    
  }
  setCart([...cart])
  
  }
  
  useEffect(()=>{
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')))
    }else{
      setCart([])
    }
  } , [])
  
  useEffect(()=>{
  
    localStorage.setItem('cart' ,JSON.stringify(cart))
  
  }, [cart])

return (
<cartContext.Provider value={ {cart ,flexDir , AppFlexDir , addToCart ,  deleteCart ,  changeAmount ,  otherChangeAmount }} >
  {props.children}
</cartContext.Provider>
)

}