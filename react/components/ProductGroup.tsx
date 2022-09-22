import React from "react"

type Props = {
    products: { name:string, price:number, id:string, quantity:number, imageUrls: object }[];
}
// interface Listprops  {
//     products: {price:number, name:string}[];
// }

const ProductGroup = (props: Props) => {
    console.log("Mis productos en ProductGroup son:", props)
    console.log("Mi total de productos es:", props.products.length)
  
    return (
        <>
          <hr/>
        {
            props.products.map((item: any,index: number) =>{
                return (
                    <div key={index}>
                        <div>
                            <img src={item.imageUrls.at1x}/>
                        </div>
                        <div>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
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