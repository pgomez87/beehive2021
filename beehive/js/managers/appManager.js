class AppManager {
    constructor() {
        console.log('AppManager running!');

        this.netManager = new NetManager(this);
        this.dataManager = new DataManager(this);
        this.uiManager = new UIManager(this);

        this.netManager.downloadData();
    }
}