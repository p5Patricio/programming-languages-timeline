import React, { useState } from 'react';

export default function Logo({ id, brandColor, className = "w-8 h-8" }) {
  const [hasError, setHasError] = useState(false);

  // Custom Inline SVG for GPT-4 (OpenAI spiral logo)
  if (id === 'gpt4') {
    return (
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={brandColor || "#10A37F"} 
        strokeWidth="1.6" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
      >
        <path d="M4.5 16.5c-1.5-1.2-2.5-3-2.5-5 0-3.3 2.7-6 6-6h2m0 13c1.5 1.2 2.5 3 2.5 5 0 3.3-2.7 6-6 6h-2m8-11.5c1.2-1.5 3-2.5 5-2.5 3.3 0 6 2.7 6 6v2m-13 0c-1.2 1.5-3 2.5-5 2.5-3.3 0-6-2.7-6-6v-2m5.5-3.5C9.2 5.5 11 4.5 13 4.5c3.3 0 6 2.7 6 6v2M5 11.5C6.2 10 8 9 10 9c3.3 0 6 2.7 6 6v2" />
        <path d="M12 9.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5z" fill={brandColor || "#10A37F"} fillOpacity="0.2" />
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
