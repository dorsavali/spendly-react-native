<script lang="ts">
	import { ChartNoAxesColumnIncreasing, Globe2, ReceiptText, WalletCards } from 'lucide-svelte';

	const features = [
		{
			title: 'Track Expenses',
			description:
				'Quickly record your daily expenses and keep every transaction organized in one place.',
			icon: ReceiptText,
			iconBg: 'bg-primary/15',
			iconColor: 'text-primary'
		},
		{
			title: 'Manage Income',
			description:
				'Track income and expenses together to always understand your current financial balance.',
			icon: WalletCards,
			iconBg: 'bg-success/20',
			iconColor: 'text-success'
		},
		{
			title: 'Smart Statistics',
			description:
				'Visualize your spending with clear charts and category breakdowns to better understand your habits.',
			icon: ChartNoAxesColumnIncreasing,
			iconBg: 'bg-accent/20',
			iconColor: 'text-accent'
		},
		{
			title: 'Multilingual',
			description:
				'Use Spendly in English, German or Persian with a simple and accessible multilingual experience.',
			icon: Globe2,
			iconBg: 'bg-secondary/15',
			iconColor: 'text-secondary'
		}
	];
</script>

<section id="features" class="w-full bg-white py-16 lg:py-24 flex flex-col justify-center items-center">
	<div class="mx-auto w-full max-w-[1440px] px-4 lg:px-12 xl:px-32">
		<div class="gap-5 pb-5 flex flex-col items-center text-center lg:mb-14">
			<p class="w-fit rounded-2xl bg-primary px-4 py-2 text-sm font-bold text-white opacity-80 lg:text-md">
				Features
			</p>

			<h2 class="text-3xl font-bold text-text-primary lg:text-5xl">
				Everything you need to manage your money
			</h2>

			<p class="mt-4 max-w-2xl text-base leading-7 text-text-secondary lg:text-lg">
				Spendly keeps personal finance simple with the tools you need to track, understand and
				improve your spending.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-5 lg:grid-cols-4">
			{#each features as feature (feature.title)}
				<div
					class="group flex flex-col gap-2.5 rounded-3xl border border-surface bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
				>
					<div
						class={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.iconBg}`}
					>
						<feature.icon size={28} class={feature.iconColor} strokeWidth={2} />
					</div>

					<h3 class="mb-2 text-xl font-bold text-text-primary">
						{feature.title}
					</h3>

					<p class="text-sm leading-6 text-text-secondary">
						{feature.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
