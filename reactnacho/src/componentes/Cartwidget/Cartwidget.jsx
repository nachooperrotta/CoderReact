import { useCartContext } from "../../context/CartContext";

const Cartwidget = () => {
  const {TotalQuantity} = useCartContext()

  return (
    <>
    <div>{TotalQuantity() !== 0 && TotalQuantity()} 🛒 </div>
    </>
  )
}


export default Cartwidget;