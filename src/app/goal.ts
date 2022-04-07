export class Goal {
  showDescription: boolean;
  constructor(
    //public keyword is an access modifier, thus class properties are available any where outisde the class
    public id: number,
    public name: string,
    public description: string
  ) {
    this.showDescription = false;
  }
}
