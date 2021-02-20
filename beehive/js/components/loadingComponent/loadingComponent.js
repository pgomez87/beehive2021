class LoadingComponent extends Component {
    constructor(parent, className, appManager){
        super(parent, className, appManager);

        const text = p({'className' : 'loadingComponent_text', 'innerHTML' : 'Loading...'}, this.container, null);
    }
}