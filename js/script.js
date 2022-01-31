/*
    @author: Yuxuan Wang
    @email: yx703587@dal.ca
    @descp: CSCI 3172 Lab2 script
*/

// display the form data on the webpage
var submit = document.getElementById("submit-btn");
submit.addEventListener("click", displayFormData);

function displayFormData(e){
    e.preventDefault();
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var country = document.querySelector("#country").value;

    let values = [fname, lname, gender, country];
    // display fetched value to console for debugging
    console.log(values);

    // display on page
    document.getElementById('main').innerHTML = 
                            "<p>first name: "+values[0]+"<p/>"+
                            "<p>last name: "+values[1]+"<p/>"+
                            "<p>gender: "+values[2]+"<p/>"+
                            "<p>country: "+values[3]+"<p/>";

    
}

// preventDefault() prevent the browser execute default actions of the current
//  selected element. for example, stop a form submission when clicking a button


// The below code keeps the previous on page, replace this to code at line 23-27
// keeps previous data on page
    /*
    document.getElementById('main').insertAdjacentHTML('beforeend',"<div>"+
                            "<p>first name: "+values[0]+"<p/>"+
                            "<p>last name: "+values[1]+"<p/>"+
                            "<p>gender: "+values[2]+"<p/>"+
                            "<p>country: "+values[3]+"<p/>"+
                            "</div>");
    */