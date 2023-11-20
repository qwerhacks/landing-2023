<script>
	const deadline = new Date(2024, 1, 2);
	const start = new Date(2023, 8, 1);
	const now = new Date();

	const current = (now.getTime() - start.getTime()) / (1000 * 3600 * 24);
	const fullduration = (deadline.getTime() - start.getTime()) / (1000 * 3600 * 24);
	const chunks = Math.floor((current / fullduration) * 18);
</script>

<div
	id="window"
	class="flex-auto border-4 border-solid border-[#200b3a] outline-[#200b3a] rounded-lg"
>
	<div
		id="colored background"
		class="w-[473px] h-[39px] border-b-4 border-solid border-[#200b3a] outline-[#200b3a] rounded-t-[4.5px]"
		style="background: linear-gradient(90deg, #C382DA 2.01%, #E7BDE5 100%);"
	/>
	<div
		id="content"
		class="w-[473px] h-[179px] text-center items-center align-middle bg-white rounded-b-[4.5px]"
	>
		<span class="text-[50px] text-[#200b3a] borel typography pt-[39px]"
			>2024 loading.... {chunks}</span
		>
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="271"
				height="4"
				viewBox="0 0 271 4"
				fill="none"
			>
				<path
					d="M1.23681 0.0882386C2.1013 0.0588235 2.9658 0.0036823 3.8303 0.003639C91.6973 -0.000260049 179.564 7.22024e-06 267.431 7.22024e-06C268.283 7.22024e-06 269.136 0 270.13 0C270.188 1.26814 270.239 2.35361 270.237 3.58863C270.114 3.78139 270.043 3.82459 269.751 3.88064C180.641 3.89456 91.7516 3.8957 2.8624 3.89509C2.31123 3.89509 1.76005 3.87089 1.09763 3.80902C0.909862 3.78674 0.833349 3.81343 0.756836 3.84012C0.770295 2.8789 0.783753 1.91767 0.9188 0.706984C1.14539 0.355445 1.21086 0.232355 1.23681 0.0882386Z"
					fill="#5C5A9C"
				/>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="278"
				height="26"
				viewBox="0 0 278 26"
				fill="none"
			>
				<path
					d="M273.371 25.4573C272.46 25.4888 271.751 25.5075 271.042 25.5075C182.117 25.5082 93.1912 25.5075 4.05247 25.4714C2.56206 25.0889 1.11758 25.9392 0.12207 24.7887C1.46196 24.7813 2.6187 24.8751 3.99495 24.9887C5.15943 25.0263 6.1044 25.0598 7.04937 25.0598C94.6082 25.0622 182.167 25.062 269.726 25.062C270.199 25.062 270.673 25.0841 271.144 25.0562C271.742 25.0209 272.337 24.9448 272.971 24.8827C272.971 16.767 272.971 8.81739 272.971 0.867758C273.042 0.824559 273.114 0.781353 273.3 0.788963C274.588 0.839772 275.762 0.839772 277.094 0.839772C277.094 8.94761 277.094 17.0107 277.094 25.2588C275.884 25.3196 274.728 25.3777 273.371 25.4573Z"
					fill="#5C5A9C"
				/>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="271"
				height="4"
				viewBox="0 0 271 4"
				fill="none"
			>
				<path
					d="M270.171 0.479004C270.18 1.45713 270.19 2.43526 269.906 3.60167C268.51 3.7855 267.406 3.7772 266.302 3.7772C179.01 3.77659 91.7185 3.77686 4.42677 3.77429C3.24447 3.77426 2.06217 3.73874 0.879866 3.7198C0.852661 2.76187 0.825455 1.80398 1.03262 0.676593C90.1923 0.507697 179.118 0.508361 268.043 0.507639C268.752 0.507625 269.461 0.488953 270.171 0.479004Z"
					fill="#5C5A9C"
				/>
			</svg>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css?family=Borel');
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
		width: 379px;
		height: 105px;
		flex-direction: column;
		justify-content: center;
		flex-shrink: 0;
	}
</style>
