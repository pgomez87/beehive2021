class mainComponent extends Component {
    constructor(parent, className, appManager){
        super(parent, className, appManager);
        this.navbar = new NavbarComponent(this.container, 'navbarComponent', this.appManager)
        this.content = div({'className' : 'mainComponent_content'}, this.container, null)
        this.beesComponent = null;
    }

    showContent(){
        this.content.style.height = (this.container.clientHeight - this.appManager.uiManager.navbarHeight) + 'px';
        this.beesComponent = new BeesComponent(this.content, 'beesComponent', this.appManager)
        this.beesComponent = new BeesComponent(this.content, 'beesComponent', this.appManager)
    }
}