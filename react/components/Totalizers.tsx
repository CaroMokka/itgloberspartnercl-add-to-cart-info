import React from "react"

// type Props = {
//     totaly: any;
// }

type Props = {
    totaly: {id:string, name:string, value:number}[];
}

const Totalizers = (props: Props ) => {
    console.log("Mi total de compra es:", props)
    return (
        <div>
            <p>Tenemos {props.totaly.length} items en tu compra</p>

        </div>
    )
}

export default Totalizers