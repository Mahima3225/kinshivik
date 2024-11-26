import React from 'react';


function SetMycookie() {
    const [mycookies, setMyCookies] = React.useState(null);
    React.useEffect(()=>{
        const fetchcookie = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:9090/setmycook`);
                const data = await response.json();
                console.log("Cookies set ? ",data);
                
                setMyCookies(data);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };
        fetchcookie();
    },[]);
    


  return (
    <div> Hello</div>
  )
}

export default SetMycookie;