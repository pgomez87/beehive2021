class NewPostComponent extends Component {
    constructor(parent, className, appManager, model) {
        super(parent, className, appManager);
        this.model = model;
        this.titleLabel = p({ 'classList': 'newPostComponent_label', 'innerHTML': 'Title' }, this.container, null)
        this.title = input({ 'classList': 'newPostComponent_title', 'placeholder': 'Title' }, this.container, null);
        this.body = input({ 'classList': 'newPostComponent_body', 'placeholder': 'Body' }, this.container, null);

        this.buttonsContainer = div({ 'classList': 'newPostComponent_buttons_container' }, this.container.null);
        this.continueBtn = div({ 'classList': 'newPostComponent_continue_btn', 'innerHTML': 'Continue', 'onclick': this.onContinue.bind(this) }, this.buttonsContainer, null);
        this.cancelBtn = div({ 'classList': 'newPostComponent_cancel_btn', 'innerHTML': 'Cancel', 'onclick': this.onCancel.bind(this) }, this.buttonsContainer, null);
    }


    // onContinue() {

    //     const title = this.title.value;
    //     const body = this.body.value;

    //     if (title / '' && )
    //         const post = new Post(-1, this.model.id, 'TITLE', 'BODY')
    //     this.appManager.netManager.addNewPost(post, this.model);
    // };

    // onCancel() {
    //     this.hide();
    // };

}