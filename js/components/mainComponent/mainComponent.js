class MainComponent extends Component {
    constructor(parent, className, appManager) {
        super(parent, className, appManager);
        this.navbar = new NavbarComponent(this.container, 'navbarComponent', this.appManager);
        this.content = div({ 'className': 'mainComponent_content' }, this.container);
        this.beesComponent = null;
        this.fade = null;
        this.postListComponent = null;
        this.albumListComponent = null;
        this.todoListComponent = null;
    }

    showContent() {
        var height = (this.container.clientHeight - (this.appManager.uiManager.navbarHeight + 5)) + 'px';

        this.content.style.height = height;

        this.beesComponent = new BeesComponent(this.content, 'beesComponent', this.appManager)

        this.fade = div({ 'className': 'mainComponent_fade' }, this.content, null);

        this.postListComponent = new PostListComponent(this.content, 'postListComponent', this.appManager);

        this.albumListComponent = new AlbumListComponent(this.content, 'albumListComponent', this.appManager);

        this.todoListComponent = new TodoListComponent(this.content, 'todoListComponent', this.appManager);

        this.navbar.update();

    }


    showBeesComponent() {
        this.hideFade();
        this.beesComponent.show();

        switch (this.appManager.appState) {
            case 1:

                break;
            case 2:
                this.postListComponent.moveOut();
                break;
            case 3:
                this.albumListComponent.moveOut();
                break;
            case 4:
                this.todoListComponent.moveOut();
                break;

            default:
                break;
        }


        this.appManager.appState = this.appManager.appState_Bees;
        this.navbar.update();
    }

    showPostListComponent(model) {
        this.showFade();
        this.appManager.appState = this.appManager.appState_PostList;
        this.postListComponent.show(model);
        this.navbar.update();
    }

    showAlbumListComponent(model) {
        this.showFade();
        this.appManager.appState = this.appManager.appState_AlbumList;
        this.albumListComponent.show(model);
        this.navbar.update();
    }


    showTodoListComponent(model) {
        this.showFade();
        this.appManager.appState = this.appManager.appState_TodoList;
        this.todoListComponent.show(model);
        this.navbar.update();
    }


    showFade() {
        gsap.to(this.fade, { duration: 0.25, opacity: 0.75 });
    }

    hideFade() {
        gsap.to(this.fade, { duration: 0.75, opacity: 0 });
    }

    showNewPostComponent() {
        this.postListComponent.showNewPostComponent();
    }
}