import { Todo } from "./todo.class";

export class TodoList {
  constructor() {
    //this.todos = [];
    this.cargarLocalStorate();
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
    this.save();
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.save();
  }

  marcarCompletado(id) {
    for (const todo of this.todos) {
      if (todo.id == id) {
        todo.completado = !todo.completado;
        this.save();
      }
    }
  }

  eliminarCompleatos() {
    this.todos = this.todos.fill((todo) => !todo.completado);
  }

  save() {
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }

  selectTodo() {}
  cargarLocalStorate() {
    this.todos = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    this.todos = this.todos.map((obj) => Todo.fromJson(obj));
  }
}
