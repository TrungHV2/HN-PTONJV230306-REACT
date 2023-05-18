export class Person {
    constructor(id = 0, name = '') {
        this.id = id;
        this.name = name;
    }
    getInfo() {
        return `id = ${this.id}, name = ${this.name}`;
    }
}
export class Student extends Person {
    constructor(id, name, mark = 0.0) {
        super(id, name);
        this.mark = mark;
    }
    getInfo() {
        return super.getInfo() + `, mark = ${this.mark}`;
    }
}

// export default Person;
