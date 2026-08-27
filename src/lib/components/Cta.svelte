<script lang="ts">
	import { Download } from 'lucide-svelte';

	import 'country-flag-icons/3x2/flags.css';

	const languages = [
		{ name: 'English', flag: 'flag:GB' },
		{ name: 'Deutsch', flag: 'flag:DE' },
		{ name: 'فارسی', flag: 'flag:IR' }
	];
</script>

<section id="languages" class="w-full bg-background py-16 lg:py-2">
	<div class="mx-auto w-full max-w-[1440px] px-4 lg:px-12 xl:px-32">
		<div
			class="flex flex-col items-center justify-between gap-10 rounded-[32px] bg-secondary px-6 py-10 lg:flex-row lg:px-12"
		>
			<div class="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
				<p
					class="mb-3 w-fit rounded-2xl bg-white/10 px-4 py-2 text-xs font-semibold text-white lg:text-sm"
				>
					Languages
				</p>

				<h2 class="text-2xl font-bold text-white lg:text-4xl">Available in 3 languages</h2>

				<p class="mt-3 max-w-lg text-white/70">Use Spendly in English, German or Persian.</p>

				<div class="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
					{#each languages as language (language.name)}
						<div class="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm">
							<span
								class={`${language.flag} h-7 rounded-md`}
								role="img"
								aria-label={`${language.name} flag`}
							></span>

							<span class="text-sm font-semibold text-white">
								{language.name}
							</span>
						</div>
					{/each}
				</div>
			</div>

			<div class="flex w-full flex-col gap-3 lg:w-auto">
				<a
					href="https://github.com/dorsavali/spendly-react-native/releases/download/v1.0.1/spendly-v1.0.1.apk"
					class="flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 transition duration-300 hover:bg-primary/80"
				>
					<Download size={19} color="white" />
					<span class="font-semibold text-white"> Download APK </span>
				</a>

				<a
					href="https://github.com/dorsavali/spendly-react-native"
					target="_blank"
					rel="noreferrer"
					class="flex items-center justify-center gap-2 rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-black"
				>
					<svg viewBox="0 0 24 24" class="h-5 w-5 fill-white" aria-hidden="true">
						<path
							d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A11.3 11.3 0 0 0 12 .7Z"
						/>
					</svg>
					<span class="font-semibold text-white"> GitHub </span>
				</a>
			</div>
		</div>
	</div>
</section>
