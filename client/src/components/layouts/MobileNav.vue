<script setup lang='ts'>
import { onMounted } from 'vue';


onMounted(() => {

	// :: 2.2 Mobile Nav Active Code
	const amadoMobNav = $('.amado-navbar-toggler');
	const navClose = $('.nav-close');

	amadoMobNav.on('click', function () {
		$('.header-area').toggleClass('bp-xs-on');
	});

	navClose.on('click', function () {
		$('.header-area').removeClass('bp-xs-on');
	});
})
</script>

<template>
	<!-- Mobile Nav (max width 767px)-->
	<div class="mobile-nav">
		<!-- Navbar Brand -->
		<div class="amado-navbar-brand">
			<a href="index.html"><img src="img/core-img/logo.png" alt=""></a>
		</div>
		<!-- Navbar Toggler -->
		<div class="amado-navbar-toggler">
			<span></span><span></span><span></span>
		</div>
	</div>
</template>