import React, { useState } from 'react';
import './ExpenseItem.css'
import { ExpenseDate } from './ExpenseDate';
import Card from './Card';


const ExpenseItem = (props) => {

    //const expenseDate = new Date(2021, 2, 28)
    // const expenseTitle = 'Car Insurance'
    // const expensePrice = 294.67

    const [title, setTitle] = useState(props.title)

    const ClickHandle = () => {
        setTitle('Updated....');
        alert('updated!');
    }
    return (<>
        <div>
            <Card className="expense-item ">
                <div>
                    <ExpenseDate date={props.date} />
                </div>
                <div className="expense-item__description" >
                    <h2>{title}</h2>
                    <div className="expense-item__price" >${props.amount}</div>
                </div> &nbsp; &nbsp;
                <button style={{ padding: 10, backgroundColor: '#7900b1', border: 0, borderRadius: 10, color: '#fff', fontSize: 15, cursor: 'pointer' }} onClick={ClickHandle} >Change Title</button>
            </Card>
        </div>

    </>)
}

export default ExpenseItem 