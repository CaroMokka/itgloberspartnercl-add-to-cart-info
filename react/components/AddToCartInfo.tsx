import React from "react"
import { useProduct } from "vtex.product-context"
import { useOrderForm } from "vtex.order-manager/OrderForm"
//compopnents
import ButtonGroup from "./ButtonGroup"
import ProductGroup from "./ProductGroup"




const AddToCartInfo = () => {
    const productInfo = useProduct()
    const { orderForm: {items,totalizers} } = useOrderForm()
    console.log( "Este producto tiene esta informacion:", productInfo)
    console.log( "Esta es mi enformacion de la orden:", items,totalizers)
    return (
        <>
        <ProductGroup products={items}/>
        <hr/>
        <div>
            <p>Tenemos {items.length} productos en el carrito</p>
            <p>Total es ${totalizers[0]?.value}</p>
        </div>
        <hr/>
        <ButtonGroup/>
        </>
    )
}

export default AddToCartInfo