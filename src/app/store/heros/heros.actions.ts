import { Navigate } from '@ngxs/router-plugin';

export class GetSuperheros {
  static readonly type = '[Heros] Get';
}

export function randomHeroDetailsActionCreator(id: number = Math.ceil(Math.random() * 562)) {
  return new Navigate(['/details', { id }]);
}
