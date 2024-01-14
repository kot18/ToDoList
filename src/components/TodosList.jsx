import React, {Component} from 'react';
import classes from "../css/todosList.module.css"
import todosJson from "../todos.json";
import {render} from "react-dom";

class LocalFileRead extends Component {
    constructor(props) {
        super(props);
    }
}

const TodosList = () => {
    return (
        render(
            <section>
                <div>
                    <input type={"checkbox"}></input>
                </div>
            </section>
        )
    );
};

export default TodosList;