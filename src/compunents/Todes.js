import React from 'react'
import Todo from './Todo'
import style from './todes.module.css'

const Todes = (props) => {
    
  return (
    <section className={style.todos}>
      {
        props.todos.map((todo)=> <Todo todo={todo.todo} key={todo.id} id ={todo.id} onRemoveTodo={props.onRemoveTodo}/>)
      }
    </section>
  )
}

export default Todes
