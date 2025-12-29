"use client";

import React from 'react';
import BlogLayout from '@/components/layout/BlogLayout';
import { EMAIL_MARKETING_DATA } from '@/data/blogs/how-to-start-email-marketing';

export default function EmailMarketingMasterclassPage() {
  return (
    <BlogLayout
      title={EMAIL_MARKETING_DATA.title}
      subtitle={EMAIL_MARKETING_DATA.subtitle}
      tocItems={EMAIL_MARKETING_DATA.tocItems}
    >
      {EMAIL_MARKETING_DATA.content}
    </BlogLayout>
  );
}