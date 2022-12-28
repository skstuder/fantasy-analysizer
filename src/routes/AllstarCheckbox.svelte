<script>
	export let isAllStar = false;
</script>

<div class="flex justify-baseline">
	<label class="mr-3" for="handicap">Allstar?</label>
	<input type="checkbox" bind:checked={isAllStar} />
</div>

<style>
	input[type='checkbox'] {
		position: relative;
		width: 50px;
		height: 25px;
		-webkit-appearance: none;
		background: #c6c6c6;
		outline: none;
		border-radius: 20px;
		box-shadow: inset 0 0 5px rgba(255, 0, 0, 0.2);
		transition: 0.7s;
	}

	input:checked[type='checkbox'] {
		background: green;
	}

	input[type='checkbox']:before {
		content: '';
		position: absolute;
		width: 17px;
		height: 17px;
		border-radius: 20px;
		top: 0;
		left: 0;
		background: #ffffff;
		transform: scale(1.1);
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
		transition: 0.5s;
	}

	input:checked[type='checkbox']:before {
		left: 25px;
	}
</style>
