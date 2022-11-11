<script setup lang='ts'>

</script>

<template>
	<div class="single-product-wrapper">
		<!-- Product Image -->
		<div class="product-img">
			<img src="img/product-img/product2.jpg" alt="">
			<!-- Hover Thumb -->
			<img class="hover-img" src="img/product-img/product3.jpg" alt="">
		</div>

		<!-- Product Description -->
		<div class="product-description d-flex align-items-center justify-content-between">
			<!-- Product Meta Data -->
			<div class="product-meta-data">
				<div class="line"></div>
				<p class="product-price">$180</p>
				<a href="product-details.html">
					<h6>Modern Chair</h6>
				</a>
			</div>
			<!-- Ratings & Cart -->
			<div class="ratings-cart text-right">
				<div class="ratings">
					<i class="fa fa-star" aria-hidden="true"></i>
					<i class="fa fa-star" aria-hidden="true"></i>
					<i class="fa fa-star" aria-hidden="true"></i>
					<i class="fa fa-star" aria-hidden="true"></i>
					<i class="fa fa-star" aria-hidden="true"></i>
				</div>
				<div class="cart">
					<a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img
							src="img/core-img/cart.png" alt=""></a>
				</div>
			</div>
		</div>
	</div>
</template>