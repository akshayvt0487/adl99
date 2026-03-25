import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Cybersecurity Services for Melbourne & Australian Businesses - ADL99'
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
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
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
              background: '#3b82f6',
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
                color: '#94a3b8',
                marginTop: '-8px',
              }}
            >
              Cybersecurity Services
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
            Cybersecurity Services
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#cbd5e1',
              margin: 0,
              lineHeight: '1.4',
            }}
          >
            Melbourne-based ADL99 provides practical cybersecurity services for Australian businesses
          </p>
        </div>

        {/* Footer with service highlights */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(59, 130, 246, 0.1)',
              padding: '12px 20px',
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '20px', color: '#94a3b8' }}>
              vCISO Services
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(59, 130, 246, 0.1)',
              padding: '12px 20px',
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '20px', color: '#94a3b8' }}>
              Cyber Maturity Assessment
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(59, 130, 246, 0.1)',
              padding: '12px 20px',
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '20px', color: '#94a3b8' }}>
              Cyber Awareness Training
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
