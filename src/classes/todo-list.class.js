import { Todo } from "./todo.class";

export class TodoList  {

    constructor () {
        //this.todos = [];
        this.loadLocalStorage();
    }
    nuevoTodo ( todo ) {
        this.todos.push ( todo );
        this.saveLocalStorage();
    } 
    eliminarTodo ( id ) {
        //elimina un elemento del arreglo 
        this.todos = this.todos.filter( todo => todo.id != id ) ;
    }
    marcarCompletado ( id ) {
        for (const todo of this.todos) {
            console.log(id, todo.id);
            //el == significa que los va a comparar solo por valor, === compara valor y tipo
            if ( todo.id == id) {
                todo.completado = !todo.completado;
                this.saveLocalStorage();
                break;
            }    
        }

    }
    eliminarCompletados ( ) {
        this.todos = this.todos.filter( todo => !todo.completado ) ;
        this.saveLocalStorage();
    }
    saveLocalStorage () {

        localStorage.setItem('todo', JSON.stringify(this.todos));

    }
    loadLocalStorage() {
        // if ( localStorage.getItem('todo') ) {

        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     console.log( 'cargar todos   ', this.todos );
        //     console.log(typeof this.todos)

        // } else {
        //     this.todos = [];    
        // }
        
        this.todos = (localStorage.getItem('todo')) 
            ? JSON.parse(localStorage.getItem('todo'))
            : []

            
        this.todos = this.todos.map( Todo.fromJson );

    }

}