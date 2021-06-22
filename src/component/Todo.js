import React from 'react';
import todo from '../Images/todo.png';
import "../App.css";


const Todo = () => {

    return (

        <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src={todo} alt="" />
                    <figcaption>Add your list here 🤙</figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" placeholder=" ✍️ Add Items..." />
                    <i className="fa fa-plus add-btn" title="Add Item"></i>
                </div>
            </div>
        </div>
        </>
    )
}

export default Todo;