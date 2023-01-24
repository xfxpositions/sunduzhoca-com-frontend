<template>
  <div>
    <h1 class="text-3xl">Yo</h1>
    <div class="ilahi">
      <div class="border variant-1 bg-red-400"></div>
      <div class="border variant-2 bg-yellow-400"></div>
      <div class="border variant-3 bg-green-400"></div>
      <div class="border variant-4 bg-blue-400"></div>
    </div>
  </div>
</template>

<style>
.ilahi {
  width: 500px;
  height: 500px;
  border: 1px solid black;
  display: flex;
}
.border {
  height: 20px;
}
.variant-1 {
  height: 20px;
}
.variant-2 {
  height: 100%;
  width: 20px;
}
.variant-3 {
  position: relative;
  height: 20px;
  margin-top: 40%;
}
.variant-4 {
  height: 100%;
  width: 20px;
  margin-left: 100%;
}
</style>
