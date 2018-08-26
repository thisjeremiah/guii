# Yarn Workspace / TypeScript Rules

## Using Project References
- Must use `declaration: true`, `declarationMap: true` in `tsconfig.base.json`
- Must keep root `tsconfig.json` with **all** `references`
- Must add `composite: true` and explicit `references` fields to each workspace. Only add references being used.
- Use `rootDir: src` in `compilerOptions` for each workspace

## Using Paths
- Add paths to `compilerOptions` in `tsconfig.build.json`
- Omit `rootDir` property from `tsconfig.json` from running project. This is the only way to use and listen to `paths` at runtime.
- TODO: Find way to explicity declare paths used to keep `rootDir`
