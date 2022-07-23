const todoadd = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');




const generateTemplate = todo =>{
    const html = 
    `<li class="list-group-item d-flex justify-content-between align-item-center">
    <span>${todo}</span>
    <i class="fa-solid fa-trash delete"></i>
    
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

list.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) =>{
Array.from(list.children)
.filter((todo)=> !todo.textContent.toLowerCase().includes(term))
.forEach((todo)=> todo.classList.add('flitered'))

.filter((todo)=> todo.textContent.toLowerCase().includes(term))
.forEach((todo)=> todo.classList.remove('flitered')) 


}



search.addEventListener('keyup', e =>{
    e.preventDefault();
    const term = search.value.trim().toLowerCase();
    filterTodos(term)
});


