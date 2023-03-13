const uuid = require('uuid');

const mockProducts = [
  {
    id: uuid.v4(),
    title: 'To Kill a Mockingbird',
    description:
      'The story, told by the six-year-old Jean Louise Finch, takes place during three years (1933–35) of the Great Depression in the fictional town of Maycomb, Alabama, the seat of Maycomb County.',
    price: 9.99,
  },
  {
    id: uuid.v4(),
    title: 'Jane Eyre',
    description:
      'The novel is a first-person narrative from the perspective of the title character. Its setting is somewhere in the north of England, late in the reign of George III (1760–1820).',
    price: 12.99,
  },
  {
    id: uuid.v4(),
    title: 'Sense and Sensibility',
    description:
      "Henry Dashwood, his second wife, and their three daughters live for many years with Henry's wealthy bachelor uncle at Norland Park, a large country estate in Sussex.",
    price: 12.99,
  },
  {
    id: uuid.v4(),
    title: 'Pride and Prejudice',
    description:
      'In the early 19th century, the Bennet family live at their Longbourn estate, situated near the village of Meryton in Hertfordshire, England.',
    price: 11.99,
  },
  {
    id: uuid.v4(),
    title: 'The Picture of Dorian Gray',
    description:
      "On a beautiful summer day in Victorian England, Lord Henry Wotton, an opinionated man, is observing the sensitive artist Basil Hallward painting the portrait of Dorian Gray, a handsome young man who is Basil's ultimate muse.",
    price: 10.99,
  },
];

const mockStocks = [
  {
    id: uuid.v4(),
    product_id: mockProducts[0].id,
    count: 20,
  },
  {
    id: uuid.v4(),
    product_id: mockProducts[1].id,
    count: 25,
  },
  {
    id: uuid.v4(),
    product_id: mockProducts[2].id,
    count: 12,
  },
  {
    id: uuid.v4(),
    product_id: mockProducts[3].id,
    count: 10,
  },
  {
    id: uuid.v4(),
    product_id: mockProducts[4].id,
    count: 18,
  },
];

module.exports = { mockProducts, mockStocks };
