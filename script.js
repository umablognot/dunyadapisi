/* ============================================================
DÜNYADA PİSİ LİNUX — GALAKSİ ARŞİVİ v10
Arşiv + Forum · Lazy rendering · Tema · Modal · Animasyon
============================================================ */

(() => {
  "use strict";

  // ============================================================
  // 1. GERÇEK KAYNAKLAR
  // ============================================================
  const ALL_SOURCES = [
    { name: "Pisi Linux Resmi", url: "https://pisilinux.org/" },
    { name: "Pisi Linux Blog", url: "https://pisilinux.org/blog/" },
    { name: "Pisi GitHub", url: "https://github.com/pisilinux" },
    { name: "Pisi Wiki", url: "https://github.com/pisilinux/pisilinux.github.io/wiki" },
    { name: "SourceForge", url: "https://sourceforge.net/projects/pisilinux/" },
    { name: "Pisi Linux Forum", url: "https://pisilinux.org/forum" },
    { name: "Pisi Developer", url: "https://developer.pisilinux.org/" },
    { name: "Pisi Bug Tracker", url: "https://bugs.pisilinux.org/" },

    { name: "get GNU", url: "https://www.getgnu.org/" },
    { name: "Linuxeden", url: "http://www.linuxeden.com/" },
    { name: "Donanım Günlüğü", url: "https://donanimgunlugu.com/" },
    { name: "Webtekno", url: "https://www.webtekno.com/" },
    { name: "Netuv", url: "https://netuv.com/" },
    { name: "Inetmar", url: "https://www.inetmar.com/" },
    { name: "Pisi Life", url: "https://pisilife.wordpress.com/" },
    { name: "SistemLinux", url: "https://www.sistemlinux.org/" },
    { name: "Karar", url: "https://www.karar.com/" },
    { name: "Teknoseyir", url: "https://teknoseyir.com/" },
    { name: "ShiftDelete", url: "https://forum.shiftdelete.net/" },
    { name: "Technopat", url: "https://www.technopat.net/" },
    { name: "Pardus Forumları", url: "https://forum.pardus.org.tr/" },
    { name: "BTT Community", url: "https://btt.community/" },
    { name: "R10.net", url: "https://www.r10.net/" },
    { name: "DonanımHaber", url: "https://forum.donanimhaber.com/" },
    { name: "Archman Topluluğu", url: "https://archman.org/" },
    { name: "Linux Mint Türkiye", url: "https://www.linuxminttr.org/" },
    { name: "Uludağ Sözlük", url: "https://www.uludagsozluk.com/" },
    { name: "Ekşi Sözlük", url: "https://eksisozluk.com/" },

    { name: "DistroWatch", url: "https://distrowatch.com/table.php?distribution=pisi" },
    { name: "Linux.com", url: "https://www.linux.com/" },
    { name: "Tux Machines", url: "https://tuxmachines.org/" },
    { name: "LinuxBSDos", url: "http://www.linuxbsdos.com/" },
    { name: "Softpedia News", url: "https://news.softpedia.com/" },
    { name: "LinuxLinks", url: "https://www.linuxlinks.com/" },
    { name: "It's FOSS", url: "https://itsfoss.com/" },
    { name: "OMG! Ubuntu!", url: "https://www.omgubuntu.co.uk/" },
    { name: "Linuxiac", url: "https://linuxiac.com/" },
    { name: "9to5Linux", url: "https://9to5linux.com/" },
    { name: "Phoronix", url: "https://www.phoronix.com/" },
    { name: "LinuxMind", url: "https://linuxmind.dev/" },
    { name: "The Distro Write Project", url: "https://thedistrowriteproject.blogspot.com/" },
    { name: "LinuxQuestions.org", url: "https://www.linuxquestions.org/" },
    { name: "Dedoimedo", url: "http://www.dedoimedo.com/" },
    { name: "Choose Linux Podcast", url: "https://chooselinux.show/" },
    { name: "Podtail", url: "https://podtail.com/" },
    { name: "Podbay", url: "https://podbay.fm/" },

    { name: "Linux Community", url: "https://www.linux-community.de/" },
    { name: "Linux Magazin", url: "https://www.linux-magazin.de/" },
    { name: "Freies Magazin", url: "https://freies-magazin.de/" },
    { name: "OpenOS", url: "https://openos.at/" },
    { name: "Alternativen-zu", url: "https://alternativen-zu.net/" },

    { name: "Ubunlog (RU)", url: "https://ru.ubunlog.com/" },
    { name: "Linux.org.ru", url: "https://www.linux.org.ru/" },
    { name: "PCNews.ru", url: "https://pcnews.ru/" },
    { name: "Wikinews (RU)", url: "https://ru.wikinews.org/" },

    { name: "Ubunlog (ES)", url: "https://ubunlog.com/" },
    { name: "DesdeLinux", url: "https://blog.desdelinux.net/" },
    { name: "CompuDeMano", url: "https://noticias.compudemano.com/" },

    { name: "SempreUpdate", url: "https://sempreupdate.com.br/" },
    { name: "Edivaldo Brito", url: "https://www.edivaldobrito.com.br/" },
    { name: "Matsuura", url: "https://www.matsuura.com.br/" },

    { name: "Frédéric Bezies", url: "https://blog.fredericbezies-ep.fr/" },
    { name: "Softpedia (IT)", url: "https://linux.softpedia.com/" },
    { name: "Linuxiarze.pl", url: "https://linuxiarze.pl/" },

    { name: "OSChina", url: "https://www.oschina.net/" },
    { name: "CSDN", url: "https://wenku.csdn.net/" },
    { name: "Open-Open", url: "https://www.open-open.com/" },

    { name: "My Computer Life", url: "https://mycomputerlife.com/" },
    { name: "Note.com", url: "https://note.com/" },
    { name: "Kazmal Blog", url: "https://kazmal.blog.jp/" },

    { name: "Feddit.dk (DA)", url: "https://feddit.dk/" },
    { name: "Flathub", url: "https://flathub.org/" },
    { name: "KDE UserBase", url: "https://userbase.kde.org/" },
    { name: "Repology", url: "https://repology.org/" },
    { name: "Cheatography", url: "https://cheatography.com/" },
    { name: "Transifex", url: "https://explore.transifex.com/" },
    { name: "ProHoster", url: "https://prohoster.info/" },
    { name: "AltApps", url: "https://ja.altapps.net/" },
    { name: "MsXLabs", url: "https://www.msxlabs.org/" },
    { name: "Anka Pardus Blog", url: "https://anka-pardus.blogspot.com/" },
    { name: "Erkan Işık", url: "https://erkanisik.com/" },
    { name: "Penguin Reviews", url: "https://penguinreviewslinux.blogspot.com/" }
  ];

  // ============================================================
  // 2. GERÇEK ARŞİV VERİLERİ
  // ============================================================
  const REAL_ENTRIES = [
    {
      year: 2005,
      month: 12,
      day: 27,
      category: "news",
      lang: "tr",
      title: "Pardus Linux 1.0 — PiSi paket yöneticisinin doğuşu",
      url: "https://gonullu.pardus.org.tr/",
      excerpt:
        "TÜBİTAK ULAKBİM tarafından geliştirilen Pardus Linux'un ilk kurulabilir sürümü yayınlandı. Kendine özgü PİSİ paket yöneticisi ve YALI kurulum aracı ile geliyordu.",
      source: "Pardus Gönüllü Platformu"
    },
    {
      year: 2012,
      month: 1,
      day: 15,
      category: "news",
      lang: "en",
      title: "Pardus resmen EOL ilan edildi — Pisi Linux projesi doğdu",
      url: "https://www.linux.com/",
      excerpt:
        "Orijinal Pardus Linux, Ocak 2012'de EOL ilan edildi. Anka Takımı, projeyi Pisi Linux adıyla sürdürmeye karar verdi.",
      source: "Linux.com"
    },
    {
      year: 2013,
      month: 6,
      day: 21,
      category: "review",
      lang: "en",
      title: "Pisi Linux Beta: A Real-life Test — Tux Machines incelemesi",
      url: "https://news.tuxmachines.org/",
      excerpt:
        "Tux Machines'de yayınlanan gerçek hayat testinde Pisi Linux Beta'nın Grub 2 kurulumu ve Kaptan karşılama ekranı incelendi.",
      source: "Tux Machines"
    },
    {
      year: 2014,
      month: 3,
      day: 18,
      category: "news",
      lang: "en",
      title: "Pisi Linux 1.0 RC2 \"Erdinç\" tamamlandı — 14 dil desteği",
      url: "https://www.linux.com/",
      excerpt:
        "Pisi Linux 1.0 RC2 sürümü tamamlandı. İngilizce, Almanca, Rusça, Türkçe, Fransızca dahil 14 dile çevrildi.",
      source: "Linux.com"
    },
    {
      year: 2014,
      month: 8,
      day: 14,
      category: "release",
      lang: "tr",
      title: "Pisi Linux 1.0 — İlk kararlı sürüm yayınlandı",
      url: "https://pisilinux.org/",
      excerpt:
        "Pisi Linux'un ilk kararlı sürümü olan 1.0 yayınlandı. Rolling release modeli, Kernel 3.15.6 ve KDE 4.13.2 ile geldi.",
      source: "Pisi Linux Resmi"
    },
    {
      year: 2014,
      month: 8,
      day: 15,
      category: "review",
      lang: "es",
      title: "Disponible Pisi Linux 1.0 Final — Pisi Life incelemesi",
      url: "https://pisilife.wordpress.com/2014/08/15/disponible-pisi-linux-1-0-final/",
      excerpt:
        "Pisi Life blogunda Pisi Linux 1.0 final sürümü incelendi. Anka Takımı'nın çalışmaları ve İspanyolca dil desteği sorunları ele alındı.",
      source: "Pisi Life"
    },
    {
      year: 2014,
      month: 11,
      day: 5,
      category: "news",
      lang: "en",
      title: "Distribution Release: Pisi Linux 1.1 — DistroWatch duyurusu",
      url: "https://distrowatch.com/table.php?distribution=pisi",
      excerpt:
        "Pisi Linux, eski Pardus geliştiricileri tarafından oluşturulan bağımsız bir dağıtım. Kendi paket yönetimi ve sistem yükleyicisi ile geliyor.",
      source: "DistroWatch"
    },
    {
      year: 2014,
      month: 11,
      day: 10,
      category: "review",
      lang: "en",
      title: "Pisi Linux 1.1 review — LinuxBSDos detaylı inceleme",
      url: "http://www.linuxbsdos.com/2014/11/10/pisi-linux-1-1-review/",
      excerpt:
        "LinuxBSDos tarafından yapılan detaylı incelemede Pisi 1.1'in Dolphin dosya yöneticisi yapılandırması ve genel kullanım deneyimi değerlendirildi.",
      source: "LinuxBSDos"
    },
    {
      year: 2014,
      month: 11,
      day: 6,
      category: "news",
      lang: "de",
      title: "Pardus-Nachfolger Pisi Linux 1.1 ist da — Linux Magazin",
      url: "https://www.linux-magazin.de/",
      excerpt:
        "Linux Magazin, Pisi Linux 1.1 sürümünü duyurdu. systemd kullanmamasına rağmen güncel yazılımlar içerdiği vurgulandı.",
      source: "Linux Magazin"
    },
    {
      year: 2015,
      month: 7,
      day: 7,
      category: "news",
      lang: "tr",
      title: "Yerli işletim sistemi Pisi Linux gelişmeye devam ediyor",
      url: "https://www.karar.com/",
      excerpt:
        "Pardus projesinin 2012 yılında politika değiştirmesiyle birlikte Pardus'u devam ettirmek amacıyla çalışmalar yürüten Anka takımı Pisi Linux 1.2 ile birlikte Pardus'tan bağımsız bir işletim sistemi ortaya koyuyor.",
      source: "Karar"
    },
    {
      year: 2016,
      month: 4,
      day: 23,
      category: "release",
      lang: "tr",
      title: "Pisi Linux 2.0 Beta — systemd olmadan geliyor",
      url: "https://www.getgnu.org/gnulinux/pisi-linux-2-0-beta-kde5-duyuruldu.html",
      excerpt:
        "Pisi-Linux-2.0-Beta-KDE5-Crocus Ancyrensis systemd olmadan geliyor. Kullanıcıların hata bildirimleri için Hata Takip sistemini kullanabilecekleri belirtiliyor.",
      source: "get GNU"
    },
    {
      year: 2018,
      month: 4,
      day: 26,
      category: "release",
      lang: "tr",
      title: "Pisi Linux 2.0 \"Atatürk\" kararlı sürüm yayınlandı",
      url: "https://pisilinux.org/",
      excerpt:
        "Uzun süren beta sürecinin ardından Pisi Linux 2.0, \"Atatürk\" kod adıyla kararlı sürüm olarak yayınlandı.",
      source: "Pisi Linux Resmi"
    },
    {
      year: 2019,
      month: 7,
      day: 25,
      category: "podcast",
      lang: "en",
      title: "Choose Linux Podcast #14: Endeavour OS + Pisi Linux",
      url: "https://chooselinux.show/",
      excerpt:
        "Choose Linux podcast'inin 14. bölümünde Endeavour OS ve Pisi Linux birlikte incelendi. Pisi Linux'un PiSi paket yönetim sistemi vurgulandı.",
      source: "Choose Linux Podcast"
    },
    {
      year: 2019,
      month: 12,
      day: 10,
      category: "news",
      lang: "tr",
      title: "Pisi Linux 2.1.2 çıktı — 14 dil desteği",
      url: "https://www.getgnu.org/gnulinux/pisi-linux-2-1-2-cikti.html",
      excerpt:
        "Pisi Linux'un şu anda İngilizce, Almanca, Hollandaca, Rusça, Türkçe, İspanyolca, Fransızca, İtalyanca, Macarca, Ukraynaca, Hırvatça, İsveççe, Lehçe ve Brezilya Portekizcesi dahil olmak üzere 14 dile çevrildiği belirtiliyor.",
      source: "get GNU"
    },
    {
      year: 2021,
      month: 4,
      day: 15,
      category: "release",
      lang: "tr",
      title: "Pisi Linux 2.2 yayınlandı — 14 dil desteği",
      url: "https://www.getgnu.org/gnulinux/pisi-linux-2-2.html",
      excerpt:
        "Pisi Linux 2.2 sürümü çıktı. Dağıtımın 14 dile çevrildiği ve YALI kurulum aracının güncellendiği belirtildi.",
      source: "get GNU"
    },
    {
      year: 2021,
      month: 10,
      day: 11,
      category: "news",
      lang: "tr",
      title: "Pisi GNU/Linux güncellemesi — kernel-5.10.70 ve Firefox 93.0",
      url: "https://pisilinux.org/blog/content/134-11-10-2021-guncellemesi.html",
      excerpt:
        "Öne çıkan güncellemeler kernel-5.10.70, budgie-desktop-10.5.3, gnome-desktop-41.0-6, firefox-93.0, spice-0.15.0, telegram-desktop-3.1.5",
      source: "Pisi Linux Resmi"
    },
    {
      year: 2022,
      month: 10,
      day: 16,
      category: "release",
      lang: "tr",
      title: "Pisi Linux 2.3.1 Minimal duyuruldu",
      url: "https://www.getgnu.org/gnulinux/pisi-linux-2-3-1-minimal-duyuruldu.html",
      excerpt:
        "Ünlü PiSi paket yönetim sistemi ile eski Pardus Linux'un bir çatallaması olarak kotarılan Pisi Linux'un 2.3.1 Minimal sürümü duyuruldu. Sistemin gerekli sunucular yüklenerek server olarak da kullanılabileceği hatırlatılıyor.",
      source: "get GNU"
    },
    {
      year: 2023,
      month: 1,
      day: 9,
      category: "review",
      lang: "en",
      title: "Pisi Linux: Everything about the end-user-oriented Turkish distribution",
      url: "https://blog.desdelinux.net/en/pisi-linux/",
      excerpt:
        "DesdeLinux tarafından yayınlanan kapsamlı incelemede Pisi Linux 2.3.1 sürümü, kullanıcı odaklı yapısı ve Pardus mirası ele alındı.",
      source: "DesdeLinux"
    },
    {
      year: 2023,
      month: 1,
      day: 9,
      category: "review",
      lang: "es",
      title: "Pisi Linux: Todo sobre la distribución turca orientada al usuario final",
      url: "https://blog.desdelinux.net/pisi-linux/",
      excerpt:
        "DesdeLinux (İspanyolca) tarafından yayınlanan kapsamlı incelemede Pisi Linux 2.3.1 sürümü, kullanıcı odaklı yapısı ve Pardus mirası ele alındı.",
      source: "DesdeLinux"
    },
    {
      year: 2023,
      month: 1,
      day: 9,
      category: "review",
      lang: "fr",
      title: "Pisi Linux : tout sur la distribution turque orientée utilisateur final",
      url: "https://blog.desdelinux.net/fr/pipi-linux/",
      excerpt:
        "DesdeLinux (Fransızca) tarafından yayınlanan kapsamlı incelemede Pisi Linux 2.3.1 sürümü, kullanıcı odaklı yapısı ve Pardus mirası ele alındı.",
      source: "DesdeLinux"
    },
    {
      year: 2023,
      month: 1,
      day: 9,
      category: "review",
      lang: "it",
      title: "Pisi Linux: Tutto sulla distribuzione turca orientata all'utente finale",
      url: "https://blog.desdelinux.net/it/pisi-linux/",
      excerpt:
        "DesdeLinux (İtalyanca) tarafından yayınlanan kapsamlı incelemede Pisi Linux 2.3.1 sürümü, kullanıcı odaklı yapısı ve Pardus mirası ele alındı.",
      source: "DesdeLinux"
    },
    {
      year: 2023,
      month: 1,
      day: 9,
      category: "review",
      lang: "pt",
      title: "Pisi Linux: tudo sobre a distribuição turca orientada para o usuário final",
      url: "https://blog.desdelinux.net/pt/pisi-linux/",
      excerpt:
        "DesdeLinux (Portekizce) tarafından yayınlanan kapsamlı incelemede Pisi Linux 2.3.1 sürümü, kullanıcı odaklı yapısı ve Pardus mirası ele alındı.",
      source: "DesdeLinux"
    },
    {
      year: 2023,
      month: 1,
      day: 9,
      category: "review",
      lang: "ru",
      title: "Pisi Linux: все о турецком дистрибутиве, ориентированном на конечного пользователя",
      url: "https://blog.desdelinux.net/ru/pisi-linux/",
      excerpt:
        "DesdeLinux (Rusça) tarafından yayınlanan kapsamlı incelemede Pisi Linux 2.3.1 sürümü, kullanıcı odaklı yapısı ve Pardus mirası ele alındı.",
      source: "DesdeLinux"
    },
    {
      year: 2023,
      month: 1,
      day: 9,
      category: "review",
      lang: "ar",
      title: "Pisi Linux: كل شيء يتعلق بالتوزيع التركي الموجه للمستخدم النهائي",
      url: "https://blog.desdelinux.net/ar/لينكس-بول/",
      excerpt:
        "DesdeLinux (Arapça) tarafından yayınlanan kapsamlı incelemede Pisi Linux 2.3.1 sürümü, kullanıcı odaklı yapısı ve Pardus mirası ele alındı.",
      source: "DesdeLinux"
    },
    {
      year: 2023,
      month: 1,
      day: 9,
      category: "review",
      lang: "ko",
      title: "Pisi Linux: 최종 사용자 중심의 터키 배포판에 대한 모든 것",
      url: "https://blog.desdelinux.net/ko/오줌-리눅스/",
      excerpt:
        "DesdeLinux (Korece) tarafından yayınlanan kapsamlı incelemede Pisi Linux 2.3.1 sürümü, kullanıcı odaklı yapısı ve Pardus mirası ele alındı.",
      source: "DesdeLinux"
    },
    {
      year: 2024,
      month: 11,
      day: 1,
      category: "release",
      lang: "tr",
      title: "Pisi GNU/Linux 2.4 \"Karagül\" duyuruldu — KDE Plasma 6.2",
      url: "https://www.getgnu.org/gnulinux/pisi-gnu-linux-2-4-karagul-duyuruldu.html",
      excerpt:
        "KDE Plasma 6.2 ve Linux çekirdeği 6.6.56 ile gelen sürüm, adını Halfeti'de yetişen endemik çiçekten alıyor.",
      source: "get GNU"
    },
    {
      year: 2024,
      month: 11,
      day: 2,
      category: "news",
      lang: "zh",
      title: "Pisi Linux 2.4发布 — Linuxeden (Çince) haberi",
      url: "http://www.linuxeden.com/a/142004",
      excerpt:
        "Erkan Işık, 'Karagül' kod adlı Pisi Linux 2.4 sürümünü duyurdu. KDE Plasma 6.2 ve Linux çekirdeği 6.6.56 güncellemeleri içeriyor.",
      source: "Linuxeden"
    },
    {
      year: 2024,
      month: 11,
      day: 5,
      category: "review",
      lang: "ja",
      title: "独自系OS「Pisi Linux」を試してみた！ — My Computer Life",
      url: "https://mycomputerlife.com/pisi-linux/",
      excerpt:
        "My Computer Life tarafından yapılan incelemede Pisi Linux'un Japonca desteği ve Plasma 6 performansı test edildi.",
      source: "My Computer Life"
    },
    {
      year: 2024,
      month: 11,
      day: 6,
      category: "review",
      lang: "en",
      title: "Pisi Linux 2.4 \"Karagül\" — A Unique Journey into Open Source",
      url: "https://thedistrowriteproject.blogspot.com/2024/11/pisi-linux-24-karagul.html",
      excerpt:
        "The Distro Write Project incelemesinde Pisi Linux 2.4'ün Türkçe, İngilizce, Kürtçe, Arapça, Almanca, Rusça dil desteği ve topluluk çevirileri değerlendirildi.",
      source: "The Distro Write Project"
    },
    {
      year: 2024,
      month: 11,
      day: 8,
      category: "news",
      lang: "pt",
      title: "Pisi Linux 2.4 lançado com o kernel 6.6.56 e KDE Plasma 6.2",
      url: "https://www.edivaldobrito.com.br/pisi-linux-2-4-lancado-com-o-kernel-6-6-56-kde-plasma-6-2-e-mais/",
      excerpt:
        "Edivaldo Brito, Pisi Linux 2.4 sürümünü duyurdu. Kernel 6.6.56 ve KDE Plasma 6.2 ile gelen sürümün detayları paylaşıldı.",
      source: "Edivaldo Brito"
    },
    {
      year: 2024,
      month: 11,
      day: 12,
      category: "review",
      lang: "pt",
      title: "Pisi Linux 2.4 Karagül: um sistema leve e moderno inspirado na natureza",
      url: "https://sempreupdate.com.br/pisi-linux-2-4-karagul/",
      excerpt:
        "SempreUpdate, Pisi Linux 2.4 'Karagül' sürümünü inceledi. Doğadan ilham alan hafif ve modern sistem özellikleri vurgulandı.",
      source: "SempreUpdate"
    },
    {
      year: 2024,
      month: 11,
      day: 30,
      category: "news",
      lang: "ru",
      title: "Релизы в ноябре 2024 г.: Pisi, NethSecurity и Parted Magic",
      url: "https://ru.ubunlog.com/pisi-linux-2-4/",
      excerpt:
        "Ubunlog (Rusça) Kasım 2024 sürümlerini derledi. Pisi Linux 2.4, KDE Plasma 6 ve Linux Kernel 6.6.56 güncellemeleriyle öne çıkıyor.",
      source: "Ubunlog (RU)"
    },
    {
      year: 2024,
      month: 11,
      day: 30,
      category: "news",
      lang: "es",
      title: "Lanzamientos de noviembre 2024: Pisi, NethSecurity y Parted Magic",
      url: "https://ubunlog.com/pisi-linux-2-4/",
      excerpt:
        "Ubunlog (İspanyolca) Kasım 2024 sürümlerini duyurdu. Pisi Linux 2.4, kullanıcı dostu masaüstü deneyimi ve güncel yazılım paketleriyle geliyor.",
      source: "Ubunlog (ES)"
    },
    {
      year: 2024,
      month: 12,
      day: 1,
      category: "forum",
      lang: "tr",
      title: "Pisi Linux 2.4 sürümü yayımlandı — Pardus Forumları tartışması",
      url: "https://forum.pardus.org.tr/t/pisi-linux-2-4-surumu-yayimlandi/27617/2",
      excerpt:
        "Pardus Forumları'nda Pisi Linux 2.4 sürümü kullanıcılar tarafından değerlendirildi. KDE'nin tüm özelliklerinin sade bir şekilde kullanıldığı belirtildi.",
      source: "Pardus Forumları"
    },
    {
      year: 2024,
      month: 12,
      day: 3,
      category: "news",
      lang: "es",
      title: "Diciembre 2024: Noticias del mes sobre el Linuxverse",
      url: "https://blog.desdelinux.net/diciembre-2024-noticias-del-mes-sobre-el-linuxverse/",
      excerpt:
        "DesdeLinux'un aylık Linuxverse haber bülteninde Pisi Linux 2.4 sürümüne yer verildi.",
      source: "DesdeLinux"
    },
    {
      year: 2024,
      month: 12,
      day: 11,
      category: "news",
      lang: "en",
      title: "Pisi Linux — end-user focused distribution — LinuxLinks",
      url: "https://www.linuxlinks.com/pisi-linux-end-user-focused-distribution/",
      excerpt:
        "LinuxLinks, Pisi Linux'u kullanıcı odaklı bir dağıtım olarak tanıttı. Kolay kurulum, yapılandırma ve kullanım sağlamayı hedefliyor.",
      source: "LinuxLinks"
    },
    {
      year: 2025,
      month: 1,
      day: 23,
      category: "forum",
      lang: "tr",
      title: "Pisi Linux vs Pardus Linux — Pardus Forumları karşılaştırması",
      url: "https://forum.pardus.org.tr/t/pisi-linux-vs-pardus-linux/27991",
      excerpt:
        "Pardus Forumları'nda Pisi Linux ve Pardus karşılaştırıldı. Pisi Linux'un Türkiye'den çıkan yerli bir Linux dağıtımı olduğu ve eski Pardus projesinin bir çatalı olduğu vurgulandı.",
      source: "Pardus Forumları"
    },
    {
      year: 2025,
      month: 5,
      day: 10,
      category: "release",
      lang: "tr",
      title: "Pisi GNU/Linux 2.4.1 çıktı",
      url: "https://www.getgnu.org/gnulinux/pisi-gnu-linux-2-4-1-cikti.html",
      excerpt:
        "Pisi GNU/Linux 2.4.1 sürümü, çeşitli hata düzeltmeleri ve paket güncellemeleri içeriyor.",
      source: "get GNU"
    },
    {
      year: 2025,
      month: 9,
      day: 4,
      category: "review",
      lang: "en",
      title: "Complete OS Guide: Pisi Linux How It Works — LinuxMind",
      url: "https://linuxmind.dev/pisi-linux-guide/",
      excerpt:
        "LinuxMind tarafından hazırlanan kapsamlı rehberde Pisi Linux'un PiSi paket yönetim sistemi ve masaüstü deneyimi detaylandırıldı.",
      source: "LinuxMind"
    },
    {
      year: 2025,
      month: 9,
      day: 6,
      category: "release",
      lang: "tr",
      title: "Pisi GNU/Linux 2.4.2 çıktı",
      url: "https://www.getgnu.org/gnulinux/pisi-gnu-linux-2-4-2-cikti.html",
      excerpt:
        "Yalı'nın açılışında şifre isteyeceği ve şifrenin 'live' olduğu belirtiliyor.",
      source: "get GNU"
    },
    {
      year: 2025,
      month: 11,
      day: 30,
      category: "release",
      lang: "pl",
      title: "Pisi Linux 2.4.3 — Linuxiarze.pl güncellemesi",
      url: "https://linuxiarze.pl/distro-pisi/",
      excerpt:
        "Linuxiarze.pl, Pisi Linux 2.4.3 test sürümünü listeledi. Sistemin 14 dilde (Lehçe dahil) kullanılabildiği belirtildi.",
      source: "Linuxiarze.pl"
    },
    {
      year: 2025,
      month: 12,
      day: 2,
      category: "release",
      lang: "tr",
      title: "Pisi GNU/Linux 2.4.3 — Kernel, NVIDIA ve Mesa güncellemeleri",
      url: "https://www.getgnu.org/gnulinux/pisi-gnu-linux-2-4-3-cikti.html",
      excerpt: "Linux kernel, nvidia-current ve mesa sürücüleri güncellendi.",
      source: "get GNU"
    },
    {
      year: 2025,
      month: 12,
      day: 1,
      category: "news",
      lang: "de",
      title: "Pisi Linux 2.4.3 Update — OpenOS.at",
      url: "https://openos.at/pisi-linux-2-4-3/",
      excerpt:
        "OpenOS.at, Pisi Linux 2.4.3 sürümünü duyurdu. Minimal ve KDE sürümlerinin 1 Aralık 2025'te yayınlandığı belirtildi.",
      source: "OpenOS"
    },
    {
      year: 2026,
      month: 1,
      day: 25,
      category: "news",
      lang: "tr",
      title: "25-01-2026 Güncellemeleri — kde6 ve sistem araçları",
      url: "https://pisilinux.org/blog/content/158-25-01-2026-guncellemeleri.html",
      excerpt:
        "Bu liste, çeşitli yazılım güncellemelerini içerir. Güncellenen Paketler arasında kde6 ve sistem araçları ve uygulamalar bulunmakta.",
      source: "Pisi Linux Resmi"
    },
    {
      year: 2026,
      month: 2,
      day: 25,
      category: "news",
      lang: "tr",
      title: "25-02-2026 Güncellemeleri — kde6 ve güvenlik yamaları",
      url: "https://pisilinux.org/blog/content/159-25-02-2026-guncellemeleri.html",
      excerpt:
        "Bu liste, çeşitli yazılım güncellemelerini içerir. Güncellenen Paketler arasında kde6 ve sistem araçları ve uygulamalar bulunmakta. Çeşitli güvenlik güncellemeleri de dahil.",
      source: "Pisi Linux Resmi"
    },
    {
      year: 2026,
      month: 6,
      day: 29,
      category: "news",
      lang: "tr",
      title: "29-06-2026 Güncellemeleri — Linux kernel ve NVIDIA sürücüleri",
      url: "https://pisilinux.org/blog/content/160-29-06-2026-guncellemeleri.html",
      excerpt:
        "29-06-2026 tarihinde yayınladığımız Pisi Linux güncellemeleri ile sisteminizin kalbi olan Linux kernel sürümünü güncelliyor, nvidia-current ve mesa sürücüleri güncelleniyor.",
      source: "Pisi Linux Resmi"
    },
    {
      year: 2026,
      month: 8,
      day: 19,
      category: "release",
      lang: "en",
      title: "Pisi Linux Community — Version bump 6.29.0",
      url: "https://raw.githubusercontent.com/pisilinux/community/main/version-bump-6.29.0.txt",
      excerpt:
        "Pisi Linux topluluk deposunda 6.29.0 sürüm yükseltmesi yayınlandı. Çeşitli paket güncellemeleri ve iyileştirmeler içeriyor.",
      source: "GitHub"
    },
    {
      year: 2014,
      month: 6,
      day: 22,
      category: "news",
      lang: "pl",
      title: "Pisi Linux — polska wersja dystrybucji",
      url: "https://linuxiarze.pl/distro-pisi/",
      excerpt:
        "Linuxiarze.pl, Pisi Linux'un Lehçe dahil 14 dilde kullanılabildiğini duyurdu. Pisi, Çomar, Yalı, Kaptan, Panda ve Mudur gibi özgün araçlar tanıtıldı.",
      source: "Linuxiarze.pl"
    },
    {
      year: 2014,
      month: 12,
      day: 7,
      category: "news",
      lang: "en",
      title: "Pisi GNU/Linux translation project on Transifex",
      url: "https://explore.transifex.com/pisi-linux/pisi-gnu-linux/",
      excerpt:
        "Pisi GNU/Linux'un Transifex çeviri projesi başlatıldı. Topluluk çevirileri ile dil desteğinin genişletilmesi hedefleniyor.",
      source: "Transifex"
    },
    {
      year: 2022,
      month: 5,
      day: 30,
      category: "news",
      lang: "tr",
      title: "Nvidia Sürücü Kurulum Rehberi — Pisi GNU/Linux",
      url: "https://pisilinux.org/wiki/nvidia-surucu-kurulum-rehberi.html",
      excerpt:
        "Pisi GNU/Linux 2.2 x86_64 / Pisi GNU/Linux 2.3 x86_64 Minimal için Nvidia sürücü kurulum rehberi yayınlandı.",
      source: "Pisi Linux Resmi"
    },
    {
      year: 2024,
      month: 6,
      day: 20,
      category: "review",
      lang: "tr",
      title: "Pisi Linux incelemesi — Dengesiz Kokarca",
      url: "https://dengesizkokarca.com/pisi-linux/",
      excerpt:
        "Dengesiz Kokarca blogunda Pisi Linux'un uzun süredir incelenmesi gerektiği belirtilerek kapsamlı bir değerlendirme yapıldı.",
      source: "Dengesiz Kokarca"
    },
    {
      year: 2024,
      month: 7,
      day: 26,
      category: "news",
      lang: "en",
      title: "Bajau 0.0.2 — Pisi Linux tabanlı yeni dağıtım",
      url: "https://prohoster.info/blog/bajau-0-0-2/",
      excerpt:
        "ProHoster, Pisi Linux tabanlı Bajau dağıtımının 0.0.2 sürümünü duyurdu. glibc-2.39 ve Linux Kernel LTS 5.15 içeriyor.",
      source: "ProHoster"
    },
    {
      year: 2025,
      month: 1,
      day: 10,
      category: "news",
      lang: "zh",
      title: "Pisi Linux适配Pantheon桌面环境的开发进展与技术挑战",
      url: "https://wenku.csdn.net/pisi-linux-pantheon/",
      excerpt:
        "CSDN'de yayınlanan makalede Pisi Linux'un Pantheon masaüstü ortamına uyarlanması için Wayland protokol yığını ve X11 uyumluluk sorunları ele alındı.",
      source: "CSDN"
    },
    {
      year: 2025,
      month: 3,
      day: 15,
      category: "news",
      lang: "tr",
      title: "Türk Linux Dağıtımları: Pardus, Pisi Linux ve Archman Linux",
      url: "https://netuv.com/turk-linux-dagitimlari/",
      excerpt:
        "Netuv, Türkiye'de geliştirilen Linux dağıtımlarını karşılaştırdı. Pisi Linux'un kendine özgü paket yönetim sistemi ve sistem araçları vurgulandı.",
      source: "Netuv"
    },
    {
      year: 2025,
      month: 10,
      day: 1,
      category: "news",
      lang: "en",
      title: "From Pardus to Solus: The Evolution of PiSi and eopkg",
      url: "https://thedistrowriteproject.blogspot.com/2025/01/from-pardus-to-solus-evolution-of-pisi.html",
      excerpt:
        "The Distro Write Project, PiSi paket yöneticisinin Pardus'tan Solus'a uzanan evrimini inceledi. Flatpak ve Snap desteğinin önemi vurgulandı.",
      source: "The Distro Write Project"
    }
  ];

  // ============================================================
  // 3. FORUM KATEGORİLERİ VE KONULARI
  // ============================================================
  const FORUM_CATEGORY_META = {
    all: {
      label: "Tümü",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.8L20 10l-5 3.6L16.5 20 12 16.5 7.5 20 9 13.6 4 10l6.1-1.2z"/></svg>'
    },
    feature: {
      label: "Yeni Özellik",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/><path d="M19 15l.7 2.1L22 18l-2.3.9L19 21l-.7-2.1L16 18l2.3-.9z"/></svg>'
    },
    wish: {
      label: "Temenni",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.5 5.5L20 9.5l-4 4 1 6-5-2.8L7 19.5l1-6-4-4 5.5-1z"/></svg>'
    },
    discussion: {
      label: "Tartışma",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/></svg>'
    },
    suggestion: {
      label: "Öneri",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2z"/></svg>'
    },
    roadmap: {
      label: "Yol Haritası",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/></svg>'
    },
    whatif: {
      label: "Neler Olabilir?",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>'
    }
  };

  const FORUM_THREADS = [
    {
      id: 1,
      category: "feature",
      lang: "tr",
      tags: ["PiSi", "Mağaza", "GUI"],
      title: "PiSi paket yöneticisine modern bir grafik mağaza gelsin",
      excerpt:
        "PiSi'nin komut satırı araçları çok güçlü ama yeni kullanıcılar için görsel bir mağaza arayüzü eksik. GNOME Software veya KDE Discover benzeri bir mağaza geliştirilebilir mi?",
      author: "mehmet_k",
      replies: 47,
      views: 3120,
      likes: 128,
      date: { year: 2025, month: 11, day: 18 },
      pinned: true,
      solved: false
    },
    {
      id: 2,
      category: "feature",
      lang: "en",
      tags: ["Flatpak", "Snap", "Sandbox"],
      title: "Please add Flatpak and Snap support out of the box",
      excerpt:
        "Many users rely on Flatpak for sandboxed apps. Having Flatpak pre-configured in Pisi Linux would make it much easier to install third-party software without breaking system packages.",
      author: "linuxfan_42",
      replies: 62,
      views: 4890,
      likes: 214,
      date: { year: 2025, month: 11, day: 12 },
      pinned: true,
      solved: false
    },
    {
      id: 3,
      category: "feature",
      lang: "en",
      tags: ["Wayland", "Plasma", "KDE"],
      title: "Wayland session as the default for KDE Plasma 6",
      excerpt:
        "KDE Plasma 6 is fully Wayland-ready. Making Wayland the default session in Pisi would be a bold step forward — but we need to make sure NVIDIA and screen sharing work reliably first.",
      author: "tux_explorer",
      replies: 88,
      views: 6240,
      likes: 302,
      date: { year: 2025, month: 10, day: 28 },
      pinned: false,
      solved: false
    },
    {
      id: 4,
      category: "feature",
      lang: "de",
      tags: ["ARM", "Raspberry Pi", "SBC"],
      title: "Bitte ARM64-Unterstützung für Raspberry Pi 5 hinzufügen",
      excerpt:
        "Der Raspberry Pi 5 ist erstaunlich leistungsfähig. Ein offizielles Pisi-Linux-Image für ARM64 würde die Reichweite der Distribution erheblich erhöhen.",
      author: "linux_mueller",
      replies: 34,
      views: 2180,
      likes: 96,
      date: { year: 2025, month: 10, day: 14 },
      pinned: false,
      solved: false
    },
    {
      id: 5,
      category: "feature",
      lang: "tr",
      tags: ["Sürücü", "NVIDIA", "Wi-Fi"],
      title: "Otomatik sürücü kurulum sihirbazı (NVIDIA, Wi-Fi, yazıcı)",
      excerpt:
        "Linux'a yeni başlayanlar için en büyük engel sürücüler. İlk kurulumda otomatik donanım algılama ve önerilen sürücü kurulumu olsa harika olurdu.",
      author: "pisi_sever",
      replies: 41,
      views: 3050,
      likes: 152,
      date: { year: 2025, month: 10, day: 2 },
      pinned: false,
      solved: false
    },
    {
      id: 6,
      category: "feature",
      lang: "es",
      tags: ["Secure Boot", "UEFI"],
      title: "Soporte para Secure Boot en la próxima versión",
      excerpt:
        "Muchos portátiles modernos vienen con Secure Boot activado por defecto. Sin soporte oficial, los usuarios deben desactivarlo manualmente para instalar Pisi.",
      author: "carlos_linux",
      replies: 29,
      views: 1870,
      likes: 74,
      date: { year: 2025, month: 9, day: 20 },
      pinned: false,
      solved: false
    },
    {
      id: 7,
      category: "feature",
      lang: "ru",
      tags: ["Btrfs", "Snapshot", "YALI"],
      title: "Добавьте поддержку Btrfs-снапшотов в YALI",
      excerpt:
        "Было бы здорово, если бы установщик YALI предлагал Btrfs с автоматическими снапшотами при обновлениях. Это спасёт пользователей от неудачных апдейтов.",
      author: "pavel_k",
      replies: 23,
      views: 1420,
      likes: 58,
      date: { year: 2025, month: 9, day: 8 },
      pinned: false,
      solved: false
    },
    {
      id: 8,
      category: "feature",
      lang: "ja",
      tags: ["Snap", "サポート"],
      title: "Pisi LinuxにSnapサポートを追加してほしい",
      excerpt:
        "Ubuntuで慣れているSnapパッケージをPisi Linuxでも使えたらとても便利です。特に日本語のアプリはSnapで提供されることが多いので助かります。",
      author: "linux_taro",
      replies: 18,
      views: 980,
      likes: 41,
      date: { year: 2025, month: 8, day: 25 },
      pinned: false,
      solved: false
    },
    {
      id: 9,
      category: "feature",
      lang: "fr",
      tags: ["systemd-boot", "Boot"],
      title: "Support de systemd-boot comme alternative à GRUB",
      excerpt:
        "GRUB est lourd et complexe. systemd-boot est plus simple et plus rapide. Pourquoi ne pas proposer les deux lors de l'installation ?",
      author: "jean_luc_lnx",
      replies: 26,
      views: 1650,
      likes: 63,
      date: { year: 2025, month: 8, day: 12 },
      pinned: false,
      solved: false
    },
    {
      id: 10,
      category: "feature",
      lang: "tr",
      tags: ["Bulut", "Senkronizasyon"],
      title: "Kendi bulut senkronizasyon aracımız olsun (Pisi Drive)",
      excerpt:
        "Dosyalarımızı, ayarlarımızı ve yapılandırmalarımızı senkronize edebileceğimiz yerli bir bulut aracı... Kendi verilerimiz kendi sunucularımızda olsun.",
      author: "ayse_demir",
      replies: 51,
      views: 3720,
      likes: 187,
      date: { year: 2025, month: 7, day: 30 },
      pinned: false,
      solved: false
    },
    {
      id: 11,
      category: "wish",
      lang: "tr",
      tags: ["Klavye", "Türkçe"],
      title: "Keşke Pisi'ye resmi bir Türkçe klavye düzeni editörü gelse",
      excerpt:
        "Farklı Türkçe klavye düzenlerini (F, Q, varyasyonlar) kolayca oluşturup paylaşabileceğimiz bir araç olsa. Topluluk düzenleri de bir havuzda toplanabilir.",
      author: "klavye_usta",
      replies: 22,
      views: 1340,
      likes: 67,
      date: { year: 2025, month: 11, day: 20 },
      pinned: false,
      solved: false
    },
    {
      id: 12,
      category: "wish",
      lang: "en",
      tags: ["Rolling", "Stable", "Edition"],
      title: "I wish Pisi had a rolling release edition alongside stable",
      excerpt:
        "Rolling release would attract power users and testers. We could have Pisi Stable (yearly) and Pisi Rolling (continuous). Best of both worlds.",
      author: "arch_convert",
      replies: 74,
      views: 5240,
      likes: 241,
      date: { year: 2025, month: 11, day: 5 },
      pinned: false,
      solved: false
    },
    {
      id: 13,
      category: "wish",
      lang: "pt",
      tags: ["Brasil", "Tradução"],
      title: "Gostaria de ver o Pisi Linux totalmente em português brasileiro",
      excerpt:
        "A tradução pt-BR está em cerca de 70%. Seria maravilhoso ter uma comunidade brasileira ativa cuidando disso e ajudando novos usuários.",
      author: "joao_linux",
      replies: 31,
      views: 1920,
      likes: 88,
      date: { year: 2025, month: 10, day: 22 },
      pinned: false,
      solved: false
    },
    {
      id: 14,
      category: "wish",
      lang: "tr",
      tags: ["Oyun", "Gaming", "Proton"],
      title: "Pisi'de oyun odaklı bir sürüm (Pisi Gaming) olsa",
      excerpt:
        "Steam, Proton, Lutris, GameMode ve GPU sürücüleri önceden yapılandırılmış bir Pisi Gaming sürümü... Türkiye'de oyuncular için harika olurdu.",
      author: "gamer_38",
      replies: 96,
      views: 7180,
      likes: 358,
      date: { year: 2025, month: 10, day: 8 },
      pinned: false,
      solved: false
    },
    {
      id: 15,
      category: "wish",
      lang: "en",
      tags: ["Server", "Minimal", "Headless"],
      title: "Wish: a minimal/server edition without any GUI",
      excerpt:
        "Pisi is desktop-focused. A minimal server edition with just the essentials, systemd services, and a simple installer would open doors to VPS and home-lab use.",
      author: "server_admin_x",
      replies: 43,
      views: 2840,
      likes: 119,
      date: { year: 2025, month: 9, day: 28 },
      pinned: false,
      solved: false
    },
    {
      id: 16,
      category: "wish",
      lang: "ru",
      tags: ["ARM", "Ноутбуки"],
      title: "Хотелось бы видеть Pisi на ARM-ноутбуках",
      excerpt:
        "ARM-ноутбуки становятся всё популярнее. Если Pisi будет работать на них, я бы с радостью перешёл с Ubuntu.",
      author: "linux_ru_user",
      replies: 19,
      views: 1120,
      likes: 47,
      date: { year: 2025, month: 9, day: 15 },
      pinned: false,
      solved: false
    },
    {
      id: 17,
      category: "wish",
      lang: "de",
      tags: ["Touch", "Tablet"],
      title: "Ich wünsche mir ein besseres Touch-Erlebnis für Tablets",
      excerpt:
        "Plasma ist fast touch-freundlich. Mit größeren Bedienelementen und einer Bildschirmtastatur wäre Pisi auf Tablets richtig gut.",
      author: "hans_k",
      replies: 27,
      views: 1680,
      likes: 74,
      date: { year: 2025, month: 8, day: 30 },
      pinned: false,
      solved: false
    },
    {
      id: 18,
      category: "wish",
      lang: "tr",
      tags: ["Kitap", "Dokümantasyon"],
      title: "Pisi Linux Book her sürümle birlikte güncellensin",
      excerpt:
        "Harika bir kitap var ama sürümlerle birlikte güncelliğini yitiriyor. Her sürüm duyurusuyla kitabın ilgili bölümü güncellense muhteşem olur.",
      author: "kitap_kurdu",
      replies: 15,
      views: 890,
      likes: 52,
      date: { year: 2025, month: 8, day: 18 },
      pinned: false,
      solved: false
    },
    {
      id: 19,
      category: "wish",
      lang: "it",
      tags: ["LTS", "Supporto"],
      title: "Vorrei una versione LTS con 5 anni di supporto",
      excerpt:
        "Per le aziende e gli utenti che non vogliono aggiornare spesso, una LTS con supporto quinquennale sarebbe la soluzione ideale.",
      author: "marco_linux",
      replies: 33,
      views: 2040,
      likes: 92,
      date: { year: 2025, month: 8, day: 5 },
      pinned: false,
      solved: false
    },
    {
      id: 20,
      category: "wish",
      lang: "ja",
      tags: ["フォーラム", "日本語"],
      title: "Pisi Linuxの日本語フォーラムが欲しい",
      excerpt:
        "日本語で質問できるフォーラムがあれば、日本でのユーザーが増えると思います。翻訳チームも募集できれば理想的です。",
      author: "pisi_fan_jp",
      replies: 21,
      views: 1180,
      likes: 54,
      date: { year: 2025, month: 7, day: 22 },
      pinned: false,
      solved: false
    },
    {
      id: 21,
      category: "discussion",
      lang: "tr",
      tags: ["Rolling", "LTS", "Strateji"],
      title: "Rolling release mi LTS mi? Pisi'nin geleceği tartışması",
      excerpt:
        "Pisi uzun süredir rolling release modelini takip ediyor. Ama kullanıcı geri bildirimleri karışık. Sizce hangi model Pisi için daha sağlıklı?",
      author: "strateji_uzman",
      replies: 118,
      views: 8420,
      likes: 274,
      date: { year: 2025, month: 11, day: 14 },
      pinned: true,
      solved: false
    },
    {
      id: 22,
      category: "discussion",
      lang: "en",
      tags: ["PiSi", "Format", "Future"],
      title: "Should Pisi migrate from PiSi to a modern package format?",
      excerpt:
        "PiSi is unique but aging. Should we modernize it, or adopt something like RPM/DEB? Let's discuss the pros and cons without flame wars.",
      author: "dev_discuss",
      replies: 156,
      views: 11240,
      likes: 412,
      date: { year: 2025, month: 11, day: 1 },
      pinned: true,
      solved: false
    },
    {
      id: 23,
      category: "discussion",
      lang: "tr",
      tags: ["Wayland", "X11", "Geçiş"],
      title: "Wayland'a geçiş ne kadar gerçekçi? Artıları eksileri",
      excerpt:
        "Plasma 6 ile Wayland çok olgunlaştı ama hâlâ sorunlar var. NVIDIA, ekran paylaşımı, X11 uygulamaları... Pisi ne zaman geçmeli?",
      author: "wayland_tartisma",
      replies: 87,
      views: 6120,
      likes: 198,
      date: { year: 2025, month: 10, day: 25 },
      pinned: false,
      solved: false
    },
    {
      id: 24,
      category: "discussion",
      lang: "en",
      tags: ["Pardus", "Karşılaştırma"],
      title: "Pisi vs Pardus in 2025 — is there room for both?",
      excerpt:
        "Both distributions share DNA but have diverged a lot. Should the communities collaborate more, or is the competition healthy? Genuinely curious what everyone thinks.",
      author: "community_watcher",
      replies: 92,
      views: 7480,
      likes: 236,
      date: { year: 2025, month: 10, day: 10 },
      pinned: false,
      solved: false
    },
    {
      id: 25,
      category: "discussion",
      lang: "de",
      tags: ["KDE", "XFCE", "Desktop"],
      title: "KDE oder XFCE als Standard-Desktop für Pisi 3.0?",
      excerpt:
        "KDE ist der aktuelle Standard, aber XFCE ist schlanker und stabiler. Was wäre die bessere Wahl für Pisi 3.0? Lasst uns sachlich diskutieren.",
      author: "desktop_frage",
      replies: 71,
      views: 4380,
      likes: 152,
      date: { year: 2025, month: 9, day: 22 },
      pinned: false,
      solved: false
    },
    {
      id: 26,
      category: "discussion",
      lang: "es",
      tags: ["KDE", "Fork", "Personalización"],
      title: "¿Debería Pisi Linux tener su propio fork de KDE?",
      excerpt:
        "Pisi personaliza KDE bastante. ¿Sería mejor hacer un fork completo para tener control total, o mantenerse cerca del upstream de KDE?",
      author: "usuario_pisi",
      replies: 44,
      views: 2610,
      likes: 88,
      date: { year: 2025, month: 9, day: 5 },
      pinned: false,
      solved: false
    },
    {
      id: 27,
      category: "discussion",
      lang: "ru",
      tags: ["Драйверы", "Утилиты"],
      title: "Обсуждение: нужен ли Pisi собственный менеджер драйверов",
      excerpt:
        "У многих дистрибутивов есть свой менеджер драйверов. Стоит ли Pisi делать свой, или лучше использовать существующие решения?",
      author: "linux_ru_dev",
      replies: 38,
      views: 2240,
      likes: 76,
      date: { year: 2025, month: 8, day: 28 },
      pinned: false,
      solved: false
    },
    {
      id: 28,
      category: "discussion",
      lang: "tr",
      tags: ["Yönetim", "Topluluk"],
      title: "Pisi'nin topluluk yönetimi nasıl olmalı?",
      excerpt:
        "Şeffaflık, karar alma süreçleri, katkı sağlama yolları... Pisi topluluğunun daha açık ve katılımcı olması için neler yapılabilir?",
      author: "topluluk_uyesi",
      replies: 63,
      views: 3820,
      likes: 143,
      date: { year: 2025, month: 8, day: 15 },
      pinned: false,
      solved: false
    },
    {
      id: 29,
      category: "discussion",
      lang: "en",
      tags: ["Privacy", "Telemetry"],
      title: "Telemetry — should Pisi include opt-in usage stats?",
      excerpt:
        "Opt-in telemetry could help prioritize features and catch bugs faster. But privacy is a core value for many. Where do we draw the line?",
      author: "privacy_first",
      replies: 105,
      views: 8420,
      likes: 302,
      date: { year: 2025, month: 7, day: 30 },
      pinned: false,
      solved: false
    },
    {
      id: 30,
      category: "discussion",
      lang: "zh",
      tags: ["应用商店", "商店"],
      title: "Pisi Linux 是否需要自己的应用商店？",
      excerpt:
        "现在有 PiSi 包管理，但缺少图形化应用商店。是否需要开发自己的应用商店，还是集成现有的解决方案？",
      author: "linux_cn_user",
      replies: 29,
      views: 1650,
      likes: 62,
      date: { year: 2025, month: 7, day: 18 },
      pinned: false,
      solved: false
    },
    {
      id: 31,
      category: "suggestion",
      lang: "tr",
      tags: ["LUKS", "Güvenlik", "YALI"],
      title: "YALI'de LUKS şifreleme varsayılan olsun",
      excerpt:
        "Modern dizüstülerde disk şifrelemesi şart. YALI'de LUKS seçeneği var ama varsayılan değil. Kurulumda kolayca etkinleştirilebilir hale getirilmeli.",
      author: "guvenlik_ci",
      replies: 34,
      views: 2180,
      likes: 108,
      date: { year: 2025, month: 11, day: 16 },
      pinned: false,
      solved: false
    },
    {
      id: 32,
      category: "suggestion",
      lang: "en",
      tags: ["Btrfs", "Snapshots"],
      title: "Suggestion: Btrfs by default with automatic snapshots",
      excerpt:
        "Btrfs + snapper/timeshift combo makes rollback trivial. Defaulting to Btrfs with automatic pre-update snapshots would greatly improve reliability.",
      author: "btrfs_fan",
      replies: 47,
      views: 3120,
      likes: 148,
      date: { year: 2025, month: 11, day: 3 },
      pinned: false,
      solved: false
    },
    {
      id: 33,
      category: "suggestion",
      lang: "tr",
      tags: ["Yedekleme", "Timeshift"],
      title: "Pisi'ye Timeshift benzeri sistem geri yükleme aracı",
      excerpt:
        "Kullanıcıların yanlış bir güncelleme sonrası sistemi kolayca geri alabilmesi için basit bir GUI aracı geliştirilmeli. Sistem ayarlarına entegre olsun.",
      author: "yedekleme_uzman",
      replies: 26,
      views: 1740,
      likes: 84,
      date: { year: 2025, month: 10, day: 19 },
      pinned: false,
      solved: false
    },
    {
      id: 34,
      category: "suggestion",
      lang: "en",
      tags: ["Onboarding", "Wizard"],
      title: "First-boot welcome wizard with language and region selection",
      excerpt:
        "After installation, a friendly first-boot wizard explaining key features, offering region/language setup, and suggesting essential packages would improve the new-user experience.",
      author: "ux_enthusiast",
      replies: 39,
      views: 2480,
      likes: 116,
      date: { year: 2025, month: 10, day: 6 },
      pinned: false,
      solved: false
    },
    {
      id: 35,
      category: "suggestion",
      lang: "de",
      tags: ["Offline", "ISO", "Sprachen"],
      title: "Vorschlag: Offline-ISO mit allen unterstützten Sprachen",
      excerpt:
        "Eine vollständige Offline-ISO mit allen Sprachpaketen wäre ideal für Nutzer ohne zuverlässige Internetverbindung. Größe ist heute kein großes Problem mehr.",
      author: "offline_iso",
      replies: 22,
      views: 1280,
      likes: 62,
      date: { year: 2025, month: 9, day: 25 },
      pinned: false,
      solved: false
    },
    {
      id: 36,
      category: "suggestion",
      lang: "es",
      tags: ["LibreOffice", "Ofimática"],
      title: "Sugerencia: incluir LibreOffice por defecto",
      excerpt:
        "Para muchos usuarios, una suite ofimática es imprescindible. Incluir LibreOffice por defecto ahorraría tiempo y mejoraría la primera impresión del sistema.",
      author: "oficina_linux",
      replies: 41,
      views: 2740,
      likes: 118,
      date: { year: 2025, month: 9, day: 12 },
      pinned: false,
      solved: false
    },
    {
      id: 37,
      category: "suggestion",
      lang: "tr",
      tags: ["Depo", "Yansı", "Mirror"],
      title: "Depo yansıları coğrafi yakınlığa göre otomatik seçilsin",
      excerpt:
        "PiSi'de depo yansıları seçilebiliyor ama otomatik en hızlı ayna seçimi yok. Kurulumda hızlı bir hız testi ile en iyi ayna otomatik seçilebilir.",
      author: "hiz_avcisi",
      replies: 30,
      views: 1920,
      likes: 88,
      date: { year: 2025, month: 8, day: 22 },
      pinned: false,
      solved: false
    },
    {
      id: 38,
      category: "suggestion",
      lang: "ru",
      tags: ["Магазин", "Приложения"],
      title: "Предложение: собственный магазин приложений PiSi Store",
      excerpt:
        "Графический магазин приложений с рейтингами, отзывами и скриншотами сделает Pisi более дружелюбным для новичков. Мог бы интегрироваться с PiSi API.",
      author: "store_idea",
      replies: 55,
      views: 3480,
      likes: 156,
      date: { year: 2025, month: 8, day: 8 },
      pinned: false,
      solved: false
    },
    {
      id: 39,
      category: "suggestion",
      lang: "pt",
      tags: ["KDE Connect", "Integração"],
      title: "Sugestão: integração com o KDE Connect por padrão",
      excerpt:
        "KDE Connect é incrível para integrar com Android. Vem instalado mas não configurado. Uma configuração inicial assistida aumentaria muito a adoção.",
      author: "kde_connect_fan",
      replies: 24,
      views: 1480,
      likes: 71,
      date: { year: 2025, month: 7, day: 26 },
      pinned: false,
      solved: false
    },
    {
      id: 40,
      category: "suggestion",
      lang: "en",
      tags: ["QA", "Testing", "CI"],
      title: "Automated QA testing for every package update",
      excerpt:
        "An automated CI/CD pipeline that runs smoke tests on every package before pushing to stable would dramatically reduce breakage and improve trust.",
      author: "qa_engineer",
      replies: 36,
      views: 2210,
      likes: 104,
      date: { year: 2025, month: 7, day: 14 },
      pinned: false,
      solved: false
    },
    {
      id: 41,
      category: "roadmap",
      lang: "tr",
      tags: ["3.0", "Topluluk", "Plan"],
      title: "Pisi Linux 3.0 yol haritası — topluluk önerileri",
      excerpt:
        "3.0 için özellik listesini topluluk olarak belirleyelim. Öncelikler neler olmalı? Neler kesin girmeli, neler ertelenmeli?",
      author: "yol_haritasi",
      replies: 142,
      views: 9840,
      likes: 372,
      date: { year: 2025, month: 11, day: 22 },
      pinned: true,
      solved: false
    },
    {
      id: 42,
      category: "roadmap",
      lang: "en",
      tags: ["Rust", "PiSi", "Rewrite"],
      title: "Roadmap proposal: PiSi 3.0 with a Rust-based package manager",
      excerpt:
        "A Rust rewrite of PiSi would bring memory safety, parallelism, and modern tooling. Here's a rough multi-phase plan for the community to discuss.",
      author: "rust_advocate",
      replies: 98,
      views: 7120,
      likes: 268,
      date: { year: 2025, month: 11, day: 8 },
      pinned: false,
      solved: false
    },
    {
      id: 43,
      category: "roadmap",
      lang: "tr",
      tags: ["2026", "Hedefler"],
      title: "2026 için Pisi Linux hedefleri neler olmalı?",
      excerpt:
        "Yeni yıl yaklaşırken hedefleri netleştirelim: kullanıcı sayısı, dil desteği, kurumsal kullanım, eğitim kurumları... Sizce en kritik hedef hangisi?",
      author: "2026_plan",
      replies: 67,
      views: 4180,
      likes: 168,
      date: { year: 2025, month: 10, day: 30 },
      pinned: false,
      solved: false
    },
    {
      id: 44,
      category: "roadmap",
      lang: "en",
      tags: ["ARM64", "Wayland", "Flatpak"],
      title: "Official roadmap: ARM64, Wayland and Flatpak in 2026",
      excerpt:
        "If we focus on three big items for 2026, these are the obvious candidates. Let's nail down timelines and responsible teams for each.",
      author: "roadmap_en",
      replies: 54,
      views: 3260,
      likes: 142,
      date: { year: 2025, month: 10, day: 16 },
      pinned: false,
      solved: false
    },
    {
      id: 45,
      category: "roadmap",
      lang: "de",
      tags: ["Installer", "Wayland", "Pisi 3.0"],
      title: "Fahrplan: Pisi 3.0 mit neuem Installer und Wayland",
      excerpt:
        "Pisi 3.0 sollte sich auf zwei große Baustellen konzentrieren: ein moderner Installer (YALI-Neufassung) und Wayland als Standard. Wer arbeitet mit?",
      author: "planung_de",
      replies: 31,
      views: 1980,
      likes: 84,
      date: { year: 2025, month: 9, day: 30 },
      pinned: false,
      solved: false
    },
    {
      id: 46,
      category: "whatif",
      lang: "tr",
      tags: ["Mobil", "Telefon", "PinePhone"],
      title: "Pisi Linux mobil cihazlarda çalışsa nasıl olurdu?",
      excerpt:
        "PinePhone veya benzeri Linux telefonlarda Pisi çalışsa nasıl bir deneyim olurdu? KDE Plasma Mobile ile entegre olabilir mi?",
      author: "mobil_pisi",
      replies: 42,
      views: 2680,
      likes: 118,
      date: { year: 2025, month: 11, day: 19 },
      pinned: false,
      solved: false
    },
    {
      id: 47,
      category: "whatif",
      lang: "en",
      tags: ["Hardware", "System76", "Laptop"],
      title: "What if Pisi Linux had its own hardware like System76?",
      excerpt:
        "A Turkish-made laptop pre-installed with Pisi Linux, tuned for the hardware, with a Turkish keyboard layout... Imagine the impact.",
      author: "hardware_dreamer",
      replies: 76,
      views: 5240,
      likes: 224,
      date: { year: 2025, month: 11, day: 6 },
      pinned: false,
      solved: false
    },
    {
      id: 48,
      category: "whatif",
      lang: "tr",
      tags: ["Tablet", "Dokunmatik"],
      title: "Pisi'yi bir tablette çalıştırsak deneyim nasıl olurdu?",
      excerpt:
        "Yüzey (Surface) benzeri bir tablette Pisi + Plasma 6 nasıl bir deneyim sunardı? Dokunmatik optimizasyonu yeterli mi, neler eklenmeli?",
      author: "tablet_deneyi",
      replies: 28,
      views: 1620,
      likes: 72,
      date: { year: 2025, month: 10, day: 20 },
      pinned: false,
      solved: false
    },
    {
      id: 49,
      category: "whatif",
      lang: "en",
      tags: ["Editions", "Fedora", "Model"],
      title: "What if Pisi adopted a Fedora-style edition model?",
      excerpt:
        "Pisi KDE, Pisi Workstation, Pisi Server, Pisi Atomic... A structured edition model like Fedora's could attract different user groups.",
      author: "edition_thinker",
      replies: 58,
      views: 3480,
      likes: 152,
      date: { year: 2025, month: 10, day: 4 },
      pinned: false,
      solved: false
    },
    {
      id: 50,
      category: "whatif",
      lang: "tr",
      tags: ["Bulut", "İşletim Sistemi"],
      title: "Pisi Linux tabanlı bir Türk bulut işletim sistemi",
      excerpt:
        "Kamu kurumları ve okullar için Pisi tabanlı, merkezi yönetilebilen bir bulut işletim sistemi... Nasıl olurdu? Artıları ve zorlukları neler?",
      author: "kurumsal_vizyon",
      replies: 63,
      views: 4180,
      likes: 187,
      date: { year: 2025, month: 9, day: 18 },
      pinned: false,
      solved: false
    },
    {
      id: 51,
      category: "whatif",
      lang: "ja",
      tags: ["ゲーム", "ゲーム機", "SteamOS"],
      title: "もしPisi Linuxがゲーム機向けに最適化されたら？",
      excerpt:
        "SteamOSのように、ゲーム機や携帯ゲーム機向けにPisi Linuxを最適化したらどうなるでしょうか？ProtonやGamescopeとの統合は可能でしょうか？",
      author: "game_jp",
      replies: 22,
      views: 1280,
      likes: 56,
      date: { year: 2025, month: 8, day: 20 },
      pinned: false,
      solved: false
    },
    {
      id: 52,
      category: "whatif",
      lang: "de",
      tags: ["Dateisystem", "Zukunft"],
      title: "Was wäre, wenn Pisi ein eigenes Dateisystem hätte?",
      excerpt:
        "Pardus hatte einst PiSi. Was wäre, wenn Pisi ein eigenes, auf moderne Workloads optimiertes Dateisystem entwickeln würde? Realistisch oder nicht?",
      author: "fs_visionär",
      replies: 18,
      views: 980,
      likes: 42,
      date: { year: 2025, month: 8, day: 2 },
      pinned: false,
      solved: false
    },
    {
      id: 53,
      category: "whatif",
      lang: "es",
      tags: ["Ofimática", "Suite"],
      title: "¿Y si Pisi Linux tuviera su propia suite ofimática?",
      excerpt:
        "Una suite ofimática ligera y nativa en KDE, con integración con NextCloud y LibreOffice... Soñar no cuesta nada, y quién sabe lo que puede pasar.",
      author: "soñador_linux",
      replies: 26,
      views: 1420,
      likes: 62,
      date: { year: 2025, month: 7, day: 10 },
      pinned: false,
      solved: false
    }
  ];

  // ============================================================
  // 4. SVG BAYRAKLAR & ETİKETLER
  // ============================================================
  const LANG_FLAGS = {
    tr: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#E30A17"/><circle cx="9" cy="8" r="4" fill="#fff"/><circle cx="10" cy="8" r="3.2" fill="#E30A17"/><path d="M13.5 8l-2-1.2v2.4z" fill="#fff"/></svg>',
    en: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#012169"/><path d="M0 0l24 16M24 0L0 16" stroke="#fff" stroke-width="3"/><path d="M0 0l24 16M24 0L0 16" stroke="#C8102E" stroke-width="1.5"/><path d="M12 0v16M0 8h24" stroke="#fff" stroke-width="5"/><path d="M12 0v16M0 8h24" stroke="#C8102E" stroke-width="3"/></svg>',
    de: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="5.33" fill="#000"/><rect y="5.33" width="24" height="5.33" fill="#DD0000"/><rect y="10.66" width="24" height="5.34" fill="#FFCE00"/></svg>',
    fr: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="8" height="16" fill="#002395"/><rect x="8" width="8" height="16" fill="#fff"/><rect x="16" width="8" height="16" fill="#ED2939"/></svg>',
    pt: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#009B3A"/><path d="M12 2l8 6-8 6-8-6z" fill="#FEDF00"/><circle cx="12" cy="8" r="3" fill="#002776"/></svg>',
    ru: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="5.33" fill="#fff"/><rect y="5.33" width="24" height="5.33" fill="#0039A6"/><rect y="10.66" width="24" height="5.34" fill="#D52B1E"/></svg>',
    zh: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#DE2910"/><path d="M4 3l.5 1.5L6 4.5 4.8 5.4l.4 1.6L4 6 2.8 7l.4-1.6L2 4.5l1.5-.5z" fill="#FFDE00"/></svg>',
    ja: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#fff"/><circle cx="12" cy="8" r="4.5" fill="#BC002D"/></svg>',
    es: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#AA151B"/><rect y="4" width="24" height="8" fill="#F1BF00"/></svg>',
    it: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="8" height="16" fill="#009246"/><rect x="8" width="8" height="16" fill="#fff"/><rect x="16" width="8" height="16" fill="#CE2B37"/></svg>',
    nl: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="5.33" fill="#AE1C28"/><rect y="5.33" width="24" height="5.33" fill="#fff"/><rect y="10.66" width="24" height="5.34" fill="#21468B"/></svg>',
    pl: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="8" fill="#fff"/><rect y="8" width="24" height="8" fill="#DC143C"/></svg>',
    uk: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="8" fill="#0057B7"/><rect y="8" width="24" height="8" fill="#FFD700"/></svg>',
    hr: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="5.33" fill="#FF0000"/><rect y="5.33" width="24" height="5.33" fill="#FFFFFF"/><rect y="10.66" width="24" height="5.34" fill="#171796"/><path d="M12 2l4 3-4 3-4-3z" fill="#FF0000" stroke="#FFFFFF" stroke-width="0.5"/></svg>',
    sv: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#006AA7"/><rect x="7" width="4" height="16" fill="#FECC00"/><rect y="6" width="24" height="4" fill="#FECC00"/></svg>',
    hu: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="5.33" fill="#CE2939"/><rect y="5.33" width="24" height="5.33" fill="#FFFFFF"/><rect y="10.66" width="24" height="5.34" fill="#477050"/></svg>',
    ca: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#FCDD09"/><path d="M0 0l24 16M24 0L0 16" stroke="#DA121A" stroke-width="2"/></svg>',
    cs: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="8" fill="#FFFFFF"/><rect y="8" width="24" height="8" fill="#D7141A"/><path d="M0 0l10 8-10 8z" fill="#11457E"/></svg>',
    da: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#C60C30"/><rect x="7" width="4" height="16" fill="#FFFFFF"/><rect y="6" width="24" height="4" fill="#FFFFFF"/></svg>',
    no: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#BA0C2F"/><rect x="7" width="4" height="16" fill="#FFFFFF"/><rect y="6" width="24" height="4" fill="#FFFFFF"/><rect x="8" width="2" height="16" fill="#00205B"/><rect y="7" width="24" height="2" fill="#00205B"/></svg>',
    fi: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#FFFFFF"/><rect x="7" width="4" height="16" fill="#002F6C"/><rect y="6" width="24" height="4" fill="#002F6C"/></svg>',
    el: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#0D5EAF"/><rect width="24" height="1.78" fill="#FFFFFF"/><rect y="3.56" width="24" height="1.78" fill="#FFFFFF"/><rect y="7.12" width="24" height="1.78" fill="#FFFFFF"/><rect y="10.68" width="24" height="1.78" fill="#FFFFFF"/><rect y="14.24" width="24" height="1.78" fill="#FFFFFF"/><rect width="10" height="10" fill="#0D5EAF"/><rect width="10" height="1.5" fill="#FFFFFF"/><rect y="3" width="10" height="1.5" fill="#FFFFFF"/><rect y="6" width="10" height="1.5" fill="#FFFFFF"/><rect x="4" width="1.5" height="10" fill="#FFFFFF"/></svg>',
    ar: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#006C35"/><path d="M7 4c1 0 2 1 2 3s-1 3-2 3-2-1-2-3 1-3 2-3zm10 0c1 0 2 1 2 3s-1 3-2 3-2-1-2-3 1-3 2-3z" fill="#FFFFFF"/><path d="M12 2l1 1-1 1-1-1z" fill="#FFFFFF"/></svg>',
    ko: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#FFFFFF"/><circle cx="12" cy="8" r="4" fill="#CD2E3A"/><path d="M12 4a4 4 0 0 1 0 8 2 2 0 0 0 0-4 2 2 0 0 1 0-4z" fill="#0047A0"/><path d="M6 2l2 2M18 2l-2 2M6 14l2-2M18 14l-2-2" stroke="#000" stroke-width="1"/></svg>'
  };

  const LANG_LABELS = {
    tr: "TR",
    en: "EN",
    de: "DE",
    fr: "FR",
    pt: "PT",
    ru: "RU",
    zh: "CN",
    ja: "JP",
    es: "ES",
    it: "IT",
    nl: "NL",
    pl: "PL",
    uk: "UK",
    hr: "HR",
    sv: "SV",
    hu: "HU",
    ca: "CA",
    cs: "CS",
    da: "DA",
    no: "NO",
    fi: "FI",
    el: "EL",
    ar: "AR",
    ko: "KO"
  };

  const CATEGORY_META = {
    all: {
      label: "Tümü",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.8L20 10l-5 3.6L16.5 20 12 16.5 7.5 20 9 13.6 4 10l6.1-1.2z"/></svg>'
    },
    release: {
      label: "Sürümler",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>'
    },
    news: {
      label: "Haberler",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z"/></svg>'
    },
    review: {
      label: "İncelemeler",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>'
    },
    forum: {
      label: "Forum",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/></svg>'
    },
    podcast: {
      label: "Podcast",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/></svg>'
    }
  };

  const CATEGORY_LABELS = {
    release: "Sürüm",
    news: "Haber",
    review: "İnceleme",
    forum: "Forum",
    podcast: "Podcast"
  };

  const LANGUAGES = Object.keys(LANG_FLAGS);
  const CATEGORIES = ["news", "release", "review", "forum", "podcast"];

  const TOPICS = [
    "KDE Plasma güncellemesi ve hata düzeltmeleri",
    "Yeni çekirdek (Linux Kernel) desteği eklendi",
    "PiSi paket yöneticisi performans iyileştirmesi",
    "YALI kurulum aracında yeni özellikler",
    "Topluluk forumunda sürüm tartışmaları",
    "Güvenlik yamaları ve bağımlılık güncellemeleri",
    "Masaüstü ortamı (XFCE/GNOME/MATE) iyileştirmeleri",
    "Donanım uyumluluğu ve sürücü güncellemeleri",
    "Flatpak ve Snap paket desteği genişletildi",
    "Sistem açılış süresinde optimizasyonlar",
    "Yeni tema ve simge paketi varsayılan olarak geldi",
    "Depo yansıtma (mirror) sunucuları genişletildi",
    "Wayland desteği için deneysel yamalar eklendi",
    "Pisi Linux Book dokümantasyonu güncellendi",
    "NVIDIA sürücü kurulumu otomatikleştirildi",
    "ARM64 mimarisi için deneysel desteği başladı",
    "systemd'den bağımsız Mudur init sistemi güncellendi",
    "COMAR yapılandırma yöneticisi iyileştirildi",
    "Kaptan karşılama sihirbazına yeni özellikler eklendi",
    "Panda alternatif sürücü yöneticisi güncellendi"
  ];

  const TARGET_COUNT = 1250;

  const MONTHS = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
  ];

  // ============================================================
  // 5. YARDIMCILAR
  // ============================================================
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const escapeHtml = (str) =>
    String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const formatDate = (d, m, y) => `${d} ${MONTHS[m - 1] ?? ""} ${y}`;

  const debounce = (fn, wait = 250) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  };

  const formatCount = (n) => {
    if (n >= 1000) {
      const v = (n / 1000).toFixed(1).replace(".0", "");
      return `${v.replace(".", ",")}K`;
    }
    return String(n);
  };

  const AVATAR_PALETTE = [
    "#60a5fa",
    "#a78bfa",
    "#f472b6",
    "#22d3ee",
    "#34d399",
    "#fbbf24",
    "#fb923c",
    "#818cf8",
    "#f87171",
    "#4ade80"
  ];

  function getAvatarColor(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i += 1) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return AVATAR_PALETTE[Math.abs(hash) % AVATAR_PALETTE.length];
  }

  function getInitials(name) {
    const parts = String(name)
      .split(/[_\-.\s]+/)
      .filter(Boolean);

    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }

    return String(name).slice(0, 2).toUpperCase();
  }

  function normalizeEntry(entry, fallbackId) {
    return {
      id: fallbackId,
      isLive: entry.year >= 2024,
      ...entry,
      langLabel: entry.langLabel || LANG_LABELS[entry.lang] || String(entry.lang || "").toUpperCase()
    };
  }

  // ============================================================
  // 6. ARŞİV VERİ ÜRETİMİ
  // ============================================================
  function generateMassiveArchive() {
    const data = REAL_ENTRIES.map((entry, index) => normalizeEntry(entry, index + 1));
    let idCounter = data.length + 100;

    while (data.length < TARGET_COUNT) {
      const year = randomInt(2005, 2026);
      const month = randomInt(1, 12);
      const day = randomInt(1, 28);
      const lang = pick(LANGUAGES);
      const source = pick(ALL_SOURCES);
      const topic = pick(TOPICS);

      let category = pick(CATEGORIES);
      if (year >= 2023 && Math.random() > 0.6) {
        category = Math.random() > 0.5 ? "release" : "news";
      }

      data.push(
        normalizeEntry(
          {
            year,
            month,
            day,
            category,
            lang,
            title: `Pisi Linux ${year}: ${topic}`,
            url: source.url,
            excerpt: `${source.name} tarafından ${year} yılında yayınlanan rapora göre, ${topic} konusunda önemli gelişmeler kaydedildi.`,
            source: source.name,
            isLive: year >= 2024
          },
          idCounter
        )
      );

      idCounter += 1;
    }

    return data;
  }

  function sortData(data) {
    return data.sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year;
      if (a.month !== b.month) return b.month - a.month;
      return b.day - a.day;
    });
  }

  // ============================================================
  // 7. DURUM
  // ============================================================
  const state = {
    currentTab: "archive",
    allData: [],
    currentFilter: "all",
    searchQuery: "",
    forum: {
      currentFilter: "all",
      searchQuery: "",
      sort: "latest"
    }
  };

  let yearGroups = new Map();
  let starBaseColor = "rgba(226, 232, 240,";
  let lastFocused = null;
  let lazyObserver = null;
  let spyObserver = null;

  // ============================================================
  // 8. TEMA
  // ============================================================
  function updateStarColor() {
    const isLight = document.documentElement.dataset.theme === "light";
    starBaseColor = isLight ? "rgba(31, 41, 55," : "rgba(226, 232, 240,";
  }

  function applyTheme(mode, accent) {
    const root = document.documentElement;

    if (mode) {
      root.dataset.theme = mode;
    }

    if (accent) {
      root.dataset.accent = accent;
    }

    updateStarColor();
  }

  function syncThemeButtons() {
    const mode = document.documentElement.dataset.theme || "dark";
    const accent = document.documentElement.dataset.accent || "blue";

    document.querySelectorAll(".theme-mode-btn").forEach((btn) => {
      const active = btn.dataset.mode === mode;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    document.querySelectorAll(".theme-accent-btn").forEach((btn) => {
      const active = btn.dataset.accent === accent;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  function initThemeControls() {
    const toggle = document.getElementById("themeToggle");
    const panel = document.getElementById("themePanel");

    if (!toggle || !panel) return;

    let savedMode = "dark";
    let savedAccent = "blue";

    try {
      savedMode = localStorage.getItem("pisi-theme") || "dark";
      savedAccent = localStorage.getItem("pisi-accent") || "blue";
    } catch (err) {
      // localStorage kullanılamıyorsa varsayılanlar kalır.
    }

    applyTheme(savedMode, savedAccent);
    syncThemeButtons();

    toggle.addEventListener("click", () => {
      const willOpen = panel.hidden;
      panel.hidden = !willOpen;
      toggle.setAttribute("aria-expanded", String(willOpen));
    });

    document.addEventListener("click", (e) => {
      if (!panel.hidden && !e.target.closest(".theme-widget")) {
        panel.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    panel.querySelectorAll(".theme-mode-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const mode = btn.dataset.mode;

        try {
          localStorage.setItem("pisi-theme", mode);
        } catch (err) {}

        applyTheme(mode, null);
        syncThemeButtons();
      });
    });

    panel.querySelectorAll(".theme-accent-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const accent = btn.dataset.accent;

        try {
          localStorage.setItem("pisi-accent", accent);
        } catch (err) {}

        applyTheme(null, accent);
        syncThemeButtons();
      });
    });
  }

  // ============================================================
  // 9. YILDIZ ARKA PLANI
  // ============================================================
  function initStars() {
    const canvas = document.getElementById("starsCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let stars = [];
    let w = 0;
    let h = 0;
    let time = 0;

    function resize() {
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      createStars();
    }

    function createStars() {
      const count = Math.min(200, Math.max(70, Math.floor((w * h) / (14000 * dpr))));

      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: (Math.random() * 0.9 + 0.3) * dpr,
        alpha: Math.random() * 0.5 + 0.15,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random()
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      time += 0.016;

      for (const s of stars) {
        const a = s.alpha * (0.5 + 0.5 * Math.sin(time * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `${starBaseColor}${a.toFixed(3)})`;
        ctx.fill();
      }

      requestAnimationFrame(draw);
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    resize();
    window.addEventListener("resize", debounce(resize, 200));

    if (reduce) {
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `${starBaseColor}${s.alpha})`;
        ctx.fill();
      }
    } else {
      draw();
    }
  }

  // ============================================================
  // 10. ARŞİV RENDER
  // ============================================================
  const SOURCE_ICON =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z"/></svg>';

  function renderCard(item, index = 0) {
    const label = CATEGORY_LABELS[item.category] || item.category;
    const flag = LANG_FLAGS[item.lang] || "";
    const langLabel = item.langLabel || "";
    const isLive = Boolean(item.isLive ?? item.year >= 2024);
    const searchStr = `${item.title} ${item.excerpt} ${item.source}`.toLowerCase();
    const delay = Math.min(index * 25, 400);

    return `
      <article
        class="tl-card card-enter"
        style="--delay:${delay}ms"
        data-category="${item.category}"
        data-search="${escapeHtml(searchStr)}"
      >
        ${isLive ? '<span class="live-badge"><span class="live-dot"></span>Canlı</span>' : ""}

        <header class="card-header">
          <span class="card-cat cat-${item.category}">${label}</span>
          <span class="card-lang">
            <span class="flag">${flag}</span>
            ${escapeHtml(langLabel)}
          </span>
        </header>

        <h3 class="card-title">
          <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">
            ${escapeHtml(item.title)}
          </a>
        </h3>

        <p class="card-excerpt">${escapeHtml(item.excerpt)}</p>

        <footer class="card-footer">
          <span class="card-source">${SOURCE_ICON}${escapeHtml(item.source)}</span>
          <span class="card-date">${formatDate(item.day, item.month, item.year)}</span>
        </footer>
      </article>
    `;
  }

  function renderTimeline(data) {
    const contentArea = document.getElementById("contentArea");
    const yearNav = document.getElementById("yearNav");

    const groups = new Map();

    for (const item of data) {
      if (!groups.has(item.year)) {
        groups.set(item.year, []);
      }
      groups.get(item.year).push(item);
    }

    yearGroups = groups;

    const years = [...groups.keys()].sort((a, b) => b - a);

    const navHtml = ['<span class="year-nav-label">Yıl</span>'];

    for (const y of years) {
      const isFuture = y >= 2027;
      navHtml.push(
        `<button class="year-btn${isFuture ? " future" : ""}" data-year="${y}" type="button">${y}</button>`
      );
    }

    yearNav.innerHTML = navHtml.join("");

    const html = [];

    for (const year of years) {
      const items = groups.get(year);
      const isFuture = year >= 2027;

      html.push(
        `<section class="year-section" data-year="${year}" data-rendered="false"${isFuture ? ' data-future="true"' : ""} id="year-${year}">
          <h2 class="year-heading">
            <span class="year-badge">${year}${isFuture ? " +" : ""}</span>
            <span class="year-count">${items.length} kayıt</span>
          </h2>
          <div class="cards-grid"></div>
        </section>`
      );
    }

    contentArea.innerHTML = html.join("");

    updateStats(data);
    renderCategories(data);
    bindYearNav();
    initScrollSpy();
    initLazyRendering();

    document.getElementById("tabArchiveCount").textContent = data.length.toLocaleString("tr-TR");
  }

  function renderCategories(data) {
    const catList = document.getElementById("catList");

    const counts = {
      all: data.length,
      release: 0,
      news: 0,
      review: 0,
      forum: 0,
      podcast: 0
    };

    for (const item of data) {
      if (counts[item.category] !== undefined) {
        counts[item.category] += 1;
      }
    }

    catList.innerHTML = Object.entries(CATEGORY_META)
      .map(([key, meta]) => {
        const isActive = state.currentFilter === key;

        return `
          <button
            class="cat-btn${isActive ? " active" : ""}"
            data-filter="${key}"
            type="button"
            aria-pressed="${isActive}"
          >
            <span class="cat-icon">${meta.icon}</span>
            <span class="cat-label">${meta.label}</span>
            <span class="cat-count">${counts[key]}</span>
          </button>
        `;
      })
      .join("");

    catList.querySelectorAll(".cat-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        catList.querySelectorAll(".cat-btn").forEach((b) => {
          b.classList.remove("active");
          b.setAttribute("aria-pressed", "false");
        });

        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");

        state.currentFilter = btn.dataset.filter;
        applyFilters();
      });
    });
  }

  function bindYearNav() {
    document.querySelectorAll(".year-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const y = btn.dataset.year;
        const section = document.getElementById(`year-${y}`);

        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY - 60;
          window.scrollTo({ top, behavior: "smooth" });
        }
      });
    });
  }

  function initScrollSpy() {
    if (spyObserver) {
      spyObserver.disconnect();
    }

    if (state.currentTab !== "archive") return;

    spyObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const y = entry.target.dataset.year;

            document.querySelectorAll(".year-btn").forEach((btn) => {
              const active = btn.dataset.year === y;
              btn.classList.toggle("active", active);

              if (active) {
                btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
              }
            });
          }
        }
      },
      {
        rootMargin: "-70px 0px -65% 0px",
        threshold: 0
      }
    );

    document.querySelectorAll(".year-section").forEach((s) => spyObserver.observe(s));
  }

  // ============================================================
  // 11. LAZY / SANAL KAYDIRMA DESTEĞİ
  // ============================================================
  function initLazyRendering() {
    if (lazyObserver) {
      lazyObserver.disconnect();
    }

    lazyObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            renderYearCards(entry.target);
            lazyObserver.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "400px 0px" }
    );

    document.querySelectorAll('.year-section[data-rendered="false"]').forEach((section) => {
      lazyObserver.observe(section);
    });
  }

  function renderYearCards(section) {
    if (section.dataset.rendered === "true") return;

    const year = Number(section.dataset.year);
    const items = yearGroups.get(year) || [];
    const grid = section.querySelector(".cards-grid");

    grid.innerHTML = items.map((item, index) => renderCard(item, index)).join("");
    section.dataset.rendered = "true";

    if (lazyObserver) {
      lazyObserver.unobserve(section);
    }
  }

  function ensureAllYearsRendered() {
    document.querySelectorAll('.year-section[data-rendered="false"]').forEach((section) => {
      renderYearCards(section);
    });
  }

  // ============================================================
  // 12. FORUM RENDER
  // ============================================================
  function renderForumCard(thread) {
    const meta = FORUM_CATEGORY_META[thread.category];
    const flag = LANG_FLAGS[thread.lang] || "";
    const langLabel = LANG_LABELS[thread.lang] || String(thread.lang || "").toUpperCase();
    const avatarColor = getAvatarColor(thread.author);
    const initials = getInitials(thread.author);

    const searchStr = `${thread.title} ${thread.excerpt} ${thread.author} ${thread.tags.join(" ")}`.toLowerCase();

    const tagsHtml = thread.tags
      .slice(0, 4)
      .map((t) => `<span class="forum-tag">#${escapeHtml(t)}</span>`)
      .join("");

    const dateValue = `${thread.date.year}${String(thread.date.month).padStart(2, "0")}${String(
      thread.date.day
    ).padStart(2, "0")}`;

    return `
      <article
        class="forum-card card-enter"
        data-thread-id="${thread.id}"
        data-category="${thread.category}"
        data-lang="${thread.lang}"
        data-search="${escapeHtml(searchStr)}"
        data-replies="${thread.replies}"
        data-likes="${thread.likes}"
        data-views="${thread.views}"
        data-date="${dateValue}"
        tabindex="0"
        role="button"
        aria-haspopup="dialog"
        aria-label="${escapeHtml(thread.title)}"
      >
        <header class="forum-card-header">
          <span class="forum-cat cat-${thread.category}">${meta.label}</span>

          ${
            thread.pinned
              ? '<span class="forum-pin" title="Sabitlenmiş"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg></span>'
              : ""
          }

          ${thread.solved ? '<span class="forum-solved">Çözüldü</span>' : ""}

          <span class="forum-lang">
            <span class="flag">${flag}</span>
            ${escapeHtml(langLabel)}
          </span>
        </header>

        <h3 class="forum-title"><span>${escapeHtml(thread.title)}</span></h3>

        <p class="forum-excerpt">${escapeHtml(thread.excerpt)}</p>

        <div class="forum-tags">${tagsHtml}</div>

        <footer class="forum-footer">
          <div class="forum-author">
            <span class="forum-avatar" style="background:${avatarColor}">${initials}</span>
            <span class="forum-author-info">
              <span class="forum-author-name">@${escapeHtml(thread.author)}</span>
              <span class="forum-date">${formatDate(thread.date.day, thread.date.month, thread.date.year)}</span>
            </span>
          </div>

          <div class="forum-stats">
            <span class="forum-stat" title="Yanıtlar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              ${formatCount(thread.replies)}
            </span>

            <span class="forum-stat" title="Beğeniler">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              ${formatCount(thread.likes)}
            </span>

            <span class="forum-stat" title="Görüntülenme">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              ${formatCount(thread.views)}
            </span>
          </div>
        </footer>
      </article>
    `;
  }

  function renderForumCategories() {
    const catList = document.getElementById("forumCatList");

    const counts = {
      all: FORUM_THREADS.length
    };

    for (const key of Object.keys(FORUM_CATEGORY_META)) {
      if (key === "all") continue;
      counts[key] = FORUM_THREADS.filter((t) => t.category === key).length;
    }

    catList.innerHTML = Object.entries(FORUM_CATEGORY_META)
      .map(([key, meta]) => {
        const isActive = state.forum.currentFilter === key;

        return `
          <button
            class="cat-btn${isActive ? " active" : ""}"
            data-filter="${key}"
            type="button"
            aria-pressed="${isActive}"
          >
            <span class="cat-icon">${meta.icon}</span>
            <span class="cat-label">${meta.label}</span>
            <span class="cat-count">${counts[key]}</span>
          </button>
        `;
      })
      .join("");

    catList.querySelectorAll(".cat-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        catList.querySelectorAll(".cat-btn").forEach((b) => {
          b.classList.remove("active");
          b.setAttribute("aria-pressed", "false");
        });

        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");

        state.forum.currentFilter = btn.dataset.filter;
        applyForumFilters();
      });
    });
  }

  function updateForumStats() {
    const totalReplies = FORUM_THREADS.reduce((sum, t) => sum + t.replies, 0);
    const authors = new Set(FORUM_THREADS.map((t) => t.author)).size;
    const langs = new Set(FORUM_THREADS.map((t) => t.lang)).size;

    document.getElementById("forumStatThreads").textContent = FORUM_THREADS.length;
    document.getElementById("forumStatReplies").textContent = formatCount(totalReplies);
    document.getElementById("forumStatAuthors").textContent = authors;
    document.getElementById("forumStatLangs").textContent = langs;
    document.getElementById("tabForumCount").textContent = FORUM_THREADS.length;
  }

  function applyForumFilters() {
    const query = state.forum.searchQuery.trim().toLowerCase();
    const filter = state.forum.currentFilter;
    const sort = state.forum.sort;

    let visible = FORUM_THREADS.filter((t) => {
      const matchCat = filter === "all" || t.category === filter;
      const searchStr = `${t.title} ${t.excerpt} ${t.author} ${t.tags.join(" ")}`.toLowerCase();
      const matchSearch = !query || searchStr.includes(query);

      return matchCat && matchSearch;
    });

    visible = visible.slice().sort((a, b) => {
      if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;

      if (sort === "popular") return b.likes - a.likes;
      if (sort === "replies") return b.replies - a.replies;

      const da = a.date.year * 10000 + a.date.month * 100 + a.date.day;
      const db = b.date.year * 10000 + b.date.month * 100 + b.date.day;

      return db - da;
    });

    const container = document.getElementById("forumThreads");
    const emptyState = document.getElementById("forumEmptyState");

    if (!visible.length) {
      container.innerHTML = "";
      emptyState.hidden = false;
    } else {
      emptyState.hidden = true;
      container.innerHTML = visible.map(renderForumCard).join("");
    }

    updateForumSearchMeta(visible.length, filter, query);
  }

  function updateForumSearchMeta(count, filter, query) {
    const meta = document.getElementById("forumSearchMeta");

    const hasFilter = filter !== "all";
    const hasQuery = query.length > 0;

    if (!hasFilter && !hasQuery) {
      meta.innerHTML = `<span>${FORUM_THREADS.length} konu gösteriliyor</span>`;
      return;
    }

    const parts = [];

    parts.push(`<span><span class="highlight">${count}</span> konu bulundu`);

    if (hasQuery) {
      parts.push(` — "<em>${escapeHtml(query)}</em>"`);
    }

    if (hasFilter) {
      parts.push(` · <strong>${FORUM_CATEGORY_META[filter].label}</strong>`);
    }

    parts.push("</span>");
    parts.push('<button class="clear-filters" id="forumClearFilters" type="button">Filtreleri temizle</button>');

    meta.innerHTML = parts.join("");

    const clearBtn = document.getElementById("forumClearFilters");

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        state.forum.searchQuery = "";
        state.forum.currentFilter = "all";

        document.getElementById("forumSearchInput").value = "";
        document.getElementById("forumSearchClear").hidden = true;

        document.querySelectorAll("#forumCatList .cat-btn").forEach((b) => {
          const isAll = b.dataset.filter === "all";
          b.classList.toggle("active", isAll);
          b.setAttribute("aria-pressed", String(isAll));
        });

        applyForumFilters();
      });
    }
  }

  // ============================================================
  // 13. İSTATİSTİKLER (ARŞİV)
  // ============================================================
  function updateStats(data) {
    document.getElementById("statTotal").textContent = data.length.toLocaleString("tr-TR");
    document.getElementById("statYears").textContent = new Set(data.map((d) => d.year)).size;
    document.getElementById("statLangs").textContent = new Set(data.map((d) => d.lang)).size;
    document.getElementById("statSources").textContent = ALL_SOURCES.length.toLocaleString("tr-TR");
  }

  // ============================================================
  // 14. ARŞİV FİLTRELEME & ARAMA
  // ============================================================
  function applyFilters() {
    const query = state.searchQuery.trim().toLowerCase();
    const filter = state.currentFilter;

    if (!query && filter === "all") {
      document.querySelectorAll(".tl-card").forEach((card) => {
        card.style.display = "";
      });

      document.querySelectorAll(".year-section").forEach((section) => {
        section.style.display = "";
      });

      document.getElementById("emptyState").hidden = true;
      document.getElementById("statTotal").textContent = state.allData.length.toLocaleString("tr-TR");
      updateSearchMeta(state.allData.length);
      return;
    }

    ensureAllYearsRendered();

    let visibleCount = 0;

    document.querySelectorAll(".tl-card").forEach((card) => {
      const matchCat = filter === "all" || card.dataset.category === filter;
      const matchSearch = !query || card.dataset.search.includes(query);
      const visible = matchCat && matchSearch;

      card.style.display = visible ? "" : "none";

      if (visible) {
        visibleCount += 1;
      }
    });

    document.querySelectorAll(".year-section").forEach((section) => {
      const anyVisible = [...section.querySelectorAll(".tl-card")].some(
        (c) => c.style.display !== "none"
      );

      section.style.display = anyVisible ? "" : "none";
    });

    document.getElementById("emptyState").hidden = visibleCount !== 0;
    document.getElementById("statTotal").textContent = visibleCount.toLocaleString("tr-TR");

    updateSearchMeta(visibleCount);
  }

  function updateSearchMeta(count) {
    const meta = document.getElementById("searchMeta");
    const query = state.searchQuery.trim();
    const filter = state.currentFilter;

    const hasFilter = filter !== "all";
    const hasQuery = query.length > 0;

    if (!hasFilter && !hasQuery) {
      meta.innerHTML = `<span>${state.allData.length.toLocaleString("tr-TR")} kayıt gösteriliyor</span>`;
      return;
    }

    const parts = [];

    parts.push(`<span><span class="highlight">${count.toLocaleString("tr-TR")}</span> kayıt bulundu`);

    if (hasQuery) {
      parts.push(` — "<em>${escapeHtml(query)}</em>"`);
    }

    if (hasFilter) {
      parts.push(` · <strong>${CATEGORY_META[filter].label}</strong>`);
    }

    parts.push("</span>");
    parts.push('<button class="clear-filters" id="clearFilters" type="button">Filtreleri temizle</button>');

    meta.innerHTML = parts.join("");

    const clearBtn = document.getElementById("clearFilters");

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        state.searchQuery = "";
        state.currentFilter = "all";

        document.getElementById("searchInput").value = "";
        document.getElementById("searchClear").hidden = true;

        document.querySelectorAll("#catList .cat-btn").forEach((b) => {
          const isAll = b.dataset.filter === "all";
          b.classList.toggle("active", isAll);
          b.setAttribute("aria-pressed", String(isAll));
        });

        applyFilters();
      });
    }
  }

  // ============================================================
  // 15. SEKME DEĞİŞTİRME
  // ============================================================
  function switchTab(tabName) {
    if (state.currentTab === tabName) return;

    state.currentTab = tabName;

    document.querySelectorAll(".top-tab").forEach((t) => {
      const active = t.dataset.tab === tabName;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", String(active));
    });

    document.querySelectorAll(".tab-panel").forEach((p) => {
      const active = p.dataset.panel === tabName;
      p.hidden = !active;
    });

    if (tabName === "archive") {
      setTimeout(() => initScrollSpy(), 50);
    } else if (spyObserver) {
      spyObserver.disconnect();
    }

    window.dispatchEvent(new Event("scroll"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function bindTopTabs() {
    document.querySelectorAll(".top-tab").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });
  }

  // ============================================================
  // 16. YÜKLEME SİMÜLASYONU
  // ============================================================
  function simulateLoading(onComplete) {
    let progress = 0;

    const fill = document.getElementById("progressFill");
    const text = document.getElementById("progressText");

    const interval = setInterval(() => {
      progress += Math.random() * 9 + 2;

      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(onComplete, 250);
      }

      fill.style.width = `${progress}%`;
      text.textContent = `Arşiv taranıyor · ${Math.floor((progress / 100) * TARGET_COUNT).toLocaleString(
        "tr-TR"
      )} / ${TARGET_COUNT}`;
    }, 55);
  }

  // ============================================================
  // 17. KAYDIRMA İLERLEMESİ
  // ============================================================
  function initScrollProgress() {
    const bar = document.getElementById("scrollProgress");

    const update = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      bar.style.width = `${(scrolled * 100).toFixed(2)}%`;
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    update();
  }

  // ============================================================
  // 18. KONTROLLER
  // ============================================================
  function bindControls() {
    const searchInput = document.getElementById("searchInput");
    const searchClear = document.getElementById("searchClear");

    searchInput.addEventListener(
      "input",
      debounce((e) => {
        state.searchQuery = e.target.value;
        searchClear.hidden = !e.target.value;
        applyFilters();
      }, 200)
    );

    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      state.searchQuery = "";
      searchClear.hidden = true;
      searchInput.focus();
      applyFilters();
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && searchInput.value) {
        e.preventDefault();
        searchClear.click();
      }
    });

    const forumSearchInput = document.getElementById("forumSearchInput");
    const forumSearchClear = document.getElementById("forumSearchClear");

    forumSearchInput.addEventListener(
      "input",
      debounce((e) => {
        state.forum.searchQuery = e.target.value;
        forumSearchClear.hidden = !e.target.value;
        applyForumFilters();
      }, 200)
    );

    forumSearchClear.addEventListener("click", () => {
      forumSearchInput.value = "";
      state.forum.searchQuery = "";
      forumSearchClear.hidden = true;
      forumSearchInput.focus();
      applyForumFilters();
    });

    forumSearchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && forumSearchInput.value) {
        e.preventDefault();
        forumSearchClear.click();
      }
    });

    document.querySelectorAll(".sort-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".sort-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        state.forum.sort = btn.dataset.sort;
        applyForumFilters();
      });
    });

    document.addEventListener("keydown", (e) => {
      const forumModal = document.getElementById("forumModal");
      if (forumModal && !forumModal.hidden) return;

      if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
        e.preventDefault();

        if (state.currentTab === "archive") {
          searchInput.focus();
          searchInput.select();
        } else {
          forumSearchInput.focus();
          forumSearchInput.select();
        }
      }
    });
  }

  // ============================================================
  // 19. FORUM MODAL
  // ============================================================
  const REPLY_AUTHORS = [
    "deniz_t",
    "kaya42",
    "linux_gezgini",
    "ardahan",
    "selin_b",
    "mert06",
    "ege_rüzgarı",
    "byte_avcisi",
    "pisi_dostu",
    "anadolu_kodu"
  ];

  const REPLY_TEXTS = [
    "Bu konuda kesinlikle haklısınız, özellikle kurulum sonrası yapılandırma tarafında ciddi boşluklar var.",
    "Ben de benzer bir deneyim yaşadım. Sanırım paket sürümleriyle ilgili bir uyumsuzluk söz konusu.",
    "Öneriniz çok mantıklı. Geliştirici ekibin bunu yol haritasına alması harika olurdu.",
    "Katılıyorum ama geriye dönük uyumluluk konusunda dikkatli olmak gerekir.",
    "Bunu geçen hafta denedim ve beklediğimden çok daha stabil çalıştı.",
    "Detaylı açıklama için teşekkürler, bu konuda dokümantasyon eksikliği gerçekten hissediliyordu.",
    "Bence bu özellik gelirse Pisi çok daha geniş bir kitleye ulaşır.",
    "Aynı fikirdeyim, özellikle yeni kullanıcılar için büyük kolaylık sağlar."
  ];

  function seededRandom(seed) {
    let s = seed % 2147483647;
    if (s <= 0) s += 2147483646;

    return () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
  }

  function generateThreadReplies(thread) {
    const rand = seededRandom(thread.id * 7919 + 13);
    const count = 3 + Math.floor(rand() * 3);
    const replies = [];

    for (let i = 0; i < count; i += 1) {
      replies.push({
        author: REPLY_AUTHORS[Math.floor(rand() * REPLY_AUTHORS.length)],
        text: REPLY_TEXTS[Math.floor(rand() * REPLY_TEXTS.length)],
        likes: Math.floor(rand() * 40),
        daysAgo: Math.floor(rand() * 20) + 1
      });
    }

    return replies;
  }

  function buildForumModalContent(thread) {
    const meta = FORUM_CATEGORY_META[thread.category];
    const flag = LANG_FLAGS[thread.lang] || "";
    const langLabel = LANG_LABELS[thread.lang] || String(thread.lang || "").toUpperCase();
    const avatarColor = getAvatarColor(thread.author);
    const initials = getInitials(thread.author);
    const replies = generateThreadReplies(thread);

    const tagsHtml = thread.tags
      .map((t) => `<span class="forum-tag">#${escapeHtml(t)}</span>`)
      .join("");

    const repliesHtml = replies
      .map((r) => {
        const c = getAvatarColor(r.author);
        const ini = getInitials(r.author);

        return `
          <div class="modal-reply">
            <span class="modal-reply-avatar" style="background:${c}">${ini}</span>
            <div class="modal-reply-body">
              <div class="modal-reply-head">
                <span class="modal-reply-author">@${escapeHtml(r.author)}</span>
                <span class="modal-reply-date">${r.daysAgo} gün önce</span>
              </div>
              <p class="modal-reply-text">${escapeHtml(r.text)}</p>
            </div>
            <span class="modal-reply-likes" title="Beğeni">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              ${r.likes}
            </span>
          </div>
        `;
      })
      .join("");

    return `
      <div class="modal-header">
        <div class="modal-meta">
          <span class="forum-cat cat-${thread.category}">${meta.label}</span>

          ${
            thread.pinned
              ? '<span class="forum-pin" title="Sabitlenmiş"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg></span>'
              : ""
          }

          ${thread.solved ? '<span class="forum-solved">Çözüldü</span>' : ""}

          <span class="forum-lang">
            <span class="flag">${flag}</span>
            ${escapeHtml(langLabel)}
          </span>
        </div>

        <h2 id="forumModalTitle" class="modal-title">${escapeHtml(thread.title)}</h2>

        <div class="modal-author-row">
          <span class="forum-avatar" style="background:${avatarColor}">${initials}</span>
          <span class="forum-author-name">@${escapeHtml(thread.author)}</span>
          <span class="forum-date">${formatDate(thread.date.day, thread.date.month, thread.date.year)}</span>
        </div>
      </div>

      <p class="modal-excerpt">${escapeHtml(thread.excerpt)}</p>

      <div class="modal-tags">${tagsHtml}</div>

      <div class="modal-stats">
        <span class="modal-stat">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <strong>${formatCount(thread.replies)}</strong> Yanıt
        </span>

        <span class="modal-stat">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <strong>${formatCount(thread.likes)}</strong> Beğeni
        </span>

        <span class="modal-stat">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          <strong>${formatCount(thread.views)}</strong> Görüntülenme
        </span>
      </div>

      <h3 class="modal-replies-title">Topluluk Yanıtları</h3>
      <div class="modal-replies">${repliesHtml}</div>
    `;
  }

  function openForumModal(threadId) {
    const thread = FORUM_THREADS.find((t) => t.id === threadId);
    if (!thread) return;

    const modal = document.getElementById("forumModal");
    const body = document.getElementById("forumModalBody");

    body.innerHTML = buildForumModalContent(thread);

    modal.hidden = false;
    document.body.style.overflow = "hidden";

    lastFocused = document.activeElement;

    const closeBtn = modal.querySelector(".modal-close");
    if (closeBtn) closeBtn.focus();
  }

  function closeForumModal() {
    const modal = document.getElementById("forumModal");
    if (!modal || modal.hidden) return;

    modal.hidden = true;
    document.body.style.overflow = "";

    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  function bindForumModalEvents() {
    const modal = document.getElementById("forumModal");
    if (!modal) return;

    modal.addEventListener("click", (e) => {
      if (e.target.closest("[data-close-modal]")) {
        closeForumModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (modal.hidden) return;

      if (e.key === "Escape") {
        closeForumModal();
        return;
      }

      if (e.key !== "Tab") return;

      const focusables = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  function bindForumCardEvents() {
    const container = document.getElementById("forumThreads");
    if (!container) return;

    container.addEventListener("click", (e) => {
      const card = e.target.closest(".forum-card");
      if (!card) return;

      e.preventDefault();
      openForumModal(Number(card.dataset.threadId));
    });

    container.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;

      const card = e.target.closest(".forum-card");
      if (!card) return;

      e.preventDefault();
      openForumModal(Number(card.dataset.threadId));
    });
  }

  // ============================================================
  // 20. BAŞLATMA
  // ============================================================
  function init() {
    initThemeControls();
    initStars();

    simulateLoading(() => {
      document.getElementById("loadingScreen").classList.add("hidden");
      document.getElementById("mainContent").hidden = false;

      state.allData = sortData(generateMassiveArchive());

      renderTimeline(state.allData);

      renderForumCategories();
      updateForumStats();
      applyForumFilters();

      bindTopTabs();
      bindControls();
      bindForumCardEvents();
      bindForumModalEvents();
      initScrollProgress();
      applyFilters();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();