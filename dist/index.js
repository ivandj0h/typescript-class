"use strict";
var Family = /** @class */ (function () {
    function Family(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Family;
}());
var greater = function (person) {
    return "Hello " + person.firstName + " " + person.lastName;
};
var user = new Family("Arjuna", "LK", "Djoh");
document.body.textContent = greater(user);
