<script lang="ts">
	import { Menu, MoveDown, X } from 'lucide-svelte';
import { resolve } from '$app/paths';
	let menuOpen = $state(false);
</script>

<section class="w-full px-4 sm:px-6 lg:px-12 xl:px-32 max-w-[1440px]">
	<header class="relative z-50 flex items-center justify-between py-4">
		<a href={resolve('/')} class="flex items-center gap-2">
			<img src="/images/logo.webp" alt="Spendly logo" class="h-12 w-12 sm:h-14 sm:w-14" />

			<p class="text-xl font-bold text-text-primary sm:text-2xl">Spendly</p>
		</a>

		<!-- Desktop nav -->
		<nav class="hidden lg:block">
			<ul class="flex items-center gap-7 text-sm font-semibold  ">
				<li class="text-text-secondary hover:text-primary duration-200">
					<a href="#features" class="transition-colors "> Features </a>
				</li>
				<li class="text-text-secondary hover:text-primary duration-200">
					<a href="#screenshots" class="transition-colors"> Screenshots </a>
				</li >
				<li class="text-text-secondary hover:text-primary duration-200">
					<a href="#languages" class="transition-colors"> Languages </a>
				</li>
				<li class="text-text-secondary hover:text-primary duration-200">
					<a href="#download" class="transition-colors"> Download </a>
				</li>
				<li class="text-text-secondary hover:text-primary duration-200">
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
			class="hidden items-center gap-2 rounded-xl bg-primary px-5 py-3 transition duration-500 hover:bg-secondary lg:flex"
		>
			<span class=" font-poppins text-sm font-semibold text-white transition">Download APK</span>
			<MoveDown size={18} color="#fff" />
		</a>
		<button
			type="button"
			onclick={() => {
				menuOpen = !menuOpen;
			}}
			class="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-text-primary lg:hidden"
			aria-label="Toggle navigation menu"
		>
			{#if menuOpen}
				<X size={24} />
			{:else}
				<Menu size={24} />
			{/if}
		</button>
		{#if menuOpen}
			<div
				class="absolute top-full right-0 left-0 z-[999] mt-2 rounded-2xl bg-white p-5 shadow-xl lg:hidden"
			>
				<nav>
					<ul class="flex flex-col gap-4 font-semibold text-text-secondary">
						<li>
							<a
								href="#features"
								onclick={() => (menuOpen = false)}
								class="block py-1 transition-colors hover:text-primary"
							>
								Features
							</a>
						</li>

						<li>
							<a
								href="#screenshots"
								onclick={() => (menuOpen = false)}
								class="block py-1 transition-colors hover:text-primary"
							>
								Screenshots
							</a>
						</li>

						<li>
							<a
								href="#languages"
								onclick={() => (menuOpen = false)}
								class="block py-1 transition-colors hover:text-primary"
							>
								Languages
							</a>
						</li>

						<li>
							<a
								href="#download"
								onclick={() => (menuOpen = false)}
								class="block py-1 transition-colors hover:text-primary"
							>
								Download
							</a>
						</li>

						<li>
							<a
								href="https://github.com/dorsavali/spendly-react-native"
								target="_blank"
								rel="noreferrer"
								class="block py-1 transition-colors hover:text-primary"
							>
								GitHub
							</a>
						</li>
					</ul>
				</nav>

				<a
					href="https://github.com/dorsavali/spendly-react-native/releases/download/v1.0.1/spendly-v1.0.1.apk"
					onclick={() => (menuOpen = false)}
					class="mt-5 flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:bg-secondary"
				>
					Download APK
					<MoveDown size={18} />
				</a>
			</div>
		{/if}
	</header>
</section>
