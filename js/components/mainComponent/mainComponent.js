class mainComponent extends Component {
    constructor(parent, className, appManager) {
        super(parent, className, appManager);
        this.navbar = new NavbarComponent(this.container, 'navbarComponent', this.appManager)
        this.content = div({ 'className': 'mainComponent_content' }, this.container, null)
        this.beesComponent = null;
        this.fade = null;
        this.postListComponent = null;
        this.navbar.update();
    }

    showContent() {
        var height = (this.container.clientHeight - (this.appManager.uiManager.navbarHeight + 5)) + 'px';
        this.content.style.height = height;
        this.beesComponent = new BeesComponent(this.content, 'beesComponent', this.appManager)
        this.fade = div({ 'className': 'mainComponent_fade' })

        // this.beesComponent2 = new BeesComponent(this.content, 'beesComponent', this.appManager)
        // this.beesComponent3 = new BeesComponent(this.content, 'beesComponent', this.appManager)

        // this.beesComponent.container.style.height = height;
        // this.beesComponent2.container.style.height = height;
        // this.beesComponent3.container.style.height = height;
    }

    showBeesComponent() {
        this.navbar.update();
        this.hideFace();
        this.beesComponent.show();
        this.showPostListComponent.moveOut();
    }

    showPostListComponent(model) {
        console.log(model);
        this.showPostListComponent.show();
    }


    // showFade() {
    //     gsap.to(this.fade, ({ duration: 0.25, opacity: 0.75 });
    //     }

    //     hideFade() {
    //         gsap.to(this.fade, ({ duration: 0.75, opacity: 0 })


}