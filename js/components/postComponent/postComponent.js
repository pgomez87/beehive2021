class PostComponent extends Component {
    constructor(parent, className, appManager, model) {
        super(parent, className, appManagerm, model);


        this.title = p({ 'className': 'postComponent_title', 'innerHTML': this.model.title }, this.container, null);

        this.body = p({ 'className': 'postComponent_body', 'innerHTML': this.model.body }, this.container, null);

        this.addCommentBtn = div({ 'className': 'postComponent_addComment_button', 'innerHTML': 'ADD COMMENT' }, this.container, null);


        this.commentsContainer = div({ 'className': 'postComponent_comments_container' }, this.container, null);


        this.model.comments.forEach(comment => {
            let commentComponent = new CommentComponent(this.commentsContainer, 'commentComponent', this.appManager, comment);
        });
    }



}