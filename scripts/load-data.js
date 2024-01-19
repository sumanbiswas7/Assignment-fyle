import { Repo } from "../components/repo";
import { SelectPageCount } from "../components/select-per-page";
import { UserInfo } from "../components/user-info";

export function loadData() {
  document.addEventListener("DOMContentLoaded", function () {
    const reposContainer = document.getElementById("reposContainer");
    const userContainer = document.getElementById("userContainer");
    const selectContainer = document.getElementById("selectContainer");
    const loader = document.getElementById("loader");

    // Replace 'username' with the GitHub username
    const username = "sumanbiswas7";

    // Show loader while fetching initial data
    loader.style.display = "block";

    Promise.all([fetchUser(username), fetchRepos(username, getPageCount())])
      .then(([user, repos]) => {
        // Hide loader after initial data is fetched
        loader.style.display = "none";
        userContainer.innerHTML = UserInfo(user);
        selectContainer.innerHTML = SelectPageCount();
        const pageSelect = document.getElementById("pagecount");

        pageSelect.addEventListener("change", async function () {
          // Add event listener for page count change
          loader.style.display = "block"; // Show loader while fetching new data

          const newPageCount = getPageCount();
          const newRepos = await fetchRepos(username, newPageCount);

          loader.style.display = "none"; // Hide loader after new data is fetched

          // Clear existing repos and render the new ones
          reposContainer.innerHTML = "";
          renderRepos(newRepos);
        });

        // Populate repos for the initial page count
        renderRepos(repos);
      })
      .catch((error) => {
        console.error("Error fetching initial data:", error);
        // Hide loader in case of an error
        loader.style.display = "none";
      });
  });
}

function getPageCount() {
  const pageSelect = document.getElementById("pagecount");
  return parseInt(pageSelect?.value, 10);
}

function renderRepos(repos) {
  const reposContainer = document.getElementById("reposContainer");

  repos.forEach((repo) => {
    const repoElement = document.createElement("div");
    repoElement.classList.add("repo");
    repoElement.innerHTML = Repo(repo);
    reposContainer.appendChild(repoElement);

    const topicsContainer = document.createElement("div");
    topicsContainer.classList.add("flex", "topics");

    repo.topics?.forEach((topic) => {
      const topicElement = document.createElement("span");
      topicElement.classList.add("topic");
      topicElement.innerText = topic;
      topicsContainer.appendChild(topicElement);
    });

    repoElement.append(topicsContainer);
  });
}

async function fetchUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return await response.json();
}

async function fetchRepos(username, pageCount) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=${pageCount || 10}`
  );
  return await response.json();
}
