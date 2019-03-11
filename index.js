const data = [
  "parent1/parent1child",
  "parent1/parent1child2",
  "parent2/parent2child",
  "parent2/parent2child2",
  "parent1/parent1child3",
  "parent3",
  "parent3/parent3child1",
  "parent4"
];

const object = [
  {title: "parent1", data: []},
  {title: "parent2", data: []},
  {title: "parent3", data: []},
]

function createMenuData(data) {
  console.log(data)
}

createMenuData(data);
