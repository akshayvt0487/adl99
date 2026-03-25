import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Virtual CISO (vCISO) Services for Melbourne & Australian Businesses - ADL99'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #a78bfa 100%)',
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
              background: '#8b5cf6',
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
                d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" />
              <path
                d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
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
                color: '#e9d5ff',
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
              fontSize: '72px',
              fontWeight: '700',
              color: 'white',
              lineHeight: '1.1',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            Virtual CISO Services
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#f3e8ff',
              margin: 0,
              lineHeight: '1.4',
            }}
          >
            Executive security leadership without the executive price tag
          </p>
        </div>

        {/* Footer with benefits */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(139, 92, 246, 0.2)',
              padding: '10px 18px',
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '20px', color: '#f3e8ff', fontWeight: '600' }}>
              Strategic Oversight
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(139, 92, 246, 0.2)',
              padding: '10px 18px',
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '20px', color: '#f3e8ff', fontWeight: '600' }}>
              Board Reporting
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(139, 92, 246, 0.2)',
              padding: '10px 18px',
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '20px', color: '#f3e8ff', fontWeight: '600' }}>
              Governance
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(139, 92, 246, 0.2)',
              padding: '10px 18px',
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '20px', color: '#f3e8ff', fontWeight: '600' }}>
              Melbourne Based
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
