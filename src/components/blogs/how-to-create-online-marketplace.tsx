"use client";

import React from 'react';
import BlogLayout from '@/components/layout/BlogLayout';
import { ONLINE_MARKETPLACE_DATA } from '@/data/blogs/how-to-create-online-marketplace';

export default function OnlineMarketplacePage() {
  return (
    <BlogLayout
      title={ONLINE_MARKETPLACE_DATA.title}
      subtitle={ONLINE_MARKETPLACE_DATA.subtitle}
      tocItems={ONLINE_MARKETPLACE_DATA.tocItems}
    >
      {ONLINE_MARKETPLACE_DATA.content}
    </BlogLayout>
  );
}
