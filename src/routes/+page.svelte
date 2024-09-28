<script>
  import PromptString from '../components/PromptString.svelte';
  import LevelMeter from '../components/LevelMeter.svelte';
  import { differenceInYears } from 'date-fns';

  const now = new Date();
  const industryStartDate = new Date(2019, 0);
  const industryYearsCount = differenceInYears(now, industryStartDate);

  const langIconSize = 42;
</script>

<svelte:head>
  <title>ckftm</title>
</svelte:head>

<PromptString />
<div class="hero indented">
  <div>
    <h1>Hello World!👋</h1>
    <h2>I'm Charles Sabarillo</h2>
    <h3>A Full-Stack Software Engineer 🧑‍💻</h3>
  </div>
  <img src="mypic.png" alt="portrait of Charles" width="120" height="120" class="mypic" />
  <div class="links">
    <a href="https://www.linkedin.com/in/ckftm">
      <i class="fab fa-linkedin"></i>LinkedIn
    </a>
    <a href="https://github.com/esfox">
      <i class="fab fa-github"></i>GitHub
    </a>
    <a href="mailto:sabarillo.charles@gmail.com">
      <i class="fa fa-envelope"></i>Email
    </a>
  </div>
</div>
<PromptString />
<p class="indented" style="margin-top: -16px">
  I love coding and have been doing it as a hobby since high school. It is also my career and I have
  been in the software industry for {industryYearsCount}+ years. I have worked on projects in
  industries like the Real Estate, Insurance, Education, and Cinema industries, and have been part
  of teams that develop websites, web applications and web-based platforms and systems.
  <a href="/about"> Click here to read a bit more about me! </a>
</p>
<PromptString />
<div class="indented" style="margin-top: -16px;">
  <h3>What I Code In</h3>
  <small>(And my experience level for each)</small>
  <div class="langs" style={`--icon-size: ${langIconSize}px`}>
    <div>
      <LevelMeter level={10} />
      <img src="typescript.svg" alt="TypeScript" width={langIconSize} />
      <h4>TypeScript</h4>
    </div>
    <div>
      <LevelMeter level={10} />
      <img src="javascript.svg" alt="JavaScript" width={langIconSize} />
      <h4>JavaScript</h4>
    </div>
    <div>
      <LevelMeter level={10} />
      <img src="html.svg" alt="HTML" width={langIconSize} />
      <h4>HTML</h4>
    </div>
    <div>
      <LevelMeter level={9} />
      <img src="css.svg" alt="CSS" width={langIconSize} />
      <h4>CSS</h4>
    </div>
    <div>
      <LevelMeter level={7} />
      <img src="csharp.svg" alt="C#" width={langIconSize} />
      <h4>C#</h4>
    </div>
    <div>
      <LevelMeter level={6} />
      <img src="php.svg" alt="PHP" width={langIconSize} />
      <h4>PHP</h4>
    </div>
    <div>
      <LevelMeter level={3} />
      <img src="python.svg" alt="Python" width={langIconSize} />
      <h4>Python</h4>
    </div>
    <div>
      <LevelMeter level={5} />
      <img src="java.svg" alt="Java" width={langIconSize} />
      <h4>Java</h4>
    </div>
    <div>
      <LevelMeter level={4} />
      <img src="lua.svg" alt="Lua" width={langIconSize} />
      <h4>Lua</h4>
    </div>
    <div>
      <LevelMeter level={7} />
      <i class="fa fa-database" style="font-size: var(--icon-size);"></i>
      <h4>SQL</h4>
    </div>
  </div>
</div>

<style lang="scss">
  .indented {
    margin-inline-start: 22px;
  }

  .hero {
    display: grid;
    grid-template-columns: auto 1fr auto;
    margin-top: -22px;

    .mypic {
      border-radius: 12px;
      margin-inline: 20px;
      justify-self: end;
    }

    .links {
      display: grid;
      justify-self: end;
      place-content: center;
      padding-inline-end: 64px;

      i {
        margin-inline-end: 6px;
      }
    }
  }

  .langs {
    display: flex;
    justify-content: center;
    gap: 28px;
    margin-top: 24px;

    > div {
      display: grid;
      grid-template-rows: 1fr 48px auto;
      place-content: center;

      :global(.level-meter) {
        justify-self: center;
      }

      > img,
      i {
        margin-top: 26px;
      }

      > h4 {
        margin-top: 16px;
      }

      > img,
      i,
      h4 {
        place-self: center;
      }
    }
  }
</style>
