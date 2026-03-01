export const metadata = {
  title: 'Build Fast with AI - Workshop | KD Singh',
  description: 'Learn how to build applications quickly using AI tools and modern development practices',
};

export default function BuildFastWithAI() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Build Fast with AI</h1>

        <p className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
          Welcome to the Build Fast with AI workshop! This hands-on session is designed to help you leverage
          cutting-edge AI tools to accelerate your development workflow. Whether you're building prototypes,
          full-stack applications, or experimenting with new ideas, you'll learn practical techniques to ship
          faster and more efficiently using AI-powered development tools.
        </p>

        <p className="text-lg leading-relaxed mb-12 text-gray-700 dark:text-gray-300">
          In this workshop, we'll explore modern AI coding assistants, best practices for prompt engineering,
          and real-world strategies for integrating AI into your development process. You'll walk away with
          actionable skills that will transform how you approach building software.
        </p>

        <div className="flex gap-4">
          <a
            href="https://drive.google.com/drive/folders/1RAstW4pmM1gPecGE_DxKhi6K40k7JWbn?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Workshop Files
          </a>
          <a 
            href="https://drive.google.com/drive/folders/1RAstW4pmM1gPecGE_DxKhi6K40k7JWbn?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Workshop Feedback
          </button>
        </div>
      </div>
    </main>
  );
}
