// Main Variables
let theInput = document.querySelector('.get-repos input');
let getButton = document.querySelector('.get-button');
let reposData = document.querySelector('show-data');


getButton.onclick = function () {
    getRepos();
  };

  // Get Repos Function
function getRepos() {

if (theInput.value == "")
{
    swal("Please Enter Your Github Username!");


} 

else
{

    fetch(`https://api.github.com/users/${theInput.value}/repos`)

    .then((response) => response.json())

    .then((repositories) => {

       

        //Loop on Repos
        repositories.forEach(repo => {
            
            //Create Main DIV
            let mainDiv = document.createElement('div');

            //Create Repo Name 
            let repoName = document.createTextNode(repo.name);

            //Append repo to Main Div 
            mainDiv.appendChild(repoName);

            //Create URL a 
            let theUrl = document.createElement('a');

            //Create theUrl Text 
            let theUrlText = document.createTextNode("Visit");

            //Append Text To theUrl
            theUrl.appendChild(theUrlText);

            //add href
            theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

            // Set Attribute Blank
            theUrl.setAttribute('target', '_blank');

            //Apppend theUrl to Main div
            mainDiv.appendChild(theUrl);

            //Create Stars Span 
            let Stars = document.createElement("span");
            //Create Stars Text
            let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

            //Append starsText To Stars Span 
            Stars.appendChild(starsText);

            //Add Stars To Main Div
            mainDiv.appendChild(Stars);

            //Add Class On mainDiv
            mainDiv.className = 'repo-box';

            //Append mainDiv To The container
            reposData.appendChild(mainDiv);

        });

    });


};

};
