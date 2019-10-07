
//create reference to search user input field
const searchUser = document.querySelector('#searchUser');


//Init UI class
const ui = new UI();


//create github object
const github = new Github();


//add evenelister for search user input field
searchUser.addEventListener('keyup', (e) =>{

    e.preventDefault();

    //get text from search bar
  const userInput = e.target.value;


  if(userInput !== ""){

    //make call to github
    github.getUser(userInput)
    .then(data =>{

       //check to see if the profile exist
       if(data.profile.message === 'Not Found'){

        //if profile is not found show alert
        ui.showAlert();
        
       }
       else{


        //if profile is found show profile
        ui.showProfile(data.profile);
        ui.showRepo(data.repo);
       }
    });




  }
  else{

    //If the input field contents is empty
    ui.clearProfile();
  }




})