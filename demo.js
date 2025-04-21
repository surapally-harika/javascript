// var data = {
//     name: "harika",
//     age:21
// }
// // var json = JSON.stringify(data);
// console.log(typeof (data));

// {
//     const num = 10;
//     //  num = 20;
//     console.log(num);
// }
// // console.log(num1);

// const user = () =>
//     console.log("hello");
// user();

// const data = (num) => {
//     return num + 5;
// }
// console.log(data(5));

class User{
    constructor(msg) {
        this.msg = msg;
    }
    admin() {
        console.log(this.msg);
    }
}
let obj = new User('hi');
obj.admin();