class NavbarComponent extends Component {
    constructor(parent, className, appManager) {
        super(parent, className, appManager);

        this.backBtn = new NavbarButtonComponent(this.container, 'navbarButtonComponent navbarComponent_backBtn_position', this.appManager, this.onBackBtn.bind(this), 'backIcon.svg')

        // this.title = p({ 'className': 'navbarComponent_title', 'innerHTML': 'TITLE' }, this.container, null)

        this.addBtn = new NavbarButtonComponent(this.container, 'navbarButtonComponent navbarComponent_addBtn_position', this.appManager, this.onAddBtn.bind(this), 'addIcon.svg')
    }

    onBackBtn() {
        this.appManager.uiManager.showBeesComponent();
    }

    onAddBtn() {
        switch (this.appManager.appState) {
            case 2:
                this.appManager.uiManager.showNewPostComponent();
                break;

            case 4:
                break;
        }
    }


    update(model) {
        this.model = model;
        switch (this.appManager.appState) {
            case 1:
                this.addBtn.hide();
                this.backBtn.hide();
                break;

            case 2:
                if (model.isOwner) {
                    this.addBtn.show();
                }
                this.backBtn.show();
                break;

            case 3:
                this.backBtn.show();
                break;

            case 4:
                this.backBtn.show();
                break;
        }
    }

}