<script setup lang='ts'>
import SingleProduct from '@/components/widgets/SingleProduct.vue';
import { onMounted } from 'vue';

onMounted(() => {
	setTimeout(() => {
		const proCata = $('.amado-pro-catagory');
		const singleProCata = ".single-products-catagory";
		// @ts-ignore
		if ($.fn.imagesLoaded) {
			// @ts-ignore
			proCata.imagesLoaded(function () {
				// @ts-ignore
				proCata.isotope({
					itemSelector: singleProCata,
					percentPosition: true,
					masonry: {
						columnWidth: singleProCata
					}
				});
			});
		}
	}, 500)

})
</script>

<template>
	<div class="products-catagories-area clearfix">
		<div class="amado-pro-catagory clearfix">
			<SingleProduct v-for="i in 8" :key="`single-product-${i}`" />
		</div>
	</div>
</template>