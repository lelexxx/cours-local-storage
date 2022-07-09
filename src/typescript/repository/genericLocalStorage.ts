export default class GenericLocalStorage {
    private storage: Storage;

    constructor() {
        this.storage = window.localStorage;
    }

    get(key: string): string | null {
      return this.storage.getItem(key);
    }

    addOrUpdate(key: string, item: any): void {
        let strValue = item;
        if(!(item instanceof String)) {
          strValue = JSON.stringify(item);
        }

        this.storage.setItem(key, strValue);
    }

    clear(key: string | null = null): void{
      if(key === null) {
        this.storage.clear();
      } else {
        this.storage.removeItem(key);
      }
    }
}