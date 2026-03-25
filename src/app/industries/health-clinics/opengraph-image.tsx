import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Cybersecurity for Australian Health Clinics - ADL99 Melbourne'
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
          background: 'linear-gradient(135deg, #be123c 0%, #e11d48 50%, #f43f5e 100%)',
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
              background: '#f43f5e',
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
                d="M22 12h-4l-3 9L9 3l-3 9H2"
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
                color: '#ffe4e6',
                marginTop: '-8px',
              }}
            >
              Healthcare Cybersecurity
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
            Cybersecurity for Australian Health Clinics
          </h1>
          <p
            style={{
              fontSize: '30px',
              color: '#ffe4e6',
              margin: 0,
              lineHeight: '1.4',
            }}
          >
            Privacy Act-compliant security for medical practices & allied health providers
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
              background: 'rgba(244, 63, 94, 0.2)',
              padding: '10px 18px',
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '20px', color: '#ffe4e6', fontWeight: '600' }}>
              Patient Data Protection
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(244, 63, 94, 0.2)',
              padding: '10px 18px',
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '20px', color: '#ffe4e6', fontWeight: '600' }}>
              Privacy Act Compliance
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(244, 63, 94, 0.2)',
              padding: '10px 18px',
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '20px', color: '#ffe4e6', fontWeight: '600' }}>
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
