import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Brain, Users, Heart, Phone, BookOpen } from 'lucide-react';

interface PsychologicalExperience {
  id: string;
  author: string;
  experience: string;
  timestamp: string;
}

export default function Psychology() {
  const [experiences, setExperiences] = useState<PsychologicalExperience[]>([
    {
      id: '1',
      author: 'سارة',
      experience: 'قراءة الشعر الكلاسيكي ساعدتني على فهم مشاعري بشكل أعمق. الكلمات الجميلة تعطيني الراحة النفسية والسلام الداخلي.',
      timestamp: '2026-02-10'
    },
    {
      id: '2',
      author: 'محمد',
      experience: 'الانضمام إلى مجموعة نقاش أدبية غيّر حياتي. شعرت بالانتماء والقبول الاجتماعي من خلال مشاركة الأفكار والمشاعر.',
      timestamp: '2026-02-09'
    }
  ]);

  const [newExperience, setNewExperience] = useState({
    author: '',
    experience: ''
  });

  const handleAddExperience = () => {
    if (newExperience.author && newExperience.experience) {
      setExperiences([
        ...experiences,
        {
          id: Date.now().toString(),
          author: newExperience.author,
          experience: newExperience.experience,
          timestamp: new Date().toISOString().split('T')[0]
        }
      ]);
      setNewExperience({ author: '', experience: '' });
    }
  };

  const psychologicalTopics = [
    {
      title: 'الصحة النفسية والأدب',
      description: 'الأدب والثقافة يلعبان دوراً مهماً في تحسين الصحة النفسية. قراءة الشعر والأدب تساعد على التعبير عن المشاعر المكبوتة وتقليل التوتر والقلق. الشعر خاصة يعتبر وسيلة علاجية فعالة حيث يساعد على معالجة الصدمات النفسية والحزن. الاستماع إلى الموسيقى والشعر يحفز إفراز الهرمونات المسؤولة عن السعادة والاسترخاء. كما أن المشاركة في الأنشطة الثقافية والأدبية تزيد من الثقة بالنفس والشعور بالانتماء.',
      icon: Brain
    },
    {
      title: 'التواصل الاجتماعي والعزلة',
      description: 'الشعور بالوحدة والعزلة يؤثر بشكل كبير على الصحة النفسية والجسدية. المشاركة في مجموعات ثقافية وأدبية توفر فرصة للتواصل الاجتماعي والشعور بالانتماء. النقاشات الأدبية والثقافية تساعد على تبادل الأفكار والمشاعر مع الآخرين. العلاقات الاجتماعية القوية تعتبر من أهم عوامل الصحة النفسية. المجتمع الثقافي يوفر بيئة آمنة للتعبير عن الذات والشعور بالقبول.',
      icon: Users
    },
    {
      title: 'الحب والعلاقات الإنسانية',
      description: 'الحب والعلاقات الإنسانية هي من أساسيات الحياة النفسية الصحية. الأدب العربي يعبر عن الحب بطرق عميقة وجميلة. فهم الحب من خلال الأدب يساعد على بناء علاقات صحية. الشعر الغزلي يعكس تطور الحب والعلاقات عبر التاريخ. الحب ليس مجرد مشاعر بل هو فهم عميق للآخر والقدرة على التضحية والعطاء. الأدب يعلمنا كيفية التعبير عن الحب بطرق صحية وبناءة.',
      icon: Heart
    },
    {
      title: 'الضغوط النفسية والتعامل معها',
      description: 'الضغوط النفسية جزء من الحياة اليومية. التعامل الصحيح معها يتطلب استراتيجيات فعالة. الأدب والثقافة توفر وسائل للتعامل مع الضغوط. قراءة الشعر والأدب تساعد على الاسترخاء وتقليل مستويات التوتر. الكتابة والتعبير عن المشاعر تساعد على معالجة الضغوط. المشاركة في الأنشطة الثقافية توفر تنفيساً صحياً للمشاعر السلبية. التأمل والتفكر في الأدب الحكيم يساعد على اكتساب منظور جديد للحياة.',
      icon: BookOpen
    }
  ];

  const supportResources = [
    {
      title: 'الخطوط الساخنة للدعم النفسي',
      content: 'توفر خطوط ساخنة متخصصة الاستشارة النفسية المجانية والسرية. يمكن التحدث مع متخصصين مدربين في أي وقت. الخدمة متاحة 24/7 للأشخاص الذين يحتاجون إلى دعم فوري.',
      icon: Phone
    },
    {
      title: 'مراكز الصحة النفسية',
      content: 'تقدم مراكز الصحة النفسية خدمات استشارية وعلاجية متخصصة. توفر جلسات فردية وجماعية. تقدم برامج توعية وورش عمل تثقيفية حول الصحة النفسية.',
      icon: Brain
    },
    {
      title: 'المجموعات الدعمية',
      content: 'المجموعات الدعمية توفر بيئة آمنة لمشاركة التجارب والمشاعر. تساعد على الشعور بأنك لست وحدك في معاناتك. تقدم استراتيجيات عملية للتعامل مع المشاكل النفسية.',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/YfhCup8J8TNAVTBxsWdySW/sandbox/KKzXi8lCJ3FUaXxFXp3gir-img-3_1770840101000_na1fn_cHN5Y2hvbG9naWNhbC13ZWxsbmVzcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWZoQ3VwOEo4VE5BVlRCeHNXZHlTVy9zYW5kYm94L0tLelhpOGxDSjNGVWFYeEZYcDNnaXItaW1nLTNfMTc3MDg0MDEwMTAwMF9uYTFmbl9jSE41WTJodmJHOW5hV05oYkMxM1pXeHNibVZ6Y3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fIlVt8BB-R5wzL0dgQdgMG28P1tE9eRKMyUZ3U7Q1s0JQ5PUfUIdK2ba4WeXZjouFI9l0Gw6ZzRgW9CX2hCyp6wWufUJPIb1FdPjcaSuXsj4nWBUcry9RNdnlqkwVMtEdhrdgd7DTlPTfhA9HPOtXoDYuB3l7uEC6jFpIYxoEMXHH39HYk-s-~EhlI9ffS1ZrlnZHHe0bBFvUtca-lxO9vLu2-a3G~d7dG4XH0MXwdNkgbxvBIChMVGnzS4gkt7fXRcIuMvy8vxuFIWO0wIalXexU0gLUT~w1Mfn1Sl5SYikH4~TKpIRfpVeaQ5HLQAJrwHKpzKmxUElAylIroY0tA__"
          alt="الصحة النفسية"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">الدراسات النفسية والاجتماعية</h1>
            <p className="text-xl md:text-2xl">الصحة النفسية والثقافة والعلاقات الإنسانية</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16">
          {/* Introduction */}
          <Card className="p-8 bg-secondary/10 mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">مقدمة عامة</h2>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              الصحة النفسية والاجتماعية أساس الحياة السعيدة والمنتجة. في عالمنا المعاصر، نواجه ضغوطاً نفسية متزايدة من الحياة اليومية والتحديات الاجتماعية والاقتصادية. الأدب والثقافة يلعبان دوراً مهماً في تحسين الصحة النفسية والاجتماعية. الفهم العميق للنفس البشرية والعلاقات الإنسانية يساعدنا على بناء حياة أكثر توازناً وسعادة.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              هذه الدراسة تركز على العلاقة بين الأدب والثقافة والصحة النفسية. نستكشف كيف يمكن للأدب أن يساعد على معالجة المشاكل النفسية وتحسين العلاقات الاجتماعية. نناقش أهمية التواصل الاجتماعي والانتماء إلى مجتمع ثقافي في تحسين الصحة النفسية.
            </p>
          </Card>

          <Tabs defaultValue="topics" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="topics">الموضوعات النفسية</TabsTrigger>
              <TabsTrigger value="resources">الموارد والدعم</TabsTrigger>
              <TabsTrigger value="experiences">التجارب</TabsTrigger>
            </TabsList>

            {/* Topics Tab */}
            <TabsContent value="topics" className="space-y-6">
              {psychologicalTopics.map((topic, idx) => {
                const Icon = topic.icon;
                return (
                  <Card key={idx} className="p-8 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-3">
                      <Icon className="w-6 h-6" />
                      {topic.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-foreground">{topic.description}</p>
                  </Card>
                );
              })}
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-6">
              <Card className="p-8 bg-primary/5">
                <h3 className="text-2xl font-bold mb-6 text-primary">موارد الدعم النفسي والاجتماعي</h3>
                <p className="text-lg leading-relaxed text-foreground mb-8">
                  توجد عدة موارد وخدمات متاحة لدعم الصحة النفسية والاجتماعية. يمكن الوصول إلى هذه الخدمات من خلال مختلف القنوات. الأهم هو عدم التردد في طلب المساعدة عند الحاجة.
                </p>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {supportResources.map((resource, idx) => {
                  const Icon = resource.icon;
                  return (
                    <Card key={idx} className="p-6">
                      <Icon className="w-12 h-12 text-primary mb-4" />
                      <h4 className="text-xl font-bold text-primary mb-3">{resource.title}</h4>
                      <p className="text-foreground leading-relaxed">{resource.content}</p>
                    </Card>
                  );
                })}
              </div>

              <Card className="p-8 bg-accent/10">
                <h3 className="text-2xl font-bold mb-4 text-primary">نصائح عملية للصحة النفسية</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">قراءة الأدب والشعر بانتظام لتحسين المزاج والتقليل من التوتر</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">المشاركة في مجموعات ثقافية واجتماعية للشعور بالانتماء</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">التعبير عن المشاعر من خلال الكتابة والفن</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">الاستماع إلى الموسيقى والشعر المفضل</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">طلب المساعدة المهنية عند الحاجة دون تردد</span>
                  </li>
                </ul>
              </Card>
            </TabsContent>

            {/* Experiences Tab */}
            <TabsContent value="experiences" className="space-y-6">
              <Card className="p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-primary">شارك تجربتك</h3>
                <div className="space-y-4">
                  <Input
                    placeholder="اسمك"
                    value={newExperience.author}
                    onChange={(e) => setNewExperience({ ...newExperience, author: e.target.value })}
                    className="bg-background"
                  />
                  <Textarea
                    placeholder="كيف ساعدك الأدب أو الثقافة على تحسين صحتك النفسية؟"
                    value={newExperience.experience}
                    onChange={(e) => setNewExperience({ ...newExperience, experience: e.target.value })}
                    className="bg-background min-h-24"
                  />
                  <Button onClick={handleAddExperience} className="w-full bg-primary hover:bg-primary/90">
                    شارك تجربتك
                  </Button>
                </div>
              </Card>

              {/* Experiences List */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-primary mb-4">تجارب المجتمع</h4>
                {experiences.map((exp) => (
                  <Card key={exp.id} className="p-4 border-l-4 border-accent">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-bold text-primary flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        {exp.author}
                      </h5>
                      <span className="text-xs text-muted-foreground">{exp.timestamp}</span>
                    </div>
                    <p className="text-foreground">{exp.experience}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  );
}
