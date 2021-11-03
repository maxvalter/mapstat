let agedata;
let code_to_name; 

// let import_country_names =
//     d3.csv('data/codetoname.csv').then(function(data) {
//         code_to_name = data;
//     })

console.log('in europe');

let import_data = 
    d3.csv('../data/worlddata.csv').then(function(data) {
    console.log(data[0].total_vaccinations_per_hundred);
});