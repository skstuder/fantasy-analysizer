<script>
	export let handicap = '';
	export let isAllStar = false;
</script>

<div>
	{#if isAllStar}
		<h5>
			You are viewing points possibilites for a
			<b>{handicap}</b> handicap
			<b>ALLSTAR</b>
		</h5>
	{:else}
		<h5>
			You are viewing points possibilites for a
			<b>{handicap}</b> handicap
			<b>NON-ALLSTAR</b>
		</h5>
	{/if}
</div>

<style>
</style>
