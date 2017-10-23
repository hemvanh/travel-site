function Person(fullname, fColor) {
    this.name = fullname;
    this.fColor = fColor;
    this.greet = function () {
        console.log('Hello, my name is' + this.name + ' and my f-color is: ' + this.fColor);
    }
}

module.exports = Person;