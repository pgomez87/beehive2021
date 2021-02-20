class Component {
    constructor(parent, className, appManager){
        this.parent = parent;
        this.appManager = appManager;
    
        this.container = div({'className' : className}, this.parent, null)
    }

    hide(){
        this.container.hidden = true;
        this.container.classList.add('hidden')
    }

    show(){
        this.container.hidden = false;
        this.container.classList.remove('hidden')
    }
}