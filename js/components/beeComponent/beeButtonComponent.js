class BeeButtonComponent extends Component {
    constructor(parent, className, appManager, callback, icon) {
        super(parent, className, appManager);
        this.callback = callback;
        this.counter = this.counter;

        var counterClass = 'beeButtonComponent_counter'
        if (counterClass === 0) {
            var counterClass = 'beeButtonComponent_counter hidden'
        }

        this.counterContainer = div({ 'className': counterClass, 'innerHTML': this.counter }, this.container, null);
        this.icon = img({ 'src': ('images/' + icon), 'className': 'beeButtonComponent_icon' },
            this.container, null);

        this.container.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.callback();
    };

}