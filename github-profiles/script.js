const url="https://api.github.com/users/";
let user1="yashwanth-brahma";
const form=document.querySelector("form");
const searchUser=document.querySelector("#search");

const fetchUser=async (user=user1)=>{
    const res=await fetch(url+user);
    let data=await res.json();
    console.log(data.name);
    
    getuser(data);
   
}
const profile=document.querySelector("#profile");
const getuser=(user)=>{
    profile.innerHTML=`<div >
                            <img src=${user.avatar_url} alt="profile-img" id=img>
                        </div>
                        <div id=user-info>
                            <h3>${user.name}</h3>
                            <p>Bio: ${user.bio}</p>

                            <ul id=user-info1>
                                <li>${user.followers} followers</li>
                                <li>${user.following} following</li>
                                <li>${user.public_repos} Repo</li>
                            </ul>
                            <div id=repos></div>
                        </div>`
}

const fetchRepos=async (user=user1)=>{
    const res=await fetch(url+user+"/repos");
    let data=await res.json();
    // console.log(data);
    getRepos(data);
}



const getRepos=(repos)=>{
    const repos1=document.querySelector("#repos");
    repos
        .sort((a,b)=>b.stargazers_count-a.stargazers_count)
        .slice(0,10)
        .forEach((repo)=>{
        repos1.innerHTML+=`<a href=${repo.html_url} target="_blank" class="repo">${repo.name}</a>` 
        });
}

fetchUser();
fetchRepos();


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    user1=searchUser.value;
    fetchUser();
fetchRepos();   
})