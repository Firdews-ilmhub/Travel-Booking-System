let form=document.getElementById("bookingform");
form.addEventListener('submit', function(e){
    e.preventDefault();
    let destination=document.getElementById("destination");
    let name= document.getElementById("fullname");
    let date = document.getElementById("date");
    let confirmationBox = document.getElementById("confirmation");
    confirmationBox.innerHTML= `<h3>Booking Confirmed </h3>
                                <p>Thank You, <strong> ${name.value}</strong>!<br>
                                Your trip to <strong>${destination.value}</strong> on
                                <strong>${date.value}</strong> has been booked.
                                </p>`;
      confirmationBox.style.display="block";                      
      setTimeout(()=>{
        confirmationBox.style.display="none";
      },5000);

})