import { Header } from "./components/header";

type AuthLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

export default function AuthLayout({ children }: AuthLayoutProps) {
	return (
		<main className="flex justify-between w-full h-screen">
			<section className="py-20 px-4 md:px-[150px] w-full lg:w-1/2">
				<Header />
				{children}
			</section>
			<section className="hidden lg:block bg-[url(/hero.png)] w-1/2 h-screen bg-cover"></section>
		</main>
	);
}
