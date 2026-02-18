# AGENTS.md - Coding Guidelines for LMS API

## Project Overview

NestJS monorepo with GraphQL API for Learning Management System. Uses TypeORM, Prisma, Drizzle ORM, PostgreSQL.

## Build/Run Commands

```bash
# Install dependencies
pnpm install

# Development (single app)
pnpm run dev:adminApi    # Admin API only
pnpm run dev:publicApi   # User API only
pnpm run dev             # Both apps concurrently

# Build
pnpm run build

# Production
pnpm run start:prod
```

## Test Commands

```bash
# Run all tests
pnpm run test

# Run single test file
pnpm run test -- users.service.spec.ts

# Run tests matching pattern
pnpm run test -- --testNamePattern="should create user"

# Watch mode
pnpm run test:watch

# Coverage
pnpm run test:cov

# E2E tests
pnpm run test:e2e
```

## Lint/Format Commands

```bash
# Lint with auto-fix
pnpm run lint

# Format code
pnpm run format
```

## Database Commands

```bash
# Drizzle migrations
pnpm run generate   # Generate migration
pnpm run migrate    # Run migrations
pnpm run studio     # Drizzle studio

# Prisma (legacy)
npx prisma generate
npx prisma migrate dev
```

## Code Style Guidelines

### Imports

- Group imports: external libs → internal modules → relative imports
- Use path aliases from tsconfig (e.g., `apiLibs/common`, `apiLibs/users-managment`)
- GraphQL decorators: `@nestjs/graphql`, `@Field`, `@Resolver`, etc.

### Formatting

- Single quotes
- Trailing commas
- 2-space indentation
- No semicolons (Prettier handles this)

### Naming Conventions

- Classes: PascalCase (`UsersService`, `CreateUserInput`)
- Files: kebab-case (`users.service.ts`, `create-user.input.ts`)
- GraphQL types: PascalCase with Type suffix (`UsersType`)
- DTOs: PascalCase with Input suffix (`CreateUserInput`)
- Entities: PascalCase, singular (`Users` - though this is inconsistent)

### Types

- Enable strict null checks
- Use explicit return types on public methods
- Avoid `any` (eslint rule disabled, but prefer types)
- GraphQL field types: `@Field(() => String)` for complex types

### NestJS Patterns

- Controllers: `@Controller()` with route prefix
- Services: `@Injectable()`, business logic
- Resolvers: `@Resolver(() => Type)` for GraphQL
- DTOs: `@InputType()` for mutations, `@ArgsType()` for queries
- Entities: `@Entity()` for TypeORM, define relations

### Error Handling

- Use NestJS exceptions: `ConflictException`, `UnauthorizedException`
- Throw early, return data directly
- Async/await preferred over raw promises

### Testing

- Use `Test.createTestingModule()`
- Mock external dependencies
- Test file naming: `[name].spec.ts`
- Describe blocks use service/class name

### GraphQL

- Define schema in code using decorators
- Use DTOs for all inputs
- Context for auth (req/res access)
- File uploads via `graphql-upload`

## Project Structure

```
apps/
  admin-api/        # Admin application
  user-api/         # Public user API
libs/
  common/           # Shared utilities, enums
  users-managment/  # User domain (note: typo in name)
  tutorials-management/  # Tutorial domain
  file-storage/     # MinIO integration
```

## Environment

Copy `.env` template and configure:

- Database URL
- JWT secrets
- MinIO credentials
- Google AI API keys
