<script lang="ts">
	import { Mail } from 'lucide-svelte';
</script>

<footer class="w-full bg-[#06231f] text-white">
	<div
		class="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-4 py-12 lg:grid-cols-4 lg:px-12 xl:px-32"
	>
		<div class="flex flex-col gap-2">
			<div class="mb-4 flex items-center gap-3">
				<img src="/images/logo.webp" alt="Spendly logo" class="h-11 w-11 rounded-xl" />

				<p class="text-xl font-bold">Spendly</p>
			</div>

			<p class="max-w-xs text-sm leading-6 text-white/70">
				Track smarter. Spend better. Your personal finance companion.
			</p>

			<div class="mt-6 flex items-center gap-3">
				<a
					href="https://github.com/dorsavali/spendly-react-native"
					target="_blank"
					rel="noreferrer"
					aria-label="GitHub"
					class="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-primary"
				>
					<svg viewBox="0 0 24 24" class="h-5 w-5 fill-current">
						<path
							d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A11.3 11.3 0 0 0 12 .7Z"
						/>
					</svg>
				</a>

				<a
					href="mailto:dorsavalli.dev@email.com"
					aria-label="Email"
					class="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-primary"
				>
					<Mail size={18} />
				</a>
			</div>
		</div>

		<div>
			<h3 class="pb-3 font-semibold text-white">Navigation</h3>

			<ul class="space-y-3 text-sm text-white/70 flex flex-col gap-2">
				<li>
					<a href="#features" class="transition hover:text-primary"> Features </a>
				</li>

				<li>
					<a href="#screenshots" class="transition hover:text-primary"> Screenshots </a>
				</li>

				<li>
					<a href="#languages" class="transition hover:text-primary"> Languages </a>
				</li>

				<li>
					<a href="#languages" class="transition hover:text-primary"> Download </a>
				</li>
			</ul>
		</div>
		<div>
			<h3 class="pb-3 font-semibold text-white">Resources</h3>

			<ul class="space-y-3 text-sm text-white/70 flex flex-col gap-2">
				<li>
					<a
						href="https://github.com/dorsavali/spendly-react-native"
						target="_blank"
						rel="noreferrer"
						class="transition hover:text-primary"
					>
						GitHub Repository
					</a>
				</li>

				<li>
					<a
						href="https://github.com/dorsavali/spendly-react-native/releases"
						target="_blank"
						rel="noreferrer"
						class="transition hover:text-primary"
					>
						Releases
					</a>
				</li>

				<li>
					<a
						href="https://github.com/dorsavali/spendly-react-native/issues"
						target="_blank"
						rel="noreferrer"
						class="transition hover:text-primary"
					>
						Report a Bug
					</a>
				</li>

				<li>
					<a
						href="https://github.com/dorsavali/spendly-react-native/issues"
						target="_blank"
						rel="noreferrer"
						class="transition hover:text-primary"
					>
						Request a Feature
					</a>
				</li>
			</ul>
		</div>

		<div class="flex flex-col lg:items-end lg:justify-end lg:text-right">
			<p class="text-sm text-white/80">© 2026 Spendly</p>

			<p class="mt-4 text-sm text-white/70">
				Developed by
				<span class="font-semibold text-primary">DorsaValli</span>
			</p>

			<p class="mt-2 text-sm text-white/50">All rights reserved.</p>
		</div>
	</div>
</footer>
