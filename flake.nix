{
  inputs = {
    nix-foundations.url = "github:scottwillmoore/nix-foundations";
  };
  outputs = inputs @ {nix-foundations, ...}:
    nix-foundations.mkFlake inputs {
      perSystem = {packages, ...}: {
        devShells.default = with packages;
          mkShellNoCC {
            packages = [
              nodejs
              vsce
            ];
          };
      };
    };
}
