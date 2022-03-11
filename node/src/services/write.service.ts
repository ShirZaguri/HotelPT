import { assetConverter } from "@/utils/converters/asset.converter";
import { Asset } from "@/utils/types/asset.type";
import * as XLSX from "xlsx";

export const write = () => {
    const assets: Asset[] = [{
        name: "Bubi hotel",
        location: "Prague",
        price: {
            current: 100,
            previous: 120
        }
    }, {
        name: "Mit hotel",
        location: "Vienna",
        price: {
            current: 100,
            previous: 120
        }
    }]
    const assetsXLSX = assetConverter(assets);
    const ws = XLSX.utils.json_to_sheet(assetsXLSX)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Responses')
    XLSX.writeFile(wb, 'sampleData.export.xlsx')
}

