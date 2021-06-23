import React, { useState } from 'react';
import todo from '../Images/todo.png';
import "../App.css";


const Todo = () => {

    const [inputData, setInputData] = useState();
    const [items, setItems] = useState([]);

    const addItem = () => {
        if (!inputData) {

        } else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData]);
            setInputData('')
    }
    }

    const DeleteItem = (id) => {
        const updateItems = items.filter((value, ind) => {
            return ind !== id;
        })
        setItems(updateItems);
    }

    const removeAll = () => {
        setItems([]);
    }

    return (

        <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src={todo} alt="" />
                    <figcaption>Add your list here 🤙</figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" placeholder=" ✍️ Add Items..." 
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                    />
                    <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i>
                </div>
                <div className="showItems">
                {items.map((value) => {
                    return (
                        <div key={value.id} className="eachItem">
                        <h3>{value.name}</h3>
                        <i className="fa fa-trash add-btn" title="Delete Item" onClick={() => DeleteItem(ind)}></i>
                    </div>
                    )
                })}
                  
                </div>

                {/* clear all button */}

                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                        <span>CHECK LIST</span>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Todo;