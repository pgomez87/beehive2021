class Component {
    constructor(parent, className, appManager) {
        this.parent = parent;
        this.appManager = appManager;

        this.container = div({ 'className': className }, this.parent, null)
    }

    hide() {
        this.container.hidden = true;
        this.container.classList.add('hidden')
    }

    show() {
        this.container.hidden = false;
        this.container.classList.remove('hidden')
    }


    moveIn() {
        gsap.to(this.container, { duration: 0.5, x: 0 });
    }

    moveOut(callback) {
        gsap.to(this.container, { duration: 1, x: window.innerWidth, onComplete: this.hide.bind(this) });
    }
}