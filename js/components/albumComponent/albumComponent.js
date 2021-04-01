class AlbumComponent extends Component {
    constructor(parent, className, appManager, model) {
        super(parent, className, appManager, model);
        this.title = p({ 'innerHTML': this.model.title }, this.container, null);
    }
}