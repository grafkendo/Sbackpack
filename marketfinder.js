// spectrum market finder mitchel johnson march/2018
// getMarket function takes account number as argument
// compares the accunt number sections by getprin and get sys functions
// compares syn and prin to markets object
// returns apropriate market as a string 
// TODO: add input validation, error checking , input cleanup 


var markets = [{
        sys: "8448",
        prin: "2000",
        prinlimit: 2999,
        market: "La North"
    },
    {
        sys: "8448",
        prin: "3000",
        prinlimit: 3999,
        market: "La Metro"
    },
    {
        sys: "8448",
        prin: "4000",
        prinlimit: 4099,
        market: "La South"
    },
    {
        sys: "8448",
        prin: "4100",
        prinlimit: 4106,
        market: "San Diego"
    },
    
    {
        sys: "8448",
        prin: "4107",
        prinlimit: 4109,
        market: "Desert Cities"
    } ,
    {
        sys: "8448",
        prin: "4110",
        prinlimit: 4110,
        market: "Barstow"
    },
    {
        sys: "8448",
        prin: "4200",
        prinlimit: 4299,
        market: "El Centro"
    },
    {
        sys: "8448",
        prin: "6000",
        prinlimit: 6099,
        market: "Yuma"
    },
    {
        sys: "8448",
        prin: "6200",
        prinlimit: 6299,
        market: "Gunnison/Telluride"
    },
    {
        sys: "8448",
        prin: "6100",
        prinlimit: 6199,
        market: "Moscow/Pullman"
    },



{
    sys: "8150",
    prin: "1000",
	prinlimit: 1099,
    market: "S Manhattan"
}, {
    sys: "8150",
    prin: "1100",
prinlimit: 1199,
    market: "N Manhattan"
}, {
    sys: "8150",
    prin: "1200",
prinlimit: 1299,
    market: "Queens"
}, {
    sys: "8150",
    prin: "1300",
prinlimit: 1399,
    market: "Brooklyn"
}, {
    sys: "8150",
    prin: "1400",
prinlimit: 1499,
    market: "QUICS(Jamaica)"
}, {
    sys: "8150",
    prin: "1500",
prinlimit: 1599,
    market: "ACQ (Woodside"
}, {
    sys: "8150",
    prin: "1600",
prinlimit: 1699,
    market: "Mt Vernon"
}, {
    sys: "8150",
    prin: "1700",
prinlimit: 1799,
    market: "Bergen"
}, {
    sys: "8150",
    prin: "1800",
prinlimit: 1899,
    market: "Staten Island"
}, {
    sys: "8150",
    prin: "3000",
prinlimit: 3300,
    market: "Hudson Valley"
},
{
    sys: "8347",
    prin: "1000",
prinlimit: 1099,
    market: "Lincoln"
}, {
    sys: "8260",
    prin: "1600",
prinlimit: 1699,
    market: "CTX-Austin Waco"
}, {
    sys: "8260",
    prin: "1300",
prinlimit: 1399,
    market: "NTX-Dallas Arlington"
}, {
    sys: "8260",
    prin: "1700",
prinlimit: 1799,
    market: "NTX-Wichita Falls El Paso"
}, {
    sys: "8260",
    prin: "1700",
prinlimit: "1799",
    market: "NTX-Golden Triangle"
}, {
    sys: "8260",
    prin: "1400",
prinlimit: "1499",
    market: "STX-San Antonio"
}, {
    sys: "8260",
    prin: "1800",
prinlimit: "1899",
    market: "STX-Corpus Laredo & RGV"
},

];


function getsim(str) {
    let output = String(str).substring(0, 4);
    //console.log(output);
    return output;
}

function getreg(str) {
    let output = String(str).substring(4, 8);
    //console.log(output);
    return output;
}



function getMarket(acct) {

	if(acct == "") throw "no account number ";
	 
//console.log(acct);

    let cleanacct = String(acct).trim();
//console.log(cleanacct);

    let s = getsim(cleanacct);
    let r = getreg(cleanacct);
    let x = "";

try{

    markets.forEach(market => {
	
//input validation
		
	if(acct == "") throw "no account number ";
	 
	


        if (s == market['sys'] && parseInt(r) >= parseInt(market['prin']) && parseInt(r) <= parseInt(market['prinlimit'])) {
            x = market['market']
	if(x === "") throw "no market found ";
        }



    });

    return x;

} catch(err){

	console.log( " oops "+ err);

}// end try


}
module.exports = getMarket;
//tests







