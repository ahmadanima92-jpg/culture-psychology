import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BookOpen, Heart, HelpCircle, Users } from 'lucide-react';

interface UserExperience {
  id: string;
  name: string;
  experience: string;
  timestamp: string;
}

export default function Home() {
  const [experiences, setExperiences] = useState<UserExperience[]>([
    {
      id: '1',
      name: 'أم جنى',
      experience: 'الأدب يعكس حقيقة مشاعرنا وتجاربنا اليومية. قراءة الشعر القديم تساعدني على فهم نفسي بشكل أعمق.',
      timestamp: '2026-02-10'
    },
    {
      id: '2',
      name: 'والد رتاج',
      experience: 'الصحة النفسية تبدأ من فهم ذاتنا من خلال الأدب والثقافة. هذا المشروع رائع لتعليم أبنائنا.',
      timestamp: '2026-02-09'
    },
    {
      id: '3',
      name: 'والدة روان',
      experience: 'تأثر بالنصوص الأدبية يساعد على التعبير عن المشاعر المكبوتة والتعامل مع الضغوط النفسية.',
      timestamp: '2026-02-08'
    }
  ]);

  const [newExperience, setNewExperience] = useState({
    name: '',
    experience: ''
  });

  const handleAddExperience = () => {
    if (newExperience.name && newExperience.experience) {
      setExperiences([
        ...experiences,
        {
          id: Date.now().toString(),
          name: newExperience.name,
          experience: newExperience.experience,
          timestamp: new Date().toISOString().split('T')[0]
        }
      ]);
      setNewExperience({ name: '', experience: '' });
    }
  };

  const features = [
    {
      icon: BookOpen,
      title: 'الدراسات الأدبية',
      description: 'استكشف الأدب العربي عبر العصور وتأثيره على النفس والمجتمع',
      href: '/literature'
    },
    {
      icon: Heart,
      title: 'الدراسات النفسية والاجتماعية',
      description: 'فهم الصحة النفسية والتجارب الاجتماعية في حياتنا اليومية',
      href: '/psychology'
    },
    {
      icon: HelpCircle,
      title: 'أسئلة تفاعلية',
      description: 'اختبر معلوماتك وشارك في أسئلة ممتعة عن الأدب والنفس',
      href: '/quiz'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/YfhCup8J8TNAVTBxsWdySW/sandbox/WJh5uPcmED78JqmtPMZQ2Y-img-1_1770838984000_na1fn_bGl0ZXJhcnktaGVybw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWZoQ3VwOEo4VE5BVlRCeHNXZHlTVy9zYW5kYm94L1dKaDV1UGNtRUQ3OEpxbXRQTVpRMlktaW1nLTFfMTc3MDgzODk4NDAwMF9uYTFmbl9iR2wwWlhKaGNua3RhR1Z5YncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Gjqanlbawo-6Ak-96o4vAzmzkQiG871U5AritA-M8Fnd-XjFbFhAZ4l-X~RTBbv-LOWwka2a4VDWIVnpzOc8xID2nKg0dhpYldx82wbHzPU3obS1CKA3emCnaMuUPE8ZKs04UehI4njzhLogk5oCdka0yczXOuNH1QFI2YH0LLQrJ~7nw-94P0kRYItqPK~hbwKT6nvxtnqLVUd0pXPixg5Da4rhMYp9WqxbxODBggYbi7wVk7q1Vg~fJHpuGntlPr8Ar500SIprXrdQsFQMQ8IWQaSeYZZAeSnmV6AkYSbD68sO-LWZyn3WN3vZQPlV7x6HPZ1KEFOfjrylIqBxTQ__"
          alt="الأدب والثقافة"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">مشروع الثقافة والنفس</h1>
            <p className="text-lg md:text-xl">استكشف تأثير الأدب والثقافة على الصحة النفسية والاجتماعية</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* About Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">عن المشروع</h2>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              يستكشف هذا الموقع تأثير البيئة والمجتمع على الأدب العربي والصحة النفسية والاجتماعية. يركز على ربط الأدب والتجارب الإنسانية بالواقع البيئي والاجتماعي، مع تقديم طرق تفاعلية للزوار للتعبير والمشاركة.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.href} className="p-6 hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                  <p className="text-foreground mb-4">{feature.description}</p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <a href={feature.href}>استكشف المزيد</a>
                  </Button>
                </Card>
              );
            })}
          </div>

          {/* Team Section */}
          <div className="bg-secondary/10 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-primary">الطالبات المساهمات</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>جنى العمرة</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>رتاج الهاجري</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>رتاج اليوسف</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>جود البطال</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>روان العويشير</span>
              </div>
            </div>
            <h4 className="text-lg font-bold mb-3 text-primary">المعلمات</h4>
            <div className="flex gap-4">
              <span className="text-foreground">نسيم القحطاني</span>
              <span className="text-foreground">•</span>
              <span className="text-foreground">عمشاء القحطاني</span>
            </div>
          </div>

          {/* Interactive Section */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-primary text-center">شارك تجربتك الثقافية أو شعورك الاجتماعي</h3>
            
            <Card className="p-6 mb-8">
              <div className="space-y-4">
                <Input
                  placeholder="اسمك"
                  value={newExperience.name}
                  onChange={(e) => setNewExperience({ ...newExperience, name: e.target.value })}
                  className="bg-background"
                />
                <Textarea
                  placeholder="شارك نصاً قصيراً، اقتباساً، أو تعليقاً على تجربتك الاجتماعية..."
                  value={newExperience.experience}
                  onChange={(e) => setNewExperience({ ...newExperience, experience: e.target.value })}
                  className="bg-background min-h-24"
                />
                <Button onClick={handleAddExperience} className="w-full bg-primary hover:bg-primary/90">
                  شارك تجربتك
                </Button>
              </div>
            </Card>

            {/* Testimonials */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-primary mb-4">تجارب الزوار</h4>
              {experiences.map((exp) => (
                <Card key={exp.id} className="p-4 border-l-4 border-primary">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold text-primary">{exp.name}</h5>
                    <span className="text-xs text-muted-foreground">{exp.timestamp}</span>
                  </div>
                  <p className="text-foreground">{exp.experience}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
