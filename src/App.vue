<template>
  <div
    class="h-[100%] min-h-screen sm:p-10 md:p-15 lg:p-20 p-2 -z-10 text-center transition-colors duration-500 ease-in-out bg-[#F0E7DB] dark:bg-[#101419] dark:text-white font-bold"
  >
    <router-view class="router-view" v-slot="{ Component }">
      <Transition name="page-opacity" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<style>
.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 0.5s cubic-bezier(0.17, 0.67, 0.21, 1.04);
}
.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
  transform: translateY(200px);
}
</style>
