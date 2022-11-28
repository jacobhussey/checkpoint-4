import { appState } from "../AppState.js";
import { todoService } from "../Services/TodoServices.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawUncompleted() {
    let uncompleted = appState.todos.filter(u => u.completed == false).length
    setText('todos-count', uncompleted)
}

function _drawTodos() {
    let template = ''
    appState.todos.forEach(t => template += t.TodoTemplate)
    setHTML('todos', template)
}

export class TodoController {
    constructor() {
        // console.log('todo controller');
        this.getTodos()
        appState.on('todos', _drawTodos)
        appState.on('todos', _drawUncompleted)
    }

    async getTodos() {
        try {
            // console.log('getting todos');
            await todoService.getTodos()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }

    async createTodo() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            let todoData = getFormData(form)
            Pop.toast('created', 'success')
            form.reset()
            console.log(todoData);
            await todoService.createTodo(todoData)
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }

    async deleteTodo(todoId) {
        console.log('deleting a todo', todoId);
        try {
            if (await Pop.confirm())
                await todoService.deleteTodo(todoId)
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }

    async prepareTodo(id) {
        try {
            await todoService.prepareTodo(id)
        } catch (error) {
            Pop.error(error.message)
            // console.error(error)
        }
    }

}