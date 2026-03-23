import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const host = request.headers.get('host') || '';
  const protocol = request.headers.get('x-forwarded-proto') || 'https';

  // Always redirect to www.adl99.com.au with HTTPS
  const isNonWww = host === 'adl99.com.au';
  const isHttp = protocol === 'http';
  const shouldRedirect = isNonWww || isHttp;

  if (shouldRedirect) {
    const canonicalUrl = `https://www.adl99.com.au${pathname}${search}`;
    return NextResponse.redirect(canonicalUrl, {
      status: 301,
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  return NextResponse.next();
}

// Only run middleware on public routes
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (public files)
     * - API routes
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|api).*)',
  ],
};
