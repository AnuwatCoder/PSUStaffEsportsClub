    const loadingScreen = document.getElementById('loadingScreen');
    document.body.classList.add('overflow-hidden');

    window.addEventListener('load', () => {
      window.setTimeout(() => {
        loadingScreen.classList.add('loader-fade');
        document.body.classList.remove('overflow-hidden');
      }, 1900);
    });

    window.setTimeout(() => {
      loadingScreen.classList.add('loader-fade');
      document.body.classList.remove('overflow-hidden');
    }, 3600);

    const menuBtn = document.getElementById('menuBtn');
    const menuIcon = document.getElementById('menuIcon');
    const mobileMenu = document.getElementById('mobileMenu');
    const navbar = document.getElementById('navbar');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuIcon.classList.toggle('fa-bars');
      menuIcon.classList.toggle('fa-xmark');
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-xmark');
      });
    });

    const activityDetails = {
      practice: {
        badge: 'Weekly Training',
        title: 'ฝึกซ้อมประจำสัปดาห์',
        date: 'ทุกวันพุธ / 18:00 - 21:00',
        image: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&q=80',
        description: 'กิจกรรมซ้อมหลักของ PSU Staff Esports Club สำหรับพัฒนาทีมเวิร์ก การสื่อสารในเกม การวางแผนรอบแข่งขัน และการวิเคราะห์ข้อผิดพลาดจาก scrim เพื่อยกระดับผู้เล่นอย่างต่อเนื่อง',
        audience: 'สมาชิกที่ต้องการซ้อมจริงจัง ผู้เล่นที่กำลังสร้างทีม และผู้ที่อยากพัฒนาระบบสื่อสารระหว่างการแข่งขัน',
        benefit: 'ได้ตารางซ้อมที่ชัดเจน feedback จากทีม ได้ทดลองแผนใหม่ และมีโอกาสคัดตัวเข้าสู่ทีมแข่งขันของชมรม'
      },
      internal: {
        badge: 'Club Tournament',
        title: 'การแข่งขันภายในชมรม',
        date: '22 Sep 2026',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
        description: 'ทัวร์นาเมนต์ภายในสำหรับเปิดพื้นที่ให้สมาชิกทุกระดับรวมทีม แข่งขัน ทดลองบทบาท และค้นหาผู้เล่นหน้าใหม่ที่มีศักยภาพสำหรับรายการแข่งขันภายนอก',
        audience: 'สมาชิกใหม่ สมาชิกปัจจุบัน ทีมที่อยากทดสอบฝีมือ และผู้เล่นที่ต้องการประสบการณ์การแข่งขันจริง',
        benefit: 'ได้ประสบการณ์ทัวร์นาเมนต์จริง เรียนรู้แรงกดดันในสนาม และมีโอกาสถูกคัดเลือกเข้าสู่ทีมหลัก'
      },
      workshop: {
        badge: 'Esports Workshop',
        title: 'Workshop Esports',
        date: '05 Oct 2026',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
        description: 'เวิร์กชอปภาพรวมอุตสาหกรรมอีสปอร์ต ตั้งแต่บทบาทผู้เล่น โค้ช ผู้จัดการแข่งขัน ฝ่าย production สตรีมเมอร์ ไปจนถึงการทำงานเป็นทีมในอีเวนต์จริง',
        audience: 'ผู้ที่สนใจวงการอีสปอร์ตทั้งสายแข่งขัน สายจัดงาน สายคอนเทนต์ และสาย production',
        benefit: 'เข้าใจเส้นทางอาชีพในอีสปอร์ต เห็นบทบาทที่เหมาะกับตนเอง และได้แนวทางเริ่มสร้างผลงานในชมรม'
      },
      coaching: {
        badge: 'Performance Lab',
        title: 'Coaching Session',
        date: '12 Oct 2026',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
        description: 'เซสชันวิเคราะห์ gameplay รายบุคคลและรายทีม พร้อม feedback ด้าน decision making, positioning, communication และการปรับ mindset ก่อนแข่ง',
        audience: 'ผู้เล่นที่ต้องการแก้จุดอ่อนเฉพาะด้าน ทีมแข่งขัน และสมาชิกที่อยากพัฒนาฝีมืออย่างมีระบบ',
        benefit: 'ได้รับ feedback ที่นำไปใช้ได้จริง รู้จุดแข็งจุดอ่อนของตัวเอง และมีแผนฝึกซ้อมหลังจบเซสชัน'
      },
      streaming: {
        badge: 'Broadcast Studio',
        title: 'Live Streaming',
        date: '19 Oct 2026',
        image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1200&q=80',
        description: 'กิจกรรมฝึกจัดรายการและสตรีมการแข่งขัน เรียนรู้การเตรียม overlay, scene, audio, schedule, live operation และการดูแลประสบการณ์ผู้ชม',
        audience: 'สมาชิกสาย production, streamer, observer, social media และผู้ที่สนใจทำรายการแข่งขันสด',
        benefit: 'ได้ทดลองทำงานหลังบ้านจริง เข้าใจ workflow การถ่ายทอดสด และสร้าง portfolio ด้าน esports production'
      },
      casting: {
        badge: 'Caster Training',
        title: 'Casting Workshop',
        date: '26 Oct 2026',
        image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=80',
        description: 'เวิร์กชอปพัฒนาทักษะนักพากย์เกม ตั้งแต่การอ่านเกม การสร้างจังหวะเสียง การเล่า story ของแมตช์ และการทำงานร่วมกับ production ระหว่าง live',
        audience: 'ผู้ที่อยากเป็น caster, host, analyst หรือผู้ที่ต้องการสื่อสารเกมให้สนุกและเข้าใจง่าย',
        benefit: 'ได้ฝึกพากย์จริง รับ feedback เรื่องน้ำเสียงและจังหวะ พร้อมเรียนรู้วิธีเล่าเกมแบบมืออาชีพ'
      }
    };

    const activityDetail = document.getElementById('activity-detail');
    const activityBack = document.getElementById('activityBack');
    const activityDetailImage = document.getElementById('activityDetailImage');
    const activityDetailBadge = document.getElementById('activityDetailBadge');
    const activityDetailTitle = document.getElementById('activityDetailTitle');
    const activityDetailDate = document.getElementById('activityDetailDate');
    const activityDetailDescription = document.getElementById('activityDetailDescription');
    const activityDetailAudience = document.getElementById('activityDetailAudience');
    const activityDetailBenefit = document.getElementById('activityDetailBenefit');

    document.querySelectorAll('.activity-more').forEach((button) => {
      button.addEventListener('click', () => {
        const detail = activityDetails[button.dataset.activity];
        if (!detail) return;

        activityDetailImage.src = detail.image;
        activityDetailImage.alt = detail.title;
        activityDetailBadge.textContent = detail.badge;
        activityDetailTitle.textContent = detail.title;
        activityDetailDate.textContent = detail.date;
        activityDetailDescription.textContent = detail.description;
        activityDetailAudience.textContent = detail.audience;
        activityDetailBenefit.textContent = detail.benefit;
        activityDetail.classList.remove('hidden');
        activityDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    activityBack.addEventListener('click', () => {
      activityDetail.classList.add('hidden');
      document.getElementById('activities').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('bg-gray-950', 'shadow-neon');
        navbar.classList.remove('bg-gray-950/55');
      } else {
        navbar.classList.remove('bg-gray-950', 'shadow-neon');
        navbar.classList.add('bg-gray-950/55');
      }
    });
