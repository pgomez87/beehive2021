class DataManager {
    constructor(appManager) {
        this.appManager = appManager;
        this.bees = [];
    }

    getBeeById(id) {
        for (let i = 0; i < this.bees.length; i++) {
            const bee = this.bees[i];
            if (bee.id === id) {
                return bee;
            }

        }
        return null;
    }
}