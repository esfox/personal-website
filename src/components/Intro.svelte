<script>
  import { differenceInYears } from 'date-fns';

  const now = new Date();
  const industryStartDate = new Date(2019, 0);
  const industryYearsCount = differenceInYears(now, industryStartDate);
</script>

<p class="intro indent-after-prompt">
  I love coding and have been doing it as a hobby since high school. It is also my career and I have
  been in the software industry for {industryYearsCount}+ years. I have worked on projects in
  industries like Real Estate, Insurance, Education, and Cinema, being part of teams that develop
  websites, web applications and web-based platforms and systems.
  <a href="/about"> Click here to read a bit more about me! </a>
</p>

<style>
  .intro {
    margin-top: -16px;
    padding-bottom: 22px;
    padding-inline-end: 42px;
  }
</style>
