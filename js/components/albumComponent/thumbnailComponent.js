class ThumbnailComponent extends Component {
    constructor(parent, className, appManager, model) {
        super(parent, className, appManager, model);

        this.image = img({ 'src': model.thumbnailUrl, 'className': 'thumbnailComponent_image' }, this.container, null)
        this.container.onclick = this.onClick.bind(this);

    }

    onClick(e) {
        console.log(this.model);
    }
}