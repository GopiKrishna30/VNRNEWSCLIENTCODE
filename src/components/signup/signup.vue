<template>
<div>


      <h1>SIGN UP UNDER CONSTRUCTION</h1>
<button onclick="document.getElementById('id02').style.display='block'" style="width:auto;" v-on:click="clicki">Sign Up</button>

<div id="id02" class="modal">
  <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
  <form class="modal-content" id="form" action="/action_page.php" onSubmit="return  checkPassword(this)">

    <div class="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
     <div class="t1">
      <label for="first"><b>First Name</b></label>
      <input type="text" placeholder="Enter First Name" name="first" required>
     </div>
     <div class="t2">
     <label for="last"><b>Last Name</b></label>
      <input type="text" placeholder="Enter Last Name" name="last" required>
      </div>
      <p></p>

      <div class="t3">
          <label for="rollno"><b>RollNo.</b></label>
          <input type="text" placeholder="Enter Roll No" name="rollno" required>
      </div>

      <div class="t4">
          <label for="branch"><b>Branch</b></label>
              
           <select name="my1" class="b2" >
             <option value="" style="display: none;" disabled selected>Enter Branch</option>
             <option>Auto Mobile Engineering</option>
             <option >Civil Engineering</option>
             <option>Computer Science Engineering</option>
             <option>Electrical and Electronics Engineering	</option>
             <option>Electronics and Communication Engineering	</option>
             <option >Electronics and Instrumentation Engineering	</option>
             <option>Information Technology	</option>
             <option>Mechanical Engineering	</option>
           </select>
      </div>
      
      <div class="t5">
        <label for="year" class="d2"><b>Year</b></label>
        
           <select name="my" class="d1" >
             <option value="" disabled selected>Enter Year</option>
             <option> I</option>
             <option >II</option>
             <option>III</option>
             <option>IV</option>
           </select>
      </div>

      <div class="t6">
          <label for="cname"><b>College Name</b></label>
          <input type="text" placeholder="Enter College Name" name="cname" required>
      </div>

      <div class="t7">
          <label for="pno"><b>Mobile Number</b></label>
          <input type="tel" placeholder="Enter Mobile Number" name="pno" required>
      </div>

      <label for="email"><b>Email</b> </label><br/>
      <input class="p1" type="email"  value="" placeholder="Enter Email"   required />
      <br/>   <p></p>
      <label for="password1"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="password1"required>

      <label for="password2"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="password2"  required>
     
    

      

      <div class="clearfix">
        <button type="button" onclick="document.getElementById('id02').style.display='none'" class="cancelbtn">Cancel</button>
        <button type="submit" class="signupbtn">Sign Up</button>
      </div>
    </div>
  </form>
</div>
</div>    
</template>
  

<script>
export default {
  data() {
    return {
      email:null
    }
  },
    methods: {
        clicki() {
            var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

    }
    }
}
</script>


<style scoped>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

/* Add a background color when the inputs get focus */
input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for all buttons */
button {
  background-color: rgb(76, 107, 175);
  color: black;
  padding: 14px 20px;
  margin: 8px 0px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:0.8;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: goldenrod;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: #474e5d;
  padding-top: 50px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* Style the horizontal ruler */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
 
/* The Close Button (x) */
.close {
  position: absolute;
  right: 35px;
  top: 15px;
  font-size: 40px;
  font-weight: bold;
  color: #f1f1f1;
}

.close:hover,
.close:focus {
  color: #f44336;
  cursor: pointer;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
  from {-webkit-transform: scale(0)} 
  to {-webkit-transform: scale(1)}
}
  
@keyframes animatezoom {
  from {transform: scale(0)} 
  to {transform: scale(1)}
}


/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}
.t1,.t2 {
    display: inline-block;
    padding: 5px;
}
.t3,.t4,.t5 {
    display: inline-block;
    padding: 10px;
}

.p1 {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  

}

.p1:focus{
  background-color: #ddd;
  outline: none;
}

.d1, .b2{
  width: 90%  ;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  

}

.d1:focus ,.b2:focus{
  background-color: #ddd;
  outline: none;
}

</style>
