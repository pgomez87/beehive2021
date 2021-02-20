class UIManager {
    constructor(appManager) {
        this.appManager = appManager;

        this.mainComponent = new mainComponent(document.body, 'mainComponent', this.appManager)
        this.loadingComponent = new LoadingComponent(document.body, 'loadingComponent', this.appManager)
    }

    showBees(){
        this.loadingComponent.hide();
    }
}