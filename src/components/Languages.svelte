<script>
  import SkillWithLevel from '../components/SkillWithLevel.svelte';
</script>

<section class="langs indent-after-prompt">
  <h2>What I Code</h2>
  <small>(And my experience level for each)</small>
  <div class="langs-list">
    <SkillWithLevel skill="TypeScript" level={10}>
      <img slot="icon" src="typescript.svg" alt="TypeScript" />
    </SkillWithLevel>
    <SkillWithLevel skill="JavaScript" level={10}>
      <img slot="icon" src="javascript.svg" alt="JavaScript" />
    </SkillWithLevel>
    <SkillWithLevel skill="HTML" level={10}>
      <img slot="icon" src="html.svg" alt="HTML" />
    </SkillWithLevel>
    <SkillWithLevel skill="CSS" level={9}>
      <img slot="icon" src="css.svg" alt="CSS" />
    </SkillWithLevel>
    <SkillWithLevel skill="C#" level={7}>
      <img slot="icon" src="csharp.svg" alt="C#" />
    </SkillWithLevel>
    <SkillWithLevel skill="PHP" level={6}>
      <img slot="icon" src="php.svg" alt="PHP" />
    </SkillWithLevel>
    <SkillWithLevel skill="Python" level={3}>
      <img slot="icon" src="python.svg" alt="Python" />
    </SkillWithLevel>
    <SkillWithLevel skill="Java" level={5}>
      <img slot="icon" src="java.svg" alt="Java" />
    </SkillWithLevel>
    <SkillWithLevel skill="Lua" level={4}>
      <img slot="icon" src="lua.svg" alt="Lua" />
    </SkillWithLevel>
    <SkillWithLevel skill="SQL" level={7}>
      <i slot="icon" class="fa fa-database"></i>
    </SkillWithLevel>
  </div>
</section>

<style lang="scss">
  .langs {
    padding-bottom: 22px;
    margin-top: -16px;

    .langs-list {
      display: grid;
      margin-top: 18px;
      gap: 10px;
    }
  }

  @media (max-width: 768px) {
    .langs .langs-list {
      gap: 10px;
    }
  }
</style>
