const projects = [
  {
    name: "four-card-feature-section",
    github: "https://github.com/mehmet-emin-git/fem-cards-layout",
    liveDemo: "https://mehmet-emin-git.github.io/fem-cards-layout/",
  },
  {
    name: "base-apparel-coming-soon",
    githubRepo: "https://github.com/mehmet-emin-git/base-aparel-coming-soon",
    liveDemo: "https://mehmet-emin-git.github.io/base-aparel-coming-soon/",
  },
  {
    name: "signup-form",
    githubRepo: "https://github.com/mehmet-emin-git/signUp-form",
    liveDemo: "https://mehmet-emin-git.github.io/signUp-form/",
  },
  {
    name: "single-price-grid-component",
    githubRepo: "https://github.com/mehmet-emin-git/single-price-component",
    liveDemo: "https://mehmet-emin-git.github.io/single-price-component/",
  },
  {
    name: "ping-coming-soon-page",
    githubRepo: "https://github.com/mehmet-emin-git/ping-single-column",
    liveDemo: "https://mehmet-emin-git.github.io/ping-single-column/",
  },
  {
    name: "huddle-landing-page-alt",
    githubRepo:
      "https://github.com/mehmet-emin-git/huddle-landing-page-alt-featBlock",
    liveDemo:
      "https://mehmet-emin-git.github.io/huddle-landing-page-alt-featBlock/",
  },
  // {
  // 	name: 'huddle-simple-landing',
  // 	youtube:
  // 		'https://www.youtube.com/watch?v=ObrYwPRyeqc&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=8&t=0s'
  // },
  // {
  // 	name: 'fylo-landing-page',
  // 	youtube:
  // 		'https://www.youtube.com/watch?v=a9-Ro9rc7E4&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=9&t=0s'
  // },
  // {
  // 	name: 'insure-landing-page',
  // 	youtube:
  // 		'https://www.youtube.com/watch?v=9HVKR_hK0nY&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=10&t=0s'
  // },
  // {
  // 	name: 'pricing-toggle-component',
  // 	youtube:
  // 		'https://www.youtube.com/watch?v=NBkD-O7f4Bs&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=11&t=0s'
  // },
  // {
  // 	name: 'tracking-info',
  // 	youtube:
  // 		'https://www.youtube.com/watch?v=71HM728Mul4&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=11&t=0s'
  // },
  // {
  // 	name: 'clipboard-landing-page',
  // 	youtube:
  // 		'https://www.youtube.com/watch?v=aZeKU7xoT0w&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=11&t=0s'
  // }
];

const list = document.getElementById("list");

projects.forEach(({ name, githubRepo, liveDemo }, i) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
		<a href="/${name}/index.html">
			<img src="https://github.com/mehmet-emin-git/${name}/design/desktop-preview.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>
		<div class="links-container">
      <a href="${liveDemo}" class="live">
      <i class="fas fa-eye"></i>
			<a href="${githubRepo}" class="github">
      <i class="fab fa-github"></i>
      </a>
    </a>
		</div>
	`;

  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
