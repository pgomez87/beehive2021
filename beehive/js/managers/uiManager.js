class UIManager {
    constructor(appManager) {
        this.appManager = appManager;

        var style = getComputedStyle(document.body);
        this.navbarHeight = parseInt(style.getPropertyValue('--navbar-height'),10);

        this.mainComponent = new mainComponent(document.body, 'mainComponent', this.appManager)
        this.loadingComponent = new LoadingComponent(document.body, 'loadingComponent', this.appManager)
    }

    showBees(){
        this.loadingComponent.hide();
        this.mainComponent.showContent();
    }
}