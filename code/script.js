// ДЗ : 
// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
function Calculator(a, b) {
    this.a = a;
    this.b = b;
    this.read = function () {
        this.a = parseInt(prompt("Введите число a: "));
        document.write("Число a: " + this.a + "<br>");
        this.b = parseInt(prompt("Введите число b: "));
        document.write("Число b: " + this.b + "<br>");
    };
    this.sum = function() {
        let s = this.a + this.b
        document.write("Сумма чисел a + b: " + s + "<br>");
    };
    this.mul = function() {
        let m = this.a * this.b
        document.write("Произведение чисел a * b: " + m + "<br>");
    }
}

let c = new Calculator();
c.read();
c.sum();
c.mul();







// const read = {
//     a: "",
//     b: ""
//  }
// for (let pro in read){
//  read[pro] = promt ("Введите данные: " + pro);
//  document.write(pro);
// }