<template>
    <div>
        <div class="container">
        <form @submit.prevent="addPost">
            <div class="row">
            <div class="col-25">
                <label for="title">Title</label>
            </div>
            <div class="col-75">
                <input type="text" id="title" name="title" placeholder="Enter Title"   v-model="post.title" required>
            </div>
            </div>
            <div class="row">
            <div class="col-25">
                <label for="shortDes">Short Description</label>
            </div>
            <div class="col-75">
                <input type="text" id="shortDes" name="shortDes" placeholder="short description" v-model="post.shortDes" required>
            </div>
            </div>

            <div class="row">
            <div class="col-25">
                <label for="startDateTime">Start date and time</label>
            </div>
            <div class="col-75">
                <input type="datetime-local" id="startDateTime" value='2019-08-19T13:45:00' v-model="post.startDate" required>
            </div>
            </div>
            <div class="row">
            <div class="col-25">
                <label for="endDateTime">End date and time</label>
            </div>
            <div class="col-75">
                <input type="datetime-local" id="endDateTime" value='2019-08-19T13:45:00' v-model="post.endDate" required>
            </div> 
            </div>
            <div class='row'>
                <div class='col-25'>
                    <label for='tag'>Tag</label>
                </div>
                <div class='col-75'>
                    <select v-model="post.tag" required>
                        <option v-for='option in tags' :value='option' :key='option'>{{option}}</option>
                    </select>
                </div>
            </div>
            
            <div class="row">
            <div class="col-25">
                <label for="longDes">Long Description</label>
            </div>
            <div class="col-75">
                <textarea id="longDes" name="longDes" placeholder="Long Description" style="height:200px" v-model="post.longDes" required></textarea>
            </div>
            </div>

            <div class="row">
            <div class="col-25">
                <label for="imageURL">Image URL's</label>
            </div>
            <div class="col-75">
                <input type="url" id="imageURL"   placeholder="imageURL" v-model="post.imageURL">
            </div>
            </div>

            <div class="row">
            <input type="submit" value="Post">
            </div>
        </form>
        </div>
    </div>
</template>
<script>
const  API_URL="https://vnrnews01.herokuapp.com/posts";
export default {
    data:function(){
        return{
           
            tags:['COLLEGE_NOTICE','AE_NOTICE','CE_NOTICE','CSE_NOTICE','EEE_NOTICE','ECE_NOTICE','EIE_NOTICE'
                 ,'IT_NOTICE','ME_NOTICE','SPORTS','SEMINARS','ACM','ASME','CEA','CSI','IEEE'
                 ,'IEI','IETE','ISOI','ISTE','SAE','CreativeArts','Crescendo','Dramaitx','LivewireCrew'
                 ,'NSS','Scintillate','Stentorian','విజ్ఞానజ్యోతి సాహితీవనం'
                 ,'VJTeatro','VNRSF','Others'],
            post:{
              title:"",
              tag:"",
              shortDes:"",
              longDes:"",
              imageURL:"",
              startDate:"",
              endDate:""
            },
            posts:[]
        }
    },
    methods:{
      addPost(){
        //console.log("data added sucessfully..!!");
        fetch(API_URL,{
          method:'POST',
          body:JSON.stringify(this.post),
          headers:{
            'content-type': 'application/json',
          },
        }).then(response=>response.json()).then((result)=>{
          if(result.details){
            const error=result.details.map(detail=>detail.message).join('. ');
            this.error=error;
          }else{
            this.error="";
            
            this.posts.push(result);
          }
        });
      },
    },
}
</script>

<style>
* {
  box-sizing: border-box;
}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  color:black;
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
</style>