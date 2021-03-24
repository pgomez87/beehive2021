class PostComponent extends Component {
    constructor(parent, className, appManager, model) {
        super(parent, className, appManagerm, model);

        this.title = p({ 'className': 'postComponent_title', 'innerHTML': this.model.title })
    }



}