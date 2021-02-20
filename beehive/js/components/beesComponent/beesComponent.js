class BeeComponent extends Component {
    constructor(parent, className, appManager, model){
        super(parent, className, appManager, model);
        this.name = null;
        this.email = null;
        this.website = null;
    }


    adUI(){
        this.infoContainer = div({'className' : 'beeComponent_info_container'}, this.container, null);
        this.buttonsContainer = div({'className' : 'beeComponent_buttons_container'}, this.container, null);

        this.name = p({'innerHTML' : this.model.name, 'className': 'beeComponent_name'}, this.infocontainer, null);
        this.email = p({'innerHTML' : `${this.model.username} / ${this.model.email}`, 'className' : 'beeComponent_email'}, this.infocontainer, null);
        this.site = p({'innerHTML' : this.model.website, 'className' : 'beeComponent_website'}, this.infoContainer, null);
    }
}


