// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var Err = {};
    var B = {};
    var R = {};
    var h = 0, q = 0, d = 0, n = 0, p = 0;
    Err.error="You are rich, my friend! We don't have so much coins for exchange";
    if (currency>10000) return Err;
    if (currency<=0) return B;
    while(currency>=50){
        currency-=50;
        h++;
	R['H']=h;
    }
    while(currency<50&&currency>=25){
        currency-=25;
        q++;
    R['Q']=q;
	}
    while(currency<25&&currency>=10){
        currency-=10
        d++;
	R['D']=d;
    }
    while(currency<10&&currency>=5){
        currency-=5;
        n++;
    R['N']=n;
    }
    while(currency<5&&currency>=1){
        currency-=1;
        p++;
	R['P']=p;
    }
    return R;
}
