class AppManager {
    constructor() {
        console.log('AppManager running!');

        this.netManager = new NetManager(this);
        this.dataManager = new DataManager(this);
        this.uiManager = new UIManager(this);
        this.netManager.fetchBees();


        this.appState_Bees = 1;
        this.appState_PostList = 2;
        this.appState_AlbumList = 3;
        this.appState_TodoList = 4;

        this.appState = this.appState; //2 for PostList, 3 for AlbumList
    }
}