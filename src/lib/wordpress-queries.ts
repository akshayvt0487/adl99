// GraphQL Queries for WordPress Content

export const GET_SITE_SETTINGS = `
  query GetSiteSettings {
    acfOptionsSettings {
      siteSettings {
        siteName
        siteDescription
        phone
        email
        address
        businessHours
        logo {
          sourceUrl
          altText
        }
        socialLinks {
          facebook
          linkedin
        }
      }
    }
  }
`;

export const GET_HOME_PAGE = `
  query GetHomePage {
    page(id: "home", idType: URI) {
      id
      title
      homeFields {
        heroSection {
          headline
          headlineHighlight
          subheadline
          ctaText
          ctaLink
          tagline
          backgroundImage {
            node {
              sourceUrl
              altText
            }
          }
        }
        benefits {
          title
          description
          icon
        }
        statsSection {
          sectionTitle
          sectionDescription
          stats {
            value
            label
            sublabel
          }
          source
        }
        servicesSection {
          sectionTitle
          sectionDescription
        }
        industriesSection {
          sectionTitle
          sectionDescription
        }
        processSection {
          sectionTitle
          sectionDescription
          steps {
            number
            title
            description
          }
        }
      }
      seo {
        title
        description
      }
    }
  }
`;

export const GET_ALL_SERVICES = `
  query GetAllServices {
    services(first: 100) {
      nodes {
        id
        title
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        serviceFields {
          icon
          shortDescription
          isAccent
        }
      }
    }
  }
`;

export const GET_SERVICE_BY_SLUG = `
  query GetServiceBySlug($slug: ID!) {
    service(id: $slug, idType: SLUG) {
      id
      title
      slug
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      serviceFields {
        icon
        shortDescription
        heroHeadline
        heroSubheadline
        benefits {
          icon
          title
          description
        }
        painPoints {
          icon
          title
          description
        }
        rightForYou {
          item
        }
        whatsIncluded {
          item
        }
        formBenefits {
          benefit
        }
        faqs {
          question
          answer
        }
      }
      seo {
        title
        description
      }
    }
  }
`;

export const GET_ALL_INDUSTRIES = `
  query GetAllIndustries {
    industries(first: 100) {
      nodes {
        id
        title
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        industryFields {
          icon
          shortDescription
          challenges {
            title
          }
          solutions {
            title
          }
        }
      }
    }
  }
`;

export const GET_INDUSTRY_BY_SLUG = `
  query GetIndustryBySlug($slug: ID!) {
    industry(id: $slug, idType: SLUG) {
      id
      title
      slug
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      industryFields {
        icon
        shortDescription
        heroHeadline
        heroSubheadline
        heroDescription
        statistics {
          value
          label
          source
        }
        challenges {
          icon
          title
          description
          impact
        }
        painPoints {
          icon
          title
          description
        }
        solutions {
          icon
          title
          description
        }
        whyChooseUs {
          item
        }
        faqs {
          question
          answer
        }
      }
      seo {
        title
        description
      }
    }
  }
`;

export const GET_PAGE_BY_SLUG = `
  query GetPageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      title
      slug
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      seo {
        title
        description
      }
    }
  }
`;

export const GET_SERVICES_PAGE = `
  query GetServicesPage {
    page(id: "services", idType: URI) {
      id
      title
      servicesPageFields {
        heroTitle
        heroDescription
        heroSubDescription
        painPoints {
          icon
          title
          description
        }
        faqs {
          question
          answer
        }
        contactFormTitle
        contactFormDescription
        contactFormBenefits {
          benefit
        }
      }
      seo {
        title
        description
      }
    }
  }
`;

export const GET_INDUSTRIES_PAGE = `
  query GetIndustriesPage {
    page(id: "industries", idType: URI) {
      id
      title
      industriesPageFields {
        heroTitle
        heroDescription
        heroSubDescription
        introTitle
        introDescription
        ctaTitle
        ctaDescription
      }
      seo {
        title
        description
      }
    }
  }
`;

export const GET_ABOUT_PAGE = `
  query GetAboutPage {
    page(id: "about", idType: URI) {
      id
      title
      aboutFields {
        heroTitle
        heroDescription
        missionStatement
        missionDescription
        australianOwnedTitle
        australianOwnedDescription
        valuesTitle
        valuesDescription
        values {
          icon
          title
          description
        }
        stats {
          value
          label
        }
        approachTitle
        approachDescription
        approachItems {
          title
          description
        }
        ctaTitle
        ctaDescription
        ctaButtonText
        ctaButtonLink
      }
      seo {
        title
        description
      }
    }
  }
`;

export const GET_CONTACT_PAGE = `
  query GetContactPage {
    page(id: "contact", idType: URI) {
      id
      title
      contactFields {
        heroTitle
        heroDescription
        emergencyBannerText
        contactItems {
          icon
          title
          description
          detail
        }
        whatToExpectTitle
        whatToExpect {
          item
        }
        formTitle
        contactInfo {
          email
          phone
          address
          businessHours
        }
      }
      seo {
        title
        description
      }
    }
  }
`;

export const GET_PANIC_BUTTON_PAGE = `
  query GetPanicButtonPage {
    page(id: "panic-button", idType: URI) {
      id
      title
      panicButtonFields {
        heroTitle
        heroDescription
        emergencyBannerText
        infoCards {
          icon
          title
          value
          description
          items {
            item
          }
        }
        formTitle
        incidentTypes {
          type
        }
        importantNotice
      }
      seo {
        title
        description
      }
    }
  }
`;
