import { PrismaClient } from "../src/generated/prisma/edge"
import { withAccelerate } from "@prisma/extension-accelerate";

export interface Env{
	DATABASE_URL: string
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const prisma = new PrismaClient({
			datasourceUrl: env.DATABASE_URL,
		}).$extends(withAccelerate())

		await prisma.log.create({
			data: {
				level: 'info',
				message: `${request.method} ${request.url}`,
				meta: {
					headers: JSON.stringify(request.headers),
				},
			},
		})

		const response = await prisma.log.findMany({
			take: 20,
			orderBy: {
				id: 'desc',
			},
		}).withAccelerateInfo()

		return Response.json(response);
	},
} satisfies ExportedHandler<Env>;
