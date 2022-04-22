import { todoList } from "..";
import { Todo } from "../classes";

//Referencia en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput    = document.querySelector('.new-todo');
const btnBorrarCompletados = document.querySelector('.clear-completed');
const ulFiltors = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');



export const creatTodoHtml = ( todo ) => {
    const htmlTodo = `
        <li class="${ (todo.completado) ? 'completed' : ''}" data-id=" ${todo.id} ">
            <div class="view">
                <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : ''}>
                <label>${ todo.tarea }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>     
    `
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;

}


//Eventos
txtInput.addEventListener ( 'keyup', ( event ) => {
    //console.log(event);
    //Si presiono enter
    if ( event.keyCode === 13 && txtInput.value.length > 0 ) {
        console.log( txtInput.value );
        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo( nuevoTodo );
        creatTodoHtml( nuevoTodo );
        console.log(todoList);
        txtInput.value = '';
    }
});

divTodoList.addEventListener ('click', (event) => {
    //console.log('click');
    //console.log(event.target.localName);
    const nombreElemento = event.target.localName;//input, label o button;
    const todoElemento   = event.target.parentElement.parentElement;//para obtener la referencia completa al Li
    const todoId         = todoElemento.getAttribute('data-id');
    console.log(todoElemento);
    console.log(todoId);
    if ( nombreElemento.includes('input') ) {
        todoList.marcarCompletado( todoId ); 
        todoElemento.classList.toggle('completed');   
    }//click en el checkbox
    else if ( nombreElemento.includes('button') ) {
        todoList.eliminarTodo( todoId ); 
        divTodoList.removeChild( todoElemento );
    }//click en el boton x
});
btnBorrarCompletados.addEventListener ('click', () => {
    todoList.eliminarCompletados();
    for (let i = divTodoList.children.length-1; i>=0; i--) {
        const elemento = divTodoList.children[i];
        console.log(elemento);
        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        }
    }
});

ulFiltors.addEventListener ('click', (event) => {
    const filtro = event.target.text;
    if ( !filtro ) {
        return;
    }

    anchorFiltros.forEach(element => {
        element.classList.remove('selected');
    });
    event.target.classList.add('selected');

    for ( const elemento of divTodoList.children) {
        console.log(elemento);
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch ( filtro ) {
            case 'Pendientes':
            if ( completado ) {
                elemento.classList.add('hidden');
            }
            break;
            case 'Completados':
            if ( !completado ) {
                elemento.classList.add('hidden');
            }
            break;
        }  
    }

});