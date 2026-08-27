<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	let swiperEl: HTMLElement & {
		initialize: () => void;
	};

	let ready = $state(false);

	const screenshots = [
		'/images/screenshots/1.webp',
		'/images/screenshots/2.webp',
		'/images/screenshots/3.webp',
		'/images/screenshots/4.webp',
		'/images/screenshots/5.webp',
		'/images/screenshots/6.webp',
		'/images/screenshots/7.webp',
		'/images/screenshots/8.webp'
	];

	onMount(() => {
		register();

		Object.assign(swiperEl, {
			centeredSlides: true,
			loop: true,
			grabCursor: true,
			speed: 700,

			autoplay: {
				delay: 2200,
				disableOnInteraction: false
			},

			effect: 'coverflow',

			coverflowEffect: {
				rotate: 0,
				stretch: 0,
				depth: 100,
				modifier: 1.2,
				slideShadows: false
			},

			breakpoints: {
				0: {
					slidesPerView: 1.5,
					spaceBetween: 8
				},
				1024: {
					slidesPerView: 3.4,
					spaceBetween: 16
				}
			}
		});

		swiperEl.initialize();

		requestAnimationFrame(() => {
			ready = true;
		});
	});
</script>

<section id="screenshots" class="w-full bg-background py-16 lg:py-10">
	<div class="mx-auto w-full max-w-[1440px] px-4 lg:px-12 xl:px-32">
		<div class="flex flex-col items-center gap-5 pb-5 text-center lg:mb-14">
			<p
				class="lg:text-md w-fit rounded-2xl bg-primary px-4 py-2 text-sm font-bold text-white opacity-80"
			>
				Screenshots
			</p>

			<h2 class="text-3xl font-bold text-text-primary lg:text-5xl">Explore Spendly</h2>

			<p class="mt-4 max-w-xl text-base leading-7 text-text-secondary lg:text-lg">
				Take a look inside Spendly and explore the main screens of the app.
			</p>
		</div>

		<div class="relative h-[430px] w-full overflow-hidden lg:h-[530px]">
			{#if !ready}
				<div
					class="absolute inset-0 flex items-center justify-center"
					aria-label="Loading screenshots"
				>
					<div
						class="h-[400px] w-[200px] animate-pulse rounded-[22px] bg-surface lg:h-[500px] lg:w-[250px]"
					></div>
				</div>
			{/if}

			<swiper-container
				bind:this={swiperEl}
				init="false"
				class:opacity-0={!ready}
				class:opacity-100={ready}
				class="block h-full w-full transition-opacity duration-300"
			>
				{#each screenshots as screenshot, index (screenshot)}
					<swiper-slide class="h-full">
						<div class="flex h-full items-center justify-center py-3">
							<img
								src={screenshot}
								alt={`Spendly screenshot ${index + 1}`}
								class="h-[400px] w-[200px] rounded-[22px] object-cover select-none lg:h-[500px] lg:w-[250px]"
								loading={index === 0 ? 'eager' : 'lazy'}
								fetchpriority={index === 0 ? 'high' : 'auto'}
								width="250"
								height="500"
								draggable="false"
							/>
						</div>
					</swiper-slide>
				{/each}
			</swiper-container>
		</div>
	</div>
</section>
