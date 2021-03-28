class UIManager {
    constructor(appManager) {
        this.appManager = appManager;

        var style = getComputedStyle(document.body);

        this.navbarHeight = parseInt(style.getPropertyValue('--navbar-height'), 10);

        this.mainComponent = new MainComponent(document.body, 'mainComponent', this.appManager)

        this.loadingComponent = new LoadingComponent(document.body, 'loadingComponent', this.appManager)
    }

    showUI() {
        this.loadingComponent.hide();
        this.mainComponent.showContent();
    }

    showBeesComponent() {
        this.mainComponent.showBeesComponent();
    }

    showPostListComponent(model) {
        this.mainComponent.showPostListComponent(model);
    }

    showAlbumListComponent(model) {
        this.mainComponent.showAlbumListComponent(model);
    }

    showTodoListComponent(model) {
        this.mainComponent.showTodoListComponent(model);
    }

    showNewPostComponent() {
        this.mainComponent.showNewPostComponent();
    }
}