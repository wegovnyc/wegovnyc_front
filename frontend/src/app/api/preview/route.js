import { draftMode, cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    const slug = searchParams.get('slug');
    const previewSecret = process.env.PREVIEW_SECRET || 'test-secret';

    // 1. Validate Secret
    if (secret !== previewSecret) {
        return new Response('Invalid token', { status: 401 });
    }

    // 2. Validate Slug
    if (!slug) {
        return new Response('Missing slug', { status: 400 });
    }

    // 3. Enable Draft Mode
    const draft = await draftMode();
    draft.enable();

    // 4. Get the bypass cookie value that Next.js just set
    const cookieStore = await cookies();
    const bypassCookie = cookieStore.get('__prerender_bypass');

    // 5. Redirect to the actual page
    const response = NextResponse.redirect(new URL(slug, request.url));

    // 6. Re-set the cookie with cross-site compatible attributes
    if (bypassCookie?.value) {
        response.cookies.set('__prerender_bypass', bypassCookie.value, {
            httpOnly: true,
            sameSite: 'none',
            secure: true,
            path: '/',
        });
    }

    return response;
}
