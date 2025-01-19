import { v4 as uuidv4 } from 'uuid';

class PasswordCardModel {
    id: string;
    url: string;
    name: string;
    username: string;
    password: string;

    constructor(url: string, name: string, username: string, password: string) {
        this.id = uuidv4();
        this.url = url;
        this.name = name;
        this.username = username;
        this.password = password;
    }
};

export default PasswordCardModel;