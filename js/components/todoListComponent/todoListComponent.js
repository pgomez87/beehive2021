class TodoListComponent extends Component {
    constructor(parent, className, appManager) {
        super(parent, className, appManager);
        this.container.style.transform = 'translateX(' + window.innerWidth + ' px )';
        this.todos = [];
    }

    showTodoList(model) {
        this.todos = [];
        this.container.innerHTML = '';

        this.show();

        this.container.scrollTop = 0;
        this.model = model;
        // this.model.posts.forEach(post => {
        //     console.log(post);
        //     let postComponent = new postComponent(this.container, 'postComponent', this.appManager, post);
        //     this.posts.push(postComponent);
        // });
    }

}