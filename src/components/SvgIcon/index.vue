<template>
    <svg :style="{ width, height }">
        <use :xlink:href="prefix + name" :fill="color" :width="width" :height="height"></use>
    </svg>
</template>

<script setup lang="ts">
defineProps({
    prefix: {
        type: String,
        default: '#icon-'
    },
    name: {
        type: String
    },
    color: {
        type: String
    },
    width: {
        type: String
    },
    height: {
        type: String
    }
})
</script>

<style scoped></style>