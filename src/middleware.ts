import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const host = request.headers.get('host') || '';
  const protocol = request.headers.get('x-forwarded-proto') || 'https';

  // Redirect HTTP to HTTPS
  if (protocol === 'http') {
    const httpsUrl = `https://${host}${pathname}${search}`;
    return NextResponse.redirect(httpsUrl, 301);
  }

  // Redirect non-www to www (only for production domain)
  if (host === 'adl99.com.au') {
    const wwwUrl = `https://www.adl99.com.au${pathname}${search}`;
    return NextResponse.redirect(wwwUrl, 301);
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
