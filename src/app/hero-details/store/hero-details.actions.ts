export class GetHeroById {
  static readonly type = '[Hero Details] Get by Id';

  constructor(public id: number) {}
}
