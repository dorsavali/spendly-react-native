<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Features from '$lib/components/Features.svelte';
	import Screenshots from '$lib/components/Screenshots.svelte';
	import Cta from '$lib/components/Cta.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Spendly | Simple Personal Expense Tracker</title>
	<meta
		name="description"
		content="Spendly is a simple personal expense tracker for managing daily spending, understanding financial habits and taking control of your money."
	/>
	<meta
		name="keywords"
		content="Spendly, expense tracker, personal finance, budget tracker, money manager, Android app"
	/>
	<meta name="robots" content="index, follow" />
	<meta name="application-name" content="Spendly" />
	<meta name="theme-color" content="#2e8b57" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Spendly" />
	<meta property="og:title" content="Spendly | Simple Personal Expense Tracker" />
	<meta
		property="og:description"
		content="Track daily expenses, understand your spending habits and manage your money with Spendly."
	/>
	<meta property="og:image" content="/images/logo.webp" />
	<meta property="og:image:alt" content="Spendly logo" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Spendly | Simple Personal Expense Tracker" />
	<meta
		name="twitter:description"
		content="Track daily expenses, understand your spending habits and manage your money with Spendly."
	/>
	<meta name="twitter:image" content="/images/logo.webp" />
</svelte:head>

<Navbar />
<Hero />
<Features />
<Screenshots />
<Cta />
<Footer />
