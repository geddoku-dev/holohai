import Store, { Schema } from 'electron-store';

interface User {
    _id: string;
    email: string;
}

interface StoreSchema {
    user: User;
}

const schema: Schema<StoreSchema> = {
    user: {
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                default: ''
            },
            email: {
                type: 'string',
                default: ''
            },
        },
        default: {},
        required: ['_id', 'email'],
    }
};

const store = new Store<StoreSchema>({ schema });

class UserStore {
    private readonly store: Store<StoreSchema>;

    constructor() {
        this.store = store;
    }

    public getUser(): User {
        return this.store.get('user');
    }

    public setUser(user: User): void {
        this.store.set('user', user);
    }

    public deleteUser(): void {
        this.store.delete('user');
    }

    public clearAll(): void {
        this.store.clear();
    }
}

export default UserStore;
