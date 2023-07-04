var fullName = 'trần hoài việt \'45k21.2\''; //lưu ý nếu muốn có dấu'' thì phải chèn thêm \'_\', còn nếu muốn có dấu \ thì phải ghi \\,(backslash)
console.log(fullName);

confirm('Xac nhan ban du tuoi!'); //dùng để hiển thị thông báo xác nhận
alert(fullName); //dùng để thông báo
prompt('Xac nhan ban du tuoi!') //tạo thêm 1 ô input để ng dùng có thể nhập giá trị

setTimeout(function() {
    alert('Thong bao')
},1000) //setTimeout sau 1 khoảng thời gian sẽ hiển thị 1 thông báo duy nhất 1 lần, đơn vị thời gian là mili(s)

setInterval(function() {
    console.log('Day la log' + Math.random)
},9000000000)//giống như setTimeout nhưng lặp lại sau 1 khoảng thời gian

//Toán tử
//Toán tử số học
var a = 1;
var b = 2;
var c = a + b;
console.log(c)

//Boolean
var a = 1;
var b = 2;
var isSuccess = a > b;
console.log(isSuccess);

//If-else
var a = 1;
var b = 2;
var c = 3;

if(a > 0 && b > 0 && c < 0) {
    console.log('dieu khien dmg')
} else{
    console.log('dieu kien sai')
}

// function
var myFunction = function() {
    console.log('Chào các bạn!')
} // trên đây là tạo ra 1 function nhưng khi chị sẽ k hiển thị, muốn hiển thị phải gọi

myFunction(); // đây là cách gọi function

// Object types
//Object
var myObject = {
    name: 'Việt',
    age: 22,
    adress: 'Đà Nẵng',
};// Object là để chứa dữ liệu kể cả là function
//thêm dữ liệu cho object
myObject.email = 'hangul309@gmail,com'
console.log('myObject', myObject);
/*lấy ra 1 dữ liệu trong object
console.log(myObject.name);

xóa 1 dữ liệu trong object
delete myObject.age;
*/

//Array
var myArray = [
    'js',
    'PHP',
    'reactjs'
];//Array định nghĩa 1 danh sách
console.log(myArray);

//Độ dài chuổi
console.log(fullName.length);

//teamplate string ES6
var firstName = 'Tran';
var lastName = 'Viet';
//C1
console.log('Toi la: ' + firstName + ' ' + lastName);
//C2
console.log(`Toi la: ${firstName} ${lastName}`);

// làm việc với chuỗi
var myString = 'tran hoai viet';

//find index
//C1
console.log(myString.indexOf('i'));
//C2 nếu như muốn tìm chữ i sau chữ i đầu tiên
console.log(myString.indexOf('i', 9));
//C3 tìm chữ i cuối cùng của chuỗi
console.log(myString.lastIndexOf('i'));

//Cut string
console.log(myString.slice(4));

//Replace
console.log(myString.replace('hoai', 'hoa'));
//nếu nhiều từ hoai thì ta dùng cách này: /_/g
console.log(myString.replace(/hoai/g, 'hoa'));

/* toUpperCase: là viết hoa, toLowerCase: là viết thường
    cách dùng: console.log(myString.toLowerCase());
*/

/*Trim: là cách rút gọn cho câu
console.log(myString.trim());
*/

//split: lưu ý phải tìm ra điểm chung để cắt. Điểm chung dưới đây là ', '
var languages = 'js, jv, php, rubi';
console.log(languages.split(', '));
// muốn cắt từng chữ của PHP ra thì chỉ cần cho rỗng là cắt đc: ''

// To Fixed: làm tròn số
var PI = 3.14;
console.log(PI.toFixed());
/* làm tròn còn 2 số thập phân
console.log(PI.toFixed(2));
*/

//mảng
var cacngonngu = [
    'tieng anh',
    'tieng viet',
    'tieng nhat',
    'tieng duc'
];
console.log(cacngonngu);

//độ dài mảng
console.log(cacngonngu.length);

//lấy phần tử
console.log(cacngonngu[0]);
/* chuyển mảng sang chuổi
console.log(cacngonngu.toString())
*/
//POP: xóa phần tử cuối bảng và trả lại phần tử đã xóa
console.log(cacngonngu.pop());

//push: tạo thêm 1 hoặc nhiều các phần tử vào cuối bảng và trả lại độ dài mới của bảng
console.log(cacngonngu.push('tieng phap'));

//shift: ngược lại vs pop nhưng vẫn trả lại phần tử đã xóa

//Function
function showDialog() {
    alert('Chao cac ban!');
}
// cách gọi: ghi ra hàm vừa định nghĩa. showDialog();
// làm việc với function
function writeLog(message) {
    console.log(message)
}
// writeLog('Test message');

//argument
function writeLog() {
    console.log(arguments)
}
// writeLog('Log1', 'Log2', 'Log3');

//vòng lặp for trong function
function writeLog() {
    for(var param of arguments) {
        console.log(param);
    }
}
// writeLog('Log1', 'Log2', 'Log3');
//VD: muốn ngăn cách các phần tử sau 1 dấu -
function writeLog() {
    var myStr = '';
    for(var param of arguments) {
        myStr += `${param} - `
    }
    console.log(myStr)
}
//writeLog('Log1', 'Log2', 'Log3', 1, 2, 3);

//return trong function
function cong(a, b) {
    return a + b;
}
var result = cong(2, 8);
console.log(result)

/* có 3 loại function: declaration, expression, arrow
vd Declaration: function showMessage() {}
vd expression: var showMessage2 = function() {}
*/

// oject constructor: là bảng thiết kế
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    //gọi nguyên tên
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    } 
}
var author = new User('Tran', 'Viet', 'avatar');
var user = new User('Tran', 'Hoa', 'avatar');

console.log(author);
//cách gọi nguyên tên: console.log(user.getName);

