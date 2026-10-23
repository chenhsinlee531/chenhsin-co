// Paths that exist only to count where a link was shared. Each one serves a
// real page under its own URL, so Vercel Analytics gives it its own row in the
// Pages panel. One prefix per place a link goes out: /resume on the resume,
// /linkedin in the LinkedIn featured section, /netflix with that application.
const PAGE_ALIASES: Record<string, string> = {
  '/resume': '/',
  '/linkedin': '/',
  '/netflix': '/portfolio',
};

// Prefixes where <prefix>/<slug> serves that article.
const ARTICLE_PREFIXES = ['/resume', '/linkedin'];

// Short spellings for articles whose slug is awkward to print on a resume. The
// article routes redirect them to the full slug, so both count as one row.
export const ARTICLE_ALIASES: Record<string, string> = {
  'meeting-ai': 'designing-ai-assistant-meeting-follow-up',
  delegation: 'designing-delegation-six-step-framework',
};

const normalize = (pathname: string): string => pathname.replace(/\/$/, '') || '/';

// The page a path stands in for, or the path itself when it is already real.
// Used for the canonical tag and for header state, so a tracking path behaves
// like the page it serves.
export const realPath = (pathname: string): string => {
  const path = normalize(pathname);

  if (PAGE_ALIASES[path]) return PAGE_ALIASES[path];

  const prefix = ARTICLE_PREFIXES.find((p) => path.startsWith(`${p}/`));
  if (prefix) return `/noises-of-ai/${path.slice(prefix.length + 1)}`;

  return path;
};

export const isTrackingPath = (pathname: string): boolean =>
  realPath(pathname) !== normalize(pathname);
