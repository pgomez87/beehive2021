class TodoComponent extends Component {
    constructor(parent, className, appManager, model) {
        super(parent, className, appManager, model);

        this.textContainer = div({ 'className': 'todoComponent_text_container' }, this.container, null)
        this.title = p({ 'className': 'todoComponent_title', 'innerHTML': this.model.title }, this.textContainer, null);
        const bee = this.appManager.dataManager.getBeeById(this.model.userId);
        this.email = p({ 'className': 'todoComponent_email', 'innerHTML': bee.email }, this.textContainer, null)

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
        this.model.completed = !this.model.completed;
        this.update();
    }
}