export const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    description: 'Former Google engineer with 10+ years in software development and startup experience.',
    linkedin: 'https://linkedin.com/in/alexjohnson',
    twitter: 'https://twitter.com/alexjohnson',
    email: 'alex@codemarket.com',
    skills: ['Leadership', 'Full-Stack Development', 'Product Strategy', 'Team Building']
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    description: 'AI/ML expert and former Stanford CS professor with expertise in scalable systems.',
    linkedin: 'https://linkedin.com/in/sarahchen',
    twitter: 'https://twitter.com/sarahchen',
    email: 'sarah@codemarket.com',
    skills: ['Machine Learning', 'System Architecture', 'Python', 'Research']
  },
  {
    id: 3,
    name: 'Mike Rodriguez',
    role: 'Head of Quality',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    description: 'Senior developer with expertise in code review, testing, and quality assurance.',
    linkedin: 'https://linkedin.com/in/mikerodriguez',
    twitter: 'https://twitter.com/mikerodriguez',
    email: 'mike@codemarket.com',
    skills: ['Quality Assurance', 'Code Review', 'Testing', 'DevOps']
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    description: 'UX/UI designer with a passion for creating intuitive and beautiful user experiences.',
    linkedin: 'https://linkedin.com/in/emilydavis',
    twitter: 'https://twitter.com/emilydavis',
    email: 'emily@codemarket.com',
    skills: ['UI/UX Design', 'User Research', 'Prototyping', 'Design Systems']
  },
  {
    id: 5,
    name: 'David Kim',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    description: 'Full-stack developer specializing in modern web technologies and cloud architecture.',
    linkedin: 'https://linkedin.com/in/davidkim',
    twitter: 'https://twitter.com/davidkim',
    email: 'david@codemarket.com',
    skills: ['React', 'Node.js', 'AWS', 'Microservices']
  },
  {
    id: 6,
    name: 'Lisa Wang',
    role: 'Community Manager',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    description: 'Community builder focused on creating engaging experiences for developers and students.',
    linkedin: 'https://linkedin.com/in/lisawang',
    twitter: 'https://twitter.com/lisawang',
    email: 'lisa@codemarket.com',
    skills: ['Community Building', 'Content Strategy', 'Social Media', 'Event Planning']
  }
]

export const getTeamMemberById = (id) => {
  return teamMembers.find(member => member.id === id)
}

export const getTeamMembersByRole = (role) => {
  return teamMembers.filter(member => member.role.toLowerCase().includes(role.toLowerCase()))
}
