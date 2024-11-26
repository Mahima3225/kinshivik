


import React, { useState, useEffect } from 'react';

function Showmycookie() {
  const [cookieValue, setCookieValue] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:9090/setmycook', {
        credentials: 'include'
      });
      const data = await response.json();
      // Access the cookie value from the response or directly from the browser's cookie store
      setCookieValue(document.cookie);
    };

    fetchData();
  }, []);

  return (
    <div>
      {cookieValue ? <p>Cookie value: {cookieValue}</p> : <p>No cookie found</p>}
    </div>
  );
}

export default Showmycookie;