
export default class GenericLocalStorage {
    private storage: Storage;

    constructor() {
        this.storage = window.localStorage;
    }

    get(key: string): string | null {
      return this.storage.getItem(key);
    }

    addOrUpdate<T>(key: string, item: T): T {
        let strValue = item.toString();
        if(!(item instanceof String)) {
          strValue = JSON.stringify(item);
        }

        this.storage.setItem(key, strValue);

        return item;
    }

    clear(key: string): this{
      if(key === null) {
        throw new Error('Key is required');
      }

      this.storage.removeItem(key);

      return this;
    }

    clearAll(): this{
      this.storage.clear();

      return this;
    }
}