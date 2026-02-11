import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Smartphone, Share2, Users, BookOpen, Wifi, Heart } from 'lucide-react';

/**
 * Digital Citizenship Page
 * Design Philosophy: Sustainable Modernity
 * - Community engagement through technology
 * - Environmental monitoring and reporting
 * - Digital literacy and awareness
 */

interface DigitalInitiative {
  id: string;
  title: string;
  description: string;
  icon: any;
  benefits: string[];
  examples: string[];
}

export default function DigitalCitizenship() {
  const initiatives: DigitalInitiative[] = [
    {
      id: '1',
      title: 'رصد التلوث الرقمي',
      description: 'استخدام التطبيقات والأجهزة الذكية لرصد ومراقبة مستويات التلوث في الوقت الفعلي',
      icon: Smartphone,
      benefits: [
        'تتبع فوري لمستويات التلوث',
        'مشاركة البيانات مع الجهات المسؤولة',
        'توعية المجتمع بالمشاكل البيئية',
        'اتخاذ إجراءات سريعة عند الضرورة'
      ],
      examples: [
        'تطبيقات قياس جودة الهواء',
        'أجهزة استشعار ذكية للمياه',
        'كاميرات المراقبة البيئية'
      ]
    },
    {
      id: '2',
      title: 'التعليم الرقمي والتوعية',
      description: 'استخدام المنصات الرقمية والوسائط المتعددة لنشر المعرفة البيئية والجيولوجية',
      icon: BookOpen,
      benefits: [
        'وصول أوسع للمعلومات البيئية',
        'تعليم تفاعلي وممتع',
        'تطوير الوعي البيئي',
        'بناء جيل واعي بالقضايا البيئية'
      ],
      examples: [
        'دورات تعليمية عبر الإنترنت',
        'مقاطع فيديو توعوية',
        'ألعاب تعليمية بيئية'
      ]
    },
    {
      id: '3',
      title: 'نشر النصوص الأدبية المحلية',
      description: 'توثيق ونشر النصوص الأدبية والثقافية المحلية التي تعكس البيئة والتراث',
      icon: Share2,
      benefits: [
        'الحفاظ على التراث الثقافي',
        'ربط الثقافة بالبيئة',
        'تعزيز الهوية المحلية',
        'نشر الوعي الثقافي والبيئي'
      ],
      examples: [
        'الشعر والنثر عن البيئة',
        'الحكايات التقليدية المحلية',
        'الفنون والحرف التقليدية'
      ]
    },
    {
      id: '4',
      title: 'دعم الصحة النفسية والاجتماعية',
      description: 'استخدام التكنولوجيا لتوفير الدعم النفسي والاجتماعي للمجتمع',
      icon: Heart,
      benefits: [
        'توفير خدمات الاستشارة النفسية',
        'بناء مجتمعات دعم افتراضية',
        'تقليل الشعور بالعزلة',
        'تحسين جودة الحياة النفسية'
      ],
      examples: [
        'منصات الاستشارة النفسية',
        'مجموعات الدعم الافتراضية',
        'تطبيقات تحسين الصحة النفسية'
      ]
    },
    {
      id: '5',
      title: 'التواصل المجتمعي الفعال',
      description: 'بناء قنوات تواصل فعالة بين المجتمع والجهات المسؤولة',
      icon: Users,
      benefits: [
        'تسهيل التواصل بين المجتمع والحكومة',
        'الاستجابة السريعة للشكاوى',
        'بناء الثقة والشفافية',
        'تحسين الخدمات العامة'
      ],
      examples: [
        'منصات الشكاوى الإلكترونية',
        'وسائل التواصل الاجتماعي الرسمية',
        'تطبيقات التواصل المباشر'
      ]
    },
    {
      id: '6',
      title: 'الاتصال والتشبيك الرقمي',
      description: 'استخدام الشبكات الرقمية لربط الأفراد والمنظمات البيئية',
      icon: Wifi,
      benefits: [
        'تبادل الخبرات والمعرفة',
        'تنسيق الجهود البيئية',
        'بناء شراكات قوية',
        'تحقيق أهداف بيئية مشتركة'
      ],
      examples: [
        'منصات التعاون الرقمية',
        'شبكات المنظمات البيئية',
        'مجموعات العمل الافتراضية'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/YfhCup8J8TNAVTBxsWdySW/sandbox/sAM8WWkN7xIXATkXrcNuyK-img-4_1770837805000_na1fn_ZGlnaXRhbC1jb21tdW5pdHk.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWZoQ3VwOEo4VE5BVlRCeHNXZHlTVy9zYW5kYm94L3NBTThXV2tON3hJWEFUa1hyY051eUstaW1nLTRfMTc3MDgzNzgwNTAwMF9uYTFmbl9aR2xuYVhSaGJDMWpiMjF0ZFc1cGRIay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GdV3rSpBe9eWMg~t-NPK5aTUmAMe2FFOWgkUixy1V-wRWMgwVb2JviN7rkksTjjqkia2vAu2wPorTb-yOuwEXrPVaSWvB3QpCZ-weskyGefW0Pm8M8YFxH3qjFu5gVwr47FnkIdntiBXFITt-yE5byCuQ6oaUf~qhlL5FE8YxU97KDYuKQ2kiSbnZrmyX3sGFHFXjdJvRxb8pSgB8vJcXlZKKJFkwMotqUzkLXN5QG4wcQ62hotv55HCry3agFRtuNOdZAzdbNIccR4V80vUwqFJLObjmoWXlADMWIA~gNM7rGGHkw98GdK1St8HNpgawNSz8xOfCOVk16IpfskrmQ__"
          alt="المواطنة الرقمية"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">المواطنة الرقمية والتفاعل المجتمعي</h1>
            <p className="text-lg md:text-xl">استخدام التكنولوجيا لبناء مجتمع واعي ومستدام</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Introduction */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">ما هي المواطنة الرقمية؟</h2>
            <p className="text-lg text-foreground leading-relaxed">
              المواطنة الرقمية هي الممارسة المسؤولة والأخلاقية للتكنولوجيا الرقمية. تشمل استخدام الإنترنت والأجهزة الذكية بطريقة آمنة وفعالة لتحقيق أهداف اجتماعية وبيئية. في سياق هذا المشروع، تركز المواطنة الرقمية على رصد المشاكل البيئية، نشر الوعي، والتفاعل المجتمعي الفعال.
            </p>
          </div>

          {/* Initiatives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {initiatives.map((initiative) => {
              const Icon = initiative.icon;
              return (
                <Card key={initiative.id} className="p-6 hover:shadow-lg transition-shadow border-t-4 border-primary">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-bold">{initiative.title}</h3>
                  </div>
                  <p className="text-sm text-foreground mb-4">{initiative.description}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-primary mb-2">الفوائد:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {initiative.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx}>• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Detailed Initiatives */}
        <section className="bg-secondary bg-opacity-10 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">المبادرات الرقمية التفصيلية</h2>
            
            <div className="space-y-8">
              {initiatives.map((initiative) => {
                const Icon = initiative.icon;
                return (
                  <Card key={initiative.id} className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Icon className="w-10 h-10 text-primary" />
                      <h3 className="text-2xl font-bold text-primary">{initiative.title}</h3>
                    </div>
                    
                    <p className="text-foreground mb-6">{initiative.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-lg mb-3 text-secondary">الفوائد الرئيسية</h4>
                        <ul className="space-y-2">
                          {initiative.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-primary font-bold">✓</span>
                              <span className="text-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-3 text-accent">أمثلة عملية</h4>
                        <ul className="space-y-2">
                          {initiative.examples.map((example, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-accent font-bold">→</span>
                              <span className="text-foreground">{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-16">
          <Card className="p-12 bg-gradient-to-r from-primary to-secondary text-white text-center">
            <h2 className="text-3xl font-bold mb-6">كن جزءاً من الحل</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              استخدم التكنولوجيا الرقمية لرصد المشاكل البيئية، شارك معرفتك، وساهم في بناء مجتمع أكثر استدامة وواعياً بالقضايا البيئية.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg">
                ابدأ الآن
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                تعرف على المزيد
              </Button>
            </div>
          </Card>
        </section>

        {/* Resources */}
        <section className="container mx-auto px-4 py-16">
          <Card className="p-8 bg-primary bg-opacity-5">
            <h3 className="text-2xl font-bold mb-6 text-primary">الموارد والمراجع</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-primary">منصات التعليم الرقمي</h4>
                <ul className="space-y-2 text-foreground">
                  <li>• منصات التعليم الإلكترونية المعتمدة</li>
                  <li>• تطبيقات التعلم التفاعلية</li>
                  <li>• المكتبات الرقمية والموارد التعليمية</li>
                  <li>• قنوات اليوتيوب التعليمية</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-primary">الجهات المسؤولة</h4>
                <ul className="space-y-2 text-foreground">
                  <li>• وزارة التعليم - المبادرات الرقمية</li>
                  <li>• وزارة البيئة والمياه والزراعة</li>
                  <li>• هيئة الاتصالات وتقنية المعلومات</li>
                  <li>• المنظمات غير الحكومية البيئية</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
