<script>
	import { fade } from "svelte/transition";
	import { stores } from "@sapper/app";
	import PageLoadingBar from "sapper-page-loading-bar/PageLoadingBar.svelte";
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	const { preloading } = stores();
</script>

<style lang="scss" global>
	@import "../styles/global.scss";
	.app {
		background: $background;
		min-height: 100vh;
		main {
			width: 95%;
			margin: 0 auto;
			@media (min-width: $screen-md) {
				width: $site-width;
			}
		}
	}
</style>

<PageLoadingBar {preloading} color1="rgba(30, 134, 255, .5)" color2="rgba(30, 134, 255)" />

{#if !$preloading}
<div class="app" transition:fade>
	<main>
		<Nav />
		<slot />
		<Footer />
	</main>
</div>
{/if}