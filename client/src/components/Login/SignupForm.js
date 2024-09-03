import React , { useEffect , useState} from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/signup.css'
export default function SignupForm() {

    // const navigate = useNavigate(); 
    const navigate = useNavigate(); 

    const [firstname, setFirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [username, setUsername] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleChangebirthYear = (event) => {
        setBirthYear(event.target.value);
    };
    const handleChangebirthMonth = (event) => {
        setBirthMonth(event.target.value);
    };
    const handleChangebirthDate = (event) => {
        setBirthDate(event.target.value);
    };
    const handleChangeusername = (event) => {
        setUsername(event.target.value);
    };
    const handleChangelastname = (event) => {
        setlastname(event.target.value);
    };
    const handleChangefirstname = (event) => {
       setFirstname(event.target.value);
    };

    const handlesubmit = async (event)=>{
        event.preventDefault();
        if (!email || !password || !username || !birthDate || !birthMonth || !birthYear) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        setEmail(email);
        setPassword(password);
        setFirstname(firstname);
        setlastname(lastname);
        setUsername(username);
        setBirthDate(birthDate);
        setBirthMonth(birthMonth);
        setBirthYear(birthYear);
        const formData = {
             

            "firstname": firstname,
            "lastname" :lastname ,
            "userid" :username,
            "email" : email,
            "password" :password ,
            "birthDate" :birthDate,
            "birthMonth" :birthMonth ,
            "birthYear" : birthYear,
        };

        try {
            const response = await fetch('http://127.0.0.1:9090/users/add', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
        
            const result = await response.json();
            
            if(result.registered === 'true'){
                navigate('/login');

            }
            else{
                alert("Something went wrong,try again - Anand Kaushik");
            }
            
            console.log('Success:', result);
        
            
          } catch (error) {
            console.error('Error:', error);
            
          }

    };

   

























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
    <div id="signup-form-container" >
        <div id="signup-form-signin-title">
        Signup
        </div>


        <form id="signup-form"  onSubmit={handlesubmit}>

            <div id="signup-last-and-first-name-container">
                <div id="signup-first-name-input-container">
                    <input id="signup-first-name-input" type="text" placeholder='First Name' required onChange={handleChangefirstname} value={firstname}></input>

                </div>
                <div id="signup-last-name-input-container">
                    <input id="signup-last-name-input" type="text" placeholder='Last Name' onChange={handleChangelastname} value={lastname}></input>

                </div>

            </div>

                <div id="username-title">Username</div>
            

                <div id="signup-username-input-container">
                    <input id="signup-username-input" type="text" placeholder='Username' required onChange={handleChangeusername} value={username}></input>

                </div>

                <div id="signup-email-input-container">
                    <input id="signup-email-input" type="email" placeholder='Email' required onChange={handleChangeEmail} value={email}></input>

                </div>

                <div id="birthdate-info-title">Date of birth</div>

                <div id="signup-birthdate-info-input-container">
                    <div id="signup-birth-date-input-container">
                        <select id="signup-birth-date-select" required onChange={handleChangebirthDate} value={birthDate}>


                            
                            
                        </select>
                        <select id="signup-birth-month-select" required onChange={handleChangebirthMonth} value={birthMonth}>
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


                        <select aria-label="Year" name="birthday_year"  title="Year" id="signup-birth-year-select" required onChange={handleChangebirthYear} value={birthYear}>
                        
                        </select>
                    </div>

                </div>
            

            

            
            <div id="signup-password-input-container">
                <input id="signup-password-input" type="password" placeholder='Password' required onChange={handleChangePassword} value={password}/>
            </div>

            


            <div id="signup-submit-input-container">
                <input id="signup-submit-input" type='submit' placeholder='Login' />
            </div>

        </form>
        


    </div>
  )
}
