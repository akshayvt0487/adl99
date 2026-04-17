"use client";

import React, { useEffect, useState } from 'react';

interface BlogContentProps {
  content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  const [enhancedContent, setEnhancedContent] = useState('');

  useEffect(() => {
    // Parse the HTML content and enhance it with components
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    // Process headings
    const h2Elements = tempDiv.querySelectorAll('h2');
    h2Elements.forEach((h2) => {
      h2.className = 'text-3xl md:text-4xl font-bold text-foreground mt-16 mb-6 first:mt-0';
    });

    const h3Elements = tempDiv.querySelectorAll('h3');
    h3Elements.forEach((h3) => {
      h3.className = 'text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 flex items-center gap-3';
      // Add an icon before h3
      const icon = document.createElement('span');
      icon.innerHTML = '<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
      h3.prepend(icon);
    });

    // Process paragraphs
    const pElements = tempDiv.querySelectorAll('p');
    pElements.forEach((p) => {
      // Check if paragraph starts with bold text (like "What it is:")
      if (p.innerHTML.startsWith('<strong>')) {
        p.className = 'text-base text-muted-foreground leading-relaxed mb-4 pl-6 border-l-2 border-primary/20';
      } else {
        p.className = 'text-base text-muted-foreground leading-relaxed mb-4';
      }
    });

    // Process lists
    const ulElements = tempDiv.querySelectorAll('ul');
    ulElements.forEach((ul) => {
      ul.className = 'space-y-3 my-6';
      const liElements = ul.querySelectorAll('li');
      liElements.forEach((li) => {
        li.className = 'flex items-start gap-3 text-muted-foreground';
        // Add checkmark icon
        const icon = document.createElement('span');
        icon.className = 'mt-1 flex-shrink-0';
        icon.innerHTML = '<svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
        li.prepend(icon);
      });
    });

    // Process blockquotes (for important notes)
    const blockquotes = tempDiv.querySelectorAll('blockquote');
    blockquotes.forEach((blockquote) => {
      blockquote.className = 'bg-primary/5 border-l-4 border-primary rounded-r-lg p-6 my-8 relative';
      // Add quote icon
      const icon = document.createElement('div');
      icon.className = 'absolute top-4 right-4 text-primary/20';
      icon.innerHTML = '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>';
      blockquote.prepend(icon);

      const pInBlockquote = blockquote.querySelectorAll('p');
      pInBlockquote.forEach((p) => {
        p.className = 'text-sm font-medium text-foreground mb-0';
      });
    });

    // Process strong text
    const strongElements = tempDiv.querySelectorAll('strong');
    strongElements.forEach((strong) => {
      strong.className = 'font-semibold text-foreground';
    });

    // Process links
    const aElements = tempDiv.querySelectorAll('a');
    aElements.forEach((a) => {
      a.className = 'text-primary hover:underline font-medium';
    });

    setEnhancedContent(tempDiv.innerHTML);
  }, [content]);

  if (!enhancedContent) {
    return <div className="animate-pulse space-y-4">
      <div className="h-8 bg-muted rounded w-3/4"></div>
      <div className="h-4 bg-muted rounded"></div>
      <div className="h-4 bg-muted rounded"></div>
      <div className="h-4 bg-muted rounded w-5/6"></div>
    </div>;
  }

  return (
    <div
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: enhancedContent }}
    />
  );
};

export default BlogContent;
