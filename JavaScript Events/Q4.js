// Function to set a cookie
function setCookie(name, value, days) {
    let expires = '';
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/';
  }
  
  // Function to get a cookie
  function getCookie(name) {
    let nameEQ = name + '=';
    let ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1,c.length);
      }
      if (c.indexOf(nameEQ) == 0) {
        return decodeURIComponent(c.substring(nameEQ.length,c.length));
      }
    }
    return null;
  }
  
  // Function to check if a cookie exists
  function checkCookie(name) {
    let cookieValue = getCookie(name);
    if (cookieValue) {
      console.log('Cookie', name, 'exists and its value is', cookieValue);
    } else {
      console.log('Cookie', name, 'does not exist');
    }
  }
  
  // Example usage
  setCookie('myCookie', 'Hello, world!', 7);
  let myCookieValue = getCookie('myCookie');
  console.log('The value of myCookie is', myCookieValue);
  checkCookie('myCookie');
  