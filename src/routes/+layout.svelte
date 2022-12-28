<script>
	import Header from './Header.svelte';
	import '../styles/normalize.css';
	import '../styles/app.css';
	import '../styles/base.css';
</script>

<Header />
<div class="app px-3 layout">
	<main>
		<slot />
	</main>

	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
</div>
<div class="z-0 stripe" />

<style>
	.stripe {
		background-image: linear-gradient(#aa4153 20%, #4b698d 20%, 80%, #2a678e 80%);
		position: fixed;
		width: 100%;
		height: 250px;
		z-index: 0;
		transform: rotate(25deg) scaleX(1.5) translateY(-5em);
		z-index: 0;
		top: 50px;
	}
</style>
