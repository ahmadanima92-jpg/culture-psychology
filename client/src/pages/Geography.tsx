import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { AlertCircle, Droplets, Wind, Zap } from 'lucide-react';

/**
 * Geography Page
 * Design Philosophy: Sustainable Modernity
 * - Interactive environmental map
 * - Pollution hotspots visualization
 * - Environmental impact analysis
 */

interface PollutionPoint {
  id: string;
  name: string;
  type: 'air' | 'water' | 'soil' | 'industrial';
  severity: 'high' | 'medium' | 'low';
  description: string;
  lat: number;
  lng: number;
}

export default function Geography() {
  const [selectedType, setSelectedType] = useState<string>('all');

  const pollutionPoints: PollutionPoint[] = [
    {
      id: '1',
      name: 'منطقة صناعية - الجبيل',
      type: 'industrial',
      severity: 'high',
      description: 'مصانع ومنشآت صناعية كبرى',
      lat: 27.0073,
      lng: 49.6401
    },
    {
      id: '2',
      name: 'تلوث هوائي - الدمام',
      type: 'air',
      severity: 'high',
      description: 'انبعاثات من المنشآت الصناعية والمركبات',
      lat: 26.4124,
      lng: 50.1971
    },
    {
      id: '3',
      name: 'تلوث مائي - الخليج العربي',
      type: 'water',
      severity: 'medium',
      description: 'تسرب النفط والمواد الكيميائية',
      lat: 26.1551,
      lng: 50.2055
    },
    {
      id: '4',
      name: 'تصحر وتآكل التربة',
      type: 'soil',
      severity: 'high',
      description: 'فقدان الغطاء النباتي والتصحر المتسارع',
      lat: 25.5,
      lng: 49.5
    },
    {
      id: '5',
      name: 'منطقة صناعية - الظهران',
      type: 'industrial',
      severity: 'medium',
      description: 'منشآت نفطية وبتروكيماوية',
      lat: 26.1551,
      lng: 50.1971
    }
  ];

  const filteredPoints = selectedType === 'all' 
    ? pollutionPoints 
    : pollutionPoints.filter(p => p.type === selectedType);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-destructive';
      case 'medium':
        return 'bg-accent';
      default:
        return 'bg-chart-1';
    }
  };

  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'حرج';
      case 'medium':
        return 'متوسط';
      default:
        return 'منخفض';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'air':
        return 'تلوث هوائي';
      case 'water':
        return 'تلوث مائي';
      case 'soil':
        return 'تآكل التربة';
      case 'industrial':
        return 'منطقة صناعية';
      default:
        return type;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'air':
        return Wind;
      case 'water':
        return Droplets;
      case 'soil':
        return AlertCircle;
      case 'industrial':
        return Zap;
      default:
        return AlertCircle;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/YfhCup8J8TNAVTBxsWdySW/sandbox/sAM8WWkN7xIXATkXrcNuyK-img-2_1770837801000_na1fn_ZW52aXJvbm1lbnRhbC1jaGFsbGVuZ2Vz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWZoQ3VwOEo4VE5BVlRCeHNXZHlTVy9zYW5kYm94L3NBTThXV2tON3hJWEFUa1hyY051eUstaW1nLTJfMTc3MDgzNzgwMTAwMF9uYTFmbl9aVzUyYVhKdmJtMWxiblJoYkMxamFHRnNiR1Z1WjJWei5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RnhlBdPq1RbSnCVbJ70rqz2rmXRjhc5tl3xPBaO39Xs0yCttY8O8yDyADgaHmMoiqgEG5csPWlNLXE7fwVpJL2ytUKkHfyNaH6G6tyOo3LFWg8rAfQxokR0vjd1~yT8A2zjWHJydmILC8LK-POja7NeMEJ4XGJqtlWhMAvrVG1Bls5OqIXXhBvRn8qoAprf8nPH9MDM07OQZpBHoqXakpocI3ly0tc~3Z0eK8rliXyseAHttBdzkNsvNCpoaKPHWy52PHuTUy7SpqP5Ct5jwA21B5Fk~~hoxvY3b1DKLFaas4lnig04XilxjTHnk-h8vqmp2qX-~JZDysF5trHZP6w__"
          alt="التحديات البيئية"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">الجغرافيا والبيئة في المنطقة الشرقية</h1>
            <p className="text-lg md:text-xl">استكشف الخرائط التفاعلية والمشاكل البيئية</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16">
          <Tabs defaultValue="map" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="map">الخريطة التفاعلية</TabsTrigger>
              <TabsTrigger value="analysis">التحليل البيئي</TabsTrigger>
            </TabsList>

            {/* Map Tab */}
            <TabsContent value="map" className="space-y-6">
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Button
                  variant={selectedType === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedType('all')}
                >
                  الكل
                </Button>
                <Button
                  variant={selectedType === 'air' ? 'default' : 'outline'}
                  onClick={() => setSelectedType('air')}
                  className="flex items-center gap-2"
                >
                  <Wind size={16} />
                  تلوث هوائي
                </Button>
                <Button
                  variant={selectedType === 'water' ? 'default' : 'outline'}
                  onClick={() => setSelectedType('water')}
                  className="flex items-center gap-2"
                >
                  <Droplets size={16} />
                  تلوث مائي
                </Button>
                <Button
                  variant={selectedType === 'soil' ? 'default' : 'outline'}
                  onClick={() => setSelectedType('soil')}
                  className="flex items-center gap-2"
                >
                  <AlertCircle size={16} />
                  تآكل التربة
                </Button>
                <Button
                  variant={selectedType === 'industrial' ? 'default' : 'outline'}
                  onClick={() => setSelectedType('industrial')}
                  className="flex items-center gap-2"
                >
                  <Zap size={16} />
                  مناطق صناعية
                </Button>
              </div>

              {/* Map Container */}
              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-primary/10 h-96 flex items-center justify-center">
                <div className="text-center">
                  <img
                    src="https://private-us-east-1.manuscdn.com/sessionFile/YfhCup8J8TNAVTBxsWdySW/sandbox/sAM8WWkN7xIXATkXrcNuyK-img-5_1770837799000_na1fn_ZWFzdGVybi1wcm92aW5jZS1tYXA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWZoQ3VwOEo4VE5BVlRCeHNXZHlTVy9zYW5kYm94L3NBTThXV2tON3hJWEFUa1hyY051eUstaW1nLTVfMTc3MDgzNzc5OTAwMF9uYTFmbl9aV0Z6ZEdWeWJpMXdjbTkyYVc1alpTMXRZWEEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=c04j39jEPa9V1CVP4KqBNrds~nxdyEFK56qxuZ7XSpbqSdDvcFmVhT89JLG1zaaspDYyOqXwQJUg2gjdWcMWJNI6azykSO1h0FI7~zwzstbVV52VV14chE09v9xG2189qCy5RY6gaQU9dQ~e02m-EA3qP6mXfrOsKMe0K5a6DQcUEkchTTVP2Qlm4bQiYnOlnLqoRHTVdlr5t1lz16KaWL40GxSC8ENdD3ipoeNkaZCDYfmv4y4hjsY5PJfBoaH1ULCMtbPoVF3ZfUrzHI27mOwXolrXTH4-zXr3a9OEuSFUpWNiNci1seb58s6Kg2CYGWIvIDczBebIIbdLLJO~Vg__"
                    alt="خريطة المنطقة الشرقية"
                    className="w-full h-full object-contain"
                  />
                </div>
              </Card>

              {/* Pollution Points List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPoints.map((point) => {
                  const TypeIcon = getTypeIcon(point.type);
                  return (
                    <Card key={point.id} className="p-6 border-l-4 border-primary hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <TypeIcon className="w-6 h-6 text-primary" />
                          <h3 className="font-bold text-lg">{point.name}</h3>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getSeverityColor(point.severity)}`}>
                          {getSeverityLabel(point.severity)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{getTypeLabel(point.type)}</p>
                      <p className="text-foreground">{point.description}</p>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* Analysis Tab */}
            <TabsContent value="analysis" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">تحليل التأثيرات البيئية على الحياة اليومية</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Wind className="text-destructive" />
                      تأثير التلوث الهوائي
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      يؤثر التلوث الهوائي بشكل مباشر على الصحة النفسية والجسدية للسكان. الانبعاثات من المنشآت الصناعية والمركبات تزيد من أمراض الجهاز التنفسي والحساسية. كما يؤثر على الصحة النفسية من خلال زيادة التوتر والقلق.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Droplets className="text-secondary" />
                      تأثير التلوث المائي
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      تلوث المياه الجوفية والسطحية يؤثر على جودة المياه المستخدمة في الشرب والري. هذا يؤدي إلى مشاكل صحية عديدة ويؤثر على الإنتاجية الزراعية والصناعية. كما يؤثر على التنوع البيولوجي البحري والبري.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <AlertCircle className="text-accent" />
                      تأثير التصحر وتآكل التربة
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      فقدان الغطاء النباتي والتصحر المتسارع يؤثر على الزراعة والثروة السمكية. يقلل من المساحات الخضراء المتاحة للسكان، مما يؤثر على الصحة النفسية والاجتماعية. كما يزيد من الفقر والهجرة من المناطق الريفية.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Zap className="text-primary" />
                      الآثار الاجتماعية والاقتصادية
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      المشاكل البيئية تؤثر على الاستقرار الاجتماعي والاقتصادي للمجتمع. تزيد من الفقر والبطالة، وتؤثر على جودة الحياة. كما تؤثر على السياحة والاستثمارات في المنطقة.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Resources */}
              <Card className="p-8 bg-primary bg-opacity-5">
                <h3 className="text-xl font-bold mb-4 text-primary">المصادر والمراجع</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• وزارة البيئة والمياه والزراعة - تقارير الحالة البيئية</li>
                  <li>• هيئة المساحة الجيولوجية السعودية - الدراسات الجيولوجية</li>
                  <li>• تقارير التنمية الإقليمية للمنطقة الشرقية</li>
                  <li>• منظمة الصحة العالمية - معايير جودة الهواء والماء</li>
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
