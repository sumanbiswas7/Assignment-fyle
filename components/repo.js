export function Repo(repo) {
  return `
  <div>
  <h4>${repo.name}</h4>
  <p class="my">${repo.full_name}</p>
  <p class="my">owner: ${repo.owner?.login}</p>

  <div class="flex repo_forks">
    <p class="visibility my">${repo.visibility}</p>
    <div class="my bottom-tags">
    <span>Forks: ${repo.forks_count}</span>
    <span>Issues: ${repo.open_issues_count}</span>
    <div/>
  </div>

  <div class="flex" id="topicsContainer"></div>
  </div>
  `;
}
