console.log("Adfar")
function fetchUserInfo(username){
    
    fetch(`https://api.github.com/users/${username}`)
    .then(response=>response.json())
    .then((user)=>{
      document.getElementById("overview").innerHTML = `
       <div>
        <img width="150px" height="150px" src="${user.avatar_url}" alt="prfile pic"/>
        <h2> User Name : ${user.name}</h2>
        <h2> User Bio : ${user.bio}</h2>
        <h2> User Followers : ${user.followers}</h2>
        <h2> User Following : ${user.following}</h2>
        <h2> User Repos : ${user.public_repos}</h2>
        <h2> User Name : ${user.name}</h2>
       </div>
      `
    })
}
document.getElementById("searchForm").addEventListener("submit",(e)=>{
    e.preventDefault()
    let username = document.getElementById("username").value
    if(username){
        fetchUserInfo(username);
        fetchUserRepos(username,1)
    }
})

function fetchUserRepos(username,page){
    fetch(`https://api.github.com/users/${username}/repos?per_page=5&page=${page}`)
    .then((response)=>response.json())
    .then((repos)=>{
        let repoList = repos.map((repo)=>`
            <div class="repo">
                <div>
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    <p>${repo.description || "no description available"}</p>
                </div>

            </div>
        `).join("")
        document.getElementById("repos").innerHTML = repoList;
       fetchTotalRepos(username).then(totalRepos=>setPagination(username,page,totalRepos))
    })
}
function setPagination(username,currentPage,totalRepos){
    let pagination = document.getElementById("pagination")
    let totalPages = Math.ceil(totalRepos/5);
    pagination.innerHTML= "";
    const createButton = (text,currentPage)=>{
        let button = document.createElement("button")
        button.textContent = text;
        button.onclick = ()=>{fetchUserRepos(username,currentPage)};
        return button
    }
    //prevBtn
     const prevBtn = createButton("prev",currentPage-1);
     prevBtn.disabled = currentPage===1;
     pagination.appendChild(prevBtn)

     //range
     const maxBtns =5;
     let startPage=Math.max(1,currentPage-Math.floor(maxBtns/2));
     let endPage=Math.min(totalPages,startPage+maxBtns-1);
     for(let i = startPage;i<=endPage;i++){
         const pageButton = createButton(i,i);
         pagination.appendChild(pageButton)
     }
     
     //NextBtn
     const nextBtn = createButton("next",currentPage+1);
     nextBtn.disabled = currentPage===totalPages;
     pagination.appendChild(nextBtn)
}
//95 96 97 98 99
//97 98 99 100 101 
// function setPagination(username,totalRepos){
//   let paginatioMath.ceil(totalRepos/5)
//   for(let i=1;i<=btnCount;i++){
//     let pageBtn =document.createElement("button");
//     pageBtn.textContent =i;
//     pageBtn.onclick=()=>{
//         fetchUserRepos(username,i)
//     }
//     pagination.appendChild(pageBtn)
//   }
// }
function fetchTotalRepos(username){
  return  fetch(`https://api.github.com/users/${username}`)
    .then(response=>response.json())
    .then(result=>result.public_repos)
}
