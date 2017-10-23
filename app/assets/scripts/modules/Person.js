class Person {
    constructor(fullname, fColor) {
        this.name = fullname;
        this.fColor = fColor;
    }
    greet() {
        console.log('Hi there, my name is' + this.name + ' and my f-color is: ' + this.fColor);
    }
}
//module.exports = Person;  //NodeJs Way
export default Person; //ES6 way