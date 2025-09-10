import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
	const cookieStore = await cookies();

	try {
		cookieStore.delete("token");

		return NextResponse.json(
			{ message: "Logout realizado com sucesso" },
			{ status: 200 },
		);
	} catch (error) {
		console.log("Erro ao deslogar da aplicação:", error);
		return NextResponse.json(
			{ error: "Erro interno do servidor" },
			{ status: 500 },
		);
	}
}
