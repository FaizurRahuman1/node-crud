const userForm = document.getElementById('userForm');
const fName = document.getElementById('fName');
const email = document.getElementById('email');
const age = document.getElementById('age');
const username = document.getElementById('username');
const password = document.getElementById('password');
const address = document.getElementById('address')


//create handler
userForm.addEventListener("submit", async (event) => {
    event.preventDefault();
   // alert('submit clicked')
    
   const data = {
    fName: fName.value,
    email: email.value,
    age:age.value,
    username:username.value,
    address:address.value,
    password:password.value
   };
   console.log('data =', data);

    await fetch(`${url}/api/newuser`, {
     method:'POST',
     headers:{
        'content-type': 'application/json'
     },
     body: JSON.stringify(data)
   }).then(res => res.json())
   .then(out => {
    window.alert(out.msg);

   }).catch(err => window.alert(err.msg))
});
