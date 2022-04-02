export default class Character {
    constructor(name, health, level) {
        if (name.lenght < 2 || name.lenght > 10) {
            throw new Error('Имя должно быть от 2 до 10 символов');
        }
        this.name = name;
        this.health = health;
        this.level = level;
    }
}