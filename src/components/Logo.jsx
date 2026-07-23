import React, { useState } from 'react';

export default function Logo({ id, brandColor, className = "w-8 h-8" }) {
  const [hasError, setHasError] = useState(false);

  // Custom Inline SVG for GPT-4 / OpenAI (Official OpenAI spiral logo)
  if (id === 'gpt4' || id === 'openai' || id === 'chatgpt') {
    return (
      <svg 
        viewBox="0 0 24 24" 
        fill={brandColor || "#10A37F"} 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615l-4.8303 2.7913a4.4944 4.4944 0 0 1-6.1498-1.6464zM2.3408 8.6156a4.466 4.466 0 0 1 2.3371-1.9727V12.26a.7665.7665 0 0 0 .388.6766l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865a4.504 4.504 0 0 1-1.6181-6.0573zm16.5963 3.8558L13.0943 9.1029l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.3927-.6859zm2.0107-3.0231l-.142-.0852-4.7735-2.7582a.7712.7712 0 0 0-.7806 0l-5.8428 3.3685V7.639a.0804.0804 0 0 1 .0332-.0615l4.8303-2.7913a4.4944 4.4944 0 0 1 6.6802 4.6601zM8.3061 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.06a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805-4.7783 2.7581a.7948.7948 0 0 0-.3927.6813v6.7369zm1.0933-2.2244L12 9.1644l2.6006 1.5002v3.0004L12 15.1652l-2.6006-1.5002z" />
      </svg>
    );
  }

  // Custom Inline SVG for Antigravity (Anti-gravity floating zero-g logo)
  if (id === 'antigravity') {
    return (
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={brandColor || "#00E5FF"} 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
      >
        <path d="M12 3l8 14H4l8-14z" />
        <path d="M12 21l-5-9h10l-5 9z" fill={brandColor || "#00E5FF"} fillOpacity="0.25" />
        <circle cx="12" cy="12" r="2.5" fill={brandColor || "#00E5FF"} />
      </svg>
    );
  }

  // 1. Custom Inline SVG for BASIC (Retro CRT monitor)
  if (id === 'basic') {
    return (
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={brandColor || "currentColor"} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill={brandColor || "currentColor"} fillOpacity="0.15"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <path d="M7 8l2 2-2 2"/>
        <line x1="10" y1="12" x2="14" y2="12"/>
      </svg>
    );
  }

  // 2. Custom Inline SVG for SQL (Database cylinder)
  if (id === 'sql') {
    return (
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={brandColor || "currentColor"} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
      >
        <path d="M4 6c0 1.66 4 3 9 3s9-1.34 9-3-4-3-9-3-9 1.34-9 3z" fill={brandColor || "currentColor"} fillOpacity="0.15"/>
        <path d="M4 6v6c0 1.66 4 3 9 3s9-1.34 9-3V6"/>
        <path d="M4 12v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/>
      </svg>
    );
  }

  // 2.5 Custom Inline SVG for C (Identical to C++ shield but without the plus signs)
  if (id === 'c') {
    return (
      <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
        <path fill="#00599c" d="M118.766 95.82c.89-1.543 1.441-3.28 1.441-4.843V36.78c0-1.558-.55-3.297-1.441-4.84l-55.32 31.94Zm0 0"/>
        <path fill="#004482" d="m68.36 126.586 46.933-27.094c1.352-.781 2.582-2.129 3.473-3.672l-55.32-31.94L8.12 95.82c.89 1.543 2.121 2.89 3.473 3.672l46.933 27.094c2.703 1.562 7.13 1.562 9.832 0Zm0 0"/>
        <path fill="#659ad2" d="M118.766 31.941c-.891-1.546-2.121-2.894-3.473-3.671L68.359 1.172c-2.703-1.563-7.129-1.563-9.832 0L11.594 28.27C8.89 29.828 6.68 33.66 6.68 36.78v54.196c0 1.562.55 3.3 1.441 4.843L63.445 63.88Zm0 0"/>
        <path fill="#fff" d="M63.445 26.035c-20.867 0-37.843 16.977-37.843 37.844s16.976 37.844 37.843 37.844c13.465 0 26.024-7.247 32.77-18.91L79.84 73.335c-3.38 5.84-9.66 9.465-16.395 9.465-10.433 0-18.922-8.488-18.922-18.922 0-10.434 8.49-18.922 18.922-18.922 6.73 0 13.017 3.629 16.39 9.465l16.38-9.477c-6.75-11.664-19.305-18.91-32.77-18.91z"/>
      </svg>
    );
  }

  // 3. Devicon and Wikipedia mappings
  let logoUrl = null;
  if (id === 'lisp') {
    logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg';
  } else {
    const deviconMap = {
      fortran: 'fortran/fortran-original.svg',
      cobol: 'cobol/cobol-original.svg',
      c: 'c/c-original.svg',
      cpp: 'cplusplus/cplusplus-original.svg',
      python: 'python/python-original.svg',
      java: 'java/java-original.svg',
      javascript: 'javascript/javascript-original.svg',
      php: 'php/php-original.svg',
      csharp: 'csharp/csharp-original.svg',
      go: 'go/go-original.svg',
      rust: 'rust/rust-original.svg',
      typescript: 'typescript/typescript-original.svg',
      // Frameworks and new additions
      react: 'react/react-original.svg',
      angular: 'angularjs/angularjs-original.svg',
      vue: 'vuejs/vuejs-original.svg',
      node: 'nodejs/nodejs-original.svg',
      git: 'git/git-original.svg',
      docker: 'docker/docker-original.svg',
      linux: 'linux/linux-original.svg'
    };
    const path = deviconMap[id];
    if (path) {
      logoUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;
    }
  }

  if (logoUrl && !hasError) {
    return (
      <img 
        src={logoUrl} 
        alt={`${id} logo`} 
        className={`${className} object-contain`}
        onError={() => setHasError(true)}
      />
    );
  }

  // 4. Default Fallback Letter Circle
  return (
    <div 
      className={`${className} rounded-lg flex items-center justify-center text-xs font-bold text-white uppercase select-none`} 
      style={{ backgroundColor: brandColor || "#6366F1" }}
    >
      {id.charAt(0)}
    </div>
  );
}
