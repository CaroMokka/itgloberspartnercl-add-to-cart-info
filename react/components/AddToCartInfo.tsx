import React from "react"
import { useProduct } from "vtex.product-context"
import { useOrderForm } from "vtex.order-manager/OrderForm"
//compopnents
import ButtonGroup from "./ButtonGroup"
import ProductGroup from "./ProductGroup"
//styles
import { generateBlockClass } from "@vtex/css-handles"
import styles from "./styles.css"




const AddToCartInfo = ({blockClass}: {blockClass: string}) => {
    const container = generateBlockClass(styles.container, blockClass)
    const container__summary = generateBlockClass(styles.container__summary, blockClass)
 

    const productInfo = useProduct()
    const { orderForm: {items,totalizers} } = useOrderForm()
    console.log( "Este producto tiene esta informacion:", productInfo)
    console.log( "Esta es mi enformacion de la orden:", items,totalizers)
    return (
        <div className={container}>
            <h1>Resumen de Compra</h1>
        <ProductGroup products={items}/>
        <hr/>
        <div className={container__summary}>
            <p>Tienes {items.length} productos en el carrito</p>
            <p>Total ${totalizers[0]?.value}</p>
        </div>
        <hr/>
        <ButtonGroup blockClass={blockClass}/>
        </div>
    )
}

export default AddToCartInfo