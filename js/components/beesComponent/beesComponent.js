class BeesComponent extends Component {
    constructor(parent, className, appManager, model) {
        super(parent, className, appManager, model);
        this.addBees();
    }

    addBees() {
        const bees = this.appManager.dataManager.bees;
        bees.forEach(model => {
            const beeComponent = new BeeComponent(this.container, 'beeComponent', this.appManager, model)
        });
    }
}