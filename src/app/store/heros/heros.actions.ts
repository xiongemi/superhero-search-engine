export class GetSuperheros {
  static readonly type = '[Superheros] Get';
}

export class SearchSuperherosByName {
  static readonly type = '[Superheros] Search by Name';

  constructor(public name: string) {}
}
