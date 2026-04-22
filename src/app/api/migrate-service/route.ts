import { NextResponse } from 'next/server';

const WP_REST_URL = 'https://cms.adl99.com.au/wp-json';

// Service data with updated content
const serviceData = {
  title: "Cyber Awareness Training",
  slug: "cyber-awareness-training",
  excerpt: "Turn your biggest vulnerability into your strongest defence.",
  content: `<p>Your employees are your first line of defense. Our Cyber Awareness Training transforms your team from a security vulnerability into a security asset.</p>
<p>Through engaging, practical training sessions, we teach your staff to recognize threats, respond appropriately, and maintain secure practices in their daily work.</p>`,
  acf: {
    icon: "BookOpen",
    shortDescription: "We design and deliver tailored training programs to educate employees on cyber risks, safe online practices, phishing prevention, and incident response.",
    heroHeadline: "Build a Human Firewall",
    heroSubheadline: "Turn your biggest vulnerability into your strongest defence.",
    benefits: [
      { icon: "Users", title: "Human Firewall", description: "Transform employees into security-conscious team members" },
      { icon: "Mail", title: "Phishing Resistance", description: "Dramatically reduce successful phishing attacks" },
      { icon: "AlertTriangle", title: "Incident Awareness", description: "Staff know how to respond when something goes wrong" },
    ],
    painPoints: [
      { icon: "UserX", title: "Human Error", description: "95% of breaches involve human error" },
      { icon: "Mail", title: "Phishing Attacks", description: "Employees falling for social engineering" },
      { icon: "HelpCircle", title: "Lack of Awareness", description: "Staff don't know security best practices" },
    ],
    rightForYou: [
      { item: "Your employees handle sensitive data" },
      { item: "You've experienced phishing attempts" },
      { item: "Staff aren't aware of security best practices" },
      { item: "You want to reduce human error risks" },
    ],
    whatsIncluded: [
      { item: "Customised training programs" },
      { item: "Phishing simulation campaigns" },
      { item: "Cyber incident simulation tabletop exercises" },
      { item: "Ongoing awareness materials" },
      { item: "Training effectiveness reporting" },
    ],
    formBenefits: [
      { benefit: "Engaging, practical training" },
      { benefit: "Customised to your industry" },
      { benefit: "Measurable results" },
    ],
    faqs: [
      { question: "How long are training sessions?", answer: "Sessions range from 1-hour awareness talks to full-day workshops depending on depth required." },
      { question: "Can training be customised for our industry?", answer: "Absolutely. We tailor content to your industry's specific threats and compliance requirements." },
      { question: "Do you offer phishing simulations?", answer: "Yes, we provide realistic phishing simulations to test and reinforce training." },
      { question: "What is a cyber incident simulation tabletop exercise?", answer: "A tabletop exercise is a facilitated discussion where your team works through a realistic cyber incident scenario—such as a ransomware attack, data breach, or business email compromise. We guide your staff through decision-making under pressure, testing your incident response plan, communication protocols, and recovery procedures. These exercises identify gaps in your response capabilities before a real incident occurs, ensuring your team knows exactly what to do when it matters most." },
    ],
  },
};

async function findBySlug(endpoint: string, slug: string, authHeader: string) {
  try {
    const response = await fetch(`${WP_REST_URL}${endpoint}?slug=${slug}`, {
      headers: {
        'Authorization': authHeader,
      },
    });

    if (!response.ok) {
      return null;
    }

    const results = await response.json();
    return results.length > 0 ? results[0] : null;
  } catch (error) {
    console.error('Error finding post:', error);
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'WordPress username and password are required' },
        { status: 400 }
      );
    }

    const authHeader = `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;

    // Try to find existing service
    let existing = await findBySlug('/wp/v2/services', serviceData.slug, authHeader);
    let endpoint = '/wp/v2/services';

    if (!existing) {
      existing = await findBySlug('/wp/v2/service', serviceData.slug, authHeader);
      if (existing) endpoint = '/wp/v2/service';
    }

    if (!existing) {
      return NextResponse.json(
        { error: `Service "${serviceData.title}" not found in WordPress` },
        { status: 404 }
      );
    }

    // Update the service
    const updateResponse = await fetch(`${WP_REST_URL}${endpoint}/${existing.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader,
      },
      body: JSON.stringify({
        title: serviceData.title,
        slug: serviceData.slug,
        content: serviceData.content,
        excerpt: serviceData.excerpt,
        status: 'publish',
        acf: serviceData.acf,
      }),
    });

    if (!updateResponse.ok) {
      const error = await updateResponse.json().catch(() => ({ message: updateResponse.statusText }));
      return NextResponse.json(
        { error: `Failed to update: ${error.message}` },
        { status: updateResponse.status }
      );
    }

    const result = await updateResponse.json();

    return NextResponse.json({
      success: true,
      message: 'Successfully updated Cyber Awareness Training service',
      id: result.id,
    });

  } catch (error) {
    console.error('Migration error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
