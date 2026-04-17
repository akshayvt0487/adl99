"use client";

import React, { useEffect, useState } from 'react';
import { Shield, AlertTriangle, CheckCircle2, Info, Zap, Lock, Users, FileCheck, Server, Database, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface BlogContentProps {
  content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  const [enhancedContent, setEnhancedContent] = useState('');

  useEffect(() => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    // Process headings
    const h2Elements = tempDiv.querySelectorAll('h2');
    h2Elements.forEach((h2, index) => {
      h2.className = 'text-3xl md:text-4xl font-bold text-foreground mt-16 mb-6 first:mt-0 scroll-mt-24';
      h2.id = `section-${index}`;

      // Add decorative element before h2
      const decorator = document.createElement('div');
      decorator.className = 'flex items-center gap-4 mb-6';
      decorator.innerHTML = `
        <div class="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
        <div class="h-2 w-2 rounded-full bg-primary/50"></div>
      `;
      h2.parentElement?.insertBefore(decorator, h2);

      // Add contextual decorative images after certain sections
      const h2Text = h2.textContent?.toLowerCase() || '';
      if ((h2Text.includes('checklist') || h2Text.includes('controls')) && index === 1) {
        const imageBox = document.createElement('div');
        imageBox.className = 'my-12 rounded-2xl overflow-hidden border border-border shadow-lg';
        imageBox.innerHTML = `
          <div class="relative h-64 md:h-80 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center p-8">
            <div class="grid grid-cols-3 gap-6 w-full max-w-md">
              <div class="flex flex-col items-center gap-2">
                <div class="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <span class="text-xs font-medium text-primary">MFA</span>
              </div>
              <div class="flex flex-col items-center gap-2">
                <div class="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <span class="text-xs font-medium text-primary">Patching</span>
              </div>
              <div class="flex flex-col items-center gap-2">
                <div class="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                  </svg>
                </div>
                <span class="text-xs font-medium text-primary">Access Control</span>
              </div>
            </div>
          </div>
        `;
        h2.parentElement?.insertBefore(imageBox, h2.nextSibling);
      }

      // Add security shield infographic for implementation sections
      if (h2Text.includes('implement') || h2Text.includes('protect')) {
        const shieldBox = document.createElement('div');
        shieldBox.className = 'my-12 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 p-12';
        shieldBox.innerHTML = `
          <div class="flex items-center justify-center">
            <svg class="w-48 h-48 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
        `;
        const nextSibling = h2.nextSibling;
        if (nextSibling && index > 2) {
          h2.parentElement?.insertBefore(shieldBox, nextSibling);
        }
      }

      // Add inline CTA after every 3rd h2
      if ((index + 1) % 3 === 0) {
        const ctaCard = document.createElement('div');
        ctaCard.className = 'my-12 bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-2xl p-8 relative overflow-hidden';
        ctaCard.innerHTML = `
          <div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div class="relative z-10">
            <h3 class="text-xl font-bold text-foreground mb-2">Need Help Implementing This?</h3>
            <p class="text-sm text-muted-foreground mb-4">Our team at ADL99 can assess your current security posture and create a customized implementation plan.</p>
            <a href="/contact" class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-semibold shadow-sm">
              Get Free Assessment
            </a>
          </div>
        `;
        h2.parentElement?.insertBefore(ctaCard, h2.nextSibling);
      }
    });

    const h3Elements = tempDiv.querySelectorAll('h3');
    h3Elements.forEach((h3, index) => {
      h3.className = 'text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3 scroll-mt-24';
      h3.id = `subsection-${index}`;

      // Add icon before h3
      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0';
      iconWrapper.innerHTML = '<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
      h3.prepend(iconWrapper);

      // Wrap h3 content after certain patterns and add feature cards
      if (h3.textContent?.includes('What it is:') || h3.textContent?.includes('Why it matters') || h3.textContent?.includes('How to implement')) {
        // Create a card wrapper for the subsection
        let nextElement = h3.nextElementSibling;
        const cardContent: Element[] = [];

        while (nextElement && nextElement.tagName !== 'H3' && nextElement.tagName !== 'H2') {
          cardContent.push(nextElement);
          nextElement = nextElement.nextElementSibling;
        }

        if (cardContent.length > 0) {
          const card = document.createElement('div');
          card.className = 'bg-card border border-border rounded-xl p-6 my-6 hover:border-primary/50 transition-colors';
          cardContent.forEach(el => card.appendChild(el));
          h3.parentElement?.insertBefore(card, h3.nextSibling);
        }
      }
    });

    // Process paragraphs
    const pElements = tempDiv.querySelectorAll('p');
    pElements.forEach((p) => {
      if (p.innerHTML.startsWith('<strong>')) {
        p.className = 'text-base text-muted-foreground leading-relaxed mb-4 pl-6 border-l-2 border-primary/30 bg-primary/5 py-3 rounded-r';
      } else if (p.textContent?.includes('Real example:')) {
        p.className = 'text-sm text-muted-foreground leading-relaxed mb-4 p-4 bg-amber-500/10 border-l-4 border-amber-500 rounded-r italic';
      } else {
        p.className = 'text-base text-muted-foreground leading-relaxed mb-4';
      }
    });

    // Add visual stats/metrics boxes after TL;DR or summary sections
    const allParagraphs = tempDiv.querySelectorAll('p');
    allParagraphs.forEach((p) => {
      const text = p.textContent || '';
      // Look for statistics or monetary values in the text
      if ((text.includes('$') && text.includes(',')) || (text.includes('%') && text.match(/\d+%/))) {
        // Check if this paragraph contains significant stats
        const hasStats = text.match(/\$[\d,]+/) || text.match(/\d+%/);
        if (hasStats && !p.closest('.stats-highlight')) {
          const statsBox = document.createElement('div');
          statsBox.className = 'stats-highlight my-8 grid grid-cols-1 md:grid-cols-3 gap-4';

          // Extract stats from text
          const moneyMatch = text.match(/\$([\d,]+)/);
          const percentMatch = text.match(/(\d+)%/);

          if (moneyMatch || percentMatch) {
            statsBox.innerHTML = `
              <div class="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-xl p-6 text-center">
                <div class="text-3xl font-bold text-red-600 mb-2">${moneyMatch ? '$' + moneyMatch[1] : '82 days'}</div>
                <div class="text-sm text-muted-foreground">${moneyMatch ? 'Average Breach Cost' : 'Average Dwell Time'}</div>
              </div>
              <div class="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 rounded-xl p-6 text-center">
                <div class="text-3xl font-bold text-amber-600 mb-2">${percentMatch ? percentMatch[0] : '15%'}</div>
                <div class="text-sm text-muted-foreground">Increase in Attacks</div>
              </div>
              <div class="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 text-center">
                <div class="text-3xl font-bold text-primary mb-2">72hrs</div>
                <div class="text-sm text-muted-foreground">Breach Notification Deadline</div>
              </div>
            `;

            // Insert after the parent section, but only once
            const parentH2 = p.closest('section') || p.parentElement;
            if (parentH2 && !parentH2.querySelector('.stats-highlight')) {
              p.parentElement?.insertBefore(statsBox, p.nextSibling);
            }
          }
        }
      }
    });

    // Process lists with icons
    const ulElements = tempDiv.querySelectorAll('ul');
    ulElements.forEach((ul) => {
      const liElements = ul.querySelectorAll('li');

      // Check if this is a simple list (like "The eight controls are:")
      const previousElement = ul.previousElementSibling;
      const previousText = previousElement?.textContent?.toLowerCase() || '';
      const isSimpleList = previousText.includes('controls are:') ||
                          previousText.includes('include:') ||
                          previousText.includes('following:') ||
                          liElements.length > 0 && !liElements[0].querySelector('strong') &&
                          liElements[0].textContent!.length < 50;

      if (isSimpleList) {
        // Simple bullet list styling
        ul.className = 'list-disc list-inside space-y-2 my-4 ml-4';
        liElements.forEach((li) => {
          li.className = 'text-muted-foreground';
        });
      } else {
        // Card-based list styling
        ul.className = 'space-y-3 my-6';

        // Check if this is a numbered list in content
        const isNumberedInContent = liElements[0]?.textContent?.match(/^\d+\)/);

        liElements.forEach((li, index) => {
          // Check if this list item contains strong tags in the middle (like TL;DR items)
          const hasInlineStrong = li.querySelector('strong') && li.childNodes.length > 1;

          if (hasInlineStrong) {
            // Flex layout for TL;DR items with inline formatting, but keep text together
            li.className = 'flex items-start gap-3 text-muted-foreground bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors';

            // Add checkmark icon
            const iconWrapper = document.createElement('div');
            iconWrapper.className = 'mt-1 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10';
            iconWrapper.innerHTML = '<svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';

            // Wrap the content in a flex-1 div to keep it together
            const contentWrapper = document.createElement('div');
            contentWrapper.className = 'flex-1';
            while (li.firstChild) {
              contentWrapper.appendChild(li.firstChild);
            }

            li.appendChild(iconWrapper);
            li.appendChild(contentWrapper);
          } else {
            // Flex layout for regular list items
            li.className = 'flex items-start gap-3 text-muted-foreground bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors';

            // Add icon
            const iconWrapper = document.createElement('div');
            iconWrapper.className = 'mt-1 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10';

            if (isNumberedInContent) {
              iconWrapper.innerHTML = `<span class="text-xs font-bold text-primary">${index + 1}</span>`;
            } else {
              iconWrapper.innerHTML = '<svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
            }

            li.prepend(iconWrapper);
          }
        });
      }
    });

    // Process blockquotes - make them CTA style
    const blockquotes = tempDiv.querySelectorAll('blockquote');
    blockquotes.forEach((blockquote) => {
      // Get the text content
      const text = blockquote.textContent?.trim() || '';

      // Convert blockquote to CTA card
      blockquote.className = 'my-8 bg-gradient-to-r from-primary to-primary/90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow';

      // Clear existing content and rebuild as CTA
      blockquote.innerHTML = `
        <a href="/contact" class="flex items-center justify-between group">
          <div class="flex-1">
            <p class="text-lg font-semibold text-primary-foreground mb-0">${text}</p>
          </div>
          <div class="ml-4 flex items-center gap-2">
            <span class="px-4 py-2 bg-white/20 text-primary-foreground rounded-lg font-medium text-sm group-hover:bg-white/30 transition-colors">
              Book Now
            </span>
            <svg class="w-5 h-5 text-primary-foreground group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </a>
      `;
    });

    // Add info boxes for "Common gap" sections
    const allParas = tempDiv.querySelectorAll('p');
    allParas.forEach((p) => {
      const text = p.textContent || '';
      if (text.toLowerCase().includes('common gap:')) {
        // Wrap the paragraph in a warning box with light orange background
        const wrapper = document.createElement('div');
        wrapper.className = 'my-6 bg-orange-50 border border-orange-200 rounded-xl p-5 flex items-start gap-3';
        wrapper.innerHTML = `
          <div class="flex-shrink-0 mt-0.5">
            <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>
          <div class="flex-1">
            ${p.innerHTML}
          </div>
        `;
        p.parentElement?.replaceChild(wrapper, p);
      }
    });

    // Process strong text
    const strongElements = tempDiv.querySelectorAll('strong');
    strongElements.forEach((strong) => {
      strong.className = 'font-semibold text-foreground';
    });

    // Process links
    const aElements = tempDiv.querySelectorAll('a');
    aElements.forEach((a) => {
      a.className = 'text-primary hover:underline font-medium inline-flex items-center gap-1 group';
      // Add arrow icon to internal links
      if (a.getAttribute('href')?.startsWith('/')) {
        const arrow = document.createElement('svg');
        arrow.setAttribute('class', 'w-4 h-4 group-hover:translate-x-1 transition-transform');
        arrow.setAttribute('fill', 'none');
        arrow.setAttribute('stroke', 'currentColor');
        arrow.setAttribute('viewBox', '0 0 24 24');
        arrow.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>';
        a.appendChild(arrow);
      }
    });

    setEnhancedContent(tempDiv.innerHTML);
  }, [content]);

  if (!enhancedContent) {
    return (
      <div className="animate-pulse space-y-8">
        <div className="h-8 bg-muted rounded w-3/4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-muted rounded"></div>
          <div className="h-4 bg-muted rounded"></div>
          <div className="h-4 bg-muted rounded w-5/6"></div>
        </div>
        <div className="h-48 bg-muted rounded-xl"></div>
        <div className="space-y-3">
          <div className="h-4 bg-muted rounded"></div>
          <div className="h-4 bg-muted rounded w-4/5"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-content">
      <div dangerouslySetInnerHTML={{ __html: enhancedContent }} />

      {/* Bottom CTA */}
      <div className="mt-16 bg-gradient-to-br from-primary via-primary/95 to-primary/80 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Implement These Security Controls?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free security assessment and personalized implementation roadmap from our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors font-semibold shadow-lg"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services/cyber-maturity"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold backdrop-blur-sm"
            >
              Learn About Assessments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
