<section class="indent-after-prompt" style="margin-top: -16px;">
  <h2 class="title" style="margin-bottom: 24px;">Tech I've Used</h2>

  <div class="content">
    <div>
      <h3 class="heading">
        <span>Cloud</span>
      </h3>
      <div class="cloud">
        <a class="tech" href="https://aws.amazon.com/" target="_blank">
          <img src="aws.svg" alt="AWS" />
          <p>AWS</p>
        </a>
        <a class="tech" href="https://vercel.com/" target="_blank">
          <img src="vercel.svg" alt="Vercel" style="width: 42px;" />
          <p>Vercel</p>
        </a>
        <a class="tech" href="https://supabase.com/" target="_blank">
          <img src="supabase.svg" alt="Supabase" style="width: 42px;" />
          <p>Supabase</p>
        </a>
      </div>
    </div>

    <div>
      <h3 class="heading">
        <span>Full-Stack</span>
      </h3>
      <div class="fullstack">
        <a class="tech" href="https://nextjs.org" target="_blank">
          <img src="nextjs.svg" alt="Next.js" style="width: 48px;" />
          <p>Next.js</p>
        </a>
        <a class="tech" href="https://nuxt.com" target="_blank">
          <img src="nuxt.svg" alt="Nuxt" />
          <p>Nuxt</p>
        </a>
        <a class="tech" href="https://kit.svelte.dev/" target="_blank">
          <img src="svelte.svg" alt="SvelteKit" />
          <p>SvelteKit</p>
        </a>
        <a class="tech" href="https://astro.build/" target="_blank">
          <img src="astro.svg" alt="Astro" />
          <p>Astro</p>
        </a>
        <a class="tech" href="https://sst.dev" target="_blank">
          <img src="sst.svg" alt="SST" />
          <p>SST</p>
        </a>
        <a class="tech" href="https://www.serverless.com" target="_blank" style="width: 80px;">
          <img src="serverless.svg" alt="Serverless" style="width: 48px;" />
          <p>Serverless</p>
        </a>
      </div>
    </div>

    <div>
      <h3 class="heading">
        <span>Frontend</span>
      </h3>
      <div class="frontend">
        <a class="tech" href="https://react.dev" target="_blank">
          <img src="react.svg" alt="React" />
          <p>React</p>
        </a>
        <a class="tech" href="https://angular.dev" target="_blank">
          <img src="angular.png" alt="Angular" />
          <p>Angular</p>
        </a>
        <a class="tech" href="https://svelte.dev/" target="_blank">
          <img src="svelte.svg" alt="Svelte" />
          <p>Svelte</p>
        </a>
        <div class="break">
          <a class="tech" href="https://vuejs.org" target="_blank">
            <img src="vue.svg" alt="Vue" />
            <p>Vue</p>
          </a>
          <a class="tech" href="https://vite.dev" target="_blank">
            <img src="vite.svg" alt="Vite" />
            <p>Vite</p>
          </a>
        </div>
      </div>
    </div>

    <div>
      <h3 class="heading">
        <span>Backend</span>
      </h3>
      <div class="backend">
        <a class="tech" href="https://nodejs.org/" target="_blank">
          <img src="nodejs.svg" alt="Node.js" />
          <p>Node.js</p>
        </a>
        <a class="tech" href="https://nestjs.com/" target="_blank">
          <img src="nestjs.svg" alt="NestJS" />
          <p>NestJS</p>
        </a>
        <a class="tech" href="https://expressjs.com/" target="_blank">
          <img src="express.svg" alt="Express" />
          <p>Express</p>
        </a>
        <div class="break">
          <a
            class="tech"
            href="https://dotnet.microsoft.com/en-us/apps/aspnet"
            target="_blank"
            style="width: 80px;"
          >
            <img src="dotnetcore.svg" alt=".NET Core" />
            <p>.NET Core</p>
          </a>
          <a class="tech" href="https://codeigniter.com" target="_blank" style="width: 72px;">
            <img src="codeigniter.svg" alt="CodeIgniter" />
            <p>CodeIgniter</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    margin-inline-end: 28px;
    padding-bottom: 22px;
  }

  .content {
    display: grid;
    gap: 48px;
  }

  a {
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }

  .heading {
    text-align: center;
    font-size: 20px;
    margin-bottom: 16px;

    > span {
      border-bottom: 1px solid var(--divider);
    }
  }

  .tech {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    text-align: center;
  }

  .cloud,
  .fullstack,
  .backend,
  .frontend {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px 24px;

    .tech {
      width: 64px;

      img {
        width: 56px;
        height: 56px;
        object-fit: contain;
      }
    }
  }

  .backend,
  .frontend {
    .break {
      display: flex;
      justify-content: center;
      gap: 24px;
    }
  }

  @media (min-width: 769px) {
    .content {
      grid-template-columns: auto;
    }

    .title {
      grid-column: span 2;
    }
  }
</style>
