export default function Contact() {
  return (
    <footer className="mx-4 md:w-6/12 sm:mx-auto mt-12 mb-16 flex flex-col items-center justify-center text-center">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-12"></div>

      <h3 className="text-3xl font-bold text-black mb-4">Let's Connect</h3>
      <p className="text-gray-600 mb-8 max-w-lg">
        Whether you have a question, a project in mind, or just want to say hi,
        my inbox is always open. I'll try my best to get back to you!
      </p>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
        {/* Email */}
        <a
          href="mailto:tarale.adi@gmail.com"
          className="p-3 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full shadow-sm"
          aria-label="Email"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/AdityaTarale"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full shadow-sm"
          aria-label="GitHub"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/aditya-tarale-about/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full shadow-sm"
          aria-label="LinkedIn"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>

        {/* X (Twitter) */}
        <a
          href="https://x.com/aditarale1805"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full shadow-sm"
          aria-label="X (Twitter)"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
          </svg>
        </a>

        {/* Stack Overflow */}
        <a
          href="https://stackoverflow.com/users/14806412/aditya-tarale"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full shadow-sm"
          aria-label="Stack Overflow"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.36 20.2V14.82h2.25V22.45H0V14.82h2.25V20.2h15.11z"/>
            <path d="M4.65 18.06h10.8v-2.25H4.65v2.25zm.51-4.71l10.66 2.29.48-2.2-10.66-2.28-.48 2.19zM6.92 8.78l10.02 4.41.93-2.07-10.02-4.41-.93 2.07zM10.15 4.31l8.93 6.36 1.3-1.83-8.93-6.36-1.3 1.83zM15.42 0l-1.6 1.58 7.37 7.54 1.6-1.58-7.37-7.54z"/>
          </svg>
        </a>

        {/* Codeforces */}
        <a
          href="https://codeforces.com/profile/tarale.adi"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full shadow-sm"
          aria-label="Codeforces"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9A1.5 1.5 0 0 1 1.5 7.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19.5v-15A1.5 1.5 0 0 1 10.5 3h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z" />
          </svg>
        </a>

      </div>
    </footer>
  );
}
