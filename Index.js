import csv from "csv"
import fs from "fs"

const data = fs.readFileSync("VaccinationsByState.tsv", "utf8")
const parsed = csv.parse(data, {
    comment: "#",
    delimiter: "\t"
})

// Please update using data from Destatis as needed:
// https://www.destatis.de/EN/Themes/Society-Environment/Population/Current-Population/Tables/population-by-laender.html
const TotalCitizens = 84062401

let RowsProcessed = 0
let PeopleFullVaccination = 0

parsed.on("data", (row) => {
    if (RowsProcessed++ <= 1) return

    PeopleFullVaccination += parseInt(row[3])
}).on("end", () => {
    const PercentFullVaccination = (PeopleFullVaccination / TotalCitizens) * 100
    console.log(PercentFullVaccination.toFixed(2) + "% of citizens have received a full vaccination")
})