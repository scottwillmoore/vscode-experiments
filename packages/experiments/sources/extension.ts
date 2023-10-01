import * as path from "path";
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext): void {
	vscode.commands.registerCommand("scottwillmoore.experiments.run", async () => {
		// const fileNesting = vscode.workspace.getConfiguration("explorer.fileNesting");
		// console.log(fileNesting.get("enabled"));
		// console.log(fileNesting.get("patterns"));
		// console.log(vscode.window.tabGroups);
		// console.log(vscode.window.visibleTextEditors);
		// console.log(await vscode.commands.executeCommand("vscode.getEditorLayout"));
		console.log("Hello, World!");
	});

	vscode.workspace.onDidOpenTextDocument(
		async (event) => {
			const fromExtension = ".jsx";
			const toExtension = ".module.css";

			const extension = path.posix.extname(event.uri.path);
			if (extension === fromExtension) {
				const base = path.posix.basename(event.uri.path, extension);
				const uri = vscode.Uri.joinPath(event.uri, `../${base}${toExtension}`);

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

	vscode.workspace.onWillRenameFiles(
		async (_event) => {
			const fileNesting = vscode.workspace.getConfiguration("explorer.fileNesting");
			console.log(fileNesting.get("enabled"));
			console.log(fileNesting.get("patterns"));
		},
		undefined,
		context.subscriptions,
	);
}
