// Paths that exist only to count where a link was shared. Each one serves a
// real page under its own URL, so Vercel Analytics gives it its own row in the
// Pages panel. Key is the URL that gets shared, value is the page it stands in
// for. Articles are handled by the /resume/<slug> rule below.
const TRACKING_PATHS: Record<string, string> = {
  '/resume': '/',
  '/netflix': '/portfolio',
};

const normalize = (pathname: string): string => pathname.replace(/\/$/, '') || '/';

// The page a path stands in for, or the path itself when it is already real.
// Used for the canonical tag and for header state, so a tracking path behaves
// like the page it serves.
export const realPath = (pathname: string): string => {
  const path = normalize(pathname);

  if (TRACKING_PATHS[path]) return TRACKING_PATHS[path];
  if (path.startsWith('/resume/')) return `/noises-of-ai/${path.slice('/resume/'.length)}`;

  return path;
};

export const isTrackingPath = (pathname: string): boolean =>
  realPath(pathname) !== normalize(pathname);
