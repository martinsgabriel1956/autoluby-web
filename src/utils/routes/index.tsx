const PROTECTED_ROUTES = ["/dashboard", "/profile", "/settings"];
const PUBLIC_ROUTES = ["/login", "/register", "/forgot-password"];

export function isProtectedRoute(pathname: string): boolean {
	return PROTECTED_ROUTES.some((route) => pathname.startsWith(route));
}

export function isPublicRoute(pathname: string): boolean {
	return PUBLIC_ROUTES.some((route) => pathname.startsWith(route));
}
