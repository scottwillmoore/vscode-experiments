import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext): void {
	context.subscriptions.push(
		vscode.workspace.onDidOpenTextDocument((event) => {
			console.log(event.fileName);
		}),
	);
}
