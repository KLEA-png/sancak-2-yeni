import { Course, Teacher, UserRole, ExamResult, Announcement, BlogPost } from './types';

export const MOCK_COURSES: Course[] = [
  // 12. Sınıf & Mezun (Sayısal, EA, Sözel)
  {
    id: '12-say',
    title: '12. Sınıf Sayısal Derece Grubu',
    description: 'Tıp ve Mühendislik hedefleyenler için ileri seviye matematik, fizik, kimya ve biyoloji kampı.',
    grade: '12',
    stream: 'Sayısal',
    type: 'AYT',
    format: 'Yüz Yüze',
    price: 55000,
    startDate: '2024-08-15',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'mezun-say',
    title: 'Mezun Sayısal - Sıfır Hata Programı',
    description: 'Mezunlar için sabah etütleri ve yoğunlaştırılmış konu anlatımı ile eksiksiz hazırlık.',
    grade: 'Mezun',
    stream: 'Sayısal',
    type: 'YKS',
    format: 'Yüz Yüze',
    price: 48000,
    startDate: '2024-09-01',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '12-ea',
    title: '12. Sınıf Eşit Ağırlık VIP',
    description: 'Hukuk ve Psikoloji isteyenler için Matematik ve Edebiyat ağırlıklı özel program.',
    grade: '12',
    stream: 'Eşit Ağırlık',
    type: 'AYT',
    format: 'Yüz Yüze',
    price: 52000,
    startDate: '2024-08-20',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'mezun-ea',
    title: 'Mezun Eşit Ağırlık Hızlandırma',
    description: 'Mezun öğrenciler için yoğunlaştırılmış eşit ağırlık programı. Birebir koçluk desteği ile.',
    grade: 'Mezun',
    stream: 'Eşit Ağırlık',
    type: 'TYT',
    format: 'Yüz Yüze',
    price: 45000,
    startDate: '2024-09-15',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '12-soz',
    title: '12. Sınıf Sözel & İletişim',
    description: 'Sözel bölümler için Tarih, Coğrafya ve Edebiyatın en ince detayları.',
    grade: '12',
    stream: 'Sözel',
    type: 'AYT',
    format: 'Online',
    price: 35000,
    startDate: '2024-09-01',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=600'
  },

  // Ara Sınıflar (9-10-11)
  {
    id: '11-say',
    title: '11. Sınıf Sayısal - YKS Temel Atma',
    description: '12. sınıfa güçlü girmek için 11. sınıf müfredatını %100 kavrama ve TYT başlangıcı.',
    grade: '11',
    stream: 'Sayısal',
    type: 'Okula Destek',
    format: 'Yüz Yüze',
    price: 40000,
    startDate: '2024-09-10',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '10-genel',
    title: '10. Sınıf Okula Destek Paketi',
    description: 'Yazılılara hazırlık, not ortalaması yükseltme ve TYT konularına erken bakış.',
    grade: '10',
    stream: 'Genel',
    type: 'Okula Destek',
    format: 'Online',
    price: 20000,
    startDate: '2024-09-15',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '9-genel',
    title: '9. Sınıf Lise Adaptasyon',
    description: 'Liseye sağlam bir başlangıç. Matematik, Fizik, Kimya temelleri ve çalışma disiplini.',
    grade: '9',
    stream: 'Genel',
    type: 'Okula Destek',
    format: 'Yüz Yüze',
    price: 35000,
    startDate: '2024-09-15',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=600'
  },
  // Yeni Eklenen Paketler
  {
    id: 'deneme-paketi',
    title: 'YKS Deneme Kulübü (40+40)',
    description: 'Türkiye geneli 40 TYT ve 40 AYT denemesi. Detaylı karne analizi ve eksik konu tespiti.',
    grade: '12',
    stream: 'Genel',
    type: 'YKS',
    format: 'Yüz Yüze',
    price: 15000,
    startDate: '2024-09-01',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'kutuphane',
    title: 'VİP Kütüphane & Etüt',
    description: 'Sessiz çalışma ortamı, sınırsız soru çözüm desteği, rehberlik takibi ve çay/kahve ikramı.',
    grade: 'Mezun',
    stream: 'Genel',
    type: 'Okula Destek',
    format: 'Yüz Yüze',
    price: 12000,
    startDate: '2024-09-01',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600'
  }
];

