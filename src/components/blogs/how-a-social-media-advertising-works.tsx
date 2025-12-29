"use client";

import React from 'react';
import BlogLayout from '@/components/layout/BlogLayout';
import { PAID_SOCIAL_DATA } from '@/data/blogs/how-a-social-media-advertising-works';

export default function PaidSocialMasterclassPage() {
  return (
    <BlogLayout
      title={PAID_SOCIAL_DATA.title}
      subtitle={PAID_SOCIAL_DATA.subtitle}
      tocItems={PAID_SOCIAL_DATA.tocItems}
    >
      {PAID_SOCIAL_DATA.content}
    </BlogLayout>
  );
}