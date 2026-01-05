import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

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

    // 4. Redirect to the actual page
    redirect(slug);
}