export const MOCK_TEACHERS: Teacher[] = [
  // Matematik & Geometri
  {
    id: 't1',
    name: 'Ahmet Yılmaz',
    branch: 'Matematik',
    subject: 'TYT-AYT Matematik',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400',
    bio: '20 yıllık deneyim, Türev-İntegral üstadı. Öğrenci koçluğu sertifikalı.'
  },
  {
    id: 't2',
    name: 'Selin Kaya',
    branch: 'Matematik',
    subject: 'Geometri',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    bio: 'Görmek ile bakmak arasındaki farkı öğreten Geometri uzmanı.'
  },
  // Fen Bilimleri
  {
    id: 't3',
    name: 'Elif Demir',
    branch: 'Fizik',
    subject: 'Modern Fizik',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    bio: 'Fiziği formül ezberletmeden, mantığıyla sevdiren öğretmen.'
  },
  {
    id: 't4',
    name: 'Murat Şahin',
    branch: 'Kimya',
    subject: 'Organik Kimya',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    bio: 'Periyodik tabloyu adınız gibi ezberletecek hafıza teknikleri uzmanı.'
  },
  {
    id: 't5',
    name: 'Zeynep Işık',
    branch: 'Biyoloji',
    subject: 'Sistemler',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    bio: 'Tıp fakültesi hedefleyenlerin vazgeçilmez biyoloji rehberi.'
  },
  // Türkçe & Sosyal
  {
    id: 't6',
    name: 'Canan Kara',
    branch: 'Edebiyat',
    subject: 'Divan Edebiyatı',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400',
    bio: 'Paragraf taktikleri ve hafıza teknikleriyle edebiyat.'
  },
  {
    id: 't7',
    name: 'Hakan Öz',
    branch: 'Tarih',
    subject: 'Yakın Tarih',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    bio: 'Tarihi bir hikaye gibi anlatan, kronoloji uzmanı.'
  },
  {
    id: 't8',
    name: 'Berna Yıldız',
    branch: 'Coğrafya',
    subject: 'Harita Bilgisi',
    image: 'https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?auto=format&fit=crop&q=80&w=400',
    bio: 'Dünyayı sınıfınıza getiren coğrafya anlatımı.'
  }
];

export const EXAM_RESULTS: ExamResult[] = [
  { id: '1', examName: 'TYT Deneme-1', date: '2024-09-15', score: 340, totalQuestions: 120, correct: 85, wrong: 15, empty: 20 },
  { id: '2', examName: 'TYT Deneme-2', date: '2024-10-01', score: 365, totalQuestions: 120, correct: 92, wrong: 10, empty: 18 },
  { id: '3', examName: 'AYT Deneme-1', date: '2024-10-15', score: 280, totalQuestions: 80, correct: 45, wrong: 10, empty: 25 },
  { id: '4', examName: 'TYT Deneme-3', date: '2024-11-01', score: 390, totalQuestions: 120, correct: 98, wrong: 8, empty: 14 },
  { id: '5', examName: 'Genel Tarama', date: '2024-11-15', score: 410, totalQuestions: 120, correct: 102, wrong: 5, empty: 13 },
];

export const ANNOUNCEMENTS: Announcement[] = [
  { id: '1', title: 'Yarıyıl Kampı Kayıtları Başladı', date: '2024-12-01', category: 'Kamp' },
  { id: '2', title: 'Haftasonu Deneme Sınavı Saat Değişikliği', date: '2024-12-05', category: 'Sınav' },
  { id: '3', title: 'Veli Toplantısı Hakkında', date: '2024-12-10', category: 'Genel' },
];

