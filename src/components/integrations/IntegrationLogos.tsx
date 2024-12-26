import React from 'react';

const integrations = [
  {
    name: 'Gmail',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
    category: 'Communication'
  },
  {
    name: 'Zoom',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Zoom_Logo_2022.svg/2560px-Zoom_Logo_2022.svg.png',
    category: 'Communication'
  },
  {
    name: 'Google Drive',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png',
    category: 'Storage'
  },
  {
    name: 'Microsoft Teams',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg',
    category: 'Communication'
  },
  {
    name: 'Salesforce',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
    category: 'Business'
  },
  {
    name: 'Slack',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
    category: 'Communication'
  },
  {
    name: 'Jira',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Jira_%28Software%29_logo.svg',
    category: 'Business'
  },
  {
    name: 'Notion',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    category: 'Productivity'
  },
  {
    name: 'Figma',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    category: 'Design'
  }
];

export default function IntegrationLogos() {
  return (
    <div className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex flex-col items-center space-y-2 group"
            >
              <div className="w-16 h-16 p-2 bg-zinc-900/50 rounded-xl 
                flex items-center justify-center transition-all duration-200
                group-hover:bg-zinc-900 group-hover:scale-110">
                <img
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  className="w-10 h-10 object-contain filter brightness-0 invert opacity-50
                    group-hover:opacity-100 transition-all duration-200"
                />
              </div>
              <span className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
                {integration.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-zinc-500">
            Don't see your tool? We can build custom integrations for your specific needs.
          </p>
        </div>
      </div>
    </div>
  );
}