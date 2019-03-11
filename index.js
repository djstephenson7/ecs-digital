const data = [
  'parent1/parent1child',
  'parent1/parent1child2',
  'parent2/parent2child',
  'parent2/parent2child2',
  'parent1/parent1child3',
  'parent3',
  'parent3/parent3child1',
  'parent4',
];

const obj = [
  { title: 'parent1', data: 1 },
  { title: 'parent2', data: 2 },
  { title: 'parent3', data: 3 },
];

const parent1 = data.filter(data => data.includes('parent1/')).map(d => d.replace('parent1/', ''));
const parent2 = data.filter(data => data.includes('parent2/')).map(d => d.replace('parent2/', ''));
const parent3 = data.filter(data => data.includes('parent3/')).map(d => d.replace('parent3/', ''));


function createMenuData(parent1, parent2, parent3) {
  const obj = [
    { title: 'parent1', data: parent1 },
    { title: 'parent2', data: parent2 },
    { title: 'parent3', data: parent3 },
  ];

  console.log(obj)
  // console.log(parent2)
  // console.log(parent3)
}

createMenuData(parent1, parent2, parent3)
