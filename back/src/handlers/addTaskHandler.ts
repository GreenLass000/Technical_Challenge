import { Request, Response } from 'express';

export async function addTaskHandler(req: Request, res: Response): Promise<void> {
	const body = req.body;

	try {
		const status = await insertTask(body);
		res.status(status);
	} catch (e) {
		console.log("ERROR", e);
		res.status(500);
	}
	res.end();
}

async function insertTask(task: Record<any, any>[]): Promise<number> {
	console.log(task);
	return 200;
}
