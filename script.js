const CONFIG = {
    RESUME_URL: 'https://drive.google.com/file/d/1BQFUU1A4y_HOoDUbbcp7lR8DmlDnFP-6/view?usp=sharing',
    GITHUB_OWNER: 'LucasVieiraS',
    GITHUB_REPO: 'lucasvieiras.github.io',
    DEFAULT_LOCALE: 'en',
    SUPPORTED_LOCALES: ['en', 'pt-BR']
};

let I18N = null;
let currentLocale = CONFIG.DEFAULT_LOCALE;
let latestCommitISO = null;

function formatDate(date) {
	try {
		return new Intl.DateTimeFormat(currentLocale, { dateStyle: 'medium', timeStyle: 'short' }).format(date);
	} catch (_) {
		return date.toLocaleString();
	}
}

function downloadResume() {
    const link = document.createElement('a');
    link.href = CONFIG.RESUME_URL;
    link.download = 'Lucas_Vieira_CV.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function setLocale(locale) {
    if (!CONFIG.SUPPORTED_LOCALES.includes(locale)) locale = CONFIG.DEFAULT_LOCALE;
    currentLocale = locale;
    localStorage.setItem('locale', currentLocale);
    document.documentElement.lang = currentLocale;
    const toggle = document.getElementById('lang-toggle');
    if (toggle) toggle.textContent = currentLocale === 'pt-BR' ? 'PT-BR' : 'EN';
}

function t(key) {
    if (!I18N) return '';
    const dict = I18N[currentLocale] || {};
    return (dict[key] || I18N[CONFIG.DEFAULT_LOCALE][key] || '').trim();
}

async function loadI18n() {
    if (I18N) return I18N;
    const resp = await fetch('assets/i18n.json');
    I18N = await resp.json();
    return I18N;
}

function applyTranslations() {
    if (!I18N) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (!key) return;
        if (el.id === 'last-updated') {
            if (latestCommitISO) {
                const dt = new Date(latestCommitISO);
				const formatted = formatDate(dt);
                el.textContent = `${t('last_updated_prefix')} ${formatted}`;
            } else {
                el.textContent = t('last_updated_loading');
            }
        } else {
            el.textContent = t(key);
        }
    });
}

function getOwnerRepoFromHost() {
    try {
        const host = window.location.hostname || '';
        if (host.endsWith('.github.io')) {
            const owner = host.replace('.github.io', '');
            return { owner, repo: host };
        }
    } catch (_) { }
    return { owner: CONFIG.GITHUB_OWNER, repo: CONFIG.GITHUB_REPO };
}

async function fetchLatestCommitDate() {
    const el = document.getElementById('last-updated');
    if (!el) return;
    const { owner, repo } = getOwnerRepoFromHost();
    try {
        const repoResp = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (!repoResp.ok) throw new Error('Repo fetch failed');
        const repoJson = await repoResp.json();
        const branch = repoJson.default_branch || 'main';
        const commitsResp = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1&sha=${encodeURIComponent(branch)}`);
        if (!commitsResp.ok) throw new Error('Commits fetch failed');
        const commits = await commitsResp.json();
        const iso = commits && commits[0] && commits[0].commit && commits[0].commit.committer && commits[0].commit.committer.date;
        if (iso) {
            latestCommitISO = iso;
			const dt = new Date(iso);
			const formatted = formatDate(dt);
            el.textContent = `${t('last_updated_prefix') || 'Last updated:'} ${formatted}`;
        } else {
            el.textContent = t('last_updated_unavailable') || 'Last updated: unavailable';
        }
    } catch (e) {
		const fallback = formatDate(new Date());
		el.textContent = `${t('last_updated_prefix') || 'Last updated:'} ${fallback}`;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Locale init (default EN)
    const saved = localStorage.getItem('locale');
    setLocale(saved || CONFIG.DEFAULT_LOCALE);
    loadI18n().then(() => {
        applyTranslations();
    });
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const next = currentLocale === 'en' ? 'pt-BR' : 'en';
            setLocale(next);
            applyTranslations();
        });
    }

    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reduceMotion) {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

		const sections = document.querySelectorAll('.section');
		const observerOptions = { threshold: 0, rootMargin: '0px' };
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
		sections.forEach(section => {
			const rect = section.getBoundingClientRect();
			const inView = rect.top < window.innerHeight && rect.bottom > 0;
			section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
			if (inView) {
				section.style.opacity = '1';
				section.style.transform = 'translateY(0)';
			} else {
				section.style.opacity = '0';
				section.style.transform = 'translateY(20px)';
			}
			observer.observe(section);
		});
    }

    fetchLatestCommitDate();
});