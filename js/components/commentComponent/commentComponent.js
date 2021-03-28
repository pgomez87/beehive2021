class CommentComponent extends Component {
    constructor(parent, className, appManager, model) {
        super(parent, className, appManager, model);

        this.name = p({ 'className': 'commentComponent_name', 'innerHTML': this.model.name }, this.container, null);


        this.body = p({ 'className': 'commentComponent_body', 'innerHTML': this.model.body }, this.container, null);

        const bee = this.appManager.dataManager.getBeeById(this.model.beeId);


        if (bee !== null) {

            this.bee = div({ 'className': 'commentComponent_bee' }, this.container, null);

            this.avatar = img({ 'src': bee.avatar, 'className': 'commentComponent_bee_avatar' }, this.bee, null);

            this.email = p({ 'className': 'commentComponent_bee_email', 'innerHTML': this.bee.email }, this.bee, null);

        }


    }
}