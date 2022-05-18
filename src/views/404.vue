<template>
  <Head>
    <title>Hello</title>
    <meta name="robots" content="noindex" />
    <base href="/base" />
  </Head>
  Hello <br />
  <World />
</template>

<script>
import World from "@/components/World";
export default {
  components: {
    World,
  },
};
</script>

<style></style>
