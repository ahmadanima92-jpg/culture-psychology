import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Users, Leaf, Zap } from 'lucide-react';

interface ParentTestimony {
  id: string;
  name: string;
  location: string;
  problem: string;
  timestamp: string;
}

export default function Home() {
  const [testimonies, setTestimonies] = useState<ParentTestimony[]>([
    {
      id: '1',
      name: 'أم محمد',
      location: 'الدمام',
      problem: 'لاحظت زيادة التلوث الهوائي في الحي، خاصة في أوقات الذروة الصناعية',
      timestamp: '2026-02-10'
    },
    {
      id: '2',
      name: 'والد أحمد',
      location: 'الخبر',
      problem: 'المياه الجوفية في المنطقة تحتاج إلى حماية أفضل من التلوث الصناعي',
      timestamp: '2026-02-09'
    },
    {
      id: '3',
      name: 'أم فاطمة',
      location: 'الظهران',
      problem: 'التصحر يؤثر على المساحات الخضراء في مدارسنا وحيّنا',
      timestamp: '2026-02-08'
    }
  ]);

  const [newTestimony, setNewTestimony] = useState({
    name: '',
    location: '',
    problem: ''
  });

  const handleAddTestimony = () => {
    if (newTestimony.name && newTestimony.location && newTestimony.problem) {
      setTestimonies([
        ...testimonies,
        {
          id: Date.now().toString(),
          name: newTestimony.name,
          location: newTestimony.location,
          problem: newTestimony.problem,
          timestamp: new Date().toISOString().split('T')[0]
        }
      ]);
      setNewTestimony({ name: '', location: '', problem: '' });
    }
  };

  const features = [
    {
      icon: MapPin,
      title: 'الجغرافيا والبيئة',
      description: 'استكشف الخرائط التفاعلية لمواقع التلوث والموارد الطبيعية في المنطقة الشرقية',
      href: '/geography'
    },
    {
      icon: Zap,
      title: 'علوم الأرض',
      description: 'تعرف على الجيولوجيا والموارد الطبيعية والمياه الجوفية والنفط',
      href: '/geology'
    },
    {
      icon: Users,
      title: 'المواطنة الرقمية',
      description: 'شارك في المجتمع الرقمي ورصد المشاكل البيئية بتقنيات حديثة',
      href: '/digital-citizenship'
    },
    {
      icon: Leaf,
      title: 'الاستدامة',
      description: 'اكتشف الحلول المستدامة والمبادرات البيئية في المنطقة الشرقية',
      href: '/sustainability'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/YfhCup8J8TNAVTBxsWdySW/sandbox/sAM8WWkN7xIXATkXrcNuyK-img-1_1770837800000_na1fn_ZWFzdGVybi1wcm92aW5jZS1oZXJv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWZoQ3VwOEo4VE5BVlRCeHNXZHlTVy9zYW5kYm94L3NBTThXV2tON3hJWEFUa1hyY051eUstaW1nLTFfMTc3MDgzNzgwMDAwMF9uYTFmbl9aV0Z6ZEdWeWJpMXdjbTkyYVc1alpTMW9aWEp2LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ddGtwRV22nhBOZo6hFE~7LeZK4J0NSPUDt4ADMDmIwr6uB7mG80GZ3R8xOAfk5CEEJP-XxVzSm4GqltGTUUT4Yv4CY1Ow5~OCN~iCLYUQu7K8PpzYsE9jSZnIbbgEa7tmAiswE~oEQwSQImfrrvVcx25DUMAhK-Lxy2b-JKyzg09Hwzqe49KQh8rw52SVdGEJ1y262tSUIXO1BoXHXUM9j2h93YiKR0ndRgKYCcr3JJnWwTTkvDqsHveA~XgzfrstgBJCmPgxYlid5pkSBrmvM-uOG5~JDKQBoqJtduln9uw6IHirSihQuWmiv9nhgJ4SlSS1F6fs1i5oKPqIwps~w__"
          alt="المنطقة الشرقية"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">مشروع البيئة والتقنية</h1>
            <p className="text-lg md:text-xl max-w-2xl">المنطقة الشرقية – دراسة شاملة للجغرافيا والجيولوجيا والمواطنة الرقمية</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* About Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">عن المشروع</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              يقدّم هذا المشروع دراسة شاملة للبيئة الجغرافية والجيولوجية في المنطقة الشرقية، مع ربطها بالتكنولوجيا الرقمية لتعزيز التوعية والتفاعل مع المجتمع. الهدف فهم العلاقة بين الإنسان والبيئة، واستخدام التكنولوجيا في دعم المعرفة البيئية.
            </p>
            <div className="bg-primary bg-opacity-10 border-r-4 border-primary p-6 rounded-lg">
              <p className="text-primary font-semibold">
                المنطقة الشرقية تمثل 27.6% من مساحة المملكة العربية السعودية، وتحتوي على أكبر احتياطيات نفطية في العالم، مما يجعلها منطقة حيوية للدراسة البيئية والجيولوجية.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={feature.href}>اكتشف المزيد</a>
                  </Button>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Interactive Problem Reporting Section */}
        <section className="bg-secondary bg-opacity-10 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">أبرز المشكلات البيئية في حيّك أو مدرستك</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Add New Problem */}
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-6">شارك مشكلتك البيئية</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">اسمك</label>
                    <Input
                      placeholder="أدخل اسمك"
                      value={newTestimony.name}
                      onChange={(e) => setNewTestimony({ ...newTestimony, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">الحي أو المدرسة</label>
                    <Input
                      placeholder="أدخل الحي أو المدرسة"
                      value={newTestimony.location}
                      onChange={(e) => setNewTestimony({ ...newTestimony, location: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">المشكلة البيئية</label>
                    <Textarea
                      placeholder="صف المشكلة البيئية التي لاحظتها..."
                      value={newTestimony.problem}
                      onChange={(e) => setNewTestimony({ ...newTestimony, problem: e.target.value })}
                      className="min-h-32"
                    />
                  </div>
                  <Button
                    onClick={handleAddTestimony}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    إضافة المشكلة
                  </Button>
                </div>
              </Card>

              {/* Testimonies List */}
              <div>
                <h3 className="text-xl font-bold mb-6">آراء أولياء الأمور والمجتمع</h3>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {testimonies.map((testimony) => (
                    <Card key={testimony.id} className="p-4 border-l-4 border-primary">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-primary">{testimony.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimony.location}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{testimony.timestamp}</span>
                      </div>
                      <p className="text-sm text-foreground">{testimony.problem}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">معلومات عن المنطقة الشرقية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">540,000</p>
              <p className="text-foreground font-medium">كيلومتر مربع</p>
              <p className="text-sm text-muted-foreground">مساحة المنطقة الشرقية</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-4xl font-bold text-secondary mb-2">27.6%</p>
              <p className="text-foreground font-medium">من مساحة السعودية</p>
              <p className="text-sm text-muted-foreground">نسبة المنطقة الشرقية</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-4xl font-bold text-accent mb-2">9M+</p>
              <p className="text-foreground font-medium">نسمة</p>
              <p className="text-sm text-muted-foreground">السكان في المنطقة</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-4xl font-bold text-destructive mb-2">1</p>
              <p className="text-foreground font-medium">أكبر احتياطي نفط</p>
              <p className="text-sm text-muted-foreground">في العالم</p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
