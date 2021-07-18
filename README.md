# All Vaccinated  

Calculates the percentage of fully vaccinated people in Germany using official data.  
  
The [Impfdashboard](https://impfdashboard.de) is a fantastic service for getting reliable and current vaccination statistics.  
However, it does not display the total percentage of people that are fully vaccinated: Only the percentage of people that
have received at least one vaccination.  
  
__All Vaccinated__ fixes this by providing an interface to calculate this percentage using the newest available dataset
from the RKI.

## Running instructions  
  
First, fetch the data of all vaccinationed people in total:
```
node FetchData.js
```

Then, calculate the percentage of fully vaccinated people:
```
node Index.js
```