import GenericLocalStorage from "./repository/genericLocalStorage";

const storage = new GenericLocalStorage;
const key = 'user';
const item = { id: 1, name: 'alex' };

storage.clear();

let userStorage = storage.get(key);
console.log('null :', userStorage);

storage.addOrUpdate(key, item);
userStorage = storage.get(key);
console.log('user str :', userStorage);
console.log('user json :', JSON.parse(userStorage));