export const USER_ROLES_OPTIONS = [
  { role: UserRole.STUDENT, label: 'Öğrenci Girişi' },
  { role: UserRole.TEACHER, label: 'Öğretmen Girişi' },
  { role: UserRole.ADMIN, label: 'Yönetici Girişi' },
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: '2026-yks-kayitlari-basladi',
    title: '2026 YKS Hazırlık Grupları Erken Kayıt Dönemi Başladı',
    summary: '11. sınıftan 12. sınıfa geçenler ve mezun grupları için %25 avantajlı erken kayıt fırsatlarını kaçırmayın. Kontenjanlarımız sınırlıdır.',
    date: '10 Mayıs 2024',
    category: 'Duyuru',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    content: `
      <p class="mb-4 text-lg">Sancak Bilim Eğitim Kurumları olarak, 2026 YKS maratonuna şimdiden hazırız! Geleceğinizi şansa bırakmayın, erken kayıt avantajlarından yararlanarak yerinizi ayırtın.</p>
      
      <h3 class="text-2xl font-bold mb-4 text-primary">Erken Kayıt Avantajları Nelerdir?</h3>
      <ul class="list-disc pl-6 mb-8 space-y-3 text-gray-700">
        <li><strong class="text-gray-900">%25 Fiyat Avantajı:</strong> Dönem içi fiyatlara göre çok daha uygun koşullarda kayıt olma imkanı.</li>
        <li><strong class="text-gray-900">Yaz Kampı Hediyesi:</strong> Erken kayıt yaptıran tüm öğrencilerimize TYT Temel Atma Yaz Kampı ücretsiz.</li>
        <li><strong class="text-gray-900">Kaynak Kitap Desteği:</strong> Yıl boyu kullanılacak soru bankaları ve konu anlatım setleri hediye.</li>
        <li><strong class="text-gray-900">Sınıf Seçme Önceliği:</strong> Seviye tespit sınavı sonucuna göre dilediğiniz şubede kontenjan önceliği.</li>
      </ul>

      <h3 class="text-2xl font-bold mb-4 text-primary">Program İçeriği</h3>
      <p class="mb-6 text-gray-700">12. sınıf ve mezun gruplarımız için hazırlanan programımız, değişen sınav sistemine (TYT-AYT) tam uyumludur. Haftalık 24 saat ders, 10 saat zorunlu etüt ve sınırsız soru çözüm ofisleri ile başarıyı garanti altına alıyoruz.</p>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <p class="font-medium text-blue-900">Detaylı bilgi ve randevu için eğitim danışmanlarımızla iletişime geçebilirsiniz: <span class="font-bold">0549 528 72 73</span></p>
      </div>
    `
  },
  {
    id: '2',
    slug: 'yks-2025-degisiklikler',
    title: 'ÖSYM Başkanı Açıkladı: YKS 2025 Müfredatında Önemli Değişiklikler',
    summary: 'Milli Eğitim Bakanlığı ve ÖSYM işbirliği ile yapılan son açıklamaya göre, YKS 2025 sınavında bazı konular müfredattan çıkarıldı.',
    date: '5 Mayıs 2024',
    category: 'YKS',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    content: `
      <p class="mb-4 text-lg">Milli Eğitim Bakanlığı Talim ve Terbiye Kurulu Başkanlığı tarafından yapılan son dakika açıklamasına göre, 2025 Yükseköğretim Kurumları Sınavı (YKS) müfredatında sadeleştirmeye gidildi.</p>
      
      <h3 class="text-2xl font-bold mb-4 text-primary">Hangi Konular Çıkarıldı?</h3>
      <p class="mb-4 text-gray-700">Özellikle Matematik ve Fizik derslerinde, öğrencilerin en çok zorlandığı bazı ileri seviye konuların kapsamı daraltıldı. İntegral uygulamaları ve Modern Fizik'in bazı alt başlıkları sınav müfredatından muaf tutulacak.</p>
      
      <h3 class="text-2xl font-bold mb-4 text-primary">Sınav Süresi Değişecek mi?</h3>
      <p class="text-gray-700">Şu an için sınav süresi ve soru sayısında bir değişiklik öngörülmemektedir. Ancak Türkçe paragraflarının uzunluğu ve mantık muhakeme sorularının ağırlığının artırılması bekleniyor.</p>
    `
  },
  {
    id: '3',
    slug: 'sinav-stresiyle-basa-cikma',
    title: 'Sınav Kaygısını Yönetmenin 5 Etkili Yolu',
    summary: 'Rehberlik servisimizden uzman psikologlarımız, sınav döneminde artan stres ve kaygıyla başa çıkmanın pratik yöntemlerini anlattı.',
    date: '28 Nisan 2024',
    category: 'Rehberlik',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800',
    content: `
      <p class="mb-4 text-lg">Sınav kaygısı, belli bir düzeyde olduğunda motive edicidir; ancak kontrol edilemez hale geldiğinde performansı olumsuz etkiler. İşte kaygınızı yönetmenize yardımcı olacak 5 ipucu:</p>
      
      <ol class="list-decimal pl-6 space-y-4 text-gray-700">
        <li><strong>Düzenli Uyku ve Beslenme:</strong> Fiziksel sağlığınız, zihinsel direncinizi doğrudan etkiler. Günde en az 7 saat uyku şart.</li>
        <li><strong>Nefes Egzersizleri:</strong> Sınav anında veya ders çalışırken daraldığınızda diyafram nefesi alarak sakinleşin. 4 saniye al, 4 saniye tut, 8 saniye ver.</li>
        <li><strong>Gerçekçi Hedefler:</strong> Kendinize ulaşamayacağınız hedefler koymak yerine, adım adım ilerleyen hedefler belirleyin. Küçük zaferler motivasyonu artırır.</li>
        <li><strong>Sosyal Detoks:</strong> Sınav sürecinde sosyal medyadaki "mükemmel hayatlar" veya "çok çalışan rakipler" algısından uzak durun. Kendi sürecinize odaklanın.</li>
        <li><strong>Kendinize Zaman Ayırın:</strong> Haftada en az yarım günü hobilerinize veya dinlenmeye ayırın. Beyninizin de şarj olmaya ihtiyacı var.</li>
      </ol>
    `
  }
];