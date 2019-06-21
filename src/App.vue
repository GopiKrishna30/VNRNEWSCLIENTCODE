<template>

  <div id="app">
    
          <nav class="navbar  navbar-dark bg-primary">
        <a class="navbar-brand" href="/">VNR NEWS</a>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search">
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>

          
     <div class="btn-group btn-group-toggle">
      
        <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
        </li>
        </ul>
            &nbsp
            &nbsp
            &nbsp 
        <ul class="navbar-nav mr-auto">

        <li class="nav-item">
          <a class="nav-link" href="/signup">SignUp</a>
        </li>
        </ul>
      
    </div>
       

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        
        <div class="collapse navbar-collapse" id="navbarColor01" >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li> 
            <li class="nav-item">
              <a class="nav-link" href="/seminar">Seminars</a>
            </li>
            

            <li class="nav-item dropdown">
              
             <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" 
             aria-haspopup="true" aria-expanded="false">Notice</a>
               <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; 
               will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 40px, 0px);">
               <a class="dropdown-item" href="/college_notice">COLLEGE_NOTICE</a>
               <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/ae_notice">AE_NOTICE</a>
                <a class="dropdown-item" href="/ce_notice">CE_NOTICE</a>
                <a class="dropdown-item" href="/cse_notice">CSE_NOTICE</a>
                <a class="dropdown-item" href="/eee_notice">EEE_NOTICE</a>
                <a class="dropdown-item" href="/ece_notice">ECE_NOTICE</a>
                <a class="dropdown-item" href="/eie_notice">EIE_NOTICE</a>
                <a class="dropdown-item" href="/it_notice">IT_NOTICE</a>
                <a class="dropdown-item" href="/me_notice">ME_NOTICE</a>
                
               </div>
            </li>

<!--HelooWorld-->

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
               aria-haspopup="true" aria-expanded="false">Student Chapters</a>
              <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; 
              will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 40px, 0px);">
                <a class="dropdown-item" href="/acm">ACM</a>
                <a class="dropdown-item" href="/asme">ASME</a>
                <a class="dropdown-item" href="/cea">CEA,ICI,IGBC</a>
                <a class="dropdown-item" href="/csi">CSI</a>
                <a class="dropdown-item" href="/ieee">IEEE</a>
                <a class="dropdown-item" href="/iei">IEI</a>
                <a class="dropdown-item" href="/iete">IETE</a>
                <a class="dropdown-item" href="/isoi">ISOI</a>
                <a class="dropdown-item" href="/iste">ISTE</a>  
                <a class="dropdown-item" href="/sae">SAE</a>
              </div>
            </li>
            
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" 
                aria-haspopup="true" aria-expanded="false">Clubs</a>
                <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute;
                 will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 40px, 0px);">
                  <a class="dropdown-item" href="/creative_arts">Creative Arts</a>
                  <a class="dropdown-item" href="/crescendo">Crescendo</a>
                  <a class="dropdown-item" href="/dramatix">Dramatix</a>
                  <a class="dropdown-item" href="/livewire">Livewire Crew</a>
                  <a class="dropdown-item" href="/nss">NSS</a>
                  <a class="dropdown-item" href="/scintillate">Scintillate</a>
                  <a class="dropdown-item" href="/stentorian">Stentorian</a>
                  <a class="dropdown-item" href="/sahitivanam">విజ్ఞానజ్యోతి సాహితీవనం</a>
                  <a class="dropdown-item" href="/vj_teatro">VJ Teatro</a>  
                  <a class="dropdown-item" href="/vnrsf">VNRSF</a>
                </div>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="/sports">Sports</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="/others">Others</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="/postCreation">Create Post</a>
            </li> 
            
            <li class="nav-item">
              <a class="nav-link" href="/testing">Testing</a>
            </li>

          
          </ul>
        </div>
         
      </nav>

    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app'  
  
}
</script>

