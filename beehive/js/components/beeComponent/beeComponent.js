class BeeComponent extends Component {
    constructor(parent, className, appManager, model) {
        super(parent, className, appManager, model);
        this.addUI();
        this.name = null;
        this.email = null;
        this.site = null;
    }

    addUI() {


        this.avatarContainer = div({ 'className': 'beeComponent_avatar_container' }, this.container, null);
        this.avatar = img({ 'src': this.model.avatar, 'className': 'beeComponent_avatar' }, this.container, null);

        this.infoContainer = div({ 'className': 'beeComponent_info_container' }, this.container, null);

        this.buttonsContainer = div({ 'className': 'beeComponent_buttons_container' }, this.container, null);

        this.name = p({ 'innerHTML': this.model.name, 'className': 'beeComponent_name' }, this.infoContainer, null);

        this.email = p({ 'innerHTML': `${this.model.username} / ${this.model.email}`, 'className': 'beeComponent_email' }, this.infoContainer, null);

        this.site = p({ 'innerHTML': this.model.website, 'className': 'beeComponent_website' }, this.infoContainer, null);

        this.postsBtn = new BeeButtonComponent(this.buttonsContainer, '', this.appManager, this.onPostsBtn.bind(this), this.model.posts.length, 'postsIcon.png')
        this.albumsBtn = new BeeButtonComponent(this.buttonsContainer, '', this.appManager, this.onAlbumsBtn.bin(this), this.model.albumsBtn.length, 'albumsIcon.png')
        this.todosBtn = new BeeButtonComponent(this.buttonsContainer, '', this.appManager, this.onTodosBtn.bin(this), this.model.todos.length, 'todosIcon.png')
    }

    onPostsBtn() {

    }

    onAlbumsBtn() {

    }

    onTodosBtn() {

    }
}