"use client";

import React from 'react';
import BlogLayout from '@/components/layout/BlogLayout';
import { BRAND_IDENTITY_DATA } from '@/data/blogs/how-to-build-a-brand-identity';

export default function BrandIdentityPage() {
  return (
    <BlogLayout
      title={BRAND_IDENTITY_DATA.title}
      subtitle={BRAND_IDENTITY_DATA.subtitle}
      tocItems={BRAND_IDENTITY_DATA.tocItems}
    >
      {BRAND_IDENTITY_DATA.content}
    </BlogLayout>
  );
}