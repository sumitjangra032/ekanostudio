"use client";

import React from 'react';
import BlogLayout from '@/components/layout/BlogLayout';
import { API_INTEGRATIONS_DATA } from '@/data/blogs/how-api-integrations-work';

export default function ApiIntegrationsPage() {
  return (
    <BlogLayout
      title={API_INTEGRATIONS_DATA.title}
      subtitle={API_INTEGRATIONS_DATA.subtitle}
      tocItems={API_INTEGRATIONS_DATA.tocItems}
    >
      {API_INTEGRATIONS_DATA.content}
    </BlogLayout>
  );
}