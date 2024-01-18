export function UserInfo(user) {
  return `
      <img
       src=${user.avatar_url}
       class="avatar"
      />
      <div>
          <h4>@${user.login}</h4>
          <h2>${user.name}</h2>
          <p class="my">${user.bio}</p>
          ${
            user.location
              ? `<div class="flex user-info">
                    <img src="./public/icons/map-pin.svg" class="pin" />
                    <p>Orlando</p>
                 </div>`
              : ""
          }
          <p class="my">Profile: ${user.html_url}</p>
      </div>
      `;
}
