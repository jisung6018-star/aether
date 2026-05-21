document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Comprehensive Professional Translations ---
    const translations = {
        en: {
            nav_platforms: "PLATFORMS", nav_support: "SUPPORT", nav_community: "COMMUNITY",
            nav_type_a_summary: "Industrial-grade humanoid platform engineered for high-precision autonomous operations in extreme manufacturing environments.",
            nav_type_b_summary: "State-of-the-art research platform focused on complex human-robot interaction and neural-link cognitive simulation.",
            nav_view_detail: "TECHNICAL DATA", btn_login: "LOG IN", btn_signup: "SIGN UP",
            btn_my_account: "MY ACCOUNT",
            btn_logout: "LOGOUT",
            hero_title: "ADVANCED<br>AUTONOMY.",
            hero_subtitle: "Aether Dynamics is re-engineering the future of labor and intelligence. Our mission-critical systems provide unparalleled reliability where human presence is restricted and precision is non-negotiable.",
            hero_btn: "EXPLORE PLATFORMS",
            type_a_tag: "INDUSTRIAL AUTONOMY", type_a_title: "FORGE",
            type_a_preview_text: "The FORGE platform represents a paradigm shift in industrial robotics. Engineered with high-torque actuators and a reinforced exoskeleton, it delivers human-like dexterity with machine-like endurance. Capable of 24/7 operations in high-heat and high-radiation zones, FORGE is the ultimate solution for modern heavy industry.",
            type_b_tag: "COGNITIVE RESEARCH", type_b_title: "NEXUS",
            type_b_preview_text: "NEXUS is not just a robot; it is a collaborative intelligence bridge. Featuring our proprietary neural-mapping array and over 64 degrees of freedom, NEXUS achieves unparalleled mimicry and social intelligence. It serves as the primary interface for AI research laboratories and advanced medical simulation environments globally.",
            support_title: "SUPPORT CENTER", support_subtitle: "Expert technical documentation, API integration guides, and 24/7 operator assistance.",
            support_card1_title: "DOCUMENTATION", support_card1_desc: "Access comprehensive whitepapers, integration SDKs, and maintenance protocols for all active Aether platforms.",
            support_card2_title: "TRANSMIT INQUIRY", qna_placeholder: "TRANSMIT MESSAGE TO AETHER HUB...", qna_submit: "SEND MESSAGE",
            community_title: "COMMUNITY BOARD", community_subtitle: "Engage with our global community of robotics engineers, AI researchers, and mission operators.",
            community_active_threads: "ACTIVE POSTS", btn_new_post: "CREATE NEW POST",
            type_a_detail_title: "FORGE PLATFORM", type_b_detail_title: "NEXUS COGNITIVE",
            type_a_detail_desc: "The FORGE system is designed for high-availability industrial deployment. Its redundant power systems and modular hardware architecture ensure minimal downtime and maximum adaptability to evolving mission requirements.",
            type_b_detail_desc: "NEXUS provides the industry's most advanced platform for exploring the intersection of biological and machine intelligence. With integrated bio-feedback sensors and real-time facial expression mapping, it redefines human-robot proximity.",
            placeholder_id: "ID_CODE", placeholder_pw: "ACCESS_KEY", placeholder_name: "NAME", placeholder_email: "EMAIL",
            account_title: "ACCOUNT INFO",
            login_title: "IDENTITY AUTHENTICATION", signup_title: "OPERATOR REGISTRATION",
            tag_heavy_duty: "HEAVY-DUTY", tag_cognitive: "COGNITIVE", btn_explore: "EXPLORE TECHNOLOGY",
            tag_operating: "OPERATING AT THE FRONTIER", tag_mission_specs: "MISSION-CRITICAL PLATFORM SPECIFICATIONS",
            tag_cognitive_specs: "COGNITIVE RESEARCH SPECIFICATIONS", spec_load: "PAYLOAD CAPACITY", spec_range: "OPERATIONAL RANGE",
            spec_unlimited: "UNLIMITED", spec_latency: "REACTION LATENCY", spec_ip: "IP RATING", btn_back: "PREVIOUS",
            spec_dof: "ACTIVE DOF", val_joints: "64 JOINTS", spec_engine: "AI ENGINE", spec_sensory: "SENSORY ARRAY", spec_uptime: "UPTIME",
            tag_assistance: "TECHNICAL ASSISTANCE", tag_resources: "RESOURCES", tag_comms: "COMMUNICATIONS", btn_access_repo: "ACCESS REPOSITORY",
            tag_dev_network: "DEVELOPER NETWORK", btn_access_system: "ACCESS SYSTEM", btn_create_profile: "CREATE PROFILE",
            tag_auth_personnel: "AUTHORIZED PERSONNEL ONLY", footer_text: "© 2024 AETHER DYNAMICS. ALL RIGHTS RESERVED. OPERATING AT THE FRONTIER OF HUMANITY AND AUTONOMY.",
            btn_save_changes: "SAVE CHANGES", btn_delete: "DELETE ACCOUNT",
            column_news_title: "🌐 GLOBAL ROBOT & AI TRENDS", column_dev_title: "🛠️ DEV NOTE & FIRMWARE",
            loading_news: "Fetching news feed...", loading_dev: "Fetching update log...",
            no_changelog: "No updates registered.", fail_news: "Failed to load news.", fail_dev: "Failed to load update log.",
            section_social_title: "MEDIA & SOCIAL CENTER", sns_title: "CONNECT WITH AETHER", social_subtitle: "Follow our latest milestones and connect with us on official channels.", youtube_title: "📹 FEATURED VIDEO", btn_visit_channel: "VISIT YOUTUBE CHANNEL", sns_connect_title: "🔗 OFFICIAL CHANNELS", sns_visit_text: "VISIT ↗",
            nav_3d_model: "3D MODEL", tag_3d_viewer: "INTERACTIVE 3D PLATFORM EXPLORER", title_3d_viewer: "PLATFORM<br>VISUALIZER", subtitle_3d_viewer: "Drag to rotate · Scroll to zoom · Explore every angle",
            tab_forge: "FORGE", tab_nexus: "NEXUS", hint_drag: "Drag to rotate", hint_scroll: "Scroll to zoom",
            model_forge_desc: "Heavy-duty industrial humanoid engineered for extreme manufacturing environments. High-torque actuators with reinforced exoskeleton deliver 24/7 machine-endurance.",
            model_nexus_desc: "Cognitive research humanoid featuring 64 degrees of freedom and neural-mapping array. Designed for advanced human-robot interaction and bio-feedback simulation.",
            spec_height: "HEIGHT", spec_weight: "WEIGHT"
        },
        ko: {
            nav_platforms: "플랫폼", nav_support: "고객지원", nav_community: "커뮤니티",
            nav_type_a_summary: "극한의 제조 환경에서 고정밀 자율 운영을 위해 설계된 산업 등급 휴머노이드 플랫폼.",
            nav_type_b_summary: "복잡한 인간-로봇 상호 작용 및 뉴럴 링크 인지 시뮬레이션에 집중한 최첨단 연구 플랫폼.",
            nav_view_detail: "기술 데이터", btn_login: "로그인", btn_signup: "회원가입",
            btn_my_account: "내 계정",
            btn_logout: "로그아웃",
            hero_title: "차세대<br>자율 시스템.",
            hero_subtitle: "에테르 다이내믹스는 노동과 지능의 미래를 재설계하고 있습니다. 우리의 미션 크리티컬 시스템은 인간의 접근이 제한되고 정밀도가 필수적인 곳에서 타협 없는 신뢰성을 제공합니다.",
            hero_btn: "플랫폼 탐색",
            type_a_tag: "산업 자동화", type_a_title: "포지 (FORGE)",
            type_a_preview_text: "FORGE 플랫폼은 산업용 로봇 공학의 패러다임 변화를 상징합니다. 고토크 액추에이터와 강화된 외골격으로 설계되어 기계적인 인내력과 함께 인간과 같은 기민함을 제공합니다. 고온 및 고방사능 구역에서 24/7 운영이 가능한 FORGE는 현대 중공업을 위한 궁극적인 솔루션입니다.",
            type_b_tag: "인지 연구", type_b_title: "넥서스 (NEXUS)",
            type_b_preview_text: "NEXUS는 단순한 로봇이 아니라 협업 지능의 가교입니다. 독자적인 뉴럴 매핑 어레이와 64도 이상의 자유도를 갖춘 NEXUS는 타의 추종을 불허하는 모방 능력과 사회적 지능을 실현합니다. 전 세계 AI 연구소와 첨단 의료 시뮬레이션 환경의 주요 인터페이스 역할을 수행합니다.",
            support_title: "지원 센터", support_subtitle: "전문 기술 문서, API 통합 가이드 및 24/7 오퍼레이터 지원.",
            support_card1_title: "기술 문서", support_card1_desc: "모든 활성 에테르 플랫폼에 대한 포괄적인 백서, 통합 SDK 및 유지보수 프로토콜에 액세스하십시오.",
            support_card2_title: "문의 전송", qna_placeholder: "에테르 허브로 메시지 전송 중...", qna_submit: "메시지 보내기",
            community_title: "커뮤니티 보드", community_subtitle: "전 세계 로봇 공학 엔지니어, AI 연구원 및 미션 오퍼레이터 커뮤니티와 교류하십시오.",
            community_active_threads: "활성 게시글", btn_new_post: "새 게시글 쓰기",
            type_a_detail_title: "포지 플랫폼", type_b_detail_title: "넥서스 인지 유닛",
            type_a_detail_desc: "FORGE 시스템은 고가용성 산업 배포를 위해 설계되었습니다. 중복 전원 시스템과 모듈식 하드웨어 아키처는 가동 중지 시간을 최소화하고 진화하는 미션 요구 사항에 대한 최대의 적응성을 보장합니다.",
            type_b_detail_desc: "NEXUS는 생물학적 지능과 기계 지능의 교차점을 탐구하기 위한 업계에서 가장 진보된 플랫폼을 제공합니다. 통합된 생체 피드백 센서와 실시간 얼굴 표정 매핑을 통해 인간과 로봇의 근접성을 재정의합니다.",
            placeholder_id: "아이디_코드", placeholder_pw: "접속_키", placeholder_name: "성명", placeholder_email: "이메일",
            account_title: "계정 정보",
            login_title: "신원 인증", signup_title: "오퍼레이터 등록",
            tag_heavy_duty: "중작업용", tag_cognitive: "인지용", btn_explore: "기술 탐색",
            tag_operating: "최전선에서의 운영", tag_mission_specs: "미션 크리티컬 플랫폼 사양",
            tag_cognitive_specs: "인지 연구 사양", spec_load: "가용 하중", spec_range: "운영 범위",
            spec_unlimited: "무제한", spec_latency: "반응 지연율", spec_ip: "IP 등급", btn_back: "이전으로",
            spec_dof: "활성 자유도", val_joints: "64 관절", spec_engine: "AI 엔진", spec_sensory: "센서 어레이", spec_uptime: "가동 시간",
            tag_assistance: "기술 지원", tag_resources: "리소스", tag_comms: "통신", btn_access_repo: "저장소 액세스",
            tag_dev_network: "개발자 네트워크", btn_access_system: "시스템 접속", btn_create_profile: "프로필 생성",
            tag_auth_personnel: "인가된 인원 전용", footer_text: "© 2024 에테르 다이내믹스. 모든 권리 보유. 인류와 자율성의 최전선에서의 운영.",
            btn_save_changes: "정보 수정", btn_delete: "회원 탈퇴",
            column_news_title: "🌐 글로벌 로봇 & AI 트렌드", column_dev_title: "🛠️ 개발자 노트 & 펌웨어",
            loading_news: "뉴스를 불러오는 중입니다...", loading_dev: "업데이트 내역을 불러오는 중입니다...",
            no_changelog: "등록된 업데이트 내역이 없습니다.", fail_news: "뉴스를 불러오지 못했습니다.", fail_dev: "타임라인을 로드할 수 없습니다.",
            section_social_title: "미디어 & 소셜 센터", sns_title: "에테르 소셜 커넥트", social_subtitle: "에테르 다이내믹스의 최신 성과와 공지 사항을 공식 채널을 통해 확인하세요.", youtube_title: "📹 주요 비디오", btn_visit_channel: "유튜브 채널 방문", sns_connect_title: "🔗 공식 채널 연결", sns_visit_text: "방문 ↗",
            nav_3d_model: "3D 모델", tag_3d_viewer: "인터랙티브 3D 플랫폼 탐색기", title_3d_viewer: "플랫폼<br>비주얼라이저", subtitle_3d_viewer: "드래그하여 회전 · 스크롤하여 줌 · 모든 각도 탐색",
            tab_forge: "포지", tab_nexus: "넥서스", hint_drag: "드래그하여 회전", hint_scroll: "스크롤하여 줌",
            model_forge_desc: "극한의 제조 환경을 위해 설계된 중작업용 산업 휴머노이드. 고토크 액추에이터와 강화된 외골격으로 24/7 연속 운영이 가능합니다.",
            model_nexus_desc: "64개의 자유도와 뉴럴 매핑 어레이를 갖춘 인지 연구 휴머노이드. 첨단 인간-로봇 상호작용 및 생체 피드백 시뮬레이션을 위해 설계되었습니다.",
            spec_height: "높이", spec_weight: "중량"
        }
    };

    let currentLang = localStorage.getItem('lang') || 'en';
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

    // --- 2. View Management ---
    function showView(viewId) {
        const views = document.querySelectorAll('.view');
        views.forEach(v => {
            v.classList.remove('active');
            v.style.display = 'none';
        });

        const target = document.getElementById(viewId + '-view');
        if (target) {
            target.style.display = (viewId === 'auth') ? 'flex' : 'block';
            setTimeout(() => target.classList.add('active'), 50);
            window.scrollTo(0, 0);
        }
        
        if (viewId === 'home') {
            const vid = document.getElementById('hero-video');
            if (vid) vid.play().catch(() => {});
        }

        // FEATURE: Clear forms when switching views to prevent lingering info
        if (viewId === 'auth') {
            const fL = document.getElementById('login-form');
            const fS = document.getElementById('signup-form');
            if (fL) fL.reset();
            if (fS) fS.reset();
        }
    }

    function updateUI() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const k = el.getAttribute('data-i18n');
            if (translations[currentLang][k]) el.innerHTML = translations[currentLang][k];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const k = el.getAttribute('data-i18n-placeholder');
            if (translations[currentLang][k]) el.placeholder = translations[currentLang][k];
        });
        document.getElementById('lang-toggle').textContent = currentLang === 'en' ? 'KR' : 'EN';

        const btn = document.getElementById('auth-btn');
        if (currentUser) {
            btn.innerHTML = translations[currentLang].btn_my_account;
            btn.onclick = () => showView('account');
            if (document.getElementById('acc-name')) document.getElementById('acc-name').value = currentUser.name;
            if (document.getElementById('acc-email')) document.getElementById('acc-email').value = currentUser.email;
        } else {
            btn.innerHTML = translations[currentLang].btn_login;
            btn.onclick = () => showView('auth');
        }
        
        renderPosts();
        loadRoboticsNews();
    }

    // --- 3. Events ---
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            showView('home');
        });
    }

    window.goHome = () => { showView('home'); };

    // Support Section Interactivity
    const qnaForm = document.getElementById('qna-form');
    if (qnaForm) {
        qnaForm.onsubmit = (e) => {
            e.preventDefault();
            alert(currentLang === 'en' ? 'MESSAGE TRANSMITTED.' : '문의가 전송되었습니다.');
            qnaForm.reset();
        };
    }

    document.querySelectorAll('[data-i18n="btn_access_repo"]').forEach(btn => {
        btn.onclick = () => {
            alert(currentLang === 'en' ? 'DOCUMENTATION DOWNLOAD COMPLETE.' : '기술 문서 다운 완료');
        };
    });

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.onclick = (e) => {
            const href = link.getAttribute('href').substring(1);
            if (href.endsWith('-detail')) {
                e.preventDefault(); 
                showView(href);
            } else if (href === 'support' || href === 'community' || href === 'model-3d') {
                e.preventDefault();
                showView(href);
            }
        };
    });

    const exploreBtn = document.getElementById('explore-btn');
    if (exploreBtn) {
        exploreBtn.onclick = () => {
            const target = document.getElementById('type-a-preview');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        };
    }

    document.getElementById('lang-toggle').onclick = () => {
        currentLang = (currentLang === 'en') ? 'ko' : 'en';
        localStorage.setItem('lang', currentLang);
        updateUI();
    };

    document.getElementById('theme-toggle').onclick = () => {
        document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    };

    const tL = document.getElementById('tab-login');
    const tS = document.getElementById('tab-signup');
    const fL = document.getElementById('login-form');
    const fS = document.getElementById('signup-form');

    if (tL && tS) {
        tL.onclick = () => { tL.classList.add('active'); tS.classList.remove('active'); fL.classList.add('active'); fS.classList.remove('active'); };
        tS.onclick = () => { tS.classList.add('active'); tL.classList.remove('active'); fS.classList.add('active'); fL.classList.remove('active'); };
    }

    if (fS) {
        fS.onsubmit = (e) => {
            e.preventDefault();
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push({
                name: document.getElementById('signup-name').value,
                email: document.getElementById('signup-email').value,
                id: document.getElementById('signup-id').value,
                pw: document.getElementById('signup-pw').value
            });
            localStorage.setItem('users', JSON.stringify(users));
            alert(currentLang === 'en' ? 'REGISTRATION SUCCESSFUL.' : '등록이 성공적으로 완료되었습니다.');
            fS.reset();
            tL.click();
        };
    }

    if (fL) {
        fL.onsubmit = (e) => {
            e.preventDefault();
            const id = document.getElementById('login-id').value;
            const pw = document.getElementById('login-pw').value;
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.id === id && u.pw === pw);
            if (user) {
                currentUser = user; localStorage.setItem('currentUser', JSON.stringify(user));
                fL.reset();
                updateUI(); showView('home');
            } else alert(currentLang === 'en' ? 'AUTHENTICATION FAILED.' : '인증에 실패했습니다.');
        };
    }

    // Account Actions Logic
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.onclick = () => {
            currentUser = null; localStorage.removeItem('currentUser');
            updateUI(); showView('home');
        };
    }

    const saveAccBtn = document.getElementById('save-acc-btn');
    if (saveAccBtn) {
        saveAccBtn.onclick = () => {
            if (!currentUser) return;
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const idx = users.findIndex(u => u.id === currentUser.id);
            if (idx !== -1) {
                users[idx].name = document.getElementById('acc-name').value;
                users[idx].email = document.getElementById('acc-email').value;
                currentUser = users[idx];
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                alert(currentLang === 'en' ? 'INFO UPDATED.' : '정보가 수정되었습니다.');
                updateUI();
            }
        };
    }

    const deleteAccBtn = document.getElementById('delete-acc-btn');
    if (deleteAccBtn) {
        deleteAccBtn.onclick = () => {
            if (!currentUser) return;
            if (confirm(currentLang === 'en' ? 'DELETE ACCOUNT?' : '회원 탈퇴를 진행하시겠습니까?')) {
                const users = JSON.parse(localStorage.getItem('users')) || [];
                const newUsers = users.filter(u => u.id !== currentUser.id);
                localStorage.setItem('users', JSON.stringify(newUsers));
                currentUser = null;
                localStorage.removeItem('currentUser');
                updateUI();
                showView('home');
            }
        };
    }

    // =============================================
    // Community — Firebase + 모달 UI
    // =============================================
    let posts = [];
    let _modalMode = null; // 'newPost' | 'editPost' | 'newComment' | 'editComment'
    let _modalContext = {}; // { postId, commentId, ... }

    const modal      = document.getElementById('community-modal');
    const mHeading   = document.getElementById('modal-heading');
    const mTitle     = document.getElementById('modal-title');
    const mBody      = document.getElementById('modal-body');
    const mSubmit    = document.getElementById('modal-submit');
    const mCancel    = document.getElementById('modal-cancel');

    function openModal(mode, context = {}) {
        _modalMode    = mode;
        _modalContext = context;
        mTitle.value  = context.title  || '';
        mBody.value   = context.body   || '';

        if (mode === 'newPost') {
            mHeading.textContent = currentLang === 'en' ? 'CREATE NEW POST' : '새 게시글 작성';
            mTitle.style.display = 'block';
        } else if (mode === 'editPost') {
            mHeading.textContent = currentLang === 'en' ? 'EDIT POST' : '게시글 수정';
            mTitle.style.display = 'block';
        } else if (mode === 'newComment') {
            mHeading.textContent = currentLang === 'en' ? 'WRITE A COMMENT' : '댓글 작성';
            mTitle.style.display = 'none';
        } else if (mode === 'editComment') {
            mHeading.textContent = currentLang === 'en' ? 'EDIT COMMENT' : '댓글 수정';
            mTitle.style.display = 'none';
        }
        modal.style.display = 'flex';
        (mTitle.style.display === 'block' ? mTitle : mBody).focus();
    }

    function closeModal() {
        modal.style.display = 'none';
        mTitle.value = '';
        mBody.value  = '';
        _modalMode   = null;
        _modalContext = {};
    }

    mCancel.onclick = closeModal;
    modal.onclick = e => { if (e.target === modal) closeModal(); };

    mSubmit.onclick = async () => {
        const { db, collection, addDoc, doc, updateDoc, serverTimestamp } = window._fb;
        const title = mTitle.value.trim();
        const body  = mBody.value.trim();
        if (!body) return;

        if (_modalMode === 'newPost') {
            if (!title) return;
            await addDoc(collection(db, 'community_posts'), {
                title, body,
                author: currentUser.name || currentUser.id,
                authorId: currentUser.id,
                stamp: new Date().toLocaleDateString('ko-KR'),
                createdAt: serverTimestamp()
            });

        } else if (_modalMode === 'editPost') {
            if (!title) return;
            await updateDoc(doc(db, 'community_posts', _modalContext.postId), { title, body });

        } else if (_modalMode === 'newComment') {
            await addDoc(collection(db, 'community_posts', _modalContext.postId, 'comments'), {
                body,
                author: currentUser.name || currentUser.id,
                authorId: currentUser.id,
                stamp: new Date().toLocaleDateString('ko-KR'),
                createdAt: serverTimestamp()
            });

        } else if (_modalMode === 'editComment') {
            await updateDoc(
                doc(db, 'community_posts', _modalContext.postId, 'comments', _modalContext.commentId),
                { body }
            );
        }
        closeModal();
    };

    // --- 게시글 렌더 ---
    function renderPosts() {
        const list = document.getElementById('post-list');
        if (!list) return;
        if (posts.length === 0) {
            list.innerHTML = `<p style="color:var(--text-dim);text-align:center;padding:40px 0;">${currentLang === 'en' ? 'No posts yet. Be the first!' : '아직 게시글이 없습니다. 첫 번째로 작성해보세요!'}</p>`;
            return;
        }
        list.innerHTML = posts.map(p => {
            const isOwner = currentUser && currentUser.id === p.authorId;
            const ownerBtns = isOwner ? `
                <button onclick="window._editPost('${p.id}')" style="font-size:0.75rem;background:transparent;border:1px solid var(--border);color:var(--text-dim);padding:5px 12px;border-radius:8px;cursor:pointer;">${currentLang === 'en' ? 'EDIT' : '수정'}</button>
                <button onclick="window._deletePost('${p.id}')" style="font-size:0.75rem;background:transparent;border:1px solid rgba(255,60,60,0.4);color:#ff4444;padding:5px 12px;border-radius:8px;cursor:pointer;">${currentLang === 'en' ? 'DELETE' : '삭제'}</button>` : '';
            return `
            <div class="support-card" style="margin-bottom:15px;padding:25px;">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;flex-wrap:wrap;">
                    <div style="flex:1;">
                        <span class="product-tag" style="margin-bottom:8px;">${p.author || ''}</span>
                        <h4 style="margin:8px 0;">${p.title || ''}</h4>
                        <p style="font-size:0.9rem;color:var(--text-dim);white-space:pre-wrap;margin-bottom:8px;">${p.body || ''}</p>
                        <p style="font-size:0.75rem;color:var(--text-dim);">${p.stamp || ''}</p>
                    </div>
                    <div style="display:flex;gap:8px;flex-shrink:0;">${ownerBtns}</div>
                </div>
                <div style="margin-top:18px;border-top:1px solid var(--border);padding-top:14px;">
                    <div id="cmt-${p.id}" style="margin-bottom:10px;"></div>
                    <button onclick="window._newComment('${p.id}')" style="font-size:0.8rem;background:transparent;border:1px solid var(--border);color:var(--text-dim);padding:7px 16px;border-radius:10px;cursor:pointer;">${currentLang === 'en' ? '+ COMMENT' : '+ 댓글 달기'}</button>
                </div>
            </div>`;
        }).join('');

        posts.forEach(p => loadComments(p.id));
    }

    // --- 댓글 실시간 로드 ---
    function loadComments(postId) {
        if (!window._fb) return;
        const { db, collection, onSnapshot } = window._fb;
        onSnapshot(collection(db, 'community_posts', postId, 'comments'), snap => {
            const container = document.getElementById('cmt-' + postId);
            if (!container) return;
            const cmts = snap.docs.map(d => ({ id: d.id, ...d.data() }))
                .sort((a, b) => (a.createdAt?.toMillis?.() || 0) - (b.createdAt?.toMillis?.() || 0));
            if (!cmts.length) { container.innerHTML = ''; return; }
            container.innerHTML = cmts.map(c => {
                const isOwner = currentUser && currentUser.id === c.authorId;
                const ownerBtns = isOwner ? `
                    <button onclick="window._editComment('${postId}','${c.id}',\`${c.body.replace(/`/g,"'")}\`)" style="font-size:0.7rem;background:transparent;border:1px solid var(--border);color:var(--text-dim);padding:3px 10px;border-radius:6px;cursor:pointer;">${currentLang === 'en' ? 'EDIT' : '수정'}</button>
                    <button onclick="window._deleteComment('${postId}','${c.id}')" style="font-size:0.7rem;background:transparent;border:1px solid rgba(255,60,60,0.4);color:#ff4444;padding:3px 10px;border-radius:6px;cursor:pointer;">${currentLang === 'en' ? 'DELETE' : '삭제'}</button>` : '';
                return `
                <div style="background:var(--bg-alt);border-radius:10px;padding:10px 14px;margin-bottom:8px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;">
                        <span style="font-size:0.75rem;color:var(--accent);font-family:var(--font-mono);">${c.author}</span>
                        <div style="display:flex;gap:6px;">${ownerBtns}</div>
                    </div>
                    <p style="font-size:0.85rem;color:var(--text);margin-top:6px;white-space:pre-wrap;">${c.body}</p>
                    <p style="font-size:0.7rem;color:var(--text-dim);margin-top:4px;">${c.stamp || ''}</p>
                </div>`;
            }).join('');
        });
    }

    // --- 전역 핸들러 ---
    window._editPost = (postId) => {
        const p = posts.find(x => x.id === postId);
        if (!p) return;
        openModal('editPost', { postId, title: p.title, body: p.body || '' });
    };
    window._deletePost = async (postId) => {
        if (!confirm(currentLang === 'en' ? 'Delete this post?' : '이 게시글을 삭제하시겠습니까?')) return;
        const { db, doc, deleteDoc } = window._fb;
        await deleteDoc(doc(db, 'community_posts', postId));
    };
    window._newComment = (postId) => {
        if (!currentUser) {
            alert(currentLang === 'en' ? 'Please log in to comment.' : '댓글을 달려면 로그인이 필요합니다.');
            showView('auth'); return;
        }
        openModal('newComment', { postId });
    };
    window._editComment = (postId, commentId, body) => {
        openModal('editComment', { postId, commentId, body });
    };
    window._deleteComment = async (postId, commentId) => {
        if (!confirm(currentLang === 'en' ? 'Delete this comment?' : '이 댓글을 삭제하시겠습니까?')) return;
        const { db, doc, deleteDoc } = window._fb;
        await deleteDoc(doc(db, 'community_posts', postId, 'comments', commentId));
    };

    // --- Firebase에서 deleteDoc, doc도 노출 필요 → index.html에서 추가 ---
    function loadCommunity() {
        if (!window._fb) { setTimeout(loadCommunity, 300); return; }
        const { db, collection, onSnapshot } = window._fb;
        onSnapshot(collection(db, 'community_posts'), snap => {
            posts = snap.docs.map(d => ({ id: d.id, ...d.data() }))
                .sort((a, b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0));
            renderPosts();
        });
    }
    loadCommunity();

    const newPostBtn = document.getElementById('new-post-btn');
    if (newPostBtn) {
        newPostBtn.onclick = () => {
            if (!currentUser) {
                alert(currentLang === 'en' ? 'Please log in to post.' : '게시글을 작성하려면 로그인이 필요합니다.');
                showView('auth'); return;
            }
            openModal('newPost');
        };
    }

    // --- 3.5 Dynamic Section: News & Changelog ---
    async function loadRoboticsNews() {
        const rssUrl = 'https://techcrunch.com/category/robotics/feed/';
        const apiConverterUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

        try {
            const response = await fetch(apiConverterUrl);
            const data = await response.json();
            
            if (data.status === 'ok') {
                const feedList = document.getElementById('news-feed-list');
                if (!feedList) return;
                feedList.innerHTML = ''; 

                data.items.slice(0, 3).forEach(item => {
                    const date = new Date(item.pubDate).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'ko-KR');
                    const cardHtml = `
                        <a href="${item.link}" target="_blank" class="news-card">
                            <div class="news-card-title">${item.title}</div>
                            <div class="news-card-meta">${date} | ${item.author || 'TechCrunch'}</div>
                        </a>
                    `;
                    feedList.insertAdjacentHTML('beforeend', cardHtml);
                });
            } else {
                throw new Error('RSS parsing failed');
            }
        } catch (error) {
            console.error('Failed to load news:', error);
            const feedList = document.getElementById('news-feed-list');
            if (feedList) {
                feedList.innerHTML = `<p style="font-family:var(--font-mono);font-size:0.85rem;color:var(--text-dim);text-align:center;padding:20px 0;">${translations[currentLang].fail_news}</p>`;
            }
        }
    }

    function loadDevNotes() {
        if (!window._fb) { setTimeout(loadDevNotes, 300); return; }
        const { db, collection, onSnapshot, query, orderBy, limit } = window._fb;
        
        const q = query(
            collection(db, 'changelog'),
            orderBy('timestamp', 'desc'),
            limit(3)
        );

        onSnapshot(q, (snapshot) => {
            const timelineList = document.getElementById('timeline-list');
            if (!timelineList) return;
            timelineList.innerHTML = ''; 

            if (snapshot.empty) {
                timelineList.innerHTML = `<p style="font-family:var(--font-mono);font-size:0.85rem;color:var(--text-dim);text-align:center;padding:20px 0;">${translations[currentLang].no_changelog}</p>`;
                return;
            }

            snapshot.forEach((doc) => {
                const data = doc.data();
                const date = data.timestamp ? new Date(data.timestamp.toDate()).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'ko-KR') : (currentLang === 'en' ? 'Just now' : '방금 전');
                
                const itemHtml = `
                    <div class="timeline-item">
                        <span class="version-badge">${data.version || 'v1.0.0'}</span>
                        <div class="timeline-date">${date}</div>
                        <div class="timeline-title">${data.title}</div>
                        <div class="timeline-desc">${data.content ? data.content.replace(/\n/g, '<br>') : ''}</div>
                    </div>
                `;
                timelineList.insertAdjacentHTML('beforeend', itemHtml);
            });
        }, (error) => {
            console.error('Failed to load dev logs:', error);
            const timelineList = document.getElementById('timeline-list');
            if (timelineList) {
                timelineList.innerHTML = `<p style="font-family:var(--font-mono);font-size:0.85rem;color:var(--text-dim);text-align:center;padding:20px 0;">${translations[currentLang].fail_dev}</p>`;
            }
        });
    }

    // --- 4. Initialization ---
    if (localStorage.getItem('theme') === 'light') document.body.classList.add('light-mode');
    updateUI();
    loadDevNotes();
    showView('home');

    // --- 5. Three.js 3D Robot Viewer ---
    (function init3DViewer() {
        const canvas = document.getElementById('robot-canvas');
        if (!canvas) return;

        // Lazy-load Three.js from CDN
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
        script.onload = () => setup3DScene(canvas);
        document.head.appendChild(script);
    })();

    function setup3DScene(canvas) {
        const THREE = window.THREE;
        if (!THREE) return;

        // helpers
        function mkMat(color, rough, metal, emissive, emInt, extra) {
            return new THREE.MeshStandardMaterial(Object.assign({ color, roughness: rough, metalness: metal, emissive: emissive || 0x000000, emissiveIntensity: emInt || 0 }, extra || {}));
        }
        function box(w, h, d, mat, x, y, z) {
            const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
            m.position.set(x, y, z); m.castShadow = true; return m;
        }
        function cyl(rt, rb, h, seg, mat, x, y, z, rx, rz) {
            const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
            m.position.set(x, y, z);
            if (rx !== undefined) m.rotation.x = rx;
            if (rz !== undefined) m.rotation.z = rz;
            m.castShadow = true; return m;
        }
        function sph(r, seg, mat, x, y, z) {
            const m = new THREE.Mesh(new THREE.SphereGeometry(r, seg, seg), mat);
            m.position.set(x, y, z); m.castShadow = true; return m;
        }

        // --- Scene setup ---
        const scene = new THREE.Scene();
        scene.background = null;
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
        camera.position.set(0, 0.5, 5.2);
        camera.lookAt(0, 0.2, 0);
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        function resize() {
            const w = canvas.parentElement ? canvas.parentElement.clientWidth : 800;
            const h = Math.round(w * 0.75);
            if (w > 0) {
                renderer.setSize(w, h, false);
                camera.aspect = w / h;
                camera.updateProjectionMatrix();
            }
        }
        
        // Use ResizeObserver to handle visibility changes and parent container resizes
        const resizeObserver = new ResizeObserver(() => resize());
        if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);
        
        resize();
        window.addEventListener('resize', resize);

        // Lights
        scene.add(new THREE.AmbientLight(0xffffff, 0.6));
        const key = new THREE.DirectionalLight(0xffffff, 1.4);
        key.position.set(4, 8, 5); key.castShadow = true; scene.add(key);
        const rimLight = new THREE.DirectionalLight(0xF5C400, 1.0);
        rimLight.position.set(-4, 3, -3); scene.add(rimLight);
        const fill = new THREE.PointLight(0x8888ff, 0.4, 20);
        fill.position.set(0, -1, 3); scene.add(fill);

        // Grid
        const grid = new THREE.GridHelper(12, 24, 0xF5C400, 0x1a1a1a);
        grid.position.y = -2.0; grid.material.opacity = 0.45; grid.material.transparent = true;
        scene.add(grid);

        // ==============================================
        // FORGE — ROBOTIS FFW-BG2 (Industrial, White Shield, Black Arms, Central Post)
        // ==============================================
        const forgeG = new THREE.Group();
        scene.add(forgeG);

        const fBod = mkMat(0x111111, 0.40, 0.80); // Matte black backing
        const fWht = mkMat(0xFAFAFA, 0.15, 0.50); // Glossy white armor
        const fJnt = mkMat(0x1F1F1F, 0.50, 0.70); // Dark grey joints
        const fSil = mkMat(0x999999, 0.30, 0.90); // Silver extrusions
        const fSen = mkMat(0x00CCFF, 0.05, 0.95, 0x006699, 1.2, { transparent: true, opacity: 0.90 });

        // 1. Heavy Base Post and Stand
        forgeG.add(box(0.95, 0.15, 0.80, fBod, 0, -1.82, 0)); // Flat heavy plate
        forgeG.add(box(0.18, 1.20, 0.20, fBod, 0, -1.15, -0.15)); // Main vertical column

        // 2. Torso (Matte Black Backing + Glossy White Front Plate)
        const fTorso = new THREE.Group();
        fTorso.add(box(0.48, 0.45, 0.30, fBod, 0, 0, -0.05)); // Black backing
        // Glossy White Shield
        const wShieldGeo = new THREE.CylinderGeometry(0.50, 0.50, 0.45, 32, 1, false, 0, Math.PI);
        const wShield = new THREE.Mesh(wShieldGeo, fWht);
        wShield.rotation.z = Math.PI / 2;
        wShield.rotation.x = Math.PI / 2;
        wShield.position.set(0, 0, 0.08);
        wShield.scale.set(0.5, 1, 0.6);
        fTorso.add(wShield);
        
        fTorso.add(box(0.55, 0.15, 0.25, fJnt, 0, -0.15, 0)); // Shoulder mount bar
        fTorso.position.set(0, -0.60, 0); // Attached to lift post
        forgeG.add(fTorso);

        // 3. Head (Tight White Dome, no neck)
        const fHeadMount = new THREE.Group();
        // White Helmet Cap
        const fHelmetGeo = new THREE.SphereGeometry(0.20, 32, 16, 0, Math.PI*2, 0, Math.PI/1.8);
        const fHelmet = new THREE.Mesh(fHelmetGeo, fWht);
        fHelmet.position.set(0, 0.0, 0);
        fHeadMount.add(fHelmet);
        fHeadMount.add(box(0.24, 0.10, 0.08, fBod, 0, 0.02, 0.15)); // Sensor bar protruding
        fHeadMount.add(sph(0.04, 16, fSen, -0.08, 0.02, 0.19));
        fHeadMount.add(sph(0.04, 16, fSen,  0.08, 0.02, 0.19));
        fHeadMount.position.set(0, 0.22, 0); // Seated right on top of torso
        fTorso.add(fHeadMount);

        // 4. Arms (Black/Dark, Industrial Cylinders)
        function buildForgeArm(xSign) {
            const arm = new THREE.Group();
            
            // Shoulder Yaw
            arm.add(cyl(0.09, 0.09, 0.12, 16, fBod, 0, 0, 0, Math.PI/2));
            // Shoulder Pitch
            const uArm = new THREE.Group();
            uArm.add(cyl(0.10, 0.10, 0.14, 16, fJnt, 0, -0.08, 0));
            uArm.add(cyl(0.07, 0.07, 0.35, 16, fBod, 0, -0.28, 0)); // Sleek black pipe arm
            arm.add(uArm);
            
            // Elbow
            const eJoint = cyl(0.09, 0.09, 0.13, 16, fJnt, 0, -0.50, 0, Math.PI/2);
            arm.add(eJoint);
            
            // Forearm
            const fArm = new THREE.Group();
            fArm.add(cyl(0.065, 0.065, 0.32, 16, fBod, 0, -0.68, 0));
            arm.add(fArm);
            
            // Wrist
            fArm.add(cyl(0.06, 0.06, 0.10, 16, fJnt, 0, -0.86, 0, Math.PI/2));
            
            // Industrial Grippers
            const gap = 0.04;
            fArm.add(box(0.12, 0.05, 0.07, fBod, 0, -0.92, 0)); // base
            fArm.add(box(0.025, 0.14, 0.06, fJnt,  gap, -1.00, 0)); 
            fArm.add(box(0.025, 0.14, 0.06, fJnt, -gap, -1.00, 0));
            
            arm.position.set(xSign * 0.35, -0.15, 0); 
            arm.rotation.x = -0.1;
            fArm.rotation.x = -0.15;
            
            return { armGroup: arm, upper: uArm, fore: fArm };
        }

        const fArmR = buildForgeArm(1);
        const fArmL = buildForgeArm(-1);
        fTorso.add(fArmR.armGroup);
        fTorso.add(fArmL.armGroup);
        const fUAR = fArmR.upper;
        const fUAL = fArmL.upper;

        forgeG.position.y = 0.60;

        // ==============================================
        // NEXUS — Tesla Optimus Gen 2 (Hyper-realistic, pure black visor, white plate overlays)
        // ==============================================
        const nexusG = new THREE.Group();
        nexusG.visible = false;
        scene.add(nexusG);

        const nWht = mkMat(0xFDFDFD, 0.15, 0.40); // Shiny white armor plates
        const nSlv = mkMat(0x8899A6, 0.25, 0.85); // Silver
        const nJnt = mkMat(0x181A1C, 0.40, 0.70); // Dark skeleton
        const nCrC = mkMat(0x111115, 0.80, 0.20); // Matte core cylinders
        const nVis = mkMat(0x000000, 0.02, 0.95); // Completely smooth, pure black glass
        const nDrk = mkMat(0x222222, 0.30, 0.50);

        // 1. Pelvis & Waist (Slim, connected by spine)
        nexusG.add(box(0.28, 0.14, 0.18, nJnt, 0, -0.90, 0)); // Inner pelvis
        nexusG.add(box(0.30, 0.08, 0.19, nWht, 0, -0.88, 0.02)); // Front white plate

        // Midsection: hollow with central spine/actuators
        nexusG.add(cyl(0.04, 0.04, 0.30, 16, nCrC, 0, -0.70, -0.04)); // Central spine
        nexusG.add(cyl(0.015, 0.015, 0.28, 8, nSlv, -0.08, -0.70, 0.02)); // L hydraulic
        nexusG.add(cyl(0.015, 0.015, 0.28, 8, nSlv,  0.08, -0.70, 0.02)); // R hydraulic

        // 2. Torso Chest
        const chest = new THREE.Group();
        chest.add(box(0.34, 0.36, 0.18, nJnt, 0, 0, 0)); // Inner chest block
        // White chest armor
        chest.add(box(0.36, 0.34, 0.06, nWht, 0, 0, 0.08)); 
        // Small chest sensor/logo center
        chest.add(box(0.10, 0.10, 0.02, nDrk, 0, 0.05, 0.12));

        // 3. Head (Pure black visor + white crown)
        chest.add(cyl(0.045, 0.045, 0.10, 16, nCrC, 0, 0.20, 0)); // Subtle neck
        chest.add(sph(0.045, 16, nJnt, 0, 0.25, 0)); 

        const nHd = new THREE.Group();
        const headWhtGeo = new THREE.SphereGeometry(0.165, 32, 24, 0, Math.PI*2, 0, Math.PI/2.1);
        const headWht = new THREE.Mesh(headWhtGeo, nWht);
        headWht.rotation.x = Math.PI; // White dome on top/back
        headWht.position.set(0, 0, -0.02);
        nHd.add(headWht);
        
        // Face Visor (Glossy Black)
        const faceGeo = new THREE.SphereGeometry(0.160, 32, 24, 0, Math.PI*2, 0, Math.PI/2.1);
        const face = new THREE.Mesh(faceGeo, nVis);
        // Positioned covering the front
        face.rotation.x = -Math.PI/2;
        face.position.set(0, 0.01, 0.02);
        nHd.add(face);
        
        nHd.position.set(0, 0.38, 0);
        chest.add(nHd);
        chest.position.set(0, -0.40, 0);
        nexusG.add(chest);

        // 4. Arms (Inner black joints + Outer white shells)
        function buildNexusArm(xSign) {
            const arm = new THREE.Group();
            
            // Shoulder
            arm.add(sph(0.10, 24, nJnt, 0, 0, 0));
            arm.add(cyl(0.11, 0.11, 0.04, 24, nWht, xSign*0.02, 0.02, 0, 0, 0, Math.PI/2)); // outer cap
            
            // Upper Arm
            const uArm = new THREE.Group();
            uArm.add(cyl(0.055, 0.05, 0.35, 16, nJnt, 0, -0.25, 0)); // Inner bone
            uArm.add(cyl(0.065, 0.06, 0.28, 16, nWht, 0, -0.25, 0.01)); // Outer sleeve setup
            arm.add(uArm);
            
            // Elbow
            arm.add(cyl(0.05, 0.05, 0.11, 16, nSlv, 0, -0.44, 0, Math.PI/2));
            
            // Forearm
            const fArm = new THREE.Group();
            fArm.add(cyl(0.045, 0.035, 0.35, 16, nJnt, 0, -0.20, 0));
            fArm.add(cyl(0.055, 0.045, 0.28, 16, nWht, 0, -0.20, 0.01)); // Sleeve
            fArm.position.set(0, -0.44, 0);
            fArm.rotation.x = -0.05;
            arm.add(fArm);
            
            // Extremely detailed hands
            const hand = new THREE.Group();
            hand.add(box(0.07, 0.09, 0.025, nWht, 0, -0.02, 0.01)); // Palm back (white)
            hand.add(box(0.065, 0.08, 0.015, nDrk, 0, -0.02, -0.01)); // Palm inner
            
            for(let i=0; i<4; i++) {
                const finger = new THREE.Group();
                finger.add(cyl(0.008, 0.006, 0.035, 8, nSlv, 0, -0.02, 0));
                finger.add(cyl(0.006, 0.005, 0.035, 8, nWht, 0, -0.055, 0.005));
                finger.rotation.x = 0.08;
                finger.position.set(-0.020 + (i*0.0135), -0.05, 0);
                hand.add(finger);
            }
            const thumb = new THREE.Group();
            thumb.add(cyl(0.009, 0.007, 0.04, 8, nWht, 0, 0, 0));
            thumb.rotation.z = xSign * 0.5;
            thumb.rotation.x = 0.15;
            thumb.position.set(xSign*0.03, -0.03, 0.02);
            hand.add(thumb);
            
            hand.position.set(0, -0.40, 0);
            fArm.add(hand);

            arm.position.set(xSign * 0.24, 0.12, 0); 
            arm.rotation.z = xSign * 0.08; 
            
            return { armGroup: arm, upper: uArm, fore: fArm };
        }

        const nArmR = buildNexusArm(1);
        const nArmL = buildNexusArm(-1);
        chest.add(nArmR.armGroup);
        chest.add(nArmL.armGroup);
        const nUAR = nArmR.upper;
        const nUAL = nArmL.upper;

        // 5. Legs
        function buildNexusLeg(xSign) {
            const leg = new THREE.Group();
            
            leg.add(sph(0.10, 16, nJnt, 0, 0, 0));
            leg.add(cyl(0.08, 0.08, 0.10, 16, nSlv, 0, 0, 0.06, Math.PI/2)); // Actuator

            // Thigh
            leg.add(cyl(0.075, 0.065, 0.45, 16, nJnt, 0, -0.28, 0)); // Inner bone
            leg.add(box(0.16, 0.38, 0.16, nWht, 0, -0.28, 0.01)); // Shield
            
            // Knee
            leg.add(cyl(0.065, 0.065, 0.12, 16, nJnt, 0, -0.55, 0, 0, 0, Math.PI/2));

            // Calf
            leg.add(cyl(0.06, 0.045, 0.45, 16, nJnt, 0, -0.80, 0)); // Inner bone
            leg.add(box(0.13, 0.38, 0.11, nWht, 0, -0.80, 0.01)); // Shield
            
            // Ankle & Foot (shoe style)
            leg.add(sph(0.05, 16, nJnt, 0, -1.05, 0));
            leg.add(box(0.11, 0.055, 0.20, nWht, 0, -1.10, 0.04)); // Main shoe body
            leg.add(box(0.10, 0.045, 0.07, nDrk, 0, -1.10, 0.18)); // Sliced toe cap

            leg.position.set(xSign * 0.14, -0.95, 0);
            return leg;
        }

        const legR = buildNexusLeg(1);
        const legL = buildNexusLeg(-1);
        nexusG.add(legR);
        nexusG.add(legL);

        nexusG.position.y = 0.90;

        // ==============================================
        // Orbit Controls (shared)
        // ==============================================
        let isDragging = false, prevMouse = { x: 0, y: 0 };
        let rotY = 0.3, rotX = -0.06;
        let tRotY = rotY, tRotX = rotX;
        let zoom = 5.2, tZoom = zoom;

        canvas.addEventListener('mousedown', e => { isDragging = true; prevMouse = { x: e.clientX, y: e.clientY }; });
        window.addEventListener('mouseup', () => isDragging = false);
        window.addEventListener('mousemove', e => {
            if (!isDragging) return;
            tRotY += (e.clientX - prevMouse.x) * 0.008;
            tRotX += (e.clientY - prevMouse.y) * 0.005;
            tRotX = Math.max(-0.55, Math.min(0.55, tRotX));
            prevMouse = { x: e.clientX, y: e.clientY };
        });
        canvas.addEventListener('wheel', e => {
            e.preventDefault();
            tZoom = Math.max(3.0, Math.min(9.0, tZoom + e.deltaY * 0.005));
        }, { passive: false });
        let lastTouch = null;
        canvas.addEventListener('touchstart', e => { lastTouch = e.touches[0]; });
        canvas.addEventListener('touchmove', e => {
            e.preventDefault();
            const t = e.touches[0];
            if (lastTouch) {
                tRotY += (t.clientX - lastTouch.clientX) * 0.010;
                tRotX += (t.clientY - lastTouch.clientY) * 0.007;
                tRotX = Math.max(-0.55, Math.min(0.55, tRotX));
            }
            lastTouch = t;
        }, { passive: false });

        // ==============================================
        // Model switch
        // ==============================================
        const models = {
            forge: { group: forgeG, rimCol: 0xF5C400, gridCol: 0xF5C400, name: 'FORGE', tag: 'INDUSTRIAL AUTONOMY', yBase: 0.60, zoom: 5.2, specs: { height:'1.61M', weight:'85KG', payload:'250KG', dof:'19 JOINTS' } },
            nexus: { group: nexusG, rimCol: 0xC8D0D8, gridCol: 0x888888, name: 'NEXUS', tag: 'COGNITIVE RESEARCH',  yBase: 0.72, zoom: 5.8, specs: { height:'1.73M', weight:'57KG', payload:'40KG',  dof:'40 JOINTS' } }
        };

        function switchModel(type) {
            const d = models[type];
            forgeG.visible = (type === 'forge');
            nexusG.visible = (type === 'nexus');
            rimLight.color.setHex(d.rimCol);
            grid.material.color.setHex(d.gridCol);
            tZoom = d.zoom;
            const el = id => document.getElementById(id);
            if (el('model3d-name'))  el('model3d-name').textContent  = d.name;
            if (el('model3d-tag'))   el('model3d-tag').textContent   = d.tag;
            if (el('spec-height'))   el('spec-height').textContent   = d.specs.height;
            if (el('spec-weight'))   el('spec-weight').textContent   = d.specs.weight;
            if (el('spec-payload'))  el('spec-payload').textContent  = d.specs.payload;
            if (el('spec-dof'))      el('spec-dof').textContent      = d.specs.dof;
            const descEl = el('model3d-desc');
            if (descEl) descEl.textContent = translations[currentLang][type === 'forge' ? 'model_forge_desc' : 'model_nexus_desc'];
        }

        document.querySelectorAll('.model3d-tab').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.model3d-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                switchModel(btn.dataset.model);
            });
        });

        // ==============================================
        // Animate
        // ==============================================
        let clock = 0;
        function animate() {
            requestAnimationFrame(animate);
            clock += 0.010;

            rotY += (tRotY - rotY) * 0.08;
            rotX += (tRotX - rotX) * 0.08;
            zoom += (tZoom  - zoom) * 0.08;

            const sway = !isDragging ? Math.sin(clock * 0.4) * 0.025 : 0;
            const bob  = Math.sin(clock * 0.7) * 0.030;

            forgeG.rotation.y = rotY + sway;
            forgeG.rotation.x = rotX;
            forgeG.position.y = models.forge.yBase + bob;

            nexusG.rotation.y = rotY + sway;
            nexusG.rotation.x = rotX;
            nexusG.position.y = models.nexus.yBase + bob;

            // FORGE arm idle (Subtle shoulder pivot)
            fUAR.rotation.x = -0.1 + Math.sin(clock * 0.8) * 0.025;
            fUAL.rotation.x = -0.1 - Math.sin(clock * 0.8) * 0.025;
            // NEXUS arm idle (Subtle arm swing)
            nUAR.rotation.x = Math.sin(clock * 0.8) * 0.020;
            nUAL.rotation.x = -Math.sin(clock * 0.8) * 0.020;

            camera.position.z = zoom;
            renderer.render(scene, camera);
        }
        animate();
    }
});

