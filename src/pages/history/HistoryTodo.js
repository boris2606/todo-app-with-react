import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';
import {removeDeletedTodo,removeAllDeletedTodo} from "../../reduxToolkit/reduxReducer";
import styles from './History.module.scss'
import { motion } from "framer-motion";

const HistoryTodo = () => {

    const deletedTodo = useSelector(state => state.toolkit.deleteTodo)
    const dispatch = useDispatch()

    function refreshPage() {
        window.location.reload(true);
    }

    return (
        <motion.div className={styles.wrapper_deleted_todo}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{duration: 0.5,delay: 0.3}}>
            {deletedTodo.map(element => {
                console.log(element.id);
                return <div className={styles.wrapper_todo_list} key={element.id}>
                            <div className={styles.todo_list_text}>
                                <p className={styles.todo_list_tit}>{element.nameTodo}</p>
                                <hr noshade="true" className={styles.ht_line_todo}/>
                                <p className={styles.todo_list_descr}>{element.description}</p>
                            </div>
                            <button className={styles.delete_todo_btn} onClick={()=> dispatch(removeDeletedTodo(element.id))}>&#10006;</button>
                        </div>
            })}
            <div className={styles.wrapper_history_btn}>
                <Link className={styles.return_todo_btn} to='/'> Назад до завдань</Link>
                <button className={styles.delete_all_history} onClick={()=> {
                                        dispatch(removeAllDeletedTodo())
                                        refreshPage()
                                    }}>Очистити історію</button>
            </div>
        </motion.div>
    );
};

export default HistoryTodo;