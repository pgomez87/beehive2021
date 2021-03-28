class Component {
    constructor(parent, className, appManage, model) {
        this.parent = parent;
        this.appManager = appManager;
        this.model = model;
        this.container = div({ 'className': className }, this.parent, null);
    }

    hide() {
        this.container.hidden = true;
        this.container.classList.add('hidden');
    }

    show() {
        this.container.hidden = false;
        this.container.classList.remove('hidden')
        this.moveIn();
    }


    moveIn() {
        gsap.to(this.container, { duration: 0.5, x: 0, ease: 'power2.inOut' });
    }

    moveOut() {
        gsap.to(this.container, { duration: 0.25, x: window.innerWidth, onComplete: this.hide.bind(this), ease: 'power2.inOut' });
    }
}