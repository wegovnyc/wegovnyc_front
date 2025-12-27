import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { fetchAPI } from '@/lib/api';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    const slug = searchParams.get('slug');
    const type = searchParams.get('type');

    // Check the secret and next parameters
    // In production, you would store this secret in an environment variable like PREVIEW_SECRET
    // For this demo, we'll hardcode a simple secret or check env
    const previewSecret = process.env.PREVIEW_SECRET || 'wegov-preview-secret';

    if (secret !== previewSecret) {
        return new Response('Invalid token', { status: 401 });
    }

    // Determine path based on content type
    let path = '/';
    if (type === 'api::page.page') {
        path = slug === 'home' ? '/' : `/${slug}`;
    } else if (type === 'api::article.article') {
        path = `/articles/${slug}`;
    }

    // Enable Draft Mode by setting the cookie
    (await draftMode()).enable();

    // Redirect to the path from the fetched post
    // We don't verify the slug exists here to save an API call, but you could.
    redirect(path);
}
