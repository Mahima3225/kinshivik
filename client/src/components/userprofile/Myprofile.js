import React , { useEffect , useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Myprofile() {


    const navigate = useNavigate(); 

    const [firstname, setFirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [username, setUsername] = useState('');
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');











    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
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










    






    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:9090/user/update');
                const data = await response.json();
                // setPosts(data);
                setFirstname(data.firstname);
                setlastname(data.lastname);
                setPassword(data.password);
                setUsername(data.userid);
                setEmail(data.email);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchUser();
    }, []);







    const handlesubmit = async (event)=>{
        event.preventDefault();
        if (!email || !password || !username ) {
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
        
        const formData = {
             

            "firstname": firstname,
            "lastname" :lastname ,
            "userid" :username,
            "email" : email,
            "password" :password ,
            
            
        };

        try {
            const response = await fetch('http://127.0.0.1:9090/user/update', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
        
            const result = await response.json();
            
            if(result.registered === 'true'){
                // navigate('/login');
                alert("User sucessfully updated")
            }
            else{
                alert("Something went wrong while updating the records,try again - Anand Kaushik");
            }
            
            // console.log('Success:', result);
        
            
          } catch (error) {
            console.error('Error:', error);
            
          }


        // console.log("Clicked");

    };







  return (











    // <div>Myprofile</div>
    <div id="signup-form-container" >
        <div id="signup-form-signin-title">
        Userprofile
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

                

                
            

            

            
            <div id="signup-password-input-container">
                <input id="signup-password-input" type="password" placeholder='Password' required onChange={handleChangePassword} value={password}/>
            </div>

            


            <div id="signup-submit-input-container">
                <input id="signup-submit-input" type='submit' placeholder='Login' value="Update" />
            </div>

        </form>
        


    </div>
    
  )
}
