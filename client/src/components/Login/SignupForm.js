import React , { useEffect } from 'react';
export default function SignupForm() {

    function createDynamicDateOptionElement() {

        for(let i = 1;i<=31;i++){
            const newOption = document.createElement('option');
            newOption.textContent = i;
            newOption.value = i;

            const selectdateelement = document.getElementById("signup-birth-date-select");
            selectdateelement.appendChild(newOption);
            




        }
        
        
    }
    function createDynamicYearOptionElement() {

        for(let i = 2024;i>=1924;i--){
            const newOption2 = document.createElement('option');
            newOption2.textContent = i;
            newOption2.value = i;

            const selectyearelement = document.getElementById("signup-birth-year-select");
            selectyearelement.appendChild(newOption2);
            




        }
        
        
    }


    // createDynamicDateOptionElement();
    // createDynamicYearOptionElement();


    useEffect(() => {
        console.log("useEffect ran!");
        createDynamicDateOptionElement();
        createDynamicYearOptionElement();
        
      }, []);
    
      console.log("Component rendered!");
  return (
    <div id="login-form-container">

        signin

        <form id="signup-form">

            <div id="signup-last-and-first-name-container">
                <div id="signup-first-name-input-container">
                    <input id="signup-first-name-input" type="text" placeholder='First Name'></input>

                </div>
                <div id="signup-last-name-input-container">
                    <input id="signup-last-name-input" type="text" placeholder='Last Name'></input>

                </div>

            </div>

            <div id="signup-birthdate-info-input-container">
                <div id="signup-birth-date-input-container">
                    <select id="signup-birth-date-select">


                        
                        
                    </select>
                    <select id="signup-birth-month-input-container">
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">Apr</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">Jul</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>



                    </select>


                    <select aria-label="Year" name="birthday_year"  title="Year" id="signup-birth-year-select">
                    
                    </select>
                </div>

            </div>

            <div id="signup-email-input-container">
                <input id="login-email-input" type="text" placeholder='Email address or username'/>
            </div>
            <div id="login-password-input-container">
                <input id="login-password-input" type="password" placeholder='Password'/>
            </div>


            <div id="login-submit-input-container">
                <input id="login-submit-input" type='submit' placeholder='Login' />
            </div>

        </form>
        


    </div>
  )
}
