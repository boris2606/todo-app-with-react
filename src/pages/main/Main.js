import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './Main.module.scss'
import { addTodo, removeTodo,completeTodo} from "../../reduxToolkit/reduxReducer";
import { useSelector, useDispatch} from 'react-redux';
import { motion } from "framer-motion";

const Main = () => {

    const todo = useSelector(state => state.toolkit.todo)
    const dispatch = useDispatch()

    const [todoName,setTodoName] = useState('')
    const [todoDescr,setTodoDescr] = useState('')
    const [search,setSearch] = useState('')
    const [searchChecked,setSearchChecked] = useState(false)

    let filteredCompleteTodo  = todo.filter(element => element.complete === searchChecked)

    function handlerInputsTodo(event){
        event.target.id === 'todoName' ? setTodoName(event.target.value) : event.target.id === 'todoDescr' ? setTodoDescr(event.target.value) : setSearch((event.target.value).toLowerCase())
    }
    
    function handlerDefault(event){
        event.preventDefault();
    }

    function addTodoFunc() {
        if (todoName && todoDescr){
            let totoList = {
                nameTodo: todoName.trim(),
                description: todoDescr.trim(),
                complete: false,
                id: new Date().getTime()
            }
            dispatch(addTodo(totoList))
        }
    }
    return (
        <motion.div className={styles.wrapper_todo} 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{duration: 0.5,delay: 0.3}}>
            <div className={styles.wrappper_todo_form}>
                <form className={styles.todo_form} onSubmit={handlerDefault}>
                    <div className={styles.wrapper_inputs_form}>
                        <input className={styles.name_todo} placeholder="Заголовок" id='todoName' onChange={handlerInputsTodo} required></input>
                        <input className={styles.description_todo} placeholder="Опис" id='todoDescr' onChange={handlerInputsTodo} required></input>
                    </div>
                    <button className={styles.btn_create_todo} onClick={addTodoFunc}>Створити завдання</button>
                </form>
            </div>
            <div className={styles.wrapper_serach}>
                <input className={styles.search_todo} placeholder='Пошук завдань' onChange={handlerInputsTodo}/>
                <button className={styles.btn_tasks} type='checkbox' onClick={() => setSearchChecked(!searchChecked)}>{searchChecked ? "Повернутись до завдань" : "Переглянути виконані"} </button>
            </div>
            {filteredCompleteTodo.length > 0 ? <p className={styles.tit_todo_text}>ВСЬОГО {searchChecked ? "ВИКОНАНИХ" : 'НЕВИКОНАНИХ'} ЗАВДАНЬ {filteredCompleteTodo.length}</p> : <p className={styles.tit_todo_text} >Завдання відсутні</p>}
            {todo.map(element => {
                for (let valueElement of Object.values(element)){
                    if (valueElement.toString().toLowerCase().includes(search) && element.complete === searchChecked){
                        return <div className={styles.wrapper_todo_list} key={element.id}>
                                    <input type="checkbox" id="myCheckbox" defaultChecked={element.complete} onClick={() => dispatch(completeTodo(element.id))}/>
                                    <label htmlFor="myCheckbox"></label>

                                    <div className={styles.todo_list_text}>
                                        <p className={styles.todo_list_tit}>{element.nameTodo}</p>
                                        <hr noshade="true" className={styles.ht_line_todo}/>
                                        <p className={styles.todo_list_descr}>{element.description}</p>
                                    </div>
                                    <button className={styles.delete_todo_btn} onClick={()=> dispatch(removeTodo(element.id))}>&#10006;</button>
                                </div>
                    }
                }
            })}
            <Link className={styles.history_btn} to='/history'>перейти до історії</Link>
        </motion.div>
    );
};

export default Main;