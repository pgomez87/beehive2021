class NewPostComponent extends Component {
    constructor(parent, className, appManager, model) {
        super(parent, className, appManager);

        this.model = model;

        this.titleLabel = p({ 'classList': 'newPostComponent_titleLabel', 'innerHTML': 'Title' }, this.container, null);

        this.title = input({ 'classList': 'newPostComponent_title', 'placeholder': 'Title' }, this.container, null);

        this.bodyLabel = p({ 'classList': 'newPostComponent_bodyLabel', 'innerHTML': 'Body' }, this.container, null);

        this.body = input({ 'classList': 'newPostComponent_body', 'placeholder': 'Body' }, this.container, null);

        this.buttonsContainer = div({ 'classList': 'newPostComponent_buttons_container' }, this.container.null);

        this.continueBtn = div({ 'classList': 'newPostComponent_continue_btn', 'innerHTML': 'Continue', 'onclick': this.onContinue.bind(this) }, this.buttonsContainer, null);

        this.cancelBtn = div({ 'classList': 'newPostComponent_cancel_btn', 'innerHTML': 'Cancel', 'onclick': this.onCancel.bind(this) }, this.buttonsContainer, null);
    }


    onContinue() {

        const title = this.title.value;
        const body = this.body.value;

        // if (title == '') {
        //     this.titleError.classList.remove('hidden');
        //     this.title.classList.add('newPostComponent_inputError');
        // } else {
        //     this.title.Error
        // }

        // if (body == '') {
        //     this.bodyError.classList.remove('hidden');
        // } else {

        // }


        if (title !== '' && body !== '') {
            const post = new Post(-1, this.model.id, title, body)
            this.appManager.netManager.addNewPost(post, this.model);
        }
    };

    onCancel() {
        this.hide();
    };

}