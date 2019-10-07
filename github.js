//create a class for git hub

class Github{

    //constructor for class
    constructor(){

        this.client_id = 'ed62312057244160b5ec';

        this.client_secret ='6c12bb2385d74897999e22db57bc630b17f16dfc';

        this.repos_count = 5;

        this.repos_sort = 'created: asc';
    }

    //method to get the user

    async getUser(user){  //async allows this function to return a promise

        //await allows us to wait for a promise to resolve a value
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);



        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        //get the profile data
        const profileData = await profileResponse.json();

        //get the repot data
        const repoData = await repoResponse.json();


        //we will return an object because we want to return both the profile and repo
        return {

            profile: profileData,
            repo: repoData


        }

    }



}