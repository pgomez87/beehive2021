class MainComponent extends Component {
    constructor(parent, className, appManager) {
        super(parent, className, appManager);
        this.navbar = new NavbarComponent(this.container, 'navbarComponent', this.appManager)
        this.content = div({ 'className': 'mainComponent_content' }, this.container)
        this.beesComponent = null;
        // this.fade = null;
        this.postListComponent = null;
        // this.navbar.update();
    }

    showContent() {
        var height = (this.container.clientHeight - (this.appManager.uiManager.navbarHeight + 5)) + 'px';
        this.content.style.height = height;
        this.beesComponent = new BeesComponent(this.content, 'beesComponent', this.appManager)
        this.postListComponent = new PostListComponent(this.content, 'postListComponent', this.appManager);
        // this.fade = div({ 'className': 'mainComponent_fade' })

        // this.beesComponent2 = new BeesComponent(this.content, 'beesComponent', this.appManager)
        // this.beesComponent3 = new BeesComponent(this.content, 'beesComponent', this.appManager)

        // this.beesComponent.container.style.height = height;
        // this.beesComponent2.container.style.height = height;
        // this.beesComponent3.container.style.height = height;
    }

    showBeesComponent() {
        this.navbar.update();
        this.hideFace();
        this.beesComponent.show();
        this.showPostListComponent.moveOut();
    }


    showPostListComponent(model) {
        this.showFade();
        this.appManager.appState = this.appManager.appState_PostList;
        this.postListComponent.showAlbumList(model);
        this.navbar.update();
    }

    showAlbumListComponent(model) {
        this.showFade();
        this.appManager.appState = this.appManager.appState_AlbumList;
        this.albumListComponent.showAlbumList(model);
        this.navbar.update();
    }


    showTodoListComponent(model) {
        this.showFade();
        this.appManager.appState = this.appManager.appState_TodoList;
        this.todoListComponent.showTodoList(model);
        this.navbar.update();
    }


    showFade() {
        gsap.to(this.fade, { duration: 0.25, opacity: 0.75 });
    }

    hideFade() {
        gsap.to(this.fade, { duration: 0.75, opacity: 0 })
    }

    showNewPostComponent() {
        this.postListComponent.showNewPostComponent();
    }
}