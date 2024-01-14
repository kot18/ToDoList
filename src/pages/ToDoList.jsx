import React from 'react';

import Header from "../components/Header";
import AddNewTaskForm from "../components/AddNewTaskForm";
import TodosList from "../components/TodosList";

import classes from "./pageToDoList.module.css"

const ToDoList = () => {
    return (
        <section className={classes.mainForm}>
            <title>Дневной список дел</title>
            <Header></Header>
            <AddNewTaskForm></AddNewTaskForm>
            <TodosList></TodosList>
        </section>
    );
};

export default ToDoList;