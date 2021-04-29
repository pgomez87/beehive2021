class AlbumListComponent extends Component {
    constructor(parent, className, appManager) {
        super(parent, className, appManager);
        this.container.style.transform = 'translateX(' + window.innerWidth + 'px)';
        this.albums = [];
    }

    showAlbumList(model) {
        this.albums = [];
        this.container.innerHTML = '';

        this.show();

        this.container.scrollTop = 0;
        this.model = model;

        this.model.albums.forEach(album => {
            let albumComponent = new AlbumComponent(this.container, 'albumComponent', this.appManager, album);
            this.albums.push(albumComponent);
        });
    }

}