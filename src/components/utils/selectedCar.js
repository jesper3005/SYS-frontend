class SelectedCar {
    constructor() {
        this.SelectedCar = "";
        this.SelectedCompany = "";
    }
    getSelectedCar = () => {
        return this.SelectedCar;
    }

    setSelectedCar = (regNo) => {
        this.SelectedCar = regNo;
    }
}

const Selected = new SelectedCar();

export default Selected;

