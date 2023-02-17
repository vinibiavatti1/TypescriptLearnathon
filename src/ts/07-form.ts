const form = {
  name: 'Jose',
  age: 10,
  arrivsalDate: new Date(),
  departureDate: new Date(),
  hasCovidVaccine: false,
};

function getProperty(key) {
  return form[key];
}

const age = getProperty('age');
const name = getProperty('name');

function updateForm(key, value) {
  form[key] = value;
}

updateForm('name', 'askdjsa');
updateForm('age', 10);
