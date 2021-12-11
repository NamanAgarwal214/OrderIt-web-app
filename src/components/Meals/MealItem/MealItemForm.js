import React, {useRef} from 'react'
import Input from '../../UI/Input'
import styling from './MealItemForm.module.css'

const MealItemForm = (props) => {

    const amountRef = useRef();

    const submitHandler = e => {
        e.preventDefault();
        const enteredAmount = amountRef.current.value;
        const finalPrice = +enteredAmount;
        if(enteredAmount.trim().length===0 || finalPrice<1 || finalPrice>5){
            return;
        }
        props.onAddCart(finalPrice)
    }

    return (
        <form className={styling.form} onSubmit = {submitHandler}>
            <Input ref = {amountRef} label = "Amount" input = {{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                defaultValue: '1'
            }} />
            <button> + Add</button>
        </form>
    )
}

export default MealItemForm
