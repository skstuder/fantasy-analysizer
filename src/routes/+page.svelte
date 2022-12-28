<script>
	import HandicapInput from './HandicapInput.svelte';
	import PointPotientals from './PointPotientals.svelte';
	import AllstarCheckbox from './AllstarCheckbox.svelte';
	import NoResults from './NoResults.svelte';
	import InfoArea from './InfoArea.svelte';

	let handicap;
	let isAllStar = false;
	let hasInvalidSelection = false;

	$: validHandicap = checkHandicap(handicap);

	function checkHandicap(handicap) {
		return parseInt(handicap) >= -2 && parseInt(handicap) < 17;
	}
</script>

<svelte:head>
	<title>Point Potentials</title>
	<meta
		name="description"
		content="Math is hard, use this handicap helper to see the point potential of your pulp mx fantasy picks!"
	/>
	<meta property="og:title" content="Pulpmx Fantasy Handicap Helper" />
	<meta
		property="og:description"
		content="Math is hard, use this handicap helper to see the point potiental of your pulp mx fantasy picks!"
	/>
	<meta property="og:image" content="https://raw.githubusercontent.com/stephenstuder/fantasy-analysizer/master/src/lib/images/ogImage.png" />
</svelte:head>

<div class="flex justify-center">
	<div class="z-10 relative">
		<h1 class="uppercase">Rider Point Potentials</h1>
		{#if !validHandicap || hasInvalidSelection}
			<h5>Steve can't find your handicap, enter a handicap and allstar status</h5>
		{:else}
			<InfoArea {isAllStar} {handicap} />
		{/if}
		<div class="md:flex">
			<section class="p-5 input-section md:h-72 mt-5 dark-purp rounded-md shadow-2xl">
				<HandicapInput bind:handicap bind:hasInvalidSelection />
				<AllstarCheckbox class="pb-5" bind:isAllStar />
			</section>
			<div class="md:ml-5 mt-5">
				{#if !validHandicap || hasInvalidSelection}
					<NoResults />
				{:else}
					<PointPotientals {isAllStar} {handicap} />
				{/if}
			</div>
			<!-- TODO: Add nice transitions to page -->
		</div>
	</div>
</div>

<style>
	.input-section {
		background: #3b3b52;
	}
	.dark-purp {
		background: #2a2a44;
	}
</style>
