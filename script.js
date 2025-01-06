function fetchUserInfo(username){
    fetch(`https://api.github.com/users/${username}`)
    .then((response)=>response.json())
    .then((user)=>{
     document.getElementById("overview").innerHTML = `
       <div>
         <img width="150px" height="150" src="${user.avatar_url} alt="${user.name}"/>
         <h2>user Name: ${user.name}</h2>
         <h2>user Bio: ${user.bio}</h2>
         <h2>user Followers: ${user.followers}</h2>
         <h2>user Followings: ${user.following}</h2>
         <h2>user Repos: ${user.public_repos}</h2>
         <a href="${user.html_url}" target="_blank">${user.name}</a>
       </div>
     `
    }).catch(()=>{
     document.getElementById("overview").innerHTML = "<h1>USer not found</h1>"
    })
 }
 document.getElementById("searchForm").addEventListener("submit",(e)=>{
   
     e.preventDefault()
     let username = document.getElementById("username").value;
     if(username){
         fetchUserInfo(username)
         fetchUserRepos(username,1)
    
     }
 })
 function fetchUserRepos(username, page) {
    fetch(`https://api.github.com/users/${username}/repos?per_page=5&page=${page}`)
        .then((response) => response.json())
        .then((repos) => {
            let repolist = repos.map((repo) => `
                <div class="repo">
                    <div>
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        <p>${repo.description || 'no description available'}</p>
                        <i class="fa-heart ${isfavorite(repo.name) ? "fa-solid" : "fa-regular"}" onclick="toggleFavRepos('${repo.name}', '${repo.html_url}', '${repo.description}')"></i>
                    </div>
                </div>
            `).join("");

            document.getElementById("repos").innerHTML = repolist;

            // Call to update icons after rendering the repos
            UpdateRepoIcons();  // Ensure favorites are displayed correctly

            fetchTotalRepos(username).then(totalRepos => setPagination(username, page, totalRepos));
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
            document.getElementById("repos").innerHTML = "<h1>Error fetching repositories</h1>";
        });
}

 let favoriteRepos= [] || JSON.parse(localStorage.getItem("favRepos"))
 
 function isfavorite(repoName){
     
  return favoriteRepos.some(repo=>repo.repoName===repoName)
 }
 function toggleFavRepos(repoName, url, description) {
    let repoIndex = favoriteRepos.findIndex(repo => repo.repoName === repoName);
    if (repoIndex !== -1) {
        favoriteRepos.splice(repoIndex, 1); // Remove from favorites
    } else {
        favoriteRepos.push({ repoName, url, description }); // Add to favorites
    }
    localStorage.setItem("favRepos", JSON.stringify(favoriteRepos));
    UpdateRepoIcons(); // Update icons immediately after toggling
}

 function UpdateRepoIcons(){
     document.querySelectorAll(".repo").forEach(repoDiv=>{
         let repoName = repoDiv.querySelector("a").textContent;
         let icon = repoDiv.querySelector(".fa-heart");
         if(isfavorite(repoName)){
             icon.classList.add("fa-solid")
             icon.classList.remove("fa-regular")
         } else{
             icon.classList.remove("fa-solid")
             icon.classList.add("fa-regular")
         }
     })
 }
 function fetchTotalRepos(username){
     return fetch(`https://api.github.com/users/${username}`)
     .then(result=>result.json())
     .then(response=>response.public_repos)
 }
 // function setPagination(username,page){
 //     console.log(page)
 //     let pagination = document.getElementById("pagination")
 //     pagination.innerHTML = `
 //      <button onclick="fetchUserRepos('${username}',${page-1})" ${page===1?"disabled":""}>Previous</button>
 //      <button onclick="fetchUserRepos('${username}',${page+1})">Next</button>
 //     `
 // }
 function setPagination(username,currentPage,totalRepos){
     
     let pagination = document.getElementById("pagination");
     pagination.innerHTML="";
     let totalPages = Math.ceil(totalRepos/5);
     const createButton = (text,currentPage)=>{
         let button = document.createElement("button");
         button.textContent = text;
         button.onclick = ()=>fetchUserRepos(username,currentPage);
         return button;
     }
     //previousButton 
     const prevButton = createButton("prev",currentPage-1)
     prevButton.disabled = currentPage===1;
     pagination.appendChild(prevButton)
 
     const maxBtns =5;
     let startPage = Math.max(1,currentPage-Math.floor(maxBtns/2));
     let endPage = Math.min(totalPages,startPage+maxBtns-1);
     for(let i=startPage;i<=endPage;i++){
         const pageButton = createButton(i,i);
         pagination.appendChild(pageButton)
     }
     //nextpage
     const nextButton = createButton("next",currentPage+1)
     nextButton.disabled = currentPage===totalPages;
     pagination.appendChild(nextButton)
 
 }
 // function setPagination(username,page,totalRepos){
 //     totalRepos=66;
 //     let pagination = document.getElementById("pagination");
 //     // let prevBtn = document.createElement("button")
 //     // prevBtn.innerHTML= `
 //     // <button onclick="fetchUserRepos('${username}',${page-1})" ${page===1?"disabled":""}>Previous</button>
 //     // `
 //     // document.getElementById("prev").appendChild(prevBtn)
 //     let btnCount = Math.ceil(totalRepos/5);
 //     for(let i=1;i<=btnCount;i++){
 //         let pageBtn = document.createElement("button");
 //         pageBtn.textContent = i;
 //         pageBtn.onclick = ()=>{
 //             fetchUserRepos(username,i)
 //         }
 //         pagination.appendChild(pageBtn)
 //     }
 //     // let nextBtn = document.createElement("button")
 //     // nextBtn.innerHTML= `
 //     // <button onclick="fetchUserRepos('${username}',${page+1})">Next</button>
 //     // `
 //     // document.getElementById("next").appendChild(nextBtn)
 // }