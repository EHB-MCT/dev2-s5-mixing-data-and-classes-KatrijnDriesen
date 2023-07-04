"use strict";

export class Joke {
    constructor (setup, delivery, flags){
        this.partOne = setup;
        this.partTwo = delivery;
        this.explicitFlags = flags;
        //html
    }
    get htmlString() {
        return `
        <div class="item">
        <div>
          <div class="item-field">${this.partOne}</div>
          <div class="item-field">${this.partTwo}</div>
        </div>
      </div>`;
    }
}