class NewPostComponent extends Component {
    constructor(parent, className, appManager, model) {
        super(parent, className, appManager);

        this.model = model;

        this.titleLabel = p({ 'classList': 'newPostComponent_titleLabel', 'innerHTML': 'Title' }, this.container, null);

        this.title = input({ 'classList': 'newPostComponent_title', 'placeholder': 'Title', 'onfocus': this.removeTitleError.bind(this) }, this.container, null);
        this.titleError = p({ 'classList': 'newPostComponent_titleError', 'innerHTML': 'Please add a tittle for this post.' }, this.container, null);

        this.bodyLabel = p({ 'classList': 'newPostComponent_titleLabel', 'innerHTML': 'Body' }, this.container, null);
        this.body = input({ 'classList': 'newPostComponent_body', 'placeholder': 'Body', 'onfocus': this.removeBodyError.bind(this) }, this.container, null);
        this.bodyError = p({ 'classList': 'newPostComponent_titleError', 'innerHTML': 'Please add a body for this post' }, this.container, null);

        this.buttonsContainer = div({ 'classList': 'newPostComponent_buttons_container' }, this.container, null);
        this.continueBtn = div({ 'classList': 'newPostComponent_continue_btn', 'innerHTML': 'Continue', 'onclick': this.onContinue.bind(this) }, this.buttonsContainer, null);
        this.cancelBtn = div({ 'classList': 'newPostComponent_cancel_btn', 'innerHTML': 'Cancel', 'onclick': this.onCancel.bind(this) }, this.buttonsContainer, null);

        console.log(this.buttonsContainer);
    }


    onContinue() {

        const title = this.title.value;
        const body = this.body.value;

        if (title == '') {
            this.titleError.classList.remove('hidden');
            this.title.classList.add('newPostComponent_inputError');
        } else {
            this.removeTitleError();
        }

        if (body == '') {
            this.bodyError.classList.remove('hidden');
        } else {
            this.removeBodyError();
        }

        if (title !== '' && body !== '') {
            const post = new Post(-1, this.model.id, title, body)
            this.appManager.netManager.addNewPost(post, this.model);
        }
    }

    onCancel() {
        this.hide();
        this.titleError.classList.add('hidden');
        this.title.classList.remove('newPostComponent_inputError');
        this.bodyError.classList.add('hidden');
        this.body.classList.remove('newPostComponent_inputError');
    }

    removeTitleError() {
        this.titleError.classList.add('hidden');
        this.title.classList.remove('newPostComponent_inputError');
    }

    removeBodyError() {
        this.bodyError.classList.add('hidden');
        this.body.classList.remove('newPostComponent_inputError');
    }

}