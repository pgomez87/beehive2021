class NavbarComponent extends Component {
    constructor(parent, className, appManager) {
        super(parent, className, appManager);

        this.backBtn = new NavbarButtonComponent(this.container, 'navbarButtonComponent')


        this.addBtn = new NavbarButtonComponent(this.container, 'navbarButtonComponent navbarComponent_')
    }

    onBackBtn() {
        this.appManager.uiManager.showBeesComponent();
    }

    onAddBtn() {}


    update() {
        switch (this.appManager.appState) {
            case 1:
                this.backBtn.hide();
                break;

            case 2:
                this.backBtn.hide();
                break;
        }
    }

}