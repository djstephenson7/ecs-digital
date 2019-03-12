function createMenuData(data) {
  const parent1 = data.filter(data => data.includes('parent1/')).map(d => d.replace('parent1/', ''));
  const parent2 = data.filter(data => data.includes('parent2/')).map(d => d.replace('parent2/', ''));
  const parent3 = data.filter(data => data.includes('parent3/')).map(d => d.replace('parent3/', ''));
  const obj = [
    { title: 'parent1', data: parent1 },
    { title: 'parent2', data: parent2 },
    { title: 'parent3', data: parent3 },
  ];
  return obj;
}


module.exports = createMenuData;
