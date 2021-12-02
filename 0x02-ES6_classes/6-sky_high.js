import Building from "./5-building";

export default class SkyHighBuilding {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // getter
  get floors() {
    return this._floors;
  }

  // setter
  set floors(Floors) {
    this._floors = Floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
