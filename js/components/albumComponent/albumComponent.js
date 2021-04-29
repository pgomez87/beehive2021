class AlbumComponent extends Component {
    constructor(parent, className, appManager, model) {
        super(parent, className, appManager, model);

        this.title = p({ 'className': 'albumComponent_title', 'innerHTML': this.model.title }, this.container, null);

        this.downIcon = img({ 'src': 'images/downIcon.svg', 'className': 'albumComponent_down_icon hidden', 'onclick': this.toogleAlbum.bind(this) }, this.container, null);

        this.upIcon = img({ 'src': 'images/upIcon.svg', 'className': 'albumComponent_up_icon', 'onclick': this.toogleAlbum.bind(this) }, this.container, null);

        this.thumbnailsContainer = div({ 'className': 'albumComponent_thumbnailsContainer' }, this.container, null);

        this.model.photos.forEach(photo => {
            const thumbnailComponent = new ThumbnailComponent(this.thumbnailsContainer, 'thumbnailComponent', this.appManager, photo);
        });

        this.isAnimating = false;
        this.isMinimized = false;
        this.minimizedHeight = 110;
        this.maximizedHeight = this.thumbnailsContainer.scrollHeight;

    }


    toogleAlbum() {
        if (this.isAnimating) return;

        this.isAnimating = true;
        var height = this.isMinimized ? this.maximizedHeight : this.minimizedHeight;
        this.isMinimized = !this.isMinimized;


        this.isMinimized ? this.downIcon.classList.remove('hidden') : this.downIcon.classList.add('hidden');
        this.isMinimized ? this.upIcon.classList.add('hidden') : this.upIcon.classList.remove('hidden')

        gsap.to(this.thumbnailsContainer, {
            duration: 0.5,
            height: height,
            ease: 'power2.inout',
            onComplete: this.animationComplete.bind(this)
        });
    }

    animationComplete() {
        this.isAnimating = false;
    }
}