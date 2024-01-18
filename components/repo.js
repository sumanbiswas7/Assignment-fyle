export function Repo(repo) {
  return `
  <div>
  <h4>${repo.name}</h4>
  <p class="my">${repo.full_name}</p>
  <p class="my">owner: ${repo.owner?.login}</p>
  <p class="visibility my">${repo.visibility}</p>
  <p class="my bottom-tags">
    <span>Forks: ${repo.forks_count}</span>
    <span>Issues: ${repo.open_issues_count}</span>
   <p/>
  </div>
  `;
}
