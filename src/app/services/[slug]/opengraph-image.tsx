import { ImageResponse } from 'next/og'

// Service-specific OG image configurations
const serviceConfigs: Record<string, {
  title: string
  description: string
  gradient: string
  tags: string[]
}> = {
  'cyber-maturity': {
    title: 'Cyber Maturity Assessment',
    description: 'Comprehensive security assessments against NIST, ISO 27001 & Essential Eight',
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0369a1 100%)',
    tags: ['NIST Framework', 'ISO 27001', 'Essential Eight', 'Melbourne Based'],
  },
  'vciso': {
    title: 'Virtual CISO Services',
    description: 'Executive security leadership without the executive price tag',
    gradient: 'linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #a78bfa 100%)',
    tags: ['Strategic Oversight', 'Board Reporting', 'Governance', 'Melbourne Based'],
  },
  'cyber-awareness': {
    title: 'Build a Human Firewall',
    description: 'Cyber awareness training for Melbourne businesses & Australian workplaces',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%)',
    tags: ['Phishing Simulations', 'Interactive Workshops', 'Staff Training', 'Melbourne Based'],
  },
  'technical-advisory': {
    title: 'Expert Security Guidance',
    description: 'Navigate complex cybersecurity decisions with Melbourne\'s experienced security advisors',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
    tags: ['Architecture Reviews', 'Policy Development', 'Compliance', 'Melbourne Based'],
  },
  'engineering-support': {
    title: 'Technical Security Implementation',
    description: 'Hands-on cybersecurity engineering from Melbourne\'s expert team',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #6d28d9 50%, #8b5cf6 100%)',
    tags: ['Network Defence', 'Cloud Security', 'SIEM Deployment', 'Melbourne Based'],
  },
}

export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Image({ params }: Props) {
  const { slug } = await params

  // Get config for this service or use default
  const config = serviceConfigs[slug] || {
    title: 'Cybersecurity Services',
    description: 'Professional cybersecurity solutions for Australian businesses',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    tags: ['Melbourne Based', 'Australian Businesses'],
  }

  const tagColor = slug === 'cyber-maturity' ? '#e0f2fe' :
                   slug === 'vciso' ? '#f3e8ff' :
                   slug === 'cyber-awareness' ? '#d1fae5' :
                   slug === 'technical-advisory' ? '#dbeafe' :
                   slug === 'engineering-support' ? '#ede9fe' :
                   '#cbd5e1'

  const iconColor = slug === 'cyber-maturity' ? '#0ea5e9' :
                    slug === 'vciso' ? '#8b5cf6' :
                    slug === 'cyber-awareness' ? '#10b981' :
                    slug === 'technical-advisory' ? '#3b82f6' :
                    slug === 'engineering-support' ? '#7c3aed' :
                    '#3b82f6'

  return new ImageResponse(
    (
      <div
        style={{
          background: config.gradient,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Header with logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '60px',
              height: '60px',
              background: iconColor,
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px',
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '42px',
                fontWeight: '700',
                color: 'white',
                letterSpacing: '-0.02em',
              }}
            >
              ADL99
            </span>
            <span
              style={{
                fontSize: '18px',
                color: tagColor,
                marginTop: '-8px',
              }}
            >
              Cybersecurity
            </span>
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            maxWidth: '900px',
          }}
        >
          <h1
            style={{
              fontSize: config.title.length > 30 ? '64px' : '68px',
              fontWeight: '700',
              color: 'white',
              lineHeight: '1.1',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            {config.title}
          </h1>
          <p
            style={{
              fontSize: '30px',
              color: tagColor,
              margin: 0,
              lineHeight: '1.4',
            }}
          >
            {config.description}
          </p>
        </div>

        {/* Footer with tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            width: '100%',
          }}
        >
          {config.tags.map((tag, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                background: `rgba(${
                  slug === 'cyber-maturity' ? '14, 165, 233' :
                  slug === 'vciso' ? '139, 92, 246' :
                  slug === 'cyber-awareness' ? '16, 185, 129' :
                  slug === 'technical-advisory' ? '59, 130, 246' :
                  slug === 'engineering-support' ? '124, 58, 237' :
                  '59, 130, 246'
                }, 0.2)`,
                padding: '10px 18px',
                borderRadius: '8px',
              }}
            >
              <span style={{ fontSize: '20px', color: tagColor, fontWeight: '600' }}>
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

export async function generateStaticParams() {
  return [
    { slug: 'cyber-maturity' },
    { slug: 'vciso' },
    { slug: 'cyber-awareness' },
    { slug: 'technical-advisory' },
    { slug: 'engineering-support' },
  ]
}
