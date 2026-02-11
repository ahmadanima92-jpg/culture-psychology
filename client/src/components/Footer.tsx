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
              مشروع تفاعلي يستعرض الجغرافيا والجيولوجيا والمواطنة الرقمية في المنطقة الشرقية بالمملكة العربية السعودية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">الروابط السريعة</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">الرئيسية</a></li>
              <li><a href="/geography" className="hover:underline">الجغرافيا والبيئة</a></li>
              <li><a href="/geology" className="hover:underline">علوم الأرض</a></li>
              <li><a href="/digital-citizenship" className="hover:underline">المواطنة الرقمية</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">المصادر</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">وزارة البيئة والمياه والزراعة</a></li>
              <li><a href="#" className="hover:underline">هيئة المساحة الجيولوجية السعودية</a></li>
              <li><a href="#" className="hover:underline">Wikipedia - Eastern Province</a></li>
              <li><a href="#" className="hover:underline">وزارة التعليم</a></li>
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
                فريق التوجيه والإشراف على المشروع
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-primary-foreground border-opacity-20 pt-6 text-center text-sm opacity-75">
            <p>&copy; 2026 مشروع البيئة والتقنية – المنطقة الشرقية. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
