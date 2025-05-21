let dataFile = null;
console.log("B1: Chuẩn bị đọc file dataFile, dự kiến mất 3s...");
console.log("B2: Đang đọc data file,....");
const readDataFile = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("B3: Đã đọc file dataFile, gan du lieu cho dataFile");
      dataFile = "Huy Pham - Mot lap trinh vien";
      resolve();
    }, 3000);
  });
};
//B2: Đọc file dataFile
await readDataFile();
//B4: Hiển thị file dataFile
console.log("B4: Hiển thị file dataFile: ", dataFile);
