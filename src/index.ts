class Family {

    fullName: String;

    constructor(public firstName: String, public middleInitial: string, public lastName: String) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
    }
}

interface Person {
    firstName: String;
    lastName: String;
}

const greater = (person: Person) => {
    return `Hello ${person.firstName} ${person.lastName}`;
} 

let user = new Family("Arjuna", "LK", "Djoh");

document.body.textContent = greater(user);