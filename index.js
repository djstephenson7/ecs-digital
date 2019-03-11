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
  var parent1 = data.filter((data) => data.includes('parent1/')).map(function(d) { return d.replace('parent1/', ''); });
  var parent2 = data.filter((data) => data.includes('parent2/')).map(function(d) { return d.replace('parent2/', ''); });
  var parent3 = data.filter((data) => data.includes('parent3/')).map(function(d) { return d.replace('parent3/', ''); });
  console.log(parent1, parent2, parent3)
  // console.log(parent2)
  // console.log(parent3)
}

createMenuData(data)
