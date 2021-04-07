class AlbumComponent extends Component {
    constructor(parent, className, appManager, model) {
        super(parent, className, appManager, model);

        this.title = p({ 'className': 'albumComponent_title', 'innerHTML': this.model.title }, this.container, null);

        // this.commentsContainer = div ({'className' : 'postComponent_comments_container'}, this.container, null);

        // this.model.comments.forEach(comment => {
        //     let commentComponent = new CommentComponent(this.commentsContainer, 'commentComponent', this.appManager, comment);
        // });

    }
}