// MODEL =====================================================>

export const model = {
    todos: [],
    getLocalStorage: function() {
        model.todos = JSON.parse(localStorage.getItem('todos'));
    },
    setLocalStorage: function() {
        localStorage.setItem('todos', JSON.stringify(model.todos));
    },
}

console.log();