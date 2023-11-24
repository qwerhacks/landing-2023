<script>
	let closescreen = true;
	let rounded = true;

	//Shadow stuff
	let shadow = true;
	let rightshadow = false;
	let topshadow = false;
	let xshadowoffset = '10px';
	xshadowoffset = rightshadow ? xshadowoffset : '-' + xshadowoffset;
	let yshadowoffset = '10px';
	yshadowoffset = topshadow ? yshadowoffset : '-' + yshadowoffset;

	//Progress bar
	const deadline = new Date(2024, 1, 2);
	const start = new Date(2023, 8, 1);
	const now = new Date();

	const current = (now.getTime() - start.getTime()) / (1000 * 3600 * 24);
	const fullduration = (deadline.getTime() - start.getTime()) / (1000 * 3600 * 24);
	let chunks = Math.floor((current / fullduration) * 18);
	if (chunks > 18) {
		chunks = 18;
	}
</script>

<div>
	{#if shadow}
		<div
			id="shadow"
			class="w-[483px] h-[222px] border-4 border-solid border-[#200b3a] outline-[#200b3a] bg-[#200b3a] 
            {rounded ? 'rounded-lg' : ''} shadow"
		/>
	{/if}
	<div
		id="frontwindow"
		class="flex-auto border-4 border-solid border-[#200b3a] outline-[#200b3a] 
        {rounded ? 'rounded-lg' : ''} frontwindow"
		style="right: {xshadowoffset}; top: {yshadowoffset};"
	>
		<div
			id="colored background"
			class="w-[473px] h-[39px] border-b-4 border-solid border-[#200b3a] outline-[#200b3a] 
            {rounded ? 'rounded-t-[4.5px]' : ''} text-right align-middle"
			style="background: linear-gradient(90deg, #C382DA 2.01%, #E7BDE5 100%);"
		>
			{#if closescreen}
				<span id="closescreen" class="reactor7 pr-[5px]">o – x</span>
			{/if}
		</div>
		<div
			id="content"
			class="w-[473px] h-[179px] text-center bg-white 
            {rounded ? 'rounded-b-[4.5px]' : ''} grid justify-items-center"
		>
			<span
				id="loading"
				class="text-[50px] text-[#200b3a] borel typography"
				style="position: absolute; top: 70px;"
			>
				2024 loading...</span
			>
			<div
				id="progress1"
				class="progress1 grid-cols-{18} bg-[#EEEEEE] border-solid border-x-4 border-[#5c5a9c]"
				style="position: absolute; top: 144px; right: 143px; z-index: 1;"
			/>
			<div
				id="progress2"
				class="progress2 grid-cols-{18} bg-[#EEEEEE] border-solid border-y-4 border-[#5c5a9c] flex space-x-[3px] justify-start"
				style="position: absolute; top: 140px; right: 147px;z-index: 2;"
			>
				{#each Array(chunks) as _, index}
					<div class="chunk" style="position: relative; top: 3.5px; right: -3px;" />
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css?family=Borel');
	@import url('https://db.onlinewebfonts.com/c/3101d0058e2d7317cd5a5af7a1216ff3?family=Reactor7');
	.reactor7 {
		color: #200b3a;
		text-align: center;
		font-family: Reactor7;
		font-size: 38px;
		font-style: normal;
		font-weight: 400;
		line-height: 72%; /* 34.56px */
	}
	.borel {
		font-family: 'Borel';
		font-size: 50px;
		font-style: normal;
		font-weight: 400;
		line-height: 54.856px; /* 109.712% */
		letter-spacing: -1.5px;
	}
	.typography {
		display: flex;
		width: 473px;
		height: 120px;
		flex-direction: column;
		justify-content: center;
		flex-shrink: 0;
	}
	.progress1 {
		position: absolute;
		width: 275px;
		height: 22px;
		flex-shrink: 0;
	}
	.progress2 {
		position: absolute;
		width: 267px;
		height: 30px;
		flex-shrink: 0;
	}
	.chunk {
		width: 11.67px;
		height: 16px;
		background-color: #5c5a9c;
	}
	/* .progress::before {
		content: '';
		display: block;
		width: 278px;
		height: 4px;
		background-color: #5c5a9c;
	}
	.progress::after {
		content: '';
		display: block;
		width: 278px;
		height: 4px;
		background-color: #5c5a9c;
	} */
	.shadow {
		position: absolute;
		z-index: 1;
	}
	.frontwindow {
		position: relative;
		z-index: 2;
	}
</style>
