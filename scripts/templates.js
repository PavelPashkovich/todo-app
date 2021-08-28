// TEMPLATES ===============================================================>

function header() {
    return `
    <header id ='header' class='header w-11/12 mx-auto mb-5 p-5 bg-white shadow rounded-lg'>
        <div class='header__title-container'>
            <h1>Todo-list</h1>
        </div>
        <div class='header__counter-container'>
            <p>Total: <strong id="total-counter">${1}</strong></p>
            <p>Completed: <strong id="copmleted-counter">${2}</strong></p>
            <p>In progress: <strong id='progress-counter'>${3}</strong></p>
        </div>
        <div class='header__buttons-container flex justify-between'>
            <button id='add-todo' class='border border-red-400 shadow rounded-lg'>Add</button>
            <button id='delete-all-todos' class='border border-red-400 shadow rounded-lg'>Delete all</button>
            <button id='delete-last-todo' class='border border-red-400 shadow rounded-lg'>Delete last</button>
        </div>
    </header>
    `
}

function todoList() {
    return `
    <div id='todo-list' class='w-11/12 mx-auto p-5 bg-white shadow rounded-lg'>
        <div class='card relative flex items-center justify-between p-5 w-full h-12 rounded-xl bg-blue-300 shadow-md'>
            <input class='w-4 h-4 border-transparent rounded-xl' type='checkbox'></input>
            <p id='time' class='pl-4 text-xl text-white'>${1}</p>
            <h2 id='title' class='pl-4 w-5/12 text-2xl uppercase text-white font-bold'>${2}</h2>
            <p id='text' class='w-2/5 text-base text-white'>${3}</p>
            <button class='rounded-xl w-16 h-8 bg-white border border-gray-400 text-blue-300 hover:text-white hover:bg-blue-200'>Delete</button>
        </div>
    </div>
    `
}

function modal() {
  return `
<div id='modal' class="fixed z-10 inset-0 overflow-y-auto hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="w-72 text-lg leading-6 font-medium text-gray-900" id="modal-title">
              Add a new todo
            </h3>
            <div class="mt-2">
              <form>
                <input class='w-72 mb-2 mt-2 p-1' type="text" id="todo-title" placeholder="title...">
                <input class='w-72 p-1' type="text" id="todo-description" placeholder="description...">
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button id='confirm-button' type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
          Confirm
        </button>
        <button id='cancel-button' type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>
    `;
}

export { header, todoList, modal }
    