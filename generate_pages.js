const fs = require('fs');
const path = require('path');

const pages = [
  '/services',
  '/services/custom-software-engineering',
  '/services/web-mobile-applications',
  '/services/cloud-devops',
  '/services/ai-automation',
  '/services/data-business-intelligence',
  '/services/systems-integration',
  '/services/technology-consulting',
  '/services/managed-hosting',
  '/solutions',
  '/solutions/erp-business-management',
  '/solutions/microfinance-lending',
  '/solutions/education-lms',
  '/solutions/healthcare',
  '/solutions/inventory-warehouse',
  '/solutions/fleet-logistics',
  '/solutions/customer-partner-portals',
  '/solutions/ai-automation',
  '/industries',
  '/industries/mining',
  '/industries/agriculture',
  '/industries/finance-banking',
  '/industries/public-sector',
  '/industries/retail-logistics',
  '/industries/enterprise',
  '/case-studies',
  '/case-studies/[slug]',
  '/products',
  '/insights',
  '/insights/[slug]',
  '/about',
  '/security',
  '/contact',
  '/privacy',
  '/terms'
];

const basePath = path.join(process.cwd(), 'src/app');

pages.forEach(p => {
  const isDynamic = p.includes('[slug]');
  const dirPath = path.join(basePath, p);
  
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const filePath = path.join(dirPath, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    let title = p.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    if(isDynamic) title = 'Detail Page';
    if(title === '') title = 'Home';

    const content = `export default function Page() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">${title}</h1>
      <p className="text-gray-400 text-lg">This page is currently under construction.</p>
    </div>
  );
}
`;
    fs.writeFileSync(filePath, content);
  }
});
console.log('Pages created successfully.');
