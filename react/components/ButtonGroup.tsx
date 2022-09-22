import React from "react"
//styles
import { generateBlockClass } from "@vtex/css-handles"
import styles from "./styles.css"

const ButtonGroup = ({blockClass}: {blockClass: string}) => {
    const container__button = generateBlockClass(styles.container__button, blockClass)
    const container__buttonContinue = generateBlockClass(styles.container__buttonContinue, blockClass)
    const container__buttonPay = generateBlockClass(styles.container__buttonPay, blockClass)
    return (
        <div className={container__button}>
            <div className={container__buttonContinue}>
                <a href="/" >CONTINUAR COMPRANDO</a>
            </div>
            <div className={container__buttonPay}>
                <a href="/checkout/#/cart" >IR A PAGAR</a>
            </div>
        </div>
    )
}

export default ButtonGroup