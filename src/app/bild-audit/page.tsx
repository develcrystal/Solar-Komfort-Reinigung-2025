import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

export const metadata: Metadata = {
    title: 'Bild Audit Abschlussbericht',
    description: 'Finaler Abschlussbericht des Bild Audits für Solar Komfort GmbH',
};

export default async function BildAuditPage() {
    const filePath = path.join(process.cwd(), 'BILD_AUDIT_FINAL.md');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { content } = matter(fileContent);
    const processedContent = await remark().use(html).process(content);
    const htmlContent = processedContent.toString();
    return (
        <section className="prose dark:prose-invert mx-auto p-8">
            <h1>Bild Audit Abschlussbericht</h1>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </section>
    );
}
