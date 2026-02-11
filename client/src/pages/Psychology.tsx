import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Brain, Users, Heart, Phone } from 'lucide-react';

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
      author: 'مريم',
      experience: 'قراءة الشعر ساعدتني على التعامل مع القلق والتوتر. الكلمات الجميلة تهدئ روحي.',
      timestamp: '2026-02-10'
    },
    {
      id: '2',
      author: 'أحمد',
      experience: 'الانضمام إلى مجموعة نقاش أدبية ساعدني على الشعور بالانتماء والتقبل الاجتماعي.',
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

  const supportCenters = [
    {
      name: 'مركز إرادة الدمام',
      services: ['علاج فردي', 'جلسات جماعية', 'ورش عمل تعليمية', 'دعم نفسي للعائلات'],
      description: 'مركز متخصص في الدعم النفسي والعلاج السلوكي'
    },
    {
      name: 'برامج الصحة النفسية المجتمعية',
      services: ['استشارات مجانية', 'برامج توعية', 'أنشطة ترفيهية', 'دعم الشباب'],
      description: 'برامج موجهة لدعم الصحة النفسية في المجتمع'
    }
  ];

  const psychologicalIssues = [
    {
      title: 'التوتر والقلق',
      description: 'التوتر والقلق من أكثر المشاكل النفسية انتشاراً. يمكن للأدب والفن أن يساعد على تخفيف هذه الضغوط.',
      percentage: 45
    },
    {
      title: 'الاكتئاب',
      description: 'الاكتئاب يؤثر على جودة الحياة. التواصل الاجتماعي والأنشطة الثقافية مهمة للتعافي.',
      percentage: 28
    },
    {
      title: 'مشاكل الشباب',
      description: 'الشباب يواجهون تحديات فريدة. الدعم الأسري والمجتمعي ضروري.',
      percentage: 35
    },
    {
      title: 'الوحدة والعزلة',
      description: 'الشعور بالوحدة يؤثر على الصحة النفسية. المجتمعات الثقافية توفر الدعم والانتماء.',
      percentage: 32
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/YfhCup8J8TNAVTBxsWdySW/sandbox/WJh5uPcmED78JqmtPMZQ2Y-img-2_1770838980000_na1fn_cHN5Y2hvbG9naWNhbC13ZWxsbmVzcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWZoQ3VwOEo4VE5BVlRCeHNXZHlTVy9zYW5kYm94L1dKaDV1UGNtRUQ3OEpxbXRQTVpRMlktaW1nLTJfMTc3MDgzODk4MDAwMF9uYTFmbl9jSE41WTJodmJHOW5hV05oYkMxM1pXeHNibVZ6Y3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=gwRAodKKzFq5D~bHk--Ckpkh10HUUct4x3ZRqia-6oM4U7PgYUW7scPP5561FXU1J32UzYYCNNyvymMO6QwPzMz8Mb5XCo2APu5OCyTevUBr46I-wJbm2tlYgfbOqzQsRaM4Gb1Ko1wqwrnq8XOUToayl6Renz3iyF9Fo-ADbQNhEuyOmC-kkLnIO08tXqiAPCSgfdLeknofASHv0DYz9pxhCKbRds~dHw6a2KfcQyGx~jJmXNKWazr3UF5bsmo9rdbagIVLTeFc9yj4YfpT1J96X1GL-7LgL1T0rEwS8XqXUwdm1QvxV2snhbzQgDE9WbZKZD1Juofn-2DJslPF7g__"
          alt="الصحة النفسية"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">الصحة النفسية والتجارب الاجتماعية</h1>
            <p className="text-lg md:text-xl">فهم تأثير البيئة والمجتمع على صحتنا النفسية</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto mb-12">
            <Card className="p-8 bg-secondary/10">
              <h2 className="text-2xl font-bold mb-4 text-primary">مقدمة عامة</h2>
              <p className="text-lg leading-relaxed text-foreground">
                الصحة النفسية والاجتماعية في مجتمعنا تتأثر بالبيئة، التحولات الاقتصادية، والتغيرات الثقافية. الدراسة تركز على كيفية إدارة الضغوط، التفاعل الاجتماعي، ودور المجتمع والأسرة في دعم النفسية. الأدب والثقافة يلعبان دوراً مهماً في تحسين الصحة النفسية والاجتماعية.
              </p>
            </Card>
          </div>

          <Tabs defaultValue="issues" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="issues">المشاكل النفسية</TabsTrigger>
              <TabsTrigger value="centers">مراكز الدعم</TabsTrigger>
              <TabsTrigger value="experiences">التجارب</TabsTrigger>
            </TabsList>

            {/* Issues Tab */}
            <TabsContent value="issues" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {psychologicalIssues.map((issue, idx) => (
                  <Card key={idx} className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-primary flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      {issue.title}
                    </h3>
                    <p className="text-foreground mb-4">{issue.description}</p>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${issue.percentage}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{issue.percentage}% من الحالات</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Support Centers Tab */}
            <TabsContent value="centers" className="space-y-6">
              {supportCenters.map((center, idx) => (
                <Card key={idx} className="p-6 border-l-4 border-primary">
                  <h3 className="text-xl font-bold mb-2 text-primary flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    {center.name}
                  </h3>
                  <p className="text-foreground mb-4">{center.description}</p>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      الخدمات المتاحة:
                    </h4>
                    <ul className="space-y-2">
                      {center.services.map((service, i) => (
                        <li key={i} className="text-foreground flex gap-2">
                          <span className="text-primary">✓</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
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
                    placeholder="كيف تؤثر البيئة أو المجتمع على صحتك النفسية؟"
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
