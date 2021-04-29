class NewCommentComponent extends Component {
    constructor(parent, className, appManager, model, postComponent) {
        super(parent, className, appManager);

        this.model = model;

        this.postComponent = postComponent;

        this.titleLabel = p({ 'classList': 'newCommentComponent_titleLabel', 'innerHTML': 'Title' }, this.container, null);

        this.title = input({ 'classList': 'newCommentComponent_title', 'placeholder': 'Title', 'onfocus': this.removeTitleError.bind(this) }, this.container, null);
        this.titleError = p({ 'classList': 'newCommentComponent_titleError', 'innerHTML': 'Please add a tittle for this post.' }, this.container, null);

        this.bodyLabel = p({ 'classList': 'newCommentComponent_titleLabel', 'innerHTML': 'Body' }, this.container, null);
        this.body = input({ 'classList': 'newCommentComponent_body', 'placeholder': 'Body', 'onfocus': this.removeBodyError.bind(this) }, this.container, null);
        this.bodyError = p({ 'classList': 'newCommentComponent_titleError', 'innerHTML': 'Please add a body for this post' }, this.container, null);

        this.buttonsContainer = div({ 'classList': 'newCommentComponent_buttons_container' }, this.container, null);
        this.continueBtn = div({ 'classList': 'newCommentComponent_continue_btn', 'innerHTML': 'Continue', 'onclick': this.onContinue.bind(this) }, this.buttonsContainer, null);
        this.cancelBtn = div({ 'classList': 'newCommentComponent_cancel_btn', 'innerHTML': 'Cancel', 'onclick': this.onCancel.bind(this) }, this.buttonsContainer, null);

        console.log(this.buttonsContainer);
    }


    onContinue() {

        const title = this.title.value;
        const body = this.body.value;

        if (title == '') {
            this.titleError.classList.remove('hidden');
            this.title.classList.add('newCommentComponent_inputError');
        } else {
            this.removeTitleError();
        }

        if (body == '') {
            this.bodyError.classList.remove('hidden');
        } else {
            this.removeBodyError();
        }

        if (title !== '' && body !== '') {
            const owner = this.appManager.dataManager.getOwner();
            const comment = new Comment(-1, this.model.id, title, body, owner.id);
            // this.model.addComment()
            // this.postComponent.update();
            this.appManager.netManager.addNewComment(comment, this.postComponent);
            this.onCancel();
        }
    }

    onCancel() {
        this.clean();
        this.postComponent.showAddCommentBtn();
        this.titleError.classList.add('hidden');
        this.title.classList.remove('newCommentComponent_inputError');
        this.bodyError.classList.add('hidden');
        this.body.classList.remove('newCommentComponent_inputError');
        this.hide();
    }

    removeTitleError() {
        this.titleError.classList.add('hidden');
        this.title.classList.remove('newCommentComponent_inputError');
    }

    removeBodyError() {
        this.bodyError.classList.add('hidden');
        this.body.classList.remove('newCommentComponent_inputError');
    }

    clean() {
        this.title.value = '';
        this.body.value = '';
    }

}