<script>
	export let handicap = '';

	export let isAllStar = false;

	let convertedPositions = {};
	let positions = {
		1: 26,
		2: 23,
		3: 21,
		4: 19,
		5: 18,
		6: 17,
		7: 16,
		8: 15,
		9: 14,
		10: 13,
		11: 12,
		12: 11,
		13: 10,
		14: 9,
		15: 8,
		16: 7,
		17: 6,
		18: 5,
		19: 4,
		20: 3,
		21: 2,
		22: 1
	};

	$: {
		handicap;
		calculatePoints();
	}
	$: {
		isAllStar;
		calculatePoints();
	}

	function getOrdinal(n) {
		let ord = 'th';

		if (n % 10 == 1 && n % 100 != 11) {
			ord = 'st';
		} else if (n % 10 == 2 && n % 100 != 12) {
			ord = 'nd';
		} else if (n % 10 == 3 && n % 100 != 13) {
			ord = 'rd';
		}

		return ord;
	}

	function calculatePoints() {
		if (handicap) {
			// dont mutate original
			convertedPositions = Object.assign({}, positions);
			let i = 0;
			// loop through all
			for (const value in convertedPositions) {
				i++;
				//
				if (i - parseInt(handicap) < 1 && !isAllStar) {
					//
					convertedPositions[value] = 26 * 2;
				} else if (i - parseInt(handicap) < 1 && isAllStar) {
					convertedPositions[value] = 26;
				} else {
					for (const key in positions) {
						if (i - parseInt(handicap) === parseInt(key)) {
							convertedPositions[value] = positions[key];
							if (!isAllStar && i - parseInt(handicap) < 11) {
								convertedPositions[value] = convertedPositions[value] * 2;
							}
						}
					}
				}
			}
		}
	}
</script>

<div class=" flex justify-center">
	<table class="table-auto py-3 shadow-2xl">
		<div>
			<thead>
				<tr>
					<th> POS </th>
					<th> Points </th>
				</tr>
			</thead>
			<tbody class="bg-white ">
				{#each Object.entries(convertedPositions) as [position, points]}
					<!-- content here -->
					<tr class="even:dark-purp odd:light-purp">
						<!-- {#if position <= 12} -->
						<td
							class="border-b border-slate-100 dark:border-slate-700 px-20 text-slate-500 dark:text-slate-400"
						>
							{position + getOrdinal(position)}
						</td>
						<td
							class="border-b border-slate-100 dark:border-slate-700 px-20 text-slate-500 dark:text-slate-400"
						>
							{points}
						</td>
						<!-- {/if} -->
					</tr>
				{/each}
			</tbody>
		</div>
		<!-- <div>
			<thead>
				<tr>
					<th> POS </th>
					<th> Points You Get </th>
				</tr>
				<tr>
					<th />
					<th />
				</tr>
			</thead>
			<tbody class="bg-white">
				{#each Object.entries(convertedPositions) as [position, points]}
					<tr class="even:dark-purp odd:light-purp">
						{#if position > 12}
							<td
								class="border-b border-slate-100 dark:border-slate-700 p-1 pl-8 text-slate-500 dark:text-slate-400"
							>
								{position + getOrdinal(position)}
							</td>
							<td
								class="border-b border-slate-100 dark:border-slate-700 p-1 pl-8 text-slate-500 dark:text-slate-400"
							>
								{points}
							</td>
						{/if}
					</tr>
				{/each}
			</tbody>
		</div> -->
	</table>
</div>

<style>
	table {
		table-layout: auto;
	}

	tr {
		background: #2a2a44;
	}
	tr:nth-child(even) {
		background: #3b3b52;
	}
	table {
		background: #2a2a44;
	}
</style>
