import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext): void {
	let disposable = vscode.commands.registerCommand("jump.helloWorld", () => {
		vscode.window.showInformationMessage("Hello, World!");
	});

	context.subscriptions.push(disposable);
}

export function deactivate(): void {}
