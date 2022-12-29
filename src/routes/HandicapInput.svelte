<script>

	export let handicap = '';
	export let hasInvalidSelection = false;


	function validate(handicap) {
		let handicapNumber = parseInt(handicap);
		const UPPER_RANGE_MAX = 16;
		const LOWER_RANGE_MIN = -2;
		if (handicapNumber > UPPER_RANGE_MAX || handicapNumber < LOWER_RANGE_MIN) {
			hasInvalidSelection = true;
		} else {
			hasInvalidSelection = false;
		}
	}
</script>

<div class="mb-3">
		{#if hasInvalidSelection}
			<div class="mb-1">
				<span class="text-red-400 text_small">Must be between -2 and 16</span>
			</div>
		{/if}
	<div class="flex items-baseline">
		<label class="mr-3" for="handicap">Riders Handicap</label>
		<input id="handicap" bind:value={handicap} on:input={() => validate(handicap)} />
	</div>
</div>

<style scoped>
	input {
		width: 50px;
		height: 30%;
		background: white;
		border: gray;
		border-style: solid;
		border-width: 3px;
		border-radius: 5px;
		font-weight: bold;
		color: #222;
	}
</style>
