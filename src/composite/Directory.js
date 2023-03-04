const Item = require('./Item');

/**
 * @implements {Item}
 */
class Directory extends Item {
  /**
   * @param {string} name
   * @param {Item[]} children
   */
  constructor(name, children = []) {
    super(name);
    this.children = children;
  }

  /**
   * @param {number} total
   * @param {Item} item
   * @returns {number}
   */
  static toFileSize(total, item) {
    return total + item.size;
  }

  get size() {
    return this.name.length + this.children.reduce(Directory.toFileSize, 0);
  }
}

module.exports = Directory;
