<template>
  <div>
    <h3>Login 登录页面</h3>
    <p>正在登录...</p>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  mounted () {
    console.log('dest:', this.$route.query.dest)

    setTimeout(() => {
      localStorage.setItem('token', 666)
      this.$router.replace(this.$route.query.dest)
    }, 1000 * 3)
  }
}
</script>

<style></style>
