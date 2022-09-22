import React from "react"
//styles
import { generateBlockClass } from "@vtex/css-handles"
import styles from "./styles.css"


type Props = {
    products: { name:string, price:number, id:string, quantity:number, imageUrls: object }[];
}
// interface Listprops  {
//     products: {price:number, name:string}[];
// }

const ProductGroup = (props: Props, {blockClass}: {blockClass: string}) => {
    console.log("Mis productos en ProductGroup son:", props)
    console.log("Mi total de productos es:", props.products.length)
    const container__item = generateBlockClass(styles.container__item, blockClass)  
    const container__itemImage = generateBlockClass(styles.container__itemImage, blockClass)
    const container__itemText = generateBlockClass(styles.container__itemText, blockClass)
   
  
    return (
        <>
    
        {
            props.products.map((item: any,index: number) =>{
                return (
                    <div key={index} className={container__item} >
                        <div className={container__itemImage}>
                            <img src={item.imageUrls.at1x}/>
                        </div>
                        <div className={container__itemText}>
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <p>Cantidad:{item.quantity}</p>
                        </div>
                        
                </div>
                )
            })
        }

        </>
    )
     
}

export default ProductGroup