// Toán tử ++ và -- : Về bản chất thì hai toán tử này được sử dụng để tăng hoặc giảm giá trị cho trước
// tuy nhiên, cách sử dụng của chúng lại khác nhau

// let number = 10;
// Tiền tố
// Bước 1: Thực hiện việc cộng hoặc trừ giá trị của biến number: => number = 9
// Bước 2: Trả về kết quả vừa thực hiện của biến number: => number = 9
// let output = --number;
// console.log("Ouput ", output); => number = 9

// Hậu tố
// Bước 1: Tạo ra một biến copy từ giá trị trước đó: numberCopy = 10
// Bước 2: Thực hiện tính toán cho biến number: number = number + 1 => number = 11
// Bước 3: Trả về kết quả từ biến copy
// let output = number++;
// console.log("Ouput ", output); => number = 10

// Bài toán: thực hiện phép tính sau:
// let output = number++ - --number;
// 10 - 10 = 0

// Vòng lặp for
// Cú pháp: for(giá trị khởi tạo; điều kiện chạy/dừng; tăng/giảm){}
// for (initialValue; condition; increase/decrease){}

// console. log ra dãy số từ 1 đến 10
// for (let i = 1001; i <= 1000; i++) {
//   console.log("Lần lặp thứ: ", i);
// }

// Nguyên lý hoạt động
// Bước 1: Khi vòng lặp for được chạy, trong lần đầu tiên thì nó sẽ lấy giá trị khởi tạo (let i=1) để so sánh
// với điều kiện
// Bước 2: Nếu điều kiện thỏa mãn (1 <=1000) thì sẽ nhận giá trị là true
// Bước 3: Lọt vào trong khối lệnh để xử lý logic
// Bước 4: Sau khi xử lý logic xong thì nó sẽ quay lại for để tăng giá trị (i++) lên 1 đơn vị và nó
// sẽ quay lại kiểm tra điều kiện (2 <= 1000)
// Bước 5: Nếu điều kiện không thỏa mãn (false) thì vòng lặp sẽ kết thúc
// => Vòng lặp for được sử dụng trong trường hợp chúng ta biết trước được số lần lặp

// Lặp qua các số từ 1 đến 1000, in ra các số chẵn và các số lẻ
// for (let i = 1; i <= 1000; i++) {
//   let caculation = i % 2;
//   if (caculation === 0) {
//     console.log("Số chẵn là: ", i);
//   } else {
//     console.log("Số lẻ là : ", i);
//   }
// }

// Giảm dãy số từ 10 về 1
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// Vòng lặp while => Không xác định trước được số lần lặp
// Cú pháp:
// while (condition){
//   increase/decrease;
//   logic
// }

// let i = 0;
// while (i < 10) {
//   i++;
//   console.log(i);
// }

// Lấy lựa chọn từ phía client
// Nếu như chọn 1 thì in ra thông báo là Nhập sản phẩm
// Nếu như chọn 2 thì in ra thông báo là In ra sản phẩm
// Nếu như chọn 3 thì in ra thông báo là xuất hóa đơn
// Nếu như chọn giá trị khác thì in ra thông báo là Nhập sai lựa chọn

// Bước 1: Dùng hàm prompt để lấy lưạ chọn
// Bước 2: Thiết lập vòng lặp while với số lần lặp hợp lý
// Bước 3: Sử dụng switch case để bắt lựa chọn

// let choose = 0;

// while (choose !== 4) {
//   // Lấy lựa chọn từ client
//   choose = parseInt(prompt("Mời bạn nhập lựa chọn: "));

//   switch (choose) {
//     case 1:
//       console.log("Nhập sản phẩm");
//       break;
//     case 2:
//       console.log("In sản phẩm");
//       break;
//     case 3:
//       console.log("Xuất hóa đơn");
//       break;
//     case 4:
//       console.log("Thoát chương trình!");
//       break;
//     default:
//       console.log("Nhập sai lựa chọn!");
//       break;
//   }
// }

// Vòng lặp do-while: Nó sẽ chạy ít nhất một lần vào trong do rồi sau đấy mới kiểm tra điều kiện

// let condition = 1;
// do {
//   condition++;
//   console.log(condition);
// } while (condition < 10);

// let choose = 0;

// do {
//   choose = parseInt(prompt("Mời bạn nhập lựa chọn: "));

