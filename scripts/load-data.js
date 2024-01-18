import { Repo } from "../components/repo";
import { UserInfo } from "../components/user-info";

export function loadData() {
  document.addEventListener("DOMContentLoaded", function () {
    const reposContainer = document.getElementById("reposContainer");
    const userContainer = document.getElementById("userContainer");
    const loader = document.getElementById("loader");

    // Replace 'username' with the GitHub username you want to fetch data for
    const username = "sumanbiswas7";

    // Show loader while fetching data
    loader.style.display = "block";

    Promise.all([fetchUser(username), fetchRepos(username)])
      .then(([user, repos]) => {
        // Hide loader after data is fetched
        loader.style.display = "none";
        userContainer.innerHTML = UserInfo(user);

        repos.forEach((repo) => {
          const repoElement = document.createElement("div");
          repoElement.classList.add("repo");
          repoElement.innerHTML = Repo(repo);
          reposContainer.appendChild(repoElement);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Hide loader in case of an error
        loader.style.display = "none";
      });
  });
}

async function fetchUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return await response.json();
}

async function fetchRepos(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  return await response.json();
}
