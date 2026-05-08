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
            btn_save_changes: "SAVE CHANGES", btn_delete: "DELETE ACCOUNT"
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
            btn_save_changes: "정보 수정", btn_delete: "회원 탈퇴"
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

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.onclick = (e) => {
            const href = link.getAttribute('href').substring(1);
            if (href.endsWith('-detail')) {
                e.preventDefault(); 
                showView(href);
            } else if (href === 'support' || href === 'community') {
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

    // --- 4. Initialization ---
    if (localStorage.getItem('theme') === 'light') document.body.classList.add('light-mode');
    updateUI();
    showView('home');
});
