class mainComponent extends Component {
    constructor(parent, className, appManager){
        super(parent, className, appManager);
        this.navbar = new NavbarComponent(this.container, 'navbarComponent', this.appManager)
        this.content = div({'className' : 'mainComponent_content'}, this.container, null)
        this.beesComponent = null;
    }

    showContent(){
        var height = (this.container.clientHeight - (this.appManager.uiManager.navbarHeight + 5)) + 'px';
        this.content.style.height = height;
        this.beesComponent = new BeesComponent(this.content, 'beesComponent', this.appManager)
        // this.beesComponent2 = new BeesComponent(this.content, 'beesComponent', this.appManager)
        // this.beesComponent3 = new BeesComponent(this.content, 'beesComponent', this.appManager)

        // this.beesComponent.container.style.height = height;
        // this.beesComponent2.container.style.height = height;
        // this.beesComponent3.container.style.height = height;
    }
}