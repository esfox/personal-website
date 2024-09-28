<script>
  import PromptString from '../components/PromptString.svelte';
  import { differenceInYears } from 'date-fns';
  import SkillWithLevel from '../components/SkillWithLevel.svelte';

  const now = new Date();
  const industryStartDate = new Date(2019, 0);
  const industryYearsCount = differenceInYears(now, industryStartDate);

  const langIconSize = 36;
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
    <SkillWithLevel skill="TypeScript" level={10}>
      <img slot="icon" src="typescript.svg" alt="TypeScript" width={langIconSize} />
    </SkillWithLevel>
    <SkillWithLevel skill="JavaScript" level={10}>
      <img slot="icon" src="javascript.svg" alt="JavaScript" width={langIconSize} />
    </SkillWithLevel>
    <SkillWithLevel skill="HTML" level={10}>
      <img slot="icon" src="html.svg" alt="HTML" width={langIconSize} />
    </SkillWithLevel>
    <SkillWithLevel skill="CSS" level={9}>
      <img slot="icon" src="css.svg" alt="CSS" width={langIconSize} />
    </SkillWithLevel>
    <SkillWithLevel skill="C#" level={7}>
      <img slot="icon" src="csharp.svg" alt="C#" width={langIconSize} />
    </SkillWithLevel>
    <SkillWithLevel skill="PHP" level={6}>
      <img slot="icon" src="php.svg" alt="PHP" width={langIconSize} />
    </SkillWithLevel>
    <SkillWithLevel skill="Python" level={3}>
      <img slot="icon" src="python.svg" alt="Python" width={langIconSize} />
    </SkillWithLevel>
    <SkillWithLevel skill="Java" level={5}>
      <img slot="icon" src="java.svg" alt="Java" width={langIconSize} />
    </SkillWithLevel>
    <SkillWithLevel skill="Lua" level={4}>
      <img slot="icon" src="lua.svg" alt="Lua" width={langIconSize} />
    </SkillWithLevel>
    <SkillWithLevel skill="SQL" level={7}>
      <i slot="icon" class="fa fa-database" style="font-size: var(--icon-size);"></i>
    </SkillWithLevel>
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
    display: grid;
    gap: 10px;
    margin-top: 24px;
  }
</style>
