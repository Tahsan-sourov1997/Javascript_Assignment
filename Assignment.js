function kilometerToMeter(kilometerValue){
    var meterValue =kilometerValue*1000;  //problem-1
    if (kilometerValue<0){
    return "Distance can not be Negative";
    }
    return meterValue;
    }


    function budgetCalculator(WatchQuantity, PhoneQuantity, LaptopQuantity){
        if(WatchQuantity<0 || PhoneQuantity<0 || LaptopQuantity<0){
            return "Quantity can not be negative"; //problem-2
        }
        else{
            var Watchcost = 50*WatchQuantity;
            var PhoneCost = 100*PhoneQuantity;
            var LaptopCost = 500*LaptopQuantity;
            var TotalCost = Watchcost+PhoneCost+LaptopCost;
            return TotalCost;
        }
        
    }


    function hotelCost(livingDay) { //problem-3
    
        var firstTenDays = 0;
        var secondTenDays = 0;
        var thirdTenDays = 0;
        var totalCost = 0;
        if (livingDay <= 0) {
            return 'Living days can not be 0 or ngative';
        }
        else{
            for (var i = 1; i <= livingDay; i++) {
                if (i >= 1 && i <= 10) {
                    firstTenDays = 100 * i;
                }
                else if (i >= 11 && i <= 20) {
                    secondTenDays = 80 * (i - 10);
                }
                else{
                    thirdTenDays = 50 * (i - 20);
                }
            }
        }
        totalCost = firstTenDays + secondTenDays + thirdTenDays;
        return totalCost;
    }


     

var friendsName = ['Tahsan','sourov','Masud','Shanto','Salauddin','Shohel','Shuvo'];
var longestWord =friendsName[0];
var longestName = megaFriend(friendsName);//problem-4
function megaFriend(friends)
{
for(var i=1; i<friends.length; i++){
    var element = friends[i];

   
if(element.length>longestWord.length){
    longestWord = element;
}
}
return longestWord;
}

    