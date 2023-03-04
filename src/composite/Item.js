/**
 * Generic item in file system
 * @interface
 */
class Item {
  /**
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * @return {number}
   */
  // eslint-disable-next-line class-methods-use-this
  get size() {
    throw new Error('Must be implemented by a subclass');
  }
}

module.exports = Item;
