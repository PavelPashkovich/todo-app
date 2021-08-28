import { model } from './model.js';
import { header, modal } from './templates.js';
import { printApp } from './view.js';

export const controller = {
    addTodo: function() {
        model.setLocalStorage();
        const todo = {};
        const todoTitle = document.getElementById('todo-title');
        const todoDescription = document.getElementById('todo-description');

        todo.title = todoTitle.value;
        todo.description = todoDescription.value;

        model.todos.push(todo);
    },
    openModal: function() {
        const modalWindow = document.getElementById('modal');
        modalWindow.classList.toggle('hidden');
    },
    closeModal: function() {
        const modalWindow = document.getElementById('modal');
        modalWindow.classList.toggle('hidden');
    },
}