const techStack = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Laravel', 'Python', 'Django', 'REST & GraphQL APIs'],
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'CI/CD Pipelines'],
  },
  {
    category: 'Data & AI',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'TensorFlow', 'Data Pipelines'],
  },
];

export default function TechCredibility() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-accent text-sm uppercase tracking-widest font-semibold mb-4">Engineering Capability</p>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary">Technology we work with.</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">A practical, proven technology stack chosen for reliability, community support and long-term maintainability.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((group) => (
            <div key={group.category} className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{group.category}</h4>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm font-medium text-primary flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
