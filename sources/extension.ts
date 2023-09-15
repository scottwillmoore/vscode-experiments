import path from "path";
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext): void {
	vscode.workspace.onDidOpenTextDocument(
		async (event) => {
			const fromExtension = ".jsx";
			const toExtension = ".module.css";

			const extension = path.posix.extname(event.uri.path);
			if (extension === fromExtension) {
				const base = path.posix.basename(event.uri.path, extension);
				const uri = vscode.Uri.joinPath(event.uri, `../${base}${toExtension}`);

				// const stat = await vscode.workspace.fs.stat(uri);
				// const textDocument = await vscode.workspace.openTextDocument(uri);

				try {
					await vscode.window.showTextDocument(uri, {
						preserveFocus: true,
						viewColumn: vscode.ViewColumn.Beside,
					});
				} catch {}
			}
		},
		undefined,
		context.subscriptions,
	);
}
