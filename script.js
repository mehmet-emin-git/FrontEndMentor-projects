const projects = [
  {
    name: "fem-cards-layout",
    github: "https://github.com/mehmet-emin-git/fem-cards-layout",
    liveDemo: "https://mehmet-emin-git.github.io/fem-cards-layout/",
  },
  {
    name: "base-aparel-coming-soon",
    githubRepo: "https://github.com/mehmet-emin-git/base-aparel-coming-soon",
    liveDemo: "https://mehmet-emin-git.github.io/base-aparel-coming-soon/",
  },
  {
    name: "signUp-form",
    githubRepo: "https://github.com/mehmet-emin-git/signUp-form",
    liveDemo: "https://mehmet-emin-git.github.io/signUp-form/",
  },
  {
    name: "single-price-component",
    githubRepo: "https://github.com/mehmet-emin-git/single-price-component",
    liveDemo: "https://mehmet-emin-git.github.io/single-price-component/",
  },
  {
    name: "ping-single-column",
    githubRepo: "https://github.com/mehmet-emin-git/ping-single-column",
    liveDemo: "https://mehmet-emin-git.github.io/ping-single-column/",
  },
  {
    name: "huddle-landing-page-alt-featBlock",
    githubRepo:
      "https://github.com/mehmet-emin-git/huddle-landing-page-alt-featBlock",
    liveDemo:
      "https://mehmet-emin-git.github.io/huddle-landing-page-alt-featBlock/",
  },
  {
    name: "Huddle-landing-page-single",
    githubRepo: "https://github.com/mehmet-emin-git/Huddle-landing-page-single",
    liveDemo: "https://mehmet-emin-git.github.io/Huddle-landing-page-single/",
  },
  {
    name: "Fylo-landing-page-with-2column-layout",
    githubRepo:
      "https://github.com/mehmet-emin-git/Fylo-landing-page-with-2column-layout",
    liveDemo:
      "https://mehmet-emin-git.github.io/Fylo-landing-page-with-2column-layout/",
  },
  {
    name: "insure-landing-page",
    githubRepo: "https://github.com/mehmet-emin-git/insure-landing-page",
    liveDemo: "https://mehmet-emin-git.github.io/insure-landing-page/",
  },
  {
    name: "pricing-components",
    githubRepo: "https://github.com/mehmet-emin-git/pricing-components",
    liveDemo: "https://mehmet-emin-git.github.io/pricing-components/",
  },
  {
    name: "project-tracking-intro-component",
    githubRepo:
      "https://github.com/mehmet-emin-git/project-tracking-intro-component",
    liveDemo:
      "https://mehmet-emin-git.github.io/project-tracking-intro-component/",
  },
  {
    name: "clipboard-landing-page",
    githubRepo: "https://github.com/mehmet-emin-git/clipboard-landing-page",
    liveDemo: "https://mehmet-emin-git.github.io/clipboard-landing-page/",
  },
  {
    name: "coding-bootcamp-testimonial",
    githubRepo:
      "https://github.com/mehmet-emin-git/coding-bootcamp-testimonial",
    liveDemo: "https://mehmet-emin-git.github.io/coding-bootcamp-testimonial/",
  },
  {
    name: "article-preview-component",
    githubRepo: "https://github.com/mehmet-emin-git/article-preview-component",
    liveDemo: "https://mehmet-emin-git.github.io/article-preview-component/",
  },
];

const list = document.getElementById("list");

projects.forEach(({ name, githubRepo, liveDemo }, i) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
  <a href="/${name}/index.html">
  <img src="/${name}/design/desktop-preview.jpg" alt="${name}" />
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
