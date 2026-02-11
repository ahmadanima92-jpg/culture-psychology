import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BookOpen, Heart } from 'lucide-react';

interface LiterarySubmission {
  id: string;
  author: string;
  text: string;
  votes: number;
  timestamp: string;
}

export default function Literature() {
  const [submissions, setSubmissions] = useState<LiterarySubmission[]>([
    {
      id: '1',
      author: 'الشاعر القديم',
      text: '"يا ليل الصبر كم أساؤك مقلة... وكم منيت بطول السهر مقلة"',
      votes: 12,
      timestamp: '2026-02-10'
    },
    {
      id: '2',
      author: 'كاتب معاصر',
      text: '"الأدب هو صرخة الروح ضد الظلام، وشعاع أمل في قلب الليل"',
      votes: 8,
      timestamp: '2026-02-09'
    }
  ]);

  const [newSubmission, setNewSubmission] = useState({
    author: '',
    text: ''
  });

  const handleAddSubmission = () => {
    if (newSubmission.author && newSubmission.text) {
      setSubmissions([
        ...submissions,
        {
          id: Date.now().toString(),
          author: newSubmission.author,
          text: newSubmission.text,
          votes: 0,
          timestamp: new Date().toISOString().split('T')[0]
        }
      ]);
      setNewSubmission({ author: '', text: '' });
    }
  };

  const handleVote = (id: string) => {
    setSubmissions(submissions.map(sub => 
      sub.id === id ? { ...sub, votes: sub.votes + 1 } : sub
    ));
  };

  const periods = [
    {
      name: 'العصر الجاهلي',
      description: 'شعراء البداوة والوحدة الصحراوية',
      content: 'يعكس الشعر الجاهلي مشاعر الشاعر تجاه الصحراء والقبيلة والفخر القبلي. الطبيعة القاسية شكلت شخصية الشاعر الجاهلي وجعلته يعبر عن الشجن والحنين بطريقة عميقة.',
      examples: [
        'قول امرؤ القيس: "قفا نبك من ذكرى حبيب ومنزل"',
        'قول عنترة: "هل غادر الشعراء من متردم"'
      ]
    },
    {
      name: 'عصر صدر الإسلام',
      description: 'انعكاس القيم الإسلامية والتعاون',
      content: 'تغيرت مواضيع الشعر مع ظهور الإسلام، حيث أصبح التركيز على القيم الأخلاقية والتعاون والانتماء للمجتمع الجديد. الشعراء بدأوا يعبرون عن الإيمان والجهاد والوحدة الإسلامية.',
      examples: [
        'شعر حسان بن ثابت في الدفاع عن الإسلام',
        'شعر النابغة الجعدي في الإسلاميات'
      ]
    },
    {
      name: 'العصر الأموي',
      description: 'الشعر السياسي والاجتماعي',
      content: 'ازدهر الشعر السياسي والاجتماعي في العصر الأموي. الشعراء عبروا عن الصراعات السياسية والقضايا الاجتماعية، وظهرت مدارس شعرية مختلفة تعكس تنوع المجتمع الأموي.',
      examples: [
        'شعر الفرزدق والأخطل في الصراعات القبلية',
        'شعر جرير في الهجاء والفخر'
      ]
    },
    {
      name: 'العصر العباسي',
      description: 'الشعر الحضري والفلسفي',
      content: 'شهد العصر العباسي ازدهاراً ثقافياً كبيراً. الشعراء أصبحوا يعبرون عن تجاربهم الشخصية والفلسفية، وتأثروا بالتطورات الحضرية والتجارية والفكرية في المدن الكبرى.',
      examples: [
        'شعر أبي نواس في الخمر والطبيعة',
        'شعر المتنبي في الفخر والحكمة'
      ]
    },
    {
      name: 'العصر الحديث',
      description: 'تجارب المدن الساحلية والصراعات الحديثة',
      content: 'الأدب الحديث يعكس تجارب المدن الساحلية والصراعات الاجتماعية والسياسية المعاصرة. الشعراء المعاصرون يستخدمون لغة حديثة ويعبرون عن قضايا معاصرة بطرق مبتكرة.',
      examples: [
        'شعر نزار قباني في الحب والوطن',
        'شعر محمود درويش في المقاومة والهوية'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/YfhCup8J8TNAVTBxsWdySW/sandbox/WJh5uPcmED78JqmtPMZQ2Y-img-1_1770838984000_na1fn_bGl0ZXJhcnktaGVybw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWZoQ3VwOEo4VE5BVlRCeHNXZHlTVy9zYW5kYm94L1dKaDV1UGNtRUQ3OEpxbXRQTVpRMlktaW1nLTFfMTc3MDgzODk4NDAwMF9uYTFmbl9iR2wwWlhKaGNua3RhR1Z5YncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Gjqanlbawo-6Ak-96o4vAzmzkQiG871U5AritA-M8Fnd-XjFbFhAZ4l-X~RTBbv-LOWwka2a4VDWIVnpzOc8xID2nKg0dhpYldx82wbHzPU3obS1CKA3emCnaMuUPE8ZKs04UehI4njzhLogk5oCdka0yczXOuNH1QFI2YH0LLQrJ~7nw-94P0kRYItqPK~hbwKT6nvxtnqLVUd0pXPixg5Da4rhMYp9WqxbxODBggYbi7wVk7q1Vg~fJHpuGntlPr8Ar500SIprXrdQsFQMQ8IWQaSeYZZAeSnmV6AkYSbD68sO-LWZyn3WN3vZQPlV7x6HPZ1KEFOfjrylIqBxTQ__"
          alt="الأدب العربي"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">الأدب العربي وتأثير البيئة على النفس والمجتمع</h1>
            <p className="text-lg md:text-xl">استكشف كيف شكلت الطبيعة والمجتمع الأدب العربي عبر العصور</p>
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
                الأدب العربي مرآة تعكس البيئة الطبيعية والاجتماعية والتاريخية. يظهر كيف شكلت الطبيعة (صحاري، سواحل، تضاريس) والمجتمع المشاعر الإنسانية، القيم، والفنون الأدبية. كل عصر من العصور الأدبية يحمل بصمات البيئة والمجتمع الذي عاش فيه الشعراء والكتاب.
              </p>
            </Card>
          </div>

          {/* Historical Periods */}
          <Tabs defaultValue="0" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              {periods.map((period, idx) => (
                <TabsTrigger key={idx} value={idx.toString()} className="text-xs md:text-sm">
                  {period.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {periods.map((period, idx) => (
              <TabsContent key={idx} value={idx.toString()} className="space-y-6">
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-primary">{period.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{period.description}</p>
                  <p className="text-lg leading-relaxed text-foreground mb-6">{period.content}</p>
                  
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h4 className="font-bold text-primary mb-3">أمثلة شعرية:</h4>
                    <ul className="space-y-2">
                      {period.examples.map((example, i) => (
                        <li key={i} className="text-foreground flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* Interactive Section */}
          <div className="mt-16 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-primary text-center">شارك نصاً قصيراً أو اقتباساً شعرياً</h3>
            
            <Card className="p-6 mb-8">
              <div className="space-y-4">
                <Input
                  placeholder="اسمك أو اسم الشاعر"
                  value={newSubmission.author}
                  onChange={(e) => setNewSubmission({ ...newSubmission, author: e.target.value })}
                  className="bg-background"
                />
                <Textarea
                  placeholder="شارك نصاً قصيراً أو اقتباساً شعرياً مستوحى من بيئتك أو مجتمعك..."
                  value={newSubmission.text}
                  onChange={(e) => setNewSubmission({ ...newSubmission, text: e.target.value })}
                  className="bg-background min-h-24"
                />
                <Button onClick={handleAddSubmission} className="w-full bg-primary hover:bg-primary/90">
                  شارك النص
                </Button>
              </div>
            </Card>

            {/* Submissions */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-primary mb-4">أفضل التجارب الأدبية</h4>
              {submissions
                .sort((a, b) => b.votes - a.votes)
                .map((sub) => (
                  <Card key={sub.id} className="p-4 border-l-4 border-primary hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-bold text-primary">{sub.author}</h5>
                      <span className="text-xs text-muted-foreground">{sub.timestamp}</span>
                    </div>
                    <p className="text-foreground italic mb-3">{sub.text}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleVote(sub.id)}
                      className="flex items-center gap-2"
                    >
                      <Heart className="w-4 h-4" />
                      أعجبني ({sub.votes})
                    </Button>
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
