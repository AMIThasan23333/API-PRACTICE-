

const randomUser = () => {


    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => displayUser(data.results));


}

 
   const displayUser = users => {

     const userContainer = document.getElementById('user-containers');


     for (const user of users ){

        const userDiv = document.createElement('div');

        userDiv.classList.add('user');
        
        userDiv.innerHTML = `
        
        <h3> User Name :   </h3>

        <p> User Info :    </p>

        
        `;

        userContainer.appendChild(userDiv)

      


     }





   }
  

