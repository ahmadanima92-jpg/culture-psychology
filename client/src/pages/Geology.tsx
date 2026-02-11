import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Droplet, Zap, Gem, AlertTriangle } from 'lucide-react';

/**
 * Geology Page
 * Design Philosophy: Sustainable Modernity
 * - Interactive geological cross-section
 * - Natural resources visualization
 * - Impact analysis on agriculture and industry
 */

interface GeologicalResource {
  id: string;
  name: string;
  type: 'oil' | 'water' | 'minerals' | 'soil';
  depth: string;
  reserves: string;
  importance: string;
  description: string;
}

export default function Geology() {
  const [selectedResource, setSelectedResource] = useState<string>('oil');

  const resources: GeologicalResource[] = [
    {
      id: '1',
      name: 'النفط الخام',
      type: 'oil',
      depth: '800 - 3000 متر',
      reserves: 'أكبر احتياطي في العالم',
      importance: 'حيوي جداً',
      description: 'يوجد النفط في طبقات عميقة تحت سطح الأرض. يعتبر المصدر الرئيسي للطاقة والدخل الاقتصادي للمنطقة. استخراج النفط يؤثر على البيئة من خلال الانبعاثات والتسريبات.'
    },
    {
      id: '2',
      name: 'المياه الجوفية',
      type: 'water',
      depth: '100 - 500 متر',
      reserves: 'احتياطيات محدودة',
      importance: 'حيوي',
      description: 'المياه الجوفية هي المصدر الرئيسي للمياه العذبة في المنطقة. تستخدم للشرب والري والصناعة. يجب حمايتها من التلوث الصناعي والزراعي.'
    },
    {
      id: '3',
      name: 'الرواسب المعدنية',
      type: 'minerals',
      depth: '200 - 1000 متر',
      reserves: 'متنوعة',
      importance: 'مهم',
      description: 'تحتوي المنطقة على رواسب معدنية متنوعة مثل الفوسفات والبوكسايت والماغنزايت. هذه المعادن مهمة للصناعة والزراعة.'
    },
    {
      id: '4',
      name: 'التربة والصخور',
      type: 'soil',
      depth: '0 - 200 متر',
      reserves: 'متوفرة',
      importance: 'مهم',
      description: 'التربة في المنطقة الشرقية تتكون من رمال وطمي وطين. تعاني من التصحر والتآكل بسبب العوامل المناخية والأنشطة البشرية.'
    }
  ];

  const filteredResources = resources.filter(r => r.type === selectedResource);

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'oil':
        return Zap;
      case 'water':
        return Droplet;
      case 'minerals':
        return Gem;
      case 'soil':
        return AlertTriangle;
      default:
        return AlertTriangle;
    }
  };

  const getResourceColor = (type: string) => {
    switch (type) {
      case 'oil':
        return 'text-destructive';
      case 'water':
        return 'text-secondary';
      case 'minerals':
        return 'text-accent';
      case 'soil':
        return 'text-primary';
      default:
        return 'text-foreground';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/YfhCup8J8TNAVTBxsWdySW/sandbox/sAM8WWkN7xIXATkXrcNuyK-img-3_1770837797000_na1fn_Z2VvbG9naWNhbC1yZXNvdXJjZXM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWZoQ3VwOEo4VE5BVlRCeHNXZHlTVy9zYW5kYm94L3NBTThXV2tON3hJWEFUa1hyY051eUstaW1nLTNfMTc3MDgzNzc5NzAwMF9uYTFmbl9aMlZ2Ykc5bmFXTmhiQzF5WlhOdmRYSmpaWE0ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GiYhIEZU1I~E5GyMjdxehQptreuR8TYt5S1Ri8KXmH53UrDb1H0zWCzrcqZhKmE131hntSGqobD2J2cOZUs~slle863vUFmq1fdT3eQ0EqOVgOqZzSUnE4UeP0Z~khLZnDGa8kT9Iu0J1zkQChCywlgJuSylQTl9PQYtrEKGjl0jG1LRdOXLqVOTVYigQJu~zKZ8onz8VhWpead4pHH-ior8674IHI7nSqTqNWutMlHoC5kVPFtGdRqTqcNLOswibhSyaFR89RxKa4aTfxilhRMb9IDeuMitf84aPkKkQb~puHy2MFYalbr3VafxZQ6CB4ScVR4uSQU2TpZUeP60zQ__"
          alt="الجيولوجيا"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">الجيولوجيا والموارد الطبيعية</h1>
            <p className="text-lg md:text-xl">استكشف الطبقات الجيولوجية والموارد الطبيعية في المنطقة الشرقية</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16">
          <Tabs defaultValue="resources" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="resources">الموارد الطبيعية</TabsTrigger>
              <TabsTrigger value="impact">التأثيرات والتحديات</TabsTrigger>
            </TabsList>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-6">
              {/* Geological Cross-Section */}
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">المقطع الجيولوجي للمنطقة الشرقية</h3>
                <div className="bg-gradient-to-b from-blue-50 to-amber-50 p-8 rounded-lg border-2 border-primary">
                  <img
                    src="https://private-us-east-1.manuscdn.com/sessionFile/YfhCup8J8TNAVTBxsWdySW/sandbox/sAM8WWkN7xIXATkXrcNuyK-img-3_1770837797000_na1fn_Z2VvbG9naWNhbC1yZXNvdXJjZXM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWZoQ3VwOEo4VE5BVlRCeHNXZHlTVy9zYW5kYm94L3NBTThXV2tON3hJWEFUa1hyY051eUstaW1nLTNfMTc3MDgzNzc5NzAwMF9uYTFmbl9aMlZ2Ykc5bmFXTmhiQzF5WlhOdmRYSmpaWE0ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GiYhIEZU1I~E5GyMjdxehQptreuR8TYt5S1Ri8KXmH53UrDb1H0zWCzrcqZhKmE131hntSGqobD2J2cOZUs~slle863vUFmq1fdT3eQ0EqOVgOqZzSUnE4UeP0Z~khLZnDGa8kT9Iu0J1zkQChCywlgJuSylQTl9PQYtrEKGjl0jG1LRdOXLqVOTVYigQJu~zKZ8onz8VhWpead4pHH-ior8674IHI7nSqTqNWutMlHoC5kVPFtGdRqTqcNLOswibhSyaFR89RxKa4aTfxilhRMb9IDeuMitf84aPkKkQb~puHy2MFYalbr3VafxZQ6CB4ScVR4uSQU2TpZUeP60zQ__"
                    alt="المقطع الجيولوجي"
                    className="w-full h-auto"
                  />
                </div>
              </Card>

              {/* Resource Selection */}
              <div className="flex flex-wrap gap-3 mb-6">
                {['oil', 'water', 'minerals', 'soil'].map((type) => (
                  <Button
                    key={type}
                    variant={selectedResource === type ? 'default' : 'outline'}
                    onClick={() => setSelectedResource(type)}
                    className="flex items-center gap-2"
                  >
                    {type === 'oil' && <Zap size={16} />}
                    {type === 'water' && <Droplet size={16} />}
                    {type === 'minerals' && <Gem size={16} />}
                    {type === 'soil' && <AlertTriangle size={16} />}
                    {type === 'oil' && 'النفط'}
                    {type === 'water' && 'المياه الجوفية'}
                    {type === 'minerals' && 'المعادن'}
                    {type === 'soil' && 'التربة'}
                  </Button>
                ))}
              </div>

              {/* Resources Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResources.map((resource) => {
                  const Icon = getResourceIcon(resource.type);
                  return (
                    <Card key={resource.id} className="p-6 border-l-4 border-primary">
                      <div className="flex items-start gap-3 mb-4">
                        <Icon className={`w-8 h-8 ${getResourceColor(resource.type)}`} />
                        <div>
                          <h4 className="text-lg font-bold">{resource.name}</h4>
                          <p className="text-sm text-muted-foreground">{resource.type}</p>
                        </div>
                      </div>
                      <div className="space-y-3 mb-4">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">العمق</p>
                          <p className="text-foreground">{resource.depth}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">الاحتياطيات</p>
                          <p className="text-foreground">{resource.reserves}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">الأهمية</p>
                          <p className="text-foreground font-semibold text-primary">{resource.importance}</p>
                        </div>
                      </div>
                      <p className="text-foreground text-sm leading-relaxed">{resource.description}</p>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* Impact Tab */}
            <TabsContent value="impact" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">تأثير الموارد الطبيعية على الزراعة والصناعة</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-secondary">تأثير المياه الجوفية على الزراعة</h4>
                    <p className="text-foreground leading-relaxed mb-4">
                      المياه الجوفية هي العامل الحاسم في الإنتااج الزراعي في المنطقة الشرقية. استخراج المياه بكميات كبيرة يؤدي إلى انخفاض منسوب المياه الجوفية. هذا يؤثر على الإنتاجية الزراعية ويزيد من تكاليف الاستخراج. كما يؤثر على التنوع البيولوجي والنظم البيئية.
                    </p>
                    <div className="bg-secondary bg-opacity-10 p-4 rounded-lg">
                      <p className="text-sm text-foreground">
                        <strong>التحدي:</strong> الحفاظ على المياه الجوفية من التلوث والاستنزاف، مع تلبية احتياجات السكان والزراعة والصناعة.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-destructive">تأثير النفط على الصناعة والبيئة</h4>
                    <p className="text-foreground leading-relaxed mb-4">
                      النفط هو المحرك الرئيسي للاقتصاد في المنطقة الشرقية. استخراج ومعالجة النفط يؤدي إلى انبعاثات غازية وتسريبات نفطية. هذا يؤثر على جودة الهواء والماء والتربة. كما يؤثر على صحة السكان والنظم البيئية البحرية.
                    </p>
                    <div className="bg-destructive bg-opacity-10 p-4 rounded-lg">
                      <p className="text-sm text-foreground">
                        <strong>التحدي:</strong> تطوير تقنيات نظيفة لاستخراج ومعالجة النفط، والحد من الانبعاثات والتسريبات.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-accent">تأثير التربة والمعادن على الصناعة</h4>
                    <p className="text-foreground leading-relaxed mb-4">
                      المعادن والتربة هي موارد مهمة للصناعة والزراعة. استخراج المعادن يؤدي إلى تدهور التربة وفقدان الغطاء النباتي. كما يؤثر على جودة المياه الجوفية والسطحية. التصحر المتسارع يقلل من الإنتاجية الزراعية ويزيد من الهجرة من المناطق الريفية.
                    </p>
                    <div className="bg-accent bg-opacity-10 p-4 rounded-lg">
                      <p className="text-sm text-foreground">
                        <strong>التحدي:</strong> إدارة استخراج المعادن بطريقة مستدامة، والحفاظ على التربة والغطاء النباتي.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Resources */}
              <Card className="p-8 bg-primary bg-opacity-5">
                <h3 className="text-xl font-bold mb-4 text-primary">المصادر والمراجع</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• هيئة المساحة الجيولوجية السعودية - الدراسات الجيولوجية والمعدنية</li>
                  <li>• وزارة البيئة والمياه والزراعة - تقارير الموارد الطبيعية</li>
                  <li>• منظمة الأغذية والزراعة (FAO) - دراسات الزراعة والمياه</li>
                  <li>• الهيئة السعودية للطاقة - تقارير صناعة النفط والغاز</li>
                </ul>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  );
}
