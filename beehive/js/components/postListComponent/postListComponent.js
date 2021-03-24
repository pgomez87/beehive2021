class PostListComponent extends Component {
    constructor(parent, className, appManager, model) {
        super(parent, className, appManager, model);
        //this.addPosts();
        this.hide();
        this.container.style.transform = 'translateX(' + innerWidth + ' px )';

    }

    showPostList(model) {
        this.show();
        console.log(model);
    }


}