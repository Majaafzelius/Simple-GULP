const names = ['Alice', 'Bob', 'Charlie'];
names.forEach(name => console.log(name));
const uppNames = names.map(name => name.toUpperCase());
const outputDiv = document.querySelector('#output');
outputDiv.innerHTML = `Uppercase names: ${uppNames.join(', ')}`;
