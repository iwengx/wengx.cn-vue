<template>
   <router-view></router-view>
</template>

<script setup lang="ts">
import { setToDayWebVisitorsCount } from './api/interface';
setToDayWebVisitorsCount();
</script>
