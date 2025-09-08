import { type NextRequest, NextResponse } from "next/server";
import { isProtectedRoute, isPublicRoute } from "@/utils/routes";

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const token = request.cookies.get("token")?.value;
	const isAuthenticated = token;
	const isHomePathname = pathname === "/";

	if (isHomePathname) {
		if (!isAuthenticated) {
			return NextResponse.redirect(new URL("/login", request.url));
		}

		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	if (isPublicRoute(pathname)) {
		if (isAuthenticated) {
			return NextResponse.redirect(new URL("/dashboard", request.url));
		}
		return NextResponse.next();
	}

	if (isProtectedRoute(pathname)) {
		if (!isAuthenticated) {
			const loginUrl = new URL("/login", request.url);
			loginUrl.searchParams.set("redirect", pathname);
			return NextResponse.redirect(loginUrl);
		}
		return NextResponse.next();
	}

	return NextResponse.next();
}

export const config = {
	matcher: "/",
};
