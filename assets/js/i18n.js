// i18n.js - Internationalization Module

const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_apps: "Apps",
    nav_about: "About",
    
    // Hero Section
    hero_title: "My Apps Collection",
    hero_subtitle: "A showcase of elegant and powerful macOS applications designed to enhance your productivity and workflow.",
    hero_cta_apps: "View Apps",
    hero_cta_contact: "Contact",
    
    // Apps Section
    apps_title: "Featured Apps",
    apps_subtitle: "Discover tools that make a difference",
    
    // App Names & Descriptions
    vclean_name: "vClean",
    vclean_category: "Developer Tools",
    vclean_description: "A powerful Xcode build folder cleaner for macOS. Quickly reclaim disk space by removing unnecessary build artifacts, derived data, and cache files. Supports custom cleaning rules and safe deletion with preview.",
    
    vpaste_name: "vPaste",
    vpaste_category: "Productivity",
    vpaste_description: "A modern clipboard manager for macOS. Save, search, and organize your clipboard history. Supports text, images, files, and code snippets. Quick access via menu bar and keyboard shortcuts.",
    
    // App Pages
    app_learn_more: "Learn More",
    app_download: "Download",
    app_features: "Key Features",
    app_download_section: "Download",
    app_download_text: "Get started with",
    
    // vClean Features
    vclean_feature_1_title: "Smart Detection",
    vclean_feature_1_desc: "Automatically identifies Xcode build directories, derived data, and cache folders across all projects.",
    
    vclean_feature_2_title: "Safe Cleaning",
    vclean_feature_2_desc: "Preview files before deletion. Never accidentally remove important source code or project files.",
    
    vclean_feature_3_title: "Disk Space",
    vclean_feature_3_desc: "See exactly how much space each component is using. Make informed decisions about what to clean.",
    
    vclean_feature_4_title: "Custom Rules",
    vclean_feature_4_desc: "Create custom cleaning rules based on file age, size, or type. Automate your cleanup workflow.",
    
    // vPaste Features
    vpaste_feature_1_title: "History Management",
    vpaste_feature_1_desc: "Keep a searchable history of all your clipboard items. Find what you need with powerful search.",
    
    vpaste_feature_2_title: "Quick Access",
    vpaste_feature_2_desc: "Access your clipboard history from the menu bar. Use keyboard shortcuts for instant access.",
    
    vpaste_feature_3_title: "Rich Support",
    vpaste_feature_3_desc: "Store text, images, files, and code snippets. Organize with tags and folders.",
    
    vpaste_feature_4_title: "Sync & Backup",
    vpaste_feature_4_desc: "Sync your clipboard history across devices. Automatic backup ensures you never lose important content.",
    
    // Legal Pages
    privacy_title: "Privacy Policy",
    terms_title: "Terms of Service",
    privacy_subtitle: "How we handle your data",
    terms_subtitle: "The rules for using our apps",
    
    // Footer
    footer_rights: "All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    
    // Common
    updated: "Last updated",
    version: "Version",
  },
  
  zh: {
    // Navigation
    nav_home: "首页",
    nav_apps: "应用",
    nav_about: "关于",
    
    // Hero Section
    hero_title: "我的应用集合",
    hero_subtitle: "精心设计的 macOS 应用，旨在提升您的工作效率和体验。",
    hero_cta_apps: "浏览应用",
    hero_cta_contact: "联系我",
    
    // Apps Section
    apps_title: "精选应用",
    apps_subtitle: "发现让您的工作更出色的工具",
    
    // App Names & Descriptions
    vclean_name: "vClean",
    vclean_category: "开发者工具",
    vclean_description: "强大的 Xcode 构建目录清理工具。快速清理不必要的构建产物、派生数据和缓存文件。支持自定义清理规则和安全的预览删除功能。",
    
    vpaste_name: "vPaste",
    vpaste_category: "效率工具",
    vpaste_description: "现代剪贴板管理器。保存、搜索和管理剪贴板历史。支持文本、图片、文件和代码片段。通过菜单栏和快捷键快速访问。",
    
    // App Pages
    app_learn_more: "了解更多",
    app_download: "下载",
    app_features: "主要功能",
    app_download_section: "下载",
    app_download_text: "开始使用",
    
    // vClean Features
    vclean_feature_1_title: "智能检测",
    vclean_feature_1_desc: "自动识别所有项目中的 Xcode 构建目录、派生数据和缓存文件夹。",
    
    vclean_feature_2_title: "安全清理",
    vclean_feature_2_desc: "删除前预览文件。绝不会意外删除重要的源代码或项目文件。",
    
    vclean_feature_3_title: "磁盘空间",
    vclean_feature_3_desc: "精确查看每个组件占用的空间大小，做出明智的清理决策。",
    
    vclean_feature_4_title: "自定义规则",
    vclean_feature_4_desc: "根据文件年龄、大小或类型创建自定义清理规则，自动化清理工作流程。",
    
    // vPaste Features
    vpaste_feature_1_title: "历史管理",
    vpaste_feature_1_desc: "保留所有剪贴板项目的可搜索历史。强大的搜索功能帮您快速找到需要的内容。",
    
    vpaste_feature_2_title: "快速访问",
    vpaste_feature_2_desc: "从菜单栏访问剪贴板历史。使用键盘快捷键实现即时访问。",
    
    vpaste_feature_3_title: "丰富支持",
    vpaste_feature_3_desc: "存储文本、图片、文件和代码片段。通过标签和文件夹进行整理。",
    
    vpaste_feature_4_title: "同步与备份",
    vpaste_feature_4_desc: "跨设备同步剪贴板历史。自动备份确保您永远不会丢失重要内容。",
    
    // Legal Pages
    privacy_title: "隐私政策",
    terms_title: "服务条款",
    privacy_subtitle: "我们如何处理您的数据",
    terms_subtitle: "使用我们应用的规定",
    
    // Footer
    footer_rights: "保留所有权利。",
    footer_privacy: "隐私政策",
    footer_terms: "服务条款",
    
    // Common
    updated: "最后更新",
    version: "版本",
  }
};

// Language Management
class I18n {
  constructor() {
    this.currentLang = 'en';
    this.init();
  }

  init() {
    // Check stored language preference
    const stored = localStorage.getItem('preferred-lang');
    if (stored && translations[stored]) {
      this.currentLang = stored;
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (translations[browserLang]) {
        this.currentLang = browserLang;
      }
    }
    this.updatePage();
  }

  setLanguage(lang) {
    if (!translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem('preferred-lang', lang);
    this.updatePage();
  }

  t(key) {
    return translations[this.currentLang][key] || translations['en'][key] || key;
  }

  updatePage() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });

    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = this.t(key);
    });

    // Update HTML lang attribute
    document.documentElement.lang = this.currentLang;

    // Update language toggle button
    const langBtn = document.querySelector('.lang-toggle');
    if (langBtn) {
      langBtn.textContent = this.currentLang === 'en' ? 'EN' : '中';
    }
  }

  getCurrentLang() {
    return this.currentLang;
  }
}

// Create global instance
const i18n = new I18n();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { i18n, translations };
}
