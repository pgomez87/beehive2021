class ProgressComponent extends Component {
    constructor(parent, className, appManager) {
        super(parent, className, appManager);
        this.fade = div({ 'className': 'progressComponent_fade' }, this.container, null);
        this.textContainer = div({ 'className': 'progressComponent_textContainer' }, this.container, null);
        this.text = p({ 'innerHTML': 'Progress Component', 'className': 'progressComponent_text' }, this.textContainer, null);
        this.hide();
    }

    showProccesingError(text) {
        this.text.innerHTML = text;
        this.textContainer.classList.add('progressComponent_error');
        this.textContainer.classList.remove('progressComponent_ok');
        this.textContainer.classList.remove('progressComponent_processing');
        this.moveOut();
    }


    showProcessing(text) {
        this.text.innerHTML = text;
        this.textContainer.classList.remove('progressComponent_error');
        this.textContainer.classList.remove('progressComponent_ok');
        this.textContainer.classList.add('progressComponent_processing');
        this.show();
    }


    showProcessingOK(text) {
        this.text.innerHTML = text;
        this.textContainer.classList.remove('progressComponent_error');
        this.textContainer.classList.add('progressComponent_ok');
        this.textContainer.classList.remove('progressComponent_processing');
    }


    moveIn() {
        gsap.to(this.fade, { delay: 0.25, duration: 0.5, opacity: 0.75, onComplete: this.completeMoveIn.bind(this) });
        gsap.to(this.textContainer, { delay: 0.25, duration: 0.5, top: 0 });
    }

    completeMoveIn() {

    }

    moveOut() {
        gsap.to(this.fade, { delay: 2, duration: 0.5, opacity: 0, onComplete: this.completeMoveout.bind(this) });
        gsap.to(this.textContainer, { delay: 0.25, duration: 0.5, top: -100 });
    }

    completeMoveout() {
        this.hide();
    }


}