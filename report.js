const storeR =()=> {
    let name = document.getElementById("nm").value;
    let roll = document.getElementById("rono").value;
    let stand = document.getElementById("std").value;
    let dsa = document.getElementById("sub1").value;
    let fend = document.getElementById("sub2").value;
    let bend = document.getElementById("sub3").value;
    let student = {name:name,rollNo:roll,standard:stand,dsa:dsa,fend:fend,bend:bend};
    let data = JSON.stringify(student);
        localStorage.setItem("user",data); 
        setTimeout(() => {location.href = "result.html"}, 100);
        location.href = "report.html";
}
const showR =()=> {
    let data1 = (localStorage.getItem("user"));
    let data2 = JSON.parse(data1);
    let content = `
        <p>Name: ${data2.name}</p>
        <p>Roll No: ${data2.rollNo}</p>
        <p>Standard: ${data2.standard}</p>
        <p>Data Structure: ${data2.dsa}</p>
        <p>Front End: ${data2.fend}</p>
        <p>Back End: ${data2.bend}</p>
    `;
    document.getElementById("d1").innerHTML = content;
}