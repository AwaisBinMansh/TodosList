const todoadd = document.querySelector('.add');
const list = document.querySelector('.todos');
const generateTemplate = todo =>{
    const html = 
    `<li class="list-group-item d-flex justify-content-between align-item-center">
    <span>${todo}</span>
    
    </li>
    `;
    list.innerHTML +=html;
};

todoadd.addEventListener('submit', e =>{
    e.preventDefault();

    const todo = todoadd.add.value.trim();
    if(todo.length){
    generateTemplate(todo);

    todoadd.reset();

    }
})