import { Header } from "./components/header";

export type AuthenticatedLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

export default function AuthenticatedLayout({
	children,
}: AuthenticatedLayoutProps) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
