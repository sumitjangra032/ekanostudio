"use client";

import React from 'react';
import BlogLayout from '@/components/layout/BlogLayout';
import { SEO_DATA } from '@/data/blogs/how-to-do-search-engine-optimization';

export default function SEOMasterclassPage() {
  return (
    <BlogLayout
      title={SEO_DATA.title}
      subtitle={SEO_DATA.subtitle}
      tocItems={SEO_DATA.tocItems}
    >
      {SEO_DATA.content}
    </BlogLayout>
  );
}
