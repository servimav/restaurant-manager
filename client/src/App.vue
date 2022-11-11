<script setup lang="ts">
import AppFooter from '@/components/layouts/AppFooter.vue';
import AppHeader from '@/components/layouts/AppHeader.vue';
import MobileNav from '@/components/layouts/MobileNav.vue';
import NewslettterSection from '@/components/sections/NewsletterSection.vue';
import ProductsGallery from '@/components/sections/ProductsGallery.vue';
</script>

<template>
	<!-- ##### Main Content Wrapper Start ##### -->
	<div class="main-content-wrapper d-flex clearfix">
		<MobileNav />

		<AppHeader />
		<ProductsGallery />
	</div>
	<!-- ##### Main Content Wrapper End ##### -->
	<NewslettterSection />
	<AppFooter />
</template>
