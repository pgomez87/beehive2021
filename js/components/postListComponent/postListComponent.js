class PostListComponent extends Component {
    constructor(parent, className, appManager) {
        super(parent, className, appManager);
        this.container.style.transform = 'translateX(' + window.innerWidth + ' px )';
        // this.posts = [];
        // this.newPostComponent = null;
    }

    showPostList(model) {
        //     this.posts = [];
        //     this.container.innerHTML = '';

        this.show();
        console.log(model);

        //     this.newPostComponent = null;
        //     this.newPostComponent = new NewPostComponent(this.container, 'newPostComponent', this.appManager);

        //     this.container.scrollTop = 0;
        //     this.model = model;
        //     this.model.posts.forEach(post => {
        //         let postComponent = new postComponent(this.container, 'postComponent', this.appManager, post);
        //         this.posts.push(postComponent);
        //     });
    }

    // showNewPostComponent() {
    //     if (this.newPostComponent !== null) {
    //         this.newPostComponent.show();
    //     }
    // }



}