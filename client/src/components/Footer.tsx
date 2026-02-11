/**
 * Footer Component
 * Design Philosophy: Sustainable Modernity
 * - Professional footer with project information and credits
 * - Contact information and resources
 */
export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">عن المشروع</h3>
            <p className="text-sm opacity-90">
              مشروع تفاعلي يستعرض الدراسات الأدبية والدراسات النفسية والاجتماعية، مع التركيز على العلاقة بين الأدب والثقافة والصحة النفسية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">الروابط السريعة</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">الرئيسية</a></li>
              <li><a href="/literature" className="hover:underline">الدراسات الأدبية</a></li>
              <li><a href="/psychology" className="hover:underline">الدراسات النفسية</a></li>
              <li><a href="/quiz" className="hover:underline">الأسئلة التفاعلية</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">المصادر</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">وزارة التعليم</a></li>
              <li><a href="#" className="hover:underline">المكتبة الرقمية العربية</a></li>
              <li><a href="#" className="hover:underline">منظمة الصحة النفسية</a></li>
              <li><a href="#" className="hover:underline">مراكز الدعم النفسي</a></li>
            </ul>
          </div>
        </div>

        {/* Students & Teachers */}
        <div className="border-t border-primary-foreground border-opacity-20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-3">الطالبات</h4>
              <p className="text-sm opacity-90">
                جنى العمرة، رتاج الهاجري، رتاج اليوسف، جود البطال، روان العويشير
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">المعلمات والموجهون</h4>
              <p className="text-sm opacity-90">
                نسيم القحطاني (الدراسات الأدبية) | عمشاء السبيعي (الدراسات النفسية والاجتماعية)
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-primary-foreground border-opacity-20 pt-6 text-center text-sm opacity-75">
            <p>&copy; 2026 مشروع الثقافة والنفس. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
