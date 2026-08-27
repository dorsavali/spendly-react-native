<script lang="ts">
	import { Menu, MoveDown, X } from 'lucide-svelte';
	import { fly, fade } from 'svelte/transition';
	import { resolve } from '$app/paths';
	let menuOpen = $state(false);
</script>

<section class="w-full max-w-[1440px] bg-white px-4 sm:px-6 lg:px-12 xl:px-32">
	<header class="relative z-50 flex items-center justify-between py-4">
		<a href={resolve('/')} class="flex items-center gap-2">
			<img src="/images/logo.webp" alt="Spendly logo" class="h-12 w-12 sm:h-14 sm:w-14" />

			<p class="text-xl font-bold text-text-primary sm:text-2xl">Spendly</p>
		</a>
		<nav class="hidden lg:block">
			<ul class="flex items-center gap-7 text-sm font-semibold">
				<li class="text-text-secondary duration-200 hover:text-primary">
					<a href="#features" class="transition-colors"> Features </a>
				</li>
				<li class="text-text-secondary duration-200 hover:text-primary">
					<a href="#screenshots" class="transition-colors"> Screenshots </a>
				</li>
				<li class="text-text-secondary duration-200 hover:text-primary">
					<a href="#languages" class="transition-colors"> Languages </a>
				</li>
				<li class="text-text-secondary duration-200 hover:text-primary">
					<a href="#languages" class="transition-colors"> Download </a>
				</li>
				<li class="text-text-secondary duration-200 hover:text-primary">
					<a
						href="https://github.com/dorsavali/spendly-react-native"
						target="_blank"
						rel="noreferrer"
						class="transition-colors hover:text-primary"
					>
						GitHub
					</a>
				</li>
			</ul>
		</nav>
		<a
			href="https://github.com/dorsavali/spendly-react-native/releases/download/v1.0.1/spendly-v1.0.1.apk"
			class="hidden items-center gap-2 rounded-2xl bg-primary px-5 py-3 transition duration-500 hover:bg-secondary lg:flex"
		>
			<span class=" font-poppins text-sm font-semibold text-white transition">Download APK</span>
			<MoveDown size={18} color="#fff" />
		</a>
		<button
			type="button"
			onclick={() => {
				menuOpen = true;
			}}
			class="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-text-primary lg:hidden"
			aria-label="Open navigation menu"
		>
			<Menu size={24} />
		</button>

		{#if menuOpen}
			<button
				type="button"
				aria-label="Close menu"
				onclick={() => (menuOpen = false)}
				class="fixed inset-0 z-[998] bg-black/40 backdrop-blur-[2px] lg:hidden"
				transition:fade={{ duration: 200 }}
			></button>

			<aside
				class="fixed top-0 right-0 z-[999] flex h-full w-[82%] max-w-[340px] flex-col bg-white p-6 shadow-2xl lg:hidden"
				transition:fly={{ x: 340, duration: 280 }}
			>
				<div class="mb-8 flex justify-end">
					<button
						type="button"
						onclick={() => (menuOpen = false)}
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-surface"
						aria-label="Close navigation menu"
					>
						<X size={22} />
					</button>
				</div>

				<nav class="flex-1">
					<ul class="flex flex-col gap-2">
						<li>
							<a
								href="#features"
								onclick={() => (menuOpen = false)}
								class="block rounded-xl px-3 py-3 font-semibold text-text-secondary transition hover:bg-surface hover:text-primary"
							>
								Features
							</a>
						</li>

						<li>
							<a
								href="#screenshots"
								onclick={() => (menuOpen = false)}
								class="block rounded-xl px-3 py-3 font-semibold text-text-secondary transition hover:bg-surface hover:text-primary"
							>
								Screenshots
							</a>
						</li>

						<li>
							<a
								href="#languages"
								onclick={() => (menuOpen = false)}
								class="block rounded-xl px-3 py-3 font-semibold text-text-secondary transition hover:bg-surface hover:text-primary"
							>
								Languages
							</a>
						</li>

						<li>
							<a
								href="#languages"
								onclick={() => (menuOpen = false)}
								class="block rounded-xl px-3 py-3 font-semibold text-text-secondary transition hover:bg-surface hover:text-primary"
							>
								Download
							</a>
						</li>

						<li>
							<a
								href="https://github.com/dorsavali/spendly-react-native"
								target="_blank"
								rel="noreferrer"
								class="block rounded-xl px-3 py-3 font-semibold text-text-secondary transition hover:bg-surface hover:text-primary"
							>
								GitHub
							</a>
						</li>
					</ul>
				</nav>

				<a
					href="https://github.com/dorsavali/spendly-react-native/releases/download/v1.0.1/spendly-v1.0.1.apk"
					class="flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 transition duration-500 hover:bg-secondary"
				>
					<span class="font-poppins text-sm font-semibold text-white"> Download APK </span>

					<MoveDown size={18} color="#fff" />
				</a>
			</aside>
		{/if}
	</header>
</section>
