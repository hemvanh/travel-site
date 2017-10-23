//var Person = require('./modules/Person');   --> NodeJs way
import Person from './modules/Person';  //--> ES6 way

class Adult extends Person{
    payTaxes(){
        console.log(`${this.name} now owns 0$ in taxes!`);
    }
}


var john = new Person('John Doe', 'blue');
john.greet();

var jane = new Adult('Jane Smith', 'orange');
jane.greet();
jane.payTaxes();