//   switch (choose) {
//     case 1:
//       console.log("Nhập sản phẩm");
//       break;
//     case 2:
//       console.log("In sản phẩm");
//       break;
//     case 3:
//       console.log("Xuất hóa đơn");
//       break;
//     case 4:
//       console.log("Thoát chương trình!");
//       break;
//     default:
//       console.log("Nhập sai lựa chọn");
//       break;
//   }
// } while (choose !== 4);

// for (let index = 0; index < 10; index++) {
//   if (index > 5) {
//     break;
//   }
//   console.log(index);
// }

// for (let index = 0; index < 10; index++) {
//   if (index % 2 === 0) {
//     continue;
//   }
//   console.log(index);
// }

// ++ --
// let numberA = 10;
// Tiền tố: ++numberA, --numberA
// Bước 1: Tiến hành + hoặc trừ gía trị của biến đi 1 đơn vị
// Bước 2: Trả về giá trị mà phép tính trên vừa thực hiện

// Hậu tố: numberA++, numberA--
// Bước 1: Sao chép giá trị của biến vào một biến copy: numberACopy = 10
// Bước 2: Tiến hành cộng/trừ giá trị của biến đi 1 đơn vị
// Bước 3: Trả về giá trị của biến copy

// let ouput = numberA++;
// 11 * 2 - 10 + 11 * 3
// 12 + 33

// console.log(ouput);
// console.log(numberA);

// In ra tam giác vuông 10 hàng và 10 cột

// for (let i = 1; i <= 10; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// for (let i = 10; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// const height = 10;

// for (let i = 1; i <= height; i++) {
//   let row = "";

//   // Thêm khoảng trắng đầu hàng để căn lề sang trái
//   for (let space = height - i; space > 0; space--) {
//     row += " ";
//   }

//   // Thêm dấu '*' theo số lượng tăng dần
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }

//   console.log(row);
// }

// for (let i = 10; i >= 1; i--) {
//   let row = "";

//   for (let space = 10 - i; space > 0; space--) {
//     row += " ";
//   }

//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// let age = 21;
// let myName = "NVQUY";
// console.log("Tuổi của tôi là: " + age + " Họ và tên: " + myName);

// Template String. Cú pháp: ``
// console.log("\x1b[30m%s\x1b[0m", "Chữ màu đỏ");
// console.log("\x1b[31m%s\x1b[0m", "Chữ màu đỏ");
// console.log("\x1b[32m%s\x1b[0m", "Chữ màu đỏ");
// console.log("\x1b[33m%s\x1b[0m", "Chữ màu đỏ");
// console.log("\x1b[34m%s\x1b[0m", "Chữ màu đỏ");
// console.log("\x1b[35m%s\x1b[0m", "Chữ màu đỏ");

// let N = parseInt(prompt("Mời bạn nhập N: "));

// Kiểm tra dữ liệu đầu vào
// if (N < 2 || N > 100) {
//   console.log("Mời bạn nhập lại!");
// } else {
//   // Lặp các số từ 2 đến N
//   for (let i = 2; i <= N; i++) {
//     // Bình phương các số từ 2 đến N
//     let square = Math.pow(i, 2);
//     // Kiểm tra những giá trị đã bình phương chia hết cho 2
//     if (square % 2 === 0) {
//       console.log("Square: ", square);
//     }
//   }
// }

// Số nguyên tố là số có 2 ước là 1 và chính nó: biến đếm số ước của N
// Số nguyên tố bé nhất là số 2
// Liệt kê ra 20 số nguyên tố đầu tiên

// let count = 0;
// let number = 2;

// while (count < 20) {
//   // count sẽ đếm từ 0 đến 19 tức là 20 lần
//   let isPrime = true;

//   // Lặp qua để kiểm tra xem có phải là số nguyên tố
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     // Kiểm tra xem n có chia hết cho i không
//     // Nếu chia hết thì không phải là số nguyên tố và thoát vòng lặp
//     if (number % i === 0) {
//       isPrime = false; // gán lại
//       break;
//     }
//   }

//   if (isPrime === true) {
//     console.log(number);
//     count++;
//   }

//   number++;
// }

// for (let i = 1; i <= 10; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row = row + " * ";
//   }

//   console.log(row);
// }

for (let i = 10; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}
