let deaths = {}
let death_values = []

let import_data = 
    d3.csv('../data/totaldeaths.csv').then(function(data) {
    for (let i = 0; i < data.length; i++) {
        deaths[data[i].Län] = data[i].Antal;
        death_values.push(data[i].Antal);
    }
    console.log(deaths);
    console.log(deaths["Stockholm"])
});

function get_deaths_by_county(county) {
    console.log(county);
    return deaths[county];
}

function get_deaths() {
    console.log(deaths);
    return deaths;
}

function get_death_values() {
    return death_values;
}