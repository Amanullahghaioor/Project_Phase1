import { Time } from "@angular/common";

export class Meeting {
    constructor(
      public topic: string,
      public NumberOfPeople: number,
      public startTime: Date)
      {}
}
