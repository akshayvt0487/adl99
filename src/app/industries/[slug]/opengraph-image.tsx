import { ImageResponse } from 'next/og'

// Industry-specific OG image configurations
const industryConfigs: Record<string, {
  title: string
  description: string
  gradient: string
  tags: string[]
}> = {
  'law-firms': {
    title: 'Cybersecurity for Australian Law Firms',
    description: 'Protecting attorney-client privilege from boutique practices to major partnerships',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)',
    tags: ['Client Confidentiality', 'Privacy Act Compliance', 'Melbourne Based'],
  },
  'health-clinics': {
    title: 'Cybersecurity for Australian Health Clinics',
    description: 'Privacy Act-compliant security for medical practices & allied health providers',
    gradient: 'linear-gradient(135deg, #be123c 0%, #e11d48 50%, #f43f5e 100%)',
    tags: ['Patient Data Protection', 'Privacy Act Compliance', 'Melbourne Based'],
  },
  'accounting': {
    title: 'Cybersecurity for Accounting Practices',
    description: 'Protect client financial data and meet TPB & Privacy Act compliance',
    gradient: 'linear-gradient(135deg, #065f46 0%, #047857 50%, #059669 100%)',
    tags: ['Financial Data Security', 'TPB Compliance', 'Melbourne Based'],
  },
  'retail': {
    title: 'Cybersecurity for Retail Chains',
    description: 'Secure your POS systems and achieve PCI DSS compliance',
    gradient: 'linear-gradient(135deg, #c026d3 0%, #d946ef 50%, #e879f9 100%)',
    tags: ['POS Security', 'PCI DSS Compliance', 'Melbourne Based'],
  },
  'manufacturing': {
    title: 'Cybersecurity for Manufacturing',
    description: 'Specialist OT/IT cybersecurity for Australian manufacturers',
    gradient: 'linear-gradient(135deg, #713f12 0%, #92400e 50%, #b45309 100%)',
    tags: ['OT/IT Security', 'ICS Protection', 'IP Protection', 'Melbourne Based'],
  },
  'research': {
    title: 'Cybersecurity for Research Organisations',
    description: 'Defend research IP from nation-state threats & meet DISP requirements',
    gradient: 'linear-gradient(135deg, #4338ca 0%, #6366f1 50%, #818cf8 100%)',
    tags: ['IP Protection', 'DISP Compliance', 'Export Control', 'Melbourne Based'],
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

  // Get config for this industry or use default
  const config = industryConfigs[slug] || {
    title: 'Industry Cybersecurity Solutions',
    description: 'Tailored security for Australian businesses',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    tags: ['Melbourne Based', 'Australian Businesses'],
  }

  const tagColor = slug === 'law-firms' ? '#dbeafe' :
                   slug === 'health-clinics' ? '#ffe4e6' :
                   slug === 'accounting' ? '#d1fae5' :
                   slug === 'retail' ? '#fae8ff' :
                   slug === 'manufacturing' ? '#fed7aa' :
                   slug === 'research' ? '#e0e7ff' :
                   '#cbd5e1'

  const iconColor = slug === 'law-firms' ? '#3b82f6' :
                    slug === 'health-clinics' ? '#f43f5e' :
                    slug === 'accounting' ? '#10b981' :
                    slug === 'retail' ? '#d946ef' :
                    slug === 'manufacturing' ? '#f59e0b' :
                    slug === 'research' ? '#6366f1' :
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
              Industry Solutions
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
              fontSize: config.title.length > 40 ? '64px' : '68px',
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
                  slug === 'law-firms' ? '59, 130, 246' :
                  slug === 'health-clinics' ? '244, 63, 94' :
                  slug === 'accounting' ? '16, 185, 129' :
                  slug === 'retail' ? '217, 70, 239' :
                  slug === 'manufacturing' ? '245, 158, 11' :
                  slug === 'research' ? '99, 102, 241' :
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
    { slug: 'law-firms' },
    { slug: 'health-clinics' },
    { slug: 'accounting' },
    { slug: 'retail' },
    { slug: 'manufacturing' },
    { slug: 'research' },
  ]
}
