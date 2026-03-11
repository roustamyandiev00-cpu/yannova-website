// Quick script to create admin user using Bun's built-in SQLite or fetch API
// We'll use the API endpoint approach instead

const createAdminViaAPI = async () => {
  const adminData = {
    email: 'admin@yannova.be',
    password: 'admin123',
    name: 'Admin',
    role: 'admin'
  };
  
  console.log('Admin user data prepared:', adminData.email);
  console.log('Please use the Prisma Client directly in a Node.js script with proper env loading');
};

console.log('Run this in terminal with:');
console.log('bun run scripts/create-admin.ts admin@yannova.be admin123');
