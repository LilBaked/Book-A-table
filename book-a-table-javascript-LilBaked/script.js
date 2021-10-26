

function validateInput(){
   
    const userName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;
    let validate = true;

    if(userName ==="" || email ==="" || phone==="" || date==="" || time==="" || people==="")
    {
        alert("All boxes are required!");
        validate = false;
    }else if(!isValideEmail(email))
    {
        alert("Wrong email format");
        validate = false;
    }else if(!isValideDate(date))
    {
        alert("Invalid date selected!");
        validate = false;
    }
    // else if(!isValideTime(time,date))
    // {
    //     alert("Invalid time selected!");
    //     validate = false;
    // }
    


    if(validate === true)
    {
        console.log(userName, email, phone, date, time, people);
    }
}

function isValideDate(date){

    const currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth()+1;
    var year = currentDate.getFullYear();

    const dateAsArray = date.split("-");

    if(day<10) 
    {
        day='0'+day;
    } 

    if(month<10) 
    {
        month='0'+month;
    } 

    if(Number(dateAsArray[0]) < Number(year) || (Number(dateAsArray[0]) === Number(year) && Number(dateAsArray[1])  < Number(month)) || (Number(dateAsArray[0]) === Number(year) && Number(dateAsArray[1])  === Number(month) && Number(dateAsArray[2]) < Number(day)))
    {
        return false;
    }else
     {
         return true;
     }
}

function isValideEmail(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(validRegex)) 
  {
      return true;
  } else
    {
         return false;
    }
}

// function isValideTime(time,date){
//     const currentDate = new Date();
//     const currentHour= currentDate.getHours();
//     const currentDay= currentDate.getDate();
//     const dateAsArray = date.split("-");
//     const timeAsArray = time.split(":");
//     console.log(dateAsArray);
//     console.log(currentDay);
//     console.log(currentHour);
//     console.log(timeAsArray);
   
//     if(Number(dateAsArray[3]) > currentDay)
//     {
//         return true;
//     }else if(Number(dateAsArray[3]) === currentDay && Number(timeAsArray[0]) >currentHour)
//     {
//         return true;
//     }else
//     {
//         return false;
//     }
// }




