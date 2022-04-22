import './styles.css';

import { Todo, TodoList } from './classes';//va al archivo donde estan las importaciones /classes/index.js
import { creatTodoHtml } from './js/componentes';

export const todoList = new TodoList();


// todoList.todos.forEach(todo => {
//     creatTodoHtml( todo );
// });

todoList.todos.forEach( creatTodoHtml );

//const newTodo = new Todo( 'Aprender Js' );
//todoList.nuevoTodo(newTodo);

todoList.todos[0].imprimirClase();


console.log('todos', todoList.todos);


//const tarea = new Todo( 'Aprender Js' );
//tarea.completado = true;

//todoList.nuevoTodo ( tarea );

//console.log(todoList);
//creatTodoHtml(tarea);


//LOCAL STORAGE OR SESSION STORAGE ONLY FOR FRONT END
//IN DEVELOPER TOOLS OF GOOGLE CHROME GO TO THE APLICATION OPTION TO FIND THE SESSION AND LOCAL STORAGE
//SESION STORAGE IS CLEARED WHEN WE CLOSES GOOGLE CHROME
//ALL DATA SAVED CAN BE SHOWED BY THE USER

// localStorage.setItem('key1', 'abc123ppp');
// sessionStorage.setItem('key1', 'abc123ppp');
// setTimeout ( () => {

// localStorage.removeItem('key1');
// }, 3500);



