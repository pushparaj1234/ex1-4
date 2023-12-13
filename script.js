
var alphabetRegex = /^[a-zA-Z\s]+$/;
function validatename(){
    var nameInput = document.getElementById('sch').value;
    var sname=document.getElementById('sch6').value;
    if (alphabetRegex.test(nameInput) && alphabetRegex.test(sname)){
        return true;
    }
    else{
        alert("name must contain alphabets only")
    }
}
function validatenum()
{
    var num=document.getElementById('sch4').value;
    var valid=/^[0-9]{10}$/.test(num);
    if(valid){
        return true;
    }
    else{
        alert("enter valid phone number");
    }
}
function validmar()
{
    var marks=document.getElementById('sch8').value;
    if(!isNaN(marks))
    {
        return true;
    }
    else{
        alert("enter valid marks");
    }
}
function validateother()
{
    var dep=document.getElementById('sch1').value;
    var des=document.getElementById('sch2').value;
    var date=document.getElementById('sch3').value;
    var clg=document.getElementById('sch7').value;
    return !(dep.trim() === "" || des.trim() === "" || date.trim() === "" || clg.trim() === "");

}
function validproofs()
{
    var p1=document.getElementById('bc');
    var p2=document.getElementById('pm');

   if(p1.checked && p2.checked)
   {
    return true;
   }
    return false;
}
function calculateYears() {
    var inputDate = document.getElementById('sch3').value;

    // Create a Date object from the input value
    var selectedDate = new Date(inputDate);

    // Get the current date
    var currentDate = new Date();

    // Calculate the difference in milliseconds
    var timeDifference = currentDate - selectedDate;

    // Calculate the number of years
    var years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
     if(years>=10)
     {
        return true;
     }
     else{
        return false;
     }
}
function validatestatus()
{
    var p3=document.getElementsByName('availStatus');
    for(var i =0; i<p3.length; i++)
    {
        if(p3[i].checked){
            if(p3[i].value=="notAvailed")
            {
                return true;
            }
        }
        
    }   
    return false;
}
function validate() {
      if( validatename() && validateother() && validatenum() && validmar())
      {
        alert("ok all fields filled");
        if(validproofs() && calculateYears() && validatestatus())
        {
            alert("successfully registered");
        }
        else{
            alert("no proof / no proper experience ");
        }
    
      }
      else{
        alert("fill the required fields");
      }
    
}