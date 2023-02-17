/*const collaborators = [
  {
    name: 'João',
    departmentId: 54,
    birthday: new Date('10/10/2010'),
    interests: ['Sports', 'Cooking'],
    enabled: true,
  },
  {
    name: 'Joana',
    departmentId: 10,
    birthday: new Date('10/10/2010'),
    interests: ['Sports', 'Cooking'],
    enabled: true,
  },
  {
    name: 'Diogo',
    departmentId: 54,
    birthday: new Date('10/10/2010'),
    interests: ['Sports', 'Cooking'],
    enabled: true,
  },
];

function add(collaborator) {
  collaborators.push(collaborator);
}

add();

const collaboratorsByDepartment = {
  10: [collaborators[1]],
  54: [collaborators[0], collaborators[2]],
};

collaboratorsByDepartment[25] = [{ name: 'Nuno', birthday: new Date(), departmentId: 25, enabIed: true, interests: [] }];
*/

interface Collaborator {
  name: string
  departmentId: number
  birthday: Date
  interests: string[]
  enabled: boolean
}

const collaborators: Collaborator[] = [
  {
    name: 'João',
    departmentId: 54,
    birthday: new Date('10/10/2010'),
    interests: ['Sports', 'Cooking'],
    enabled: true,
  },
  {
    name: 'Joana',
    departmentId: 10,
    birthday: new Date('10/10/2010'),
    interests: ['Sports', 'Cooking'],
    enabled: true,
  },
  {
    name: 'Diogo',
    departmentId: 54,
    birthday: new Date('10/10/2010'),
    interests: ['Sports', 'Cooking'],
    enabled: true,
  },
];

function add(collaborator?: Collaborator): void {
  collaborators.push(collaborator);
}

add();

const collaboratorsByDepartment: { [key: number]: Collaborator[] } = {
  10: [collaborators[1]],
  54: [collaborators[0], collaborators[2]],
};

collaboratorsByDepartment[25] = [{ name: 'Nuno', birthday: new Date(), departmentId: 25, enabled: true, interests: [] }];
