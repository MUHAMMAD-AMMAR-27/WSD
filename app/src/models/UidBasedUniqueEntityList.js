/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-dynamic-delete */

export class UidBasedUniqueEntityList {
  constructor(initial = []) {
    this.itemsByUid = {};

    initial.forEach((item) => {
      this.push(item);
    });
  }

  push(item) {
    if (!item?.uid) return;

    if (!(item.uid in this.itemsByUid)) {
      this.itemsByUid[item.uid] = { ...item };
    }
  }

  set(item) {
    if (!item?.uid) return;

    this.itemsByUid[item.uid] = { ...item };
  }

  find(uid) {
    return this.itemsByUid[uid] ?? null;
  }

  has(uid) {
    return uid in this.itemsByUid;
  }

  remove(uid) {
    delete this.itemsByUid[uid];
  }

  values() {
    return Object.values(this.itemsByUid);
  }

  keys() {
    return Object.keys(this.itemsByUid);
  }

  clear() {
    this.itemsByUid = {};
  }

  size() {
    return Object.keys(this.itemsByUid).length;
  }

  toObject() {
    return this.itemsByUid;
  }
}
