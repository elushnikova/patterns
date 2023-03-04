const File = require('./File');
const Directory = require('./Directory');
const Item = require('./Item');

describe('File system', () => {
  let weekendPlan;
  let budget;
  let receipt;

  beforeAll(() => {
    weekendPlan = new File('weekend.todo', '- mix dough\n- bake bread');
    budget = new File('budget.csv', 'rent,30000\nbills,5000\nfood,10000');
    receipt = new File(
      'receipt.txt',
      'Thank you for your purchase! Total price is 500.',
    );
  });

  it('forbids to query size of abstract item', () => {
    const item = new Item();
    const invalidCall = () => item.size;
    expect(invalidCall).toThrow();
  });

  it('calculates size of empty file', () => {
    const emptyFile = new File('foo', '');
    expect(emptyFile.size).toBe(3); // 3 + 0
  });

  it('calculates size of various files', () => {
    expect(weekendPlan.size).toBe(36); // 12 + 24
    expect(budget.size).toBe(42); // 10 + 32
    expect(receipt.size).toBe(59); // 11 + 48
  });

  it('calculates size of empty directory', () => {
    const emptyDir = new Directory('bar');
    expect(emptyDir.size).toBe(3); // 3 + 0
  });

  it('calculates size of files in simple directory', () => {
    const finances = new Directory('finances', [budget, receipt]);
    expect(finances.size).toBe(109); // 8 + 42 + 59
  });

  it('calculates total size of files in directory tree', () => {
    const finances = new Directory('finances', [budget, receipt]);
    const documents = new Directory('docs', [weekendPlan, finances]);
    expect(documents.size).toBe(149); // 4 + 36 + 109
  });
});
