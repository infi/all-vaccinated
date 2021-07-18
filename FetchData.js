import fetch from "node-fetch"
import fs from "fs"

fetch("https://impfdashboard.de/static/data/germany_vaccinations_by_state.tsv")
    .then(res => res.text())
    .then(rawData => {
        const data = `# Fetched at: ${new Date().toLocaleDateString("de")} ${new Date().toLocaleTimeString("de")}
# Source: impfdashboard.de, RKI, BMG.
# Source URL: https://impfdashboard.de/daten
${rawData}`
        fs.writeFileSync("VaccinationsByState.tsv", data)
    })