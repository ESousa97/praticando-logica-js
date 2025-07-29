<template>
  <footer class="footer">
    <p>Desenvolvido por <strong>Enoque Sousa</strong></p>
    <div class="social-links">
      <a
        href="https://github.com/ESousa97"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        class="icon-link"
      >
        <GithubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/enoque-sousa-bb89aa168/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        class="icon-link"
      >
        <LinkedinIcon />
      </a>
    </div>
  </footer>
</template>

<script>
import { GithubIcon, LinkedinIcon } from 'lucide-vue-next'

export default {
  name: "Footer",
  components: {
    GithubIcon,
    LinkedinIcon,
  }
}
</script>

