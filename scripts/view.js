// VIEW ===================================================>

import { header, todoList, modal } from './templates.js'
import { controller } from './controller.js'

// Listeners for header buttons

function initListeners() {
    // add-todo button
    document.getElementById('add-todo').addEventListener('click', controller.openModal);
    // cancel button
    document.getElementById('cancel-button').addEventListener('click', controller.closeModal);
    // confirm button
    document.getElementById('confirm-button').addEventListener('click', controller.addTodo);
}

function printApp() {
    root.insertAdjacentHTML('afterbegin', header());
    root.insertAdjacentHTML('beforeend', todoList());
    root.insertAdjacentHTML('afterbegin', modal())
}

export { printApp, initListeners }