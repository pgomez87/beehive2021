class TodoListComponent extends Component {
    constructor(parent, className, appManager) {
        super(parent, className, appManager);
        this.container.style.transform = 'translateX(' + window.innerWidth + 'px )';
        this.todos = [];
    }

    showTodoList(model) {
        this.todos = [];
        this.container.innerHTML = '';

        this.show();

        this.container.scrollTop = 0;
        this.model = model;

        this.model.todos.forEach(todo => {
            const todoComponent = new TodoComponent(this.container, 'todoComponent', this.appManager, todo);
            this.todos.push(todoComponent)
        });
    }

}