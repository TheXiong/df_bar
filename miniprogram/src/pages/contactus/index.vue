<template>
  <div class="contactusContainer">
    <image v-if="src" mode="aspectFit" :src="baseUrl+src" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "",
      baseUrl: "https://mylife028.cn/"
    };
  },
  mounted() {
    this.$fly.post("/u/contact_customer_service", {}).then(res => {
      this.src = res.data.data.customer;
    });
  }
};
</script>
<style lang="wxss">
page {
  width: 100%;
  height: 100%;
}
</style>
<style lang="less" scoped>
.contactusContainer {
  width: 100%;
  height: 100%;
  image {
    width: 100%;
    height: 100%;
  }
}
</style>
