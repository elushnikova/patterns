const Item = require('./Item');

/**
 * @implements {Item}
 */
class File extends Item {
  /**
   * @param {string} name
   * @param {string} data
   */
  constructor(name, data) {
    super(name);
    this.data = data;
  }

  get size() {
    return this.name.length + this.data.length;
  }
}

module.exports = File;
