


export class Todo {
    constructor(data) {
        this.id = data.id
        this.completed = data.completed
        this.user = data.user
        this.description = data.description
    }


    get TodoTemplate() {
        return `
        <div class="col-12 d-flex justify-content-between">
        <input type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.todoController.prepareTodo('${this.id}')"/> <h3>${this.description}</h3>
        <i class="mdi mdi-delete selectable" onclick="app.todoController.deleteTodo('${this.id}')"></i>
        </div>
        `
    }
}