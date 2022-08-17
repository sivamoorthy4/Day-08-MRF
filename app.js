
//Creating the object for the Httprequest
let xhr =new XMLHttpRequest();

console.log(typeof xhr);

//€Creating the connection using the URL
xhr.open("GET","https://restcountries.com/v2/all");

//Sending the response
xhr.send();

//while onloading URL funtion will executed
xhr.onload = function (){

    if(xhr.status>=200&&xhr.status<=400) {

        result=JSON.parse(this.response);

        //console.log(result[238].currencies[0].length);
        //a. Get all the countries from Asia continent /region using Filter function
        let asianCountries = result.filter(data=> data.region==="Asia")
        console.log(`Asian Countries:`,asianCountries);
        //console.log(asianCountries);


        //b.Get all the countries with a population of less than 2 lakhs using Filter function
        let countriesPopulation = result.filter(data => data.population<200000)
        console.log(`Countries with Population <2L:`,countriesPopulation);

        //c.Print the following details name, capital, flag using forEach function
         result.forEach(data=> {
            
            console.log(`Name:${data.name} Capital:${data.capital} flag:${data.flag}`);
            
        })


        //d.Print the total population of countries using reduce function
        let totalPopulation= result.map (data => data.population)
                             .reduce((acc,curr)=>acc+curr);
                             
        console.log(`World TotalPopulation:`,totalPopulation)

        //e. Print the country which uses US Dollars as currency.

        //Eliminate countries without curreny key
        let filteredCurrency= result.filter(data=>{ return data.currencies!==undefined })
        let countryList=[];
        
        filteredCurrency.forEach(data2=>{

            data2.currencies.forEach(data3=>{
                if(data3.code==="USD"){

                    countryList.push(data2);
                }
            })
        })
        console.log(`Countries Using USD:`,countryList);

    } else {

        console.log(`Error occured:${this.response}`);
    }
}