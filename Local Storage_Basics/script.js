function fahrHeit() {
    var num2 = document.getElementById("calcFheit").value;
    var resCels = (((num2-32)/9) * 5);
    var roundFahr = resCels.toFixed(2);
    if (roundFahr <= 50){
        test = roundFahr + ' <span>&#8451;</span>' + ' <i class="fa fa-regular fa-snowflake fa-1x"></i>';
    }else if(roundFahr > 50 && roundFahr <=75){
        test = roundFahr + ' <span>&#8451;</span>' + ' <i class="fa fa-cloud fa-1x"></i>';
    }else {
        test = roundFahr + ' <span>&#8451;</span>' + ' <i class="fas fa-cloud-sun fa-1x"></i>';
    }
    document.getElementById("result").innerHTML = test;
  
  let xTime = new Date();
    let myObj = {"dataItems":[{
        fahrenheit: num2,
        celsius: roundFahr,
        time: xTime
    }]};
  
  var storingData = JSON.stringify(myObj);
  
  localStorage.setItem('NewObject',storingData);
  
  var storingArr = JSON.parse(localStorage.getItem('NewObject'));
  storingArr.dataItems.push({fahrenheit: 232,
        celsius: 34,
        time: xTime})
  console.log(storingArr);
  localStorage.setItem('NewObject_2',JSON.stringify(storingArr));
  
  
}
