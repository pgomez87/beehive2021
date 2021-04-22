class TodoComponent extends Component {
    constructor(parent, className, appManager, model) {
        super(parent, className, appManager, model);
        this.title = p({ 'className': 'todoComponent_title', 'innerHTML': this.model.body }, this.container, null);
        this.btn = div({ 'className': 'todoComponent_btn' }, this.container, null);

        this.completeIcon = img({ 'src': 'images/completeIcon.svg', 'className': 'todoComponent_complete_icon' }, this.btn, null);

        this.notCompleteIcon = img({ 'src': 'images/notCompleteIcon.svg', 'className': 'todoComponent_notComplete_icon' }, this.btn, null);

        this.container.onclick = this.toogleTodo.bind(this)
        this.update();

    }

    update() {
        if (this.model.completed) {
            this.completeIcon.classList.remove('hidden');
            this.notCompleteIcon.classList.add('hidden');
        } else {
            this.completeIcon.classList.add('hidden');
            this.notCompleteIcon.classList.remove('hidden');
        }
    }

    toogleTodo() {
        this.model.completed = !this.mmodel.completed;
        this.update();
    }
}