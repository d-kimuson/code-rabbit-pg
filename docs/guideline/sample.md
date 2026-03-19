## Sample Module Guidelines

### Naming Conventions

- All exported functions must use camelCase
- Boolean-returning functions must be prefixed with `is`, `has`, or `can`
- Constants must be UPPER_SNAKE_CASE

### Error Handling

- Never silently swallow errors — always log or rethrow
- Use custom error classes instead of generic `Error`

### Type Safety

- `any` type is strictly prohibited — use `unknown` and narrow with type guards
- All function parameters and return types must be explicitly annotated

### Performance

- Avoid synchronous file I/O in any exported function
- Prefer `Map`/`Set` over plain objects for dynamic key collections
