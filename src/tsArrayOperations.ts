/**
 * Исходные данные
 **/
export const fix = '';

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  age: number;
};

const users: User[] = [
  {
    id: 7,
    email: 'michael.lawson@reqres.in',
    first_name: 'Michael',
    last_name: 'Lawson',
    avatar: 'https://reqres.in/img/faces/7-image.jpg',
    age: 23
  },
  {
    id: 8,
    email: 'lindsay.ferguson@reqres.in',
    first_name: 'Lindsay',
    last_name: 'Ferguson',
    avatar: 'https://reqres.in/img/faces/8-image.jpg',
    age: 20
  },
  {
    id: 9,
    email: 'tobias.funke@reqres.in',
    first_name: 'Tobias',
    last_name: 'Funke',
    avatar: 'https://reqres.in/img/faces/9-image.jpg',
    age: 40
  },
  {
    id: 10,
    email: 'byron.fields@reqres.in',
    first_name: 'Byron',
    last_name: 'Fields',
    avatar: 'https://reqres.in/img/faces/10-image.jpg',
    age: 36
  },
  {
    id: 11,
    email: 'george.edwards@reqres.in',
    first_name: 'George',
    last_name: 'Edwards',
    avatar: 'https://reqres.in/img/faces/11-image.jpg',
    age: 70
  },
  {
    id: 12,
    email: 'rachel.howell@reqres.in',
    first_name: 'Rachel',
    last_name: 'Howell',
    avatar: 'https://reqres.in/img/faces/12-image.jpg',
    age: 45
  }
];

/**
 * 1. Получить строку с именами и фамилиями всех
 * пользователей через запятую.
 **/
const getUserFullname = (user: User) => `${user.first_name} ${user.last_name}`;
const fullnames = users.map(getUserFullname).join(', ');
console.debug(fullnames);

/**
 * 2. Создать массив из emails по алфавиту
 **/
const emails = users.map(({ email }) => email).sort();
console.debug(emails);

/**
 * 3.Создать новый массив пользователей,где объект пользователя должен
 * содержать только id и поле, отвечающее за имя пользователя
 * (например, username), которое должно содержать имя и фамилию.
 **/
const shortDetails = users.map((user) => ({
  id: user.id,
  fullname: `${user.first_name} ${user.last_name}`
}));

console.debug(shortDetails);

/**
 * 4. Создать массив пользователей, где они отсортированы
 * по возрасту по возрастанию и все пользователи младше 40 лет.
 **/
const youngUsers = users
  .filter(({ age }) => age < 40)
  .sort((a, b) => a.age - b.age);
console.debug(youngUsers);

/**
 * Получить объект, где были бы
 * a) данные о среднем возрасте пользователей
 * b) количество пользователей старше 30
 * c) количество пользователей старше 40
 * d) количество пользователей старше 18
 **/
const stats = users.reduce(
  (accumulator, user, index) => {
    if (user.age > 40) {
      accumulator.gt40 += 1;
    }
    if (user.age > 30) {
      accumulator.gt30 += 1;
    }
    if (user.age > 18) {
      accumulator.gt18 += 1;
    }

    // Формула: https://habr.com/ru/company/ruvds/blog/458030/
    accumulator.avgAge = (user.age + accumulator.avgAge * index) / (index + 1);
    return accumulator;
  },
  {
    gt30: 0,
    gt40: 0,
    gt18: 0,
    avgAge: 0
  }
);

console.debug(stats);

/**
 * 6. Создать объект,где ключ,это первая буква фамилии,а значение -
 * массив из фамилий пользователей начинающихся на эту букву. Объект
 * должен состоять только из ключей существующих фамилий в этом массиве.
 **/

const alphabetStats = users.reduce(
  (accumulator: Record<string, string[]>, user) => {
    const [firstLetter] = [...user.last_name];

    if (!accumulator[firstLetter]) {
      accumulator[firstLetter] = [];
    }
    accumulator[firstLetter].push(user.last_name);
    return accumulator;
  },
  {}
);
console.debug(alphabetStats);

/**
 * Пример каррирования
 **/
const getUsersFilter = (age: number) => (user: User) => user.age > age;

const isPensioner = getUsersFilter(63);
const isAdult = getUsersFilter(21);

const pensioneers = users.filter(isPensioner);
const adults = users.filter(isAdult);

console.debug(pensioneers);
console.debug(adults);
