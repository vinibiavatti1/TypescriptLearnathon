/*const form = {
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
updateForm('age', 10);*/

interface FormPayload {
  name: string
  age: number
  arrivalDate: Date
  departureDate: Date
  hasCovidVaccine: boolean
}

const form: FormPayload = {
  name: 'Jose',
  age: 10,
  arrivalDate: new Date(),
  departureDate: new Date(),
  hasCovidVaccine: false,
};

function getProperty<T extends keyof FormPayload>(key: string): FormPayload[T] {
  return form[key];
}

const age = getProperty('age');
const name_ = getProperty('name');

function updateForm<T extends keyof FormPayload>(key: string, value: FormPayload[T]): void {
  form[key] = value;
}

updateForm('name', 'askdjsa');
updateForm('age', 10);
