// Open links in a new tab
$('.links a, #skills a').attr('target', '_blank');

// Enabling Bootstrap Tooltips
$(() =>
{
  $('[data-toggle="tooltip"]').tooltip()
});

// Link Icons Hover Effect
$('.link-icon')
  .hover(
    function({ target })
    {
      $(this).attr('src', `../images/links/${target.id}-hover.svg`);
    },
    function({ target })
    {
      $(this).attr('src', `../images/links/${target.id}.svg`);
    }
  );

// Main Nav interaction with Info Carousel
const carouselPages = [ 'About', 'Skills', 'Works' ];
const infoCarousel = $('#info');
$('.main-nav .nav-link').click(({ target }) => changeInfoPage(target));

// Info Carousel link with Main Nav
const infoPages = $('.info-nav .nav-link');
infoPages.click(({ target }) => changeInfoPage(target));

/** @param {HTMLElement} element */
function changeInfoPage(element)
{
  const index = carouselPages.indexOf(element.textContent);
  infoCarousel.carousel(index);
}

// Works Page
let colors;
const loader = $('.loader-container');
fetch('https://api.github.com/users/esfox/repos')
  .then(async response =>
  {
    loader.css('display', 'none');
    if(!response.ok)
      return $('.works-error').css('display', 'initial');
    
    const data = await response.json();
    setupWorks(data);
  });

const scripting = [ 'html', 'css', 'javascript', 'typescript' ];
const cardTemplate = (
{
  html_url, name, description, language, commits, lastCommit
}) => `
<div class="col-12 col-md-6 col-lg-4 card-container">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        <img src="images/computer.svg">
        <a href="${html_url}" target="_blank">
          ${name}
        </a>
        <div class="card-commits">
          ${commits} commits
        </div>
      </h5>
      <hr>
      ${description}
    </div>
    <div class="card-footer text-muted">
      <div class="card-footer-color-container">
        <div class="card-footer-color"
          style="background-color: ${languageColors[language].color};">
        </div>
      </div>
      <span>${language}</span>
      <span class="card-timestamp">Last commit: ${lastCommit}</span>
    </div>
  </div>
</div>
`;

const cardArea = $('#works .row');
async function setupWorks(data)
{
  data = await Promise.all(data
    .filter(({ fork }) => !fork)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .map(async project =>
    {
      const contributors = await fetch(project.contributors_url)
        .then(response => response.json());
      project.commits = contributors.reduce((sum, { contributions }) =>
        sum + contributions, 0);

      const lastCommit = await fetch(project.commits_url.replace('{/sha}', ''))
        .then(async response => 
        {
          let commitDate = (await response.json()).shift().commit.author.date;
          let updatedAt = new Date(commitDate);
          updatedAt = (updatedAt.getMonth() + 1) + '/'
            + updatedAt.getDate() + '/'
            + updatedAt.getFullYear();
          return updatedAt;
        });

      project.lastCommit = lastCommit;
      return project;
    }));

  showWorks(data);
}

function showWorks(data)
{
  for(const project of data)
    cardArea.append(cardTemplate(project));
}

Ellipsity.ellipsify(document.getElementById('#works .card-body'));
