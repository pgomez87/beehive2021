class BeeButtonComponent extends Component {
    constructor(parent, className, appManager, callback, counter, icon) {
        super(parent, className, appManager);
        this.callback = callback;
        this.counter = counter;

        var counterClass = 'beeButtonComponent_counter';

        if (this.counter === 0) {
            counterClass = 'beeButtonComponent_counter hidden'
        }

        this.counterContainer = div({ 'className': counterClass, 'innerHTML': this.counter }, this.container, null);
        this.icon = img({ 'src': ('images/' + icon), 'className': 'beeButtonComponent_icon' }, this.container, null);

        this.container.onclick = this.onClick.bind(this);
    }

    onClick(e) {
        console.log(e);
        this.callback();
    };

}