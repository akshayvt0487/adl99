import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Cybersecurity for Australian Manufacturers - ADL99 Melbourne'
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
          background: 'linear-gradient(135deg, #713f12 0%, #92400e 50%, #b45309 100%)',
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
              background: '#f59e0b',
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
              <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" />
              <path
                d="M12 1v6m0 6v6m9.66-9.66l-4.242 4.242m-6.364 0L6.34 4.34M23 12h-6m-6 0H1m20.66 7.66l-4.242-4.242m-6.364 0L6.34 19.66"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
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
                color: '#fed7aa',
                marginTop: '-8px',
              }}
            >
              Manufacturing Cybersecurity
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
              fontSize: '68px',
              fontWeight: '700',
              color: 'white',
              lineHeight: '1.1',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            Cybersecurity for Manufacturing
          </h1>
          <p
            style={{
              fontSize: '30px',
              color: '#fed7aa',
              margin: 0,
              lineHeight: '1.4',
            }}
          >
            Specialist OT/IT cybersecurity for Australian manufacturers
          </p>
        </div>

        {/* Footer with key protections */}
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
              background: 'rgba(245, 158, 11, 0.2)',
              padding: '10px 18px',
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '20px', color: '#fed7aa', fontWeight: '600' }}>
              OT/IT Security
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(245, 158, 11, 0.2)',
              padding: '10px 18px',
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '20px', color: '#fed7aa', fontWeight: '600' }}>
              ICS Protection
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(245, 158, 11, 0.2)',
              padding: '10px 18px',
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '20px', color: '#fed7aa', fontWeight: '600' }}>
              IP Protection
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(245, 158, 11, 0.2)',
              padding: '10px 18px',
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '20px', color: '#fed7aa', fontWeight: '600' }}>
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
