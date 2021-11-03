let deaths = {}

let import_data = 
    d3.csv('../data/totaldeaths.csv').then(function(data) {
    for (let i = 0; i < data.length; i++) {
        deaths[data[i].Län] = data[i].Antal;
    }
    console.log(deaths);
    console.log(deaths["Stockholm"])
});