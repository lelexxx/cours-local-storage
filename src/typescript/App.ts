import GenericLocalStorage from "./repository/genericLocalStorage";

const storage = new GenericLocalStorage();
const key = 'user';
const item = { id: 1, name: 'alex' };

storage.clear();

let userStorage = storage.get(key);
console.group("GET");
console.log('item :', item);
console.log('user str :', userStorage);
console.groupEnd();

storage.addOrUpdate(key, item);
userStorage = storage.get(key);
console.group("SAVE & GET");
console.log('item :', item);
console.log('user str :', userStorage);
console.log('user json :', JSON.parse(userStorage));
console.groupEnd();