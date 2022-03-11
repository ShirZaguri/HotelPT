import * as XLSX from "xlsx";
const { readFile } = XLSX;

export const read = () => {
    const wb: XLSX.WorkBook = readFile(`${process.env.DATA_PATH}/hotels.xlsx`);
    console.log(wb)
}

