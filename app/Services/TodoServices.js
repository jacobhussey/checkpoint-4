import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js"


class TodoService {

    async getTodos() {
        const res = await sandboxApi.get('jacobhussey/todos')
        // console.log(res.data, 'getting todos');
        appState.todos = res.data.map(t => new Todo(t))
        console.log(appState.todos, 'appstate todos');
    }

    async createTodo(todoData) {
        const res = await sandboxApi.post('jacobhussey/todos', todoData)
        // console.log('[post todo]', res.data);
        appState.todos = [new Todo(res.data), ...appState.todos]
        console.log(appState.todos);
    }

    async deleteTodo(todoId) {
        const res = await sandboxApi.delete('jacobhussey/todos/' + todoId)
        console.log(res.data, 'deleting todo');
        appState.todos = appState.todos.filter(t => t.id != todoId)
    }

    async prepareTodo(id) {
        let selectedTodo = appState.todos.find(t => t.id == id)
        // console.log('[Preparing]', selectedTodo);
        selectedTodo.completed = !selectedTodo.completed
        const res = await sandboxApi.put('jacobhussey/todos/' + id, selectedTodo)
        let index = appState.todos.findIndex(t => t.id == id)
        appState.todos.splice(index, 1, new Todo(res.data))
        appState.emit('todos')
        console.log(selectedTodo);
    }

}

export const todoService = new TodoService