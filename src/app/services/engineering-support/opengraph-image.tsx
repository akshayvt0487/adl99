import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Cybersecurity Engineering & Implementation Support in Melbourne - ADL99'
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
          background: 'linear-gradient(135deg, #4c1d95 0%, #6d28d9 50%, #8b5cf6 100%)',
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
              background: '#7c3aed',
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
                d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
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
                color: '#ede9fe',
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
              fontSize: '64px',
              fontWeight: '700',
              color: 'white',
              lineHeight: '1.1',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            Technical Security Implementation
          </h1>
          <p
            style={{
              fontSize: '30px',
              color: '#ede9fe',
              margin: 0,
              lineHeight: '1.4',
            }}
          >
            Hands-on cybersecurity engineering from Melbourne's expert team
          </p>
        </div>

        {/* Footer with technologies */}
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
              background: 'rgba(124, 58, 237, 0.2)',
              padding: '10px 18px',
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '20px', color: '#ede9fe', fontWeight: '600' }}>
              Network Defence
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(124, 58, 237, 0.2)',
              padding: '10px 18px',
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '20px', color: '#ede9fe', fontWeight: '600' }}>
              Cloud Security
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(124, 58, 237, 0.2)',
              padding: '10px 18px',
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '20px', color: '#ede9fe', fontWeight: '600' }}>
              SIEM Deployment
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(124, 58, 237, 0.2)',
              padding: '10px 18px',
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '20px', color: '#ede9fe', fontWeight: '600' }}>
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
