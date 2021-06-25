import React, { useState } from 'react';
import todo from '../Images/todo.png';
import "../App.css";


const Todo = () => {

    const [inputData, setInputData] = useState();
    const [items, setItems] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItem = () => {
        if (!inputData) {

        } else if(inputData && !toggleSubmit) {
            setItems(
                items.map((elem) => {
                    if(elem.id === isEditItem) {
                        return{...elem, name:inputData}
                    }
                    return elem;
                })
            )
            setToggleSubmit(true);
            setInputData('');
            setIsEditItem(null);
        }
         else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData]);
            setInputData('')
    }
    }

    const editItem = (id) => {
        let newEditItems = items.find((elem) => {
            return elem.id === id;
        })
        console.log(newEditItems)
        setToggleSubmit(false);
        setInputData(newEditItems.name)
        setIsEditItem(id)
    }

    const DeleteItem = (index) => {
        const updateItems = items.filter((value) => {
            return index !== value.id;
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
                    {toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i> : 
                    <i className="fa fa-edit add-btn" title="Update Item" onClick={addItem}></i>
                }
                </div>
                <div className="showItems">
                {items.map((value) => {
                    return (
                        <div key={value.id} className="eachItem">
                        <h3>{ value.name }</h3>
                        <div className="todo-btn">
                            <i className="fa fa-edit add-btn" title="Edit Item" onClick={() => editItem(value.id)}></i>
                            <i className="fa fa-trash add-btn" title="Delete Item" onClick={() => DeleteItem(value.id)}></i>
                        </div>
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