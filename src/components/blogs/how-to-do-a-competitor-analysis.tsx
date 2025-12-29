"use client";

import React from 'react';
import BlogLayout from '@/components/layout/BlogLayout';
import { COMPETITOR_ANALYSIS_DATA } from '@/data/blogs/how-to-do-a-competitor-analysis';

export default function CompetitorAnalysisPage() {
  return (
    <BlogLayout
      title={COMPETITOR_ANALYSIS_DATA.title}
      subtitle={COMPETITOR_ANALYSIS_DATA.subtitle}
      tocItems={COMPETITOR_ANALYSIS_DATA.tocItems}
    >
      {COMPETITOR_ANALYSIS_DATA.content}
    </BlogLayout>
  );
}
