let username=prompt("Lütfen Adınızı Giriniz:")
let myName=document.querySelector("#myName")
if (!username){
    alert("Boş Bırakılamaz")
    location.reload();
} else{
    myName.innerHTML=username
}
function time() {
    var days=["Pazar","Pazrtesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let date = new Date()
    let hour = date.getHours()
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var day= date.getDay();
    document.getElementById("myClock").innerHTML = hour+":"+min+":"+sec+"-"+days[day];
}
setInterval(time,1000)