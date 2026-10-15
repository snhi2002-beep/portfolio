export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  architectureHighlight: string;
  category: "Full-Stack" | "Systems & Security" | "Real-Time & AI";
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  metrics: string[];
  featured: boolean;
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface SkillGroup {
  category: string;
  badge: string;
  description: string;
  skills: {
    name: string;
    level: string;
    detail: string;
  }[];
}

export interface ArchitectureBlueprint {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  nodes: {
    step: string;
    layer: string;
    tech: string;
    detail: string;
  }[];
  codeBlock: {
    filename: string;
    code: string;
  };
}

export const DEVELOPER_PROFILE = {
  handle: "snhi2002-beep",
  name: "Software Engineer & Full-Stack Architect",
  tagline: "Architecting high-throughput web platforms, real-time systems, and secure cloud-native infrastructure.",
  bio: "Full-stack developer and systems thinker specializing in modern TypeScript monorepos (Next.js, Turborepo, Node.js), low-level memory-safe C++ algorithms, relational & NoSQL database optimization, and hardened authentication & media streaming architectures.",
  avatar: "https://avatars.githubusercontent.com/u/251144465?v=4",
  githubUrl: "https://github.com/snhi2002-beep",
  status: "Available for Full-Stack & Systems Engineering Opportunities",
  stats: [
    { label: "Production & Open Repos", value: "8+" },
    { label: "Core Stack Languages", value: "TS / C++ / Java / SQL" },
    { label: "Architecture Focus", value: "Monorepos & Real-Time" },
    { label: "Security & Auth", value: "OAuth 2.0 / JWT / DRM" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "streaming-platform",
    title: "Streaming Platform Monorepo",
    subtitle: "Turborepo Media & Protected Streaming Architecture",
    description:
      "A high-scale, modular streaming platform engineered with Turborepo and TypeScript. Designed for low-latency content delivery, shared UI component libraries, and end-to-end type safety across microservices and edge clients.",
    architectureHighlight:
      "Implements isolated build caching pipelines via Turborepo, token-gated media manifest delivery, and DRM-ready encrypted stream orchestration.",
    category: "Full-Stack",
    techStack: ["TypeScript", "Turborepo", "Next.js", "Node.js", "Redis", "Tailwind CSS"],
    githubUrl: "https://github.com/snhi2002-beep/streaming-platform",
    metrics: ["Sub-second incremental builds", "Shared UI & Config Packages", "Protected Media Segments"],
    featured: true,
    codeSnippet: {
      language: "typescript",
      filename: "packages/stream-core/manifest-guard.ts",
      code: `export async function verifyStreamSession(token: string, assetId: string) {
  const payload = await verifyJwtHmac(token, process.env.STREAM_SECRET!);
  if (payload.assetScope !== assetId || Date.now() > payload.exp * 1000) {
    throw new StreamSecurityError("EXPIRED_OR_INVALID_DRM_GRANT", 403);
  }
  return signSignedManifestUrl(assetId, payload.sub, { ttlSeconds: 120 });
}`,
    },
  },
  {
    id: "blogging-ui",
    title: "Blogging UI & Publishing Engine",
    subtitle: "Full-Stack Next.js, Tailwind CSS & MongoDB Platform",
    description:
      "A modern full-stack content publishing platform with server-side rendering (SSR), dynamic routing, rich article formatting, and MongoDB persistence with authenticated author workflows.",
    architectureHighlight:
      "Combines Next.js Server Components for zero-bundle-cost reader views with indexed MongoDB aggregation pipelines and optimistic UI mutations.",
    category: "Full-Stack",
    techStack: ["TypeScript", "Next.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
    githubUrl: "https://github.com/snhi2002-beep/blogging-ui",
    liveUrl: "https://blogging-ui-three.vercel.app",
    metrics: ["Live on Vercel", "SSR SEO Optimized", "Indexed MongoDB Schemas"],
    featured: true,
    codeSnippet: {
      language: "typescript",
      filename: "src/lib/db/posts-pipeline.ts",
      code: `export async function getPublishedFeed(limit = 12) {
  return PostModel.aggregate([
    { $match: { status: "PUBLISHED" } },
    { $sort: { publishedAt: -1 } },
    { $limit: limit },
    { $project: { title: 1, slug: 1, excerpt: 1, author: 1, readTime: 1 } }
  ]).exec();
}`,
    },
  },
  {
    id: "gemini-extention",
    title: "Gemini AI Browser Assistant",
    subtitle: "Context-Aware Chrome Extension with Gemini API",
    description:
      "A lightweight, responsive browser extension that embeds an intelligent AI assistant directly into the browser workflow, supporting real-time prompt streaming, DOM context extraction, and clean markdown rendering.",
    architectureHighlight:
      "Uses isolated background service workers and message-passing channels to securely communicate with the Gemini API without exposing keys to page scripts.",
    category: "Real-Time & AI",
    techStack: ["JavaScript", "Chrome Extensions API", "Gemini API", "CSS3", "HTML5"],
    githubUrl: "https://github.com/snhi2002-beep/gemini-extention",
    metrics: ["Zero-latency popup UI", "Isolated Service Worker", "Streaming Markdown Parser"],
    featured: true,
    codeSnippet: {
      language: "javascript",
      filename: "background/service-worker.js",
      code: `chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.type === "GEMINI_QUERY") {
    streamGeminiCompletion(req.prompt, req.pageContext)
      .then((reply) => sendResponse({ ok: true, reply }))
      .catch((err) => sendResponse({ ok: false, error: err.message }));
    return true; // Keep message channel open for async response
  }
});`,
    },
  },
  {
    id: "next-platform-starter",
    title: "Next Platform Starter",
    subtitle: "Production-Ready Edge & SSR Web Architecture",
    description:
      "A high-performance Next.js starter architecture featuring edge-ready middleware, modular API routes, modern layout primitives, and automated deployment pipelines.",
    architectureHighlight:
      "Configured for instant edge cold-starts, strict linting, and scalable folder conventions for enterprise web applications.",
    category: "Full-Stack",
    techStack: ["Next.js", "JavaScript", "React", "Tailwind CSS", "Edge Middleware"],
    githubUrl: "https://github.com/snhi2002-beep/next-platform-starter",
    metrics: ["100 Lighthouse Performance", "Edge Middleware Ready", "Modular App Router"],
    featured: false,
  },
  {
    id: "parcel-delivery-app",
    title: "Interactive Web Application & Parcel Hub",
    subtitle: "Role-Based Booking, Tracking & State Persistence",
    description:
      "A responsive single-page application deployed on Vercel featuring multi-role dashboards, real-time status tracking workflows, and deterministic client state synchronization.",
    architectureHighlight:
      "Built with zero external framework overhead for instantaneous load times, utilizing structured state reducers and reactive DOM updates.",
    category: "Full-Stack",
    techStack: ["HTML5", "CSS3", "Vanilla JavaScript", "State Management", "Vercel"],
    githubUrl: "https://github.com/snhi2002-beep/app",
    liveUrl: "https://app-seven-delta-54.vercel.app",
    metrics: ["Live on Vercel", "Multi-Role Access Control", "Zero-Dependency Bundle"],
    featured: true,
  },
  {
    id: "realtime-socket-auth",
    title: "Real-Time Socket & Auth Engine",
    subtitle: "Express.js, Socket.io, OAuth 2.0 & HttpOnly JWT Suite",
    description:
      "A hardened backend and real-time room broadcasting system integrating Google OAuth 2.0, Passport.js, HttpOnly cookie JWT rotation, and low-latency bidirectional Socket.io rooms.",
    architectureHighlight:
      "Mitigates XSS and CSRF vectors by binding short-lived access tokens to HttpOnly SameSite cookies and authenticating WebSocket handshakes at the middleware layer.",
    category: "Systems & Security",
    techStack: ["Node.js", "Express.js", "Socket.io", "OAuth 2.0", "JWT", "Redis"],
    githubUrl: "https://github.com/snhi2002-beep/hd-new",
    metrics: ["HttpOnly Cookie Security", "Room-Isolated WebSockets", "Redis Session Cache"],
    featured: false,
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Full-Stack & Web Architecture",
    badge: "Frontend + Backend",
    description: "End-to-end web engineering from SSR React/Next.js interfaces to distributed Node.js & ASP.NET Core APIs.",
    skills: [
      { name: "Next.js & React", level: "Advanced", detail: "App Router, Server Components, SSR, ISR, Tailwind CSS" },
      { name: "Node.js & Express.js", level: "Advanced", detail: "REST APIs, Passport.js, Middleware Pipelines, Socket.io" },
      { name: "TypeScript & Monorepos", level: "Advanced", detail: "Turborepo workspaces, strict type schemas, shared packages" },
      { name: "ASP.NET Core", level: "Proficient", detail: "MVC, C# Web APIs, dependency injection, enterprise patterns" },
    ],
  },
  {
    category: "Systems, OOP & Core Languages",
    badge: "Low-Level & OOP",
    description: "Strong foundation in manual memory management, data structures, object-oriented design, and algorithmic efficiency.",
    skills: [
      { name: "C++ (STL & Memory)", level: "Advanced", detail: "Pointers, references, dynamic allocation, custom sorting & STL containers" },
      { name: "Java OOP", level: "Advanced", detail: "Polymorphism, inheritance hierarchies, interfaces, exception safety" },
      { name: "JavaScript (ES2024+)", level: "Expert", detail: "Async/Await, event loop internals, closures, DOM & Web APIs" },
      { name: "Algorithmic Modeling", level: "Proficient", detail: "Linear algebra matrices, statistical hypothesis testing, Bayes modeling" },
    ],
  },
  {
    category: "Databases, Caching & Security",
    badge: "Data & Infosec",
    description: "Relational normalization, NoSQL aggregation pipelines, in-memory caching, and hardened application security.",
    skills: [
      { name: "MySQL & Relational Design", level: "Advanced", detail: "1NF–3NF normalization, B-Tree indexing, complex JOIN optimization" },
      { name: "MongoDB & Redis", level: "Advanced", detail: "Aggregation pipelines, TTL cache invalidation, session stores" },
      { name: "OAuth 2.0 & JWT Security", level: "Advanced", detail: "HttpOnly cookies, CSRF/XSS mitigation, WAF rules, token rotation" },
      { name: "Streaming & DRM Architecture", level: "Proficient", detail: "Protected media pipelines, Widevine CDM concepts, signed manifests" },
    ],
  },
  {
    category: "Software Engineering & Modeling",
    badge: "System Design",
    description: "Structured engineering workflows, visual architecture specifications, and process maturity.",
    skills: [
      { name: "UML & ER Diagrams", level: "Advanced", detail: "Class, Sequence, Use-Case, and Entity-Relationship schema modeling" },
      { name: "Agile (Scrum & Kanban)", level: "Advanced", detail: "Sprint planning, iterative delivery, CI/CD Git workflows" },
      { name: "BPM & Process Design", level: "Proficient", detail: "Business process lifecycle modeling & operational optimization" },
      { name: "Creative Engineering", level: "Personal", detail: "Acoustic guitar chord progressions & mechanical wooden gear design" },
    ],
  },
];

export const ARCHITECTURE_BLUEPRINTS: ArchitectureBlueprint[] = [
  {
    id: "auth-security",
    title: "Zero-Trust OAuth 2.0 + HttpOnly JWT Flow",
    subtitle: "Hardened Authentication Architecture (Express.js + Passport + Redis)",
    summary:
      "Eliminates client-side token theft (XSS) by storing short-lived JWTs inside SameSite HttpOnly cookies while maintaining instantaneous revocation capabilities via a Redis token allowlist.",
    nodes: [
      {
        step: "01",
        layer: "Identity Provider",
        tech: "Google OAuth 2.0",
        detail: "User authenticates via PKCE-backed OAuth 2.0 consent flow; callback returns authorization code to backend.",
      },
      {
        step: "02",
        layer: "Auth Gateway",
        tech: "Express.js + Passport",
        detail: "Verifies provider profile, upserts user record, and generates a cryptographically signed JWT + Refresh Token pair.",
      },
      {
        step: "03",
        layer: "Transport Layer",
        tech: "HttpOnly + Secure Cookie",
        detail: "Tokens are attached via Set-Cookie with HttpOnly, Secure, and SameSite=Lax flags—inaccessible to browser JS.",
      },
      {
        step: "04",
        layer: "Session Cache",
        tech: "Redis TTL Store",
        detail: "Session fingerprint cached in Redis for sub-millisecond middleware verification and instant logout revocation.",
      },
    ],
    codeBlock: {
      filename: "middleware/authCookieGuard.ts",
      code: `export async function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies?.["__Host-access_token"];
  if (!token) return res.status(401).json({ error: "Missing session cookie" });

  const claims = verifyJwt(token, process.env.JWT_PUBLIC_KEY!);
  const isRevoked = await redis.get(\`revoked:\${claims.jti}\`);
  if (isRevoked) return res.status(403).json({ error: "Session revoked" });

  req.user = claims;
  return next();
}`,
    },
  },
  {
    id: "db-caching",
    title: "Normalized Relational + Redis Write-Through Cache",
    subtitle: "3NF MySQL Schema + MongoDB Document Store + Redis Layer",
    summary:
      "Combines ACID-compliant 3NF relational tables for transactional integrity with Redis read-aside/write-through caching to cut p99 query latency by over 80%.",
    nodes: [
      {
        step: "01",
        layer: "Query Router",
        tech: "API Service Layer",
        detail: "Computes deterministic cache key from normalized query parameters and checks Redis cluster first.",
      },
      {
        step: "02",
        layer: "In-Memory Hit",
        tech: "Redis Cache",
        detail: "Returns serialized payload in <1.5ms on cache hit; sliding TTL prevents stale hot-keys.",
      },
      {
        step: "03",
        layer: "3NF Relational Core",
        tech: "MySQL / Indexed Joins",
        detail: "On cache miss, executes B-Tree indexed query across normalized 3NF tables with zero transitive dependencies.",
      },
      {
        step: "04",
        layer: "Invalidation Hook",
        tech: "Write-Through Mutation",
        detail: "Any transactional write atomically updates the primary table and invalidates affected Redis keys.",
      },
    ],
    codeBlock: {
      filename: "lib/cache/withRedisCache.ts",
      code: `export async function getCachedQuery<T>(key: string, ttl: number, fetcher: () => Promise<T>): Promise<T> {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached) as T;

  const freshData = await fetcher();
  await redis.set(key, JSON.stringify(freshData), "EX", ttl);
  return freshData;
}`,
    },
  },
  {
    id: "realtime-streaming",
    title: "Protected Media Streaming & WebSocket Rooms",
    subtitle: "Turborepo Edge Delivery + Socket.io Multiplexing",
    summary:
      "Coordinates real-time room synchronization over Socket.io while enforcing signed, time-bound access controls on media stream segments.",
    nodes: [
      {
        step: "01",
        layer: "Client Handshake",
        tech: "Next.js + Socket.io Client",
        detail: "Establishes multiplexed WebSocket connection authenticated via handshake token.",
      },
      {
        step: "02",
        layer: "Room Coordinator",
        tech: "Node.js Room Broadcaster",
        detail: "Isolates events by room code; broadcasts state diffs and chat events with minimal serialization overhead.",
      },
      {
        step: "03",
        layer: "License & Manifest Guard",
        tech: "WAF + Token Signer",
        detail: "Validates client entitlements before issuing short-lived signed URLs for media segments.",
      },
      {
        step: "04",
        layer: "Playback Pipeline",
        tech: "Encrypted Media Extensions",
        detail: "Client buffers adaptive bitrate segments and synchronizes playback state across connected peers.",
      },
    ],
    codeBlock: {
      filename: "server/socketRoomController.ts",
      code: `io.use(authenticateSocketHandshake).on("connection", (socket) => {
  socket.on("room:join", ({ roomCode }) => {
    socket.join(roomCode);
    socket.to(roomCode).emit("peer:joined", { peerId: socket.id, timestamp: Date.now() });
  });
});`,
    },
  },
];
