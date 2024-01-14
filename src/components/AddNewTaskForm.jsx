import React from 'react';
import classes from "../css/addNewTaskForm.module.css"

const AddNewTaskForm = () => {
    return (
        <form className={classes.inputForm}>
            <div className={classes.inputFields}>
                <input type={"text"} placeholder={"Добавить новый элемент"} className={classes.textInput}></input>
                <input type={"submit"} className={classes.submitInput}></input>
            </div>
        </form>
    );
};

export default AddNewTaskForm;