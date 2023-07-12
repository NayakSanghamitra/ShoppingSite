<template>
    <div>
      <section class="register-area">
        <div class="row m-0">
        <div class="d-flex align-items-center w-100">
    
          <div class="w-50 h-100 p-0">
            <div class="register-image">
              
            </div>
          </div>
    
            <div class="w-50 pb-6">
              <div class="register-content">
                <div class="d-table">
                  <div class="d-table-cell">
    
                    <div class="register-form">
    
                      <div class="logo">
                       
                        </div>
    
                        <h3>Open Up Your Account Now</h3>
                           <p>
                              Already registered
                            <router-link :to="{name: 'Legal'}">LogIn</router-link>
                            </p>
                            <div>
                              <div>
                                <br/>
                                <div>
                                  <span>
                                    <form >
                                      <div class="row">
    
                                        <div class="col">
                                          <div class="form-group">
                                            <span>
                                              <input name="firstname" type="name" autocomplete="off" placeholder="first name" class="form-control input-group-alternative"/>
                                             
                                              </span>
                                            </div>
                                          </div>
    
                                          <div class="col">
                                          <div class="form-group">
                                            <span>
                                              <input name="lastname" type="name" autocomplete="off" placeholder="last name" class="form-control input-group-alternative"/>
                                          
                                              </span>
                                            </div>
                                          </div>
                                        </div>
    
                                        <div class="form-group">
                                          <span>
                                            <input name="email" type="email" autocomplete="off" placeholder="Email Adress" class="form-control input-group-alternative"/>
                                           
                                            </span>
                                          </div>
    
                                           <div class="form-group">
                                          <span>
                                            <input name="contactno" type="number" autocomplete="off" placeholder="Contact Number" class="form-control input-group-alternative"/>
                                           
                                            </span>
                                          </div>
    
                                          <div class="form-group">
                                          <span>
                                            <input name="password" type="password" autocomplete="off" placeholder="password" class="form-control input-group-alternative"/>
                                         
                                            </span>
                                          </div>
                                          <button type="submit">Signup</button>
                                      </form>     
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
             </section>
          </div>
      </template>
    
    <script>
   
    export default {
      components: {
       
      },
      data() {
     
        return {
        
        };
      }, 
    };
    </script>
    
    <style scoped>
      .section
      {
        display: block;
      }
      .m-0
      {
        margin: 0!important;
      }
      .row
      {
        display: flex;
        flex: wrap;
      }
      .p-0
      {
        padding: 0!important;
        height: 100%;
      }
    img {
      max-width: 100%;
      height: auto;
    }
    .pb-6
    {
      padding-bottom: 4.5rem;
      overflow: hidden;
      background-color: rgb(249,195,24);
    }
    .register-image
    {
      height: 100%;
      width: 100%;
      background-position: 50%;
      background-size: cover;
      background-repeat: no-repeat;
     
    }
      .register-content{
        height: 100%;
      }
      .d-table
      {
        width: 100%;
        height: 100%;
      }
      .d-table-cell
      {
        vertical-align: middle;
        display: table-cell!important;
      }
      .logo-max-width
        {
          max-width: 300px;
        }
      .register-content .register-form
      {
        text-align: center;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
      }
      .register-content .register-form .logo
      {
        margin-bottom: 30px;
      }
      .register-content .register-form h3
      {
        margin-bottom: 0;
        font-size: 35px;
        font-weight: 700;
      }
      .register-content .register-form .logo a {
      display: inline-block;
    }
       .register-content .register-form p
       {
        margin-top: 8px;
        margin-bottom: 0;
       }
       .register-content .register-form p a
       {
        color: rgb(5,5,5);
        display:inline-block;
       }
       .register-content .register-form form form
       {
        margin-top: 35px;
       }
       .row
       {
        display:flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
       }
       .col
       {
        flex-basis: 0;
        -webkit-box-flex: 1;
        flex-grow: 1;
        max-width: 100%;
       }
       .form-group
       {
        margin-bottom: 1rem;
       }
        .register-content .register-form form .form-control
        {
          transition: .5s;
          transition-property: all;
          transition-duration: 0.5s;
          transition-timing-function: ease;
          transition-delay: 0s;
          height: 55px;
          font-size: 15px;
          background-color: rgb(230,230,230);
          color: rgb(3,3,3);
        }
        .register-content .register-form form button
        {
          transition: .5s;
          display: block;
          width: 100%;
          padding-top: 13px;
          padding-right: 25px;
          padding-bottom: 12px;
          padding-left: 25px;
          position: relative;
          border-top-width: 2px;
          border-bottom-width: 2px;
          border-left-width: 2px;
          border-right-width: 2px;
          border-bottom-style: solid;
          border-top-style: solid;
          border-left-style: solid;
          border-right-style: solid;
          font-size: 14.5px;
          font-weight: 700;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          background-color: rgb(13,13,13);
          color: rgb(230,229,229);
          border-color: rgb(13,13,13);
        }
        .f-btn
        {
          color: rgb(8,8,8);
          text-decoration-color: initial;
        }
    
    </style>
      
    