import { Button } from '@acme/ui/components/button';

export default function Index() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground">
      <section className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <div className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground">
            Nx + Next.js + shadcn/ui
          </p>
          <h1 className="text-4xl font-semibold tracking-normal">
            Shared UI is ready.
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            This app imports its shadcn components from the shared{' '}
            <code className="rounded-md bg-muted px-1.5 py-0.5 text-sm text-foreground">
              @acme/ui
            </code>{' '}
            package, so future apps can use the same component source.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button>Shared Button</Button>
          <Button variant="outline">Secondary Action</Button>
        </div>
      </section>
    </main>
  );
}
