class PostComponent extends Component {
    constructor(parent, className, appManager, model) {
        super(parent, className, appManager, model);

        console.log(this.model);

        this.title = p({ 'className': 'postComponent_title', 'innerHTML': this.model.title }, this.container, null);

        this.body = p({ 'className': 'postComponent_body', 'innerHTML': this.model.body }, this.container, null);

        this.addCommentBtn = div({ 'className': 'postComponent_addComment_button', 'innerHTML': 'ADD COMMENT', 'onclick': this.onAddCommentBtn.bind(this) }, this.container, null);

        this.newCommentComponent = new NewCommentComponent(this.container, 'newCommentComponent hidden', this.appManager, model, this)

        this.commentsContainer = div({ 'className': 'postComponent_comments_container' }, this.container, null);

        this.update();

    }



    onAddCommentBtn() {
        this.addCommentBtn.classList.add('hidden');
        this.newCommentComponent.container.classList.remove('hidden');
    }

    showAddCommentBtn() {
        this.addCommentBtn.classList.remove('hidden');
    }

    update() {
        this.commentsContainer.innerHTML = '';
        this.model.comments.forEach(comment => {
            let commentComponent = new CommentComponent(this.commentsContainer, 'commentComponent', this.appManager, comment)
        });
    }
}