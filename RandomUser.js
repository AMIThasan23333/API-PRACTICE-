

const randomUser = () => {


    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => displayUser(data.results[0]));


}

 
   const displayUser = user => {

    console.log(user)


   }
  



randomUser()