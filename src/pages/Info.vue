<template>
  <div class="info-page">
    <InfoCard />
    <FormCard />
  </div>
</template>

<script>
import InfoCard from "@/components/InfoCard.vue";
import FormCard from "@/components/FormCard.vue";

export default {
  name: "info",
  components: {
    InfoCard,
    FormCard,
  },
};
</script>

<style scoped>
.info-page {
  margin-top: 50px;
  display: flex;
}
</style>
