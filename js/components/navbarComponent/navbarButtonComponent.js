class NavbarButtonComponent extends Component {
    constructor(parent, className, appManager, callback, icon) {
        super(parent, className, appManager);
        this.callback = callback;

        this.icon = img({ 'src': ('images/' + icon), 'className': 'navbarButtonComponent_icon' },
            this.container, null);

        this.container.onclick = this.onClick.bind(this);
    }

    onClick(e) {
        this.callback();
    };

}