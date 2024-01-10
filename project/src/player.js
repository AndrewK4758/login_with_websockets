export class Player {
  constructor(name, id) {
    (this.playerName = name), (this.playerOrder = undefined), (this.playerAvatar = undefined);
  }

  get name() {
    return this.playerName;
  }

  get order() {
    return this.playerOrder;
  }

  get avatar() {
    return this.playerAvatar;
  }

  set avatar(avatar) {
    this.playerAvatar = avatar;
  }
}
