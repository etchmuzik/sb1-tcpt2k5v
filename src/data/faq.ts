export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQSection {
  id: string;
  title: string;
  questions: FAQ[];
}

export const faqData: FAQSection[] = [
  {
    id: 'ai-salesman',
    title: 'AI Salesman',
    questions: [
      {
        question: 'What is AI Salesman?',
        answer: 'AI Salesman is an Intelligent Sales Automation Solution that replicates your business process over a simple conversation-based interface. It works like chatting with a friend and can be embedded on your website as a Sales Chatbot.\n\nKey Features:\n\n• Automate Cold Outreach & Follow-ups: Sends automatic cold outreach emails to thousands of contacts daily with email integration and handles follow-ups autonomously\n\n• Context-aware Responses: Assists all types of users appropriately based on their status (guest/client/potential client) and understands individual requirements to pitch correct solutions\n\n• Script Following: Can be configured to follow established sales scripts and build rapport through defined question sequences\n\n• Multiple Integrations: Provides Omnichannel Sales Automation through integrations with tools like Zapier, Salesforce, WhatsApp, etc.'
      },
      {
        question: 'How does the AI handle sales conversations?',
        answer: 'Our AI is trained on thousands of successful sales conversations and can:\n\n• Understand context and user intent\n• Follow your specific sales scripts and processes\n• Handle objections naturally\n• Qualify leads automatically\n• Schedule meetings when appropriate\n• Process payments through integrated gateways'
      },
      {
        question: 'What integrations are supported?',
        answer: 'We support a wide range of integrations including:\n\n• CRM Systems (Salesforce, HubSpot, etc.)\n• Communication Tools (Email, WhatsApp, SMS)\n• Calendar Apps (Google Calendar, Outlook)\n• Payment Gateways\n• Custom APIs and Webhooks\n\nOur system can be integrated with virtually any tool through our API or Zapier connection.'
      }
    ]
  },
  {
    id: 'implementation',
    title: 'Implementation & Support',
    questions: [
      {
        question: 'How long does implementation take?',
        answer: 'Implementation timeline varies based on your requirements:\n\n• Basic Setup: 1-2 weeks\n• Custom Integration: 2-4 weeks\n• Enterprise Implementation: 4-8 weeks\n\nOur team works closely with you throughout the process to ensure smooth deployment.'
      },
      {
        question: 'What kind of support is provided?',
        answer: 'We offer comprehensive support including:\n\n• 24/7 Technical Support\n• Dedicated Account Manager\n• Regular Training Sessions\n• Performance Optimization\n• Monthly Strategy Reviews'
      }
    ]
  },
  {
    id: 'security',
    title: 'Security & Privacy',
    questions: [
      {
        question: 'How is our data protected?',
        answer: 'We implement enterprise-grade security measures:\n\n• End-to-end encryption\n• Regular security audits\n• GDPR compliance\n• Data backup and recovery\n• Access control and monitoring'
      }
    ]
  }
];