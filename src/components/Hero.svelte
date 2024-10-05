<section class="hero indent-after-prompt">
  <div>
    <h1>Hello World!👋</h1>
    <h2>I'm Charles Sabarillo</h2>
    <h3>A Full-Stack Software Engineer 🧑‍💻</h3>
  </div>
  <div class="pic-and-links">
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
</section>

<style lang="scss">
  .hero {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto 1fr;
    margin-inline-start: 28px;
    margin-top: -22px;
    padding-bottom: 22px;

    .pic-and-links {
      display: flex;
      justify-content: end;
    }

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

  @media (max-width: 768px) {
    .hero {
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      gap: 24px;

      .pic-and-links {
        justify-content: center;
      }
    }
  }
</style>
