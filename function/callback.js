/**Callback la mot ham dc truyen duoi dang tham so vao mot ham khac va duoc goi sau khi ham kia thuc hien xong */
let dataFile = null;
console.log("B1: Chuẩn bị đọc file dataFile, dự kiến mất 3s...");
console.log("B2: Đang đọc data file,....");
const readDataFile = (callback) => {
    setTimeout(() => {
      console.log("B3: Đã đọc file dataFile, gan du lieu cho dataFile");
      dataFile = "Huy Pham - Mot lap trinh vien";
      callback(dataFile);
    }, 3000);
};
//B2: Đọc file dataFile
readDataFile((data) => {
    console.log("B4: Hiển thị file dataFile: ", data)
});
//B4: Hiển thị file dataFile


