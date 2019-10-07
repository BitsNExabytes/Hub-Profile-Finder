//create UI class

class UI{

    //create constructor for us
    constructor (){

        // get a reference to the profile div
        this.profile  = document.querySelector('#profile');
    }


    //create method to show the profile

    showProfile(user){

      
     this.profile.innerHTML = `

     <div class = "card border-secondary card-body mb-3">

        <div class ="row">

            <div class ="col-md-3">

                <img class = "img-fluid mb-2" src = "${user.avatar_url}">
                <a href="${user.html_url}" target= "_blank" class = "btn btn-info btn-block mb-4">View Profile</a>

            </div>
    
            <div class ="col-md-9">

                <span class = "badge badge-pill badge-primary">Public Repos: ${user.public_repos}</span>
                <span class = "badge badge-pill badge-danger">Public Gists: ${user.public_gists}</span>
                <span class = "badge badge-pill badge-info">Followers: ${user.followers}</span>
                <span class = "badge badge-pill badge-dark">Following: ${user.following}</span>

                <br><br>

                <ul class = 'list-group'>
                    <li class ="list-group-item active">Company: ${user.company}</li>
                    <li class ="list-group-item">Website/blog: ${user.blog}</li>
                    <li class ="list-group-item">Location: ${user.location}</li>
                    <li class ="list-group-item">Member Since: ${user.created_at}</li>
                </ul>

            </div>
    
    
        </div>

     
     
     </div>

   
     <h3 class = "page-heading mb-3"><span class = "heading-primary">Latest</span> Repos</h3>
     <div id ="repos"></div>
     
     
     
     `;

    

    }

    //show repo

    showRepo(repo){

        let output = '';

        repo.forEach(repo =>{

            console.log(repo);


            let date = new Date(repo.created_at);




            output += `
            
            <div class = "card border-secondary  card-body  mb-2">

                <div class = "row">

                    <div class = "col-md-6">

                    <a href = "${repo.html_url} " target = "_blank">${repo.name}</a>
                   
                    
                    </div>

                    <div class = "col-md-6">

                         <span class = "badge badge-pill badge-primary">Stars: ${repo.stargazers_count}</span>
                         <span class = "badge badge-pill badge-danger">Watchers: ${repo.watchers_count}</span>
                         <span class = "badge badge-pill badge-info">Forks: ${repo.forks_count}</span>
                         <span class = "badge badge-pill badge-success">Created on: ${date.toLocaleDateString('en-US')}</span>
 
                    
                    </div>


                
                
                </div>


            
            
            </div>
            
            
            
            `;



        })


        document.querySelector("#repos").innerHTML = output;


    }

    //create clear profile method
    clearProfile(){

        this.profile.innerHTML = '';

    }


    //create method to show alert
    showAlert(){

        

        //if the profile div has contents clear it
        if(this.profile.innerHTML !== ''){

          
            this.profile.innerHTML = '';



        }
        
        // inject the warning  div element into the the profile div
        this.profile.innerHTML = `

        <div class = "alert alert-primary fade show" role = "alert">

            <strong>We're Sorry!</strong> The Profile that you are looking for could not be found.

        
        </div>
        
        
        `;


    }
}