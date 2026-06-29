import {
  ActivityIcon,
  ArrowUpRightIcon,
  BellRingIcon,
  CalendarCheckIcon,
  CheckCircle2Icon,
  ChevronRightIcon,
  CircleDotIcon,
  Code2Icon,
  ComponentIcon,
  Layers3Icon,
  PackageCheckIcon,
  RocketIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ZapIcon,
} from '@acme/ui/components/icons';

import { Alert, AlertDescription, AlertTitle } from '@acme/ui/components/alert';
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from '@acme/ui/components/avatar';
import { Badge } from '@acme/ui/components/badge';
import { Button } from '@acme/ui/components/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@acme/ui/components/card';
import { Kbd } from '@acme/ui/components/kbd';
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from '@acme/ui/components/progress';
import { Separator } from '@acme/ui/components/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@acme/ui/components/table';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@acme/ui/components/tabs';

const stats = [
  {
    label: 'Shared components',
    value: '60',
    delta: '+18 this week',
    icon: ComponentIcon,
  },
  {
    label: 'Apps connected',
    value: '03',
    delta: 'web, admin, docs',
    icon: Layers3Icon,
  },
  {
    label: 'Build health',
    value: '99%',
    delta: 'remote cache active',
    icon: ActivityIcon,
  },
];

const releases = [
  {
    name: 'Design system',
    owner: 'UI',
    status: 'Ready',
    date: 'Today',
  },
  {
    name: 'Next app shell',
    owner: 'Web',
    status: 'Stable',
    date: 'Jun 29',
  },
  {
    name: 'Security baseline',
    owner: 'Ops',
    status: 'Patched',
    date: 'Jun 29',
  },
];

const progress = [
  { label: 'Component coverage', value: 86 },
  { label: 'Workspace hygiene', value: 92 },
  { label: 'Release confidence', value: 78 },
];

const activity = [
  {
    icon: PackageCheckIcon,
    title: 'Registry-ready UI package',
    detail: '@acme/ui exports components, hooks, lib, and globals.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Dependency audit clean',
    detail: 'Moderate-and-above advisories are clear in pnpm audit.',
  },
  {
    icon: RocketIcon,
    title: 'Next production build',
    detail: 'Turbopack build passes with React 19.2.',
  },
];

export default function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <header className="flex min-h-14 flex-wrap items-center justify-between gap-3 rounded-2xl border bg-card/70 px-4 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <SparklesIcon className="size-4" />
            </div>
            <div>
              <p className="text-sm font-medium">Acme Launch Ops</p>
              <p className="text-xs text-muted-foreground">
                Shared UI command center
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="outline" className="hidden sm:inline-flex">
              <CircleDotIcon data-icon="inline-start" className="text-primary" />
              Nx Cloud
            </Badge>
            <Button variant="outline" size="sm">
              <BellRingIcon data-icon="inline-start" />
              Updates
            </Button>
            <Button size="sm">
              Open board
              <ArrowUpRightIcon data-icon="inline-end" />
            </Button>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.75fr)]">
          <Card className="min-h-[440px] justify-between">
            <CardHeader className="gap-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>
                  <ZapIcon data-icon="inline-start" />
                  Live workspace
                </Badge>
                <Badge variant="secondary">Next.js 16</Badge>
                <Badge variant="outline">React 19.2</Badge>
              </div>

              <div className="max-w-3xl space-y-4">
                <h1 className="text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl">
                  One polished surface for every shared component.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  A product-grade home for the Nx workspace, powered by the
                  shared <span className="text-foreground">@acme/ui</span>{' '}
                  package and ready for more apps to plug in.
                </p>
              </div>
            </CardHeader>

            <CardContent className="grid gap-4 md:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border bg-background/45 p-4"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <item.icon className="size-4 text-primary" />
                    <Badge variant="outline">{item.delta}</Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-semibold tabular-nums">
                      {item.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>

            <CardFooter className="flex flex-wrap justify-between gap-3 border-t">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Kbd>pnpm</Kbd>
                <span>nx graph</span>
                <ChevronRightIcon className="size-4" />
                <span>web, ui, web-e2e</span>
              </div>
              <AvatarGroup>
                <Avatar>
                  <AvatarFallback>NX</AvatarFallback>
                  <AvatarBadge />
                </Avatar>
                <Avatar>
                  <AvatarFallback>UI</AvatarFallback>
                  <AvatarBadge />
                </Avatar>
                <Avatar>
                  <AvatarFallback>V</AvatarFallback>
                </Avatar>
                <AvatarGroupCount>+2</AvatarGroupCount>
              </AvatarGroup>
            </CardFooter>
          </Card>

          <div className="grid gap-6">
            <Alert>
              <CheckCircle2Icon />
              <AlertTitle>Audit baseline is green</AlertTitle>
              <AlertDescription>
                The current package set is patched and ready for active UI
                work.
              </AlertDescription>
            </Alert>

            <Card>
              <CardHeader>
                <CardTitle>Release readiness</CardTitle>
                <CardDescription>
                  Signals from the shared workspace.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {progress.map((item) => (
                  <Progress key={item.label} value={item.value}>
                    <ProgressLabel>{item.label}</ProgressLabel>
                    <ProgressValue />
                  </Progress>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
          <Card>
            <CardHeader>
              <CardTitle>Workspace pulse</CardTitle>
              <CardDescription>
                A clean view of what is moving across apps and packages.
              </CardDescription>
              <CardAction>
                <Button variant="outline" size="sm">
                  View all
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="releases" className="gap-5">
                <TabsList>
                  <TabsTrigger value="releases">
                    <CalendarCheckIcon data-icon="inline-start" />
                    Releases
                  </TabsTrigger>
                  <TabsTrigger value="quality">
                    <ShieldCheckIcon data-icon="inline-start" />
                    Quality
                  </TabsTrigger>
                  <TabsTrigger value="systems">
                    <Code2Icon data-icon="inline-start" />
                    Systems
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="releases">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Track</TableHead>
                        <TableHead>Owner</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {releases.map((release) => (
                        <TableRow key={release.name}>
                          <TableCell className="font-medium">
                            {release.name}
                          </TableCell>
                          <TableCell>{release.owner}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                release.status === 'Patched'
                                  ? 'default'
                                  : 'secondary'
                              }
                            >
                              {release.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right text-muted-foreground">
                            {release.date}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="quality">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {['Build', 'Lint', 'E2E'].map((label) => (
                      <div
                        key={label}
                        className="rounded-xl border bg-background/45 p-4"
                      >
                        <CheckCircle2Icon className="mb-4 size-5 text-primary" />
                        <p className="font-medium">{label}</p>
                        <p className="text-sm text-muted-foreground">
                          Passing without cache.
                        </p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="systems">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border bg-background/45 p-4">
                      <Badge variant="outline">Package</Badge>
                      <p className="mt-4 font-medium">@acme/ui</p>
                      <p className="text-sm text-muted-foreground">
                        Shared exports for components, hooks, lib, and styles.
                      </p>
                    </div>
                    <div className="rounded-xl border bg-background/45 p-4">
                      <Badge variant="outline">App</Badge>
                      <p className="mt-4 font-medium">web</p>
                      <p className="text-sm text-muted-foreground">
                        Next App Router shell consuming the shared package.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activity stream</CardTitle>
              <CardDescription>Latest workspace milestones.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              {activity.map((item, index) => (
                <div key={item.title}>
                  <div className="flex gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                      <item.icon className="size-4" />
                    </div>
                    <div className="min-w-0 space-y-1">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                  {index < activity.length - 1 ? (
                    <Separator className="mt-5" />
                  ) : null}
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
