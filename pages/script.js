function getState(){
    var stateAndCityDetails =[
        {
            id:0,
            cities:['faridabad','ambala']
        },
        {
            id:1,
            cities:['shimoga','whitefiled']
        },
        {
            id:2,
            cities:['xhsys','2323asd']
        }, {
            id:3,
            cities:['asdasd','123123']
        }
    ]
   
    var indexOfState = parseInt(document.getElementById('state').value);
    console.log(stateAndCityDetails[indexOfState])

    var citySelectBox = document.getElementById('city')
    console.log(citySelectBox)
    for (let index = 0; index < stateAndCityDetails[indexOfState].cities.length; index++) {
        
        citySelectBox.innerHTML( `<option>${stateAndCityDetails[indexOfState].cities[index]}</option>`)
        
    }
    citySelectBox.appen
}