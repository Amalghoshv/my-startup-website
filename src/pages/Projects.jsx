const Projects = () => (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Manufacturing ERP',
              description: 'Streamlined production processes for a leading manufacturer',
              tech: ['ERPNext', 'Custom Modules', 'API Integration']
            },
            {
              title: 'Retail Management',
              description: 'Integrated POS system with inventory management',
              tech: ['ERPNext', 'E-commerce', 'POS']
            },
            {
              title: 'Healthcare Solution',
              description: 'Patient management system with billing integration',
              tech: ['ERPNext', 'Healthcare Module', 'Custom Reports']
            }
          ].map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  export default Projects