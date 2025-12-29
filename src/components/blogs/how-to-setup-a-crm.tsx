"use client";

import React from 'react';
import BlogLayout from '@/components/layout/BlogLayout';
import { CRM_SETUP_DATA } from '@/data/blogs/how-to-setup-a-crm';

export default function CrmImplementationMasterclassPage() {
  return (
    <BlogLayout
      title={CRM_SETUP_DATA.title}
      subtitle={CRM_SETUP_DATA.subtitle}
      tocItems={CRM_SETUP_DATA.tocItems}
    >
      {CRM_SETUP_DATA.content}
    </BlogLayout>
  );
}
