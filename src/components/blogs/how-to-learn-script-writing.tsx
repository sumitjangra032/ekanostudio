"use client";

import React from 'react';
import BlogLayout from '@/components/layout/BlogLayout';
import { SCRIPTWRITING_DATA } from '@/data/blogs/how-to-learn-script-writing';

export default function ScreenwritingMasterclassPage() {
  return (
    <BlogLayout
      title={SCRIPTWRITING_DATA.title}
      subtitle={SCRIPTWRITING_DATA.subtitle}
      tocItems={SCRIPTWRITING_DATA.tocItems}
    >
      {SCRIPTWRITING_DATA.content}
    </BlogLayout>
  );
}
