import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Lightbulb, Award } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'literature' | 'psychology';
}

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: 'أي من الشعراء الجاهليين يُعتبر من أشهر شعراء الحب والحنين؟',
      options: ['امرؤ القيس', 'عنترة العبسي', 'الفرزدق', 'جرير'],
      correctAnswer: 0,
      explanation: 'امرؤ القيس يعتبر من أشهر شعراء الحب والحنين في العصر الجاهلي، وله معلقة مشهورة تبدأ بـ "قفا نبك من ذكرى حبيب ومنزل"',
      category: 'literature'
    },
    {
      id: 2,
      question: 'ما هو تأثير الأدب الإيجابي على الصحة النفسية؟',
      options: ['لا تأثير له', 'يقلل التوتر والقلق', 'يزيد من الاكتئاب', 'لا يؤثر على المشاعر'],
      correctAnswer: 1,
      explanation: 'الأدب الجميل والإيجابي يساعد على تقليل التوتر والقلق ويحسن من المزاج والصحة النفسية بشكل عام.',
      category: 'psychology'
    },
    {
      id: 3,
      question: 'كيف تؤثر الطبيعة الصحراوية على الشعر الجاهلي؟',
      options: ['لا تؤثر', 'تجعله حزيناً وحنيناً', 'تجعله فقط عن الحب', 'لا علاقة لها'],
      correctAnswer: 1,
      explanation: 'الطبيعة الصحراوية القاسية أثرت على الشعراء الجاهليين وجعلتهم يعبرون عن الحزن والحنين والوحدة بطرق عميقة.',
      category: 'literature'
    },
    {
      id: 4,
      question: 'ما هي أهمية التواصل الاجتماعي للصحة النفسية؟',
      options: ['ليس مهماً', 'يقلل الشعور بالوحدة والعزلة', 'يزيد من الضغط النفسي', 'لا يؤثر على الصحة'],
      correctAnswer: 1,
      explanation: 'التواصل الاجتماعي والانتماء إلى مجموعات ثقافية واجتماعية يقلل من الشعور بالوحدة ويحسن الصحة النفسية.',
      category: 'psychology'
    },
    {
      id: 5,
      question: 'أي من الأدباء المعاصرين يُعرف بشعره عن الحب والوطن؟',
      options: ['محمود درويش', 'نزار قباني', 'أحمد شوقي', 'المتنبي'],
      correctAnswer: 1,
      explanation: 'نزار قباني يعتبر من أشهر الشعراء المعاصرين الذين عبروا عن الحب والوطن بطرق حديثة وجميلة.',
      category: 'literature'
    },
    {
      id: 6,
      question: 'كيف يمكن للأدب أن يساعد في التعامل مع الضغوط النفسية؟',
      options: ['لا يساعد', 'يوفر تعبيراً عن المشاعر ويقلل التوتر', 'يزيد من الضغط', 'لا علاقة له'],
      correctAnswer: 1,
      explanation: 'الأدب يوفر وسيلة للتعبير عن المشاعر المعقدة ويساعد على تقليل الضغط النفسي والتوتر.',
      category: 'psychology'
    },
    {
      id: 7,
      question: 'ما هو دور الأسرة في دعم الصحة النفسية للأفراد؟',
      options: ['دور ثانوي', 'دور أساسي وحيوي', 'لا دور لها', 'دور سلبي'],
      correctAnswer: 1,
      explanation: 'الأسرة تلعب دوراً أساسياً وحيوياً في دعم الصحة النفسية للأفراد من خلال الحب والدعم والتفهم.',
      category: 'psychology'
    },
    {
      id: 8,
      question: 'أي عصر أدبي شهد ازدهاراً ثقافياً كبيراً وتطوراً في الفكر الفلسفي؟',
      options: ['العصر الجاهلي', 'عصر صدر الإسلام', 'العصر العباسي', 'العصر الأموي'],
      correctAnswer: 2,
      explanation: 'العصر العباسي شهد ازدهاراً ثقافياً كبيراً وتطوراً في الفكر الفلسفي والأدبي والعلمي.',
      category: 'literature'
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-grow flex items-center justify-center">
          <Card className="p-8 max-w-md text-center">
            <Award className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-primary">مبروك!</h2>
            <p className="text-xl mb-6 text-foreground">
              لقد حصلت على <span className="font-bold text-primary">{score}</span> من <span className="font-bold">{questions.length}</span> نقاط
            </p>
            <p className="text-lg mb-6 text-foreground">
              {score === questions.length
                ? 'ممتاز! أنت خبير في الأدب والنفس!'
                : score >= questions.length * 0.7
                ? 'جيد جداً! معرفتك قوية!'
                : score >= questions.length * 0.5
                ? 'جيد! استمر في التعلم!'
                : 'حاول مرة أخرى وتعلم المزيد!'}
            </p>
            <Button onClick={handleRestart} className="w-full bg-primary hover:bg-primary/90">
              ابدأ من جديد
            </Button>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  const question = questions[currentQuestion];
  const categoryLabel = question.category === 'literature' ? 'الدراسات الأدبية' : 'الدراسات النفسية والاجتماعية';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">أسئلة تفاعلية ممتعة</h1>
            <p className="text-lg">اختبر معلوماتك عن الأدب والنفس</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-primary">السؤال {currentQuestion + 1} من {questions.length}</span>
                <span className="text-sm text-muted-foreground">{categoryLabel}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <Card className="p-8 mb-8">
              <div className="flex items-start gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-foreground">{question.question}</h2>
              </div>

              {/* Options */}
              <RadioGroup value={selectedAnswer?.toString() || ''}>
                <div className="space-y-3">
                  {question.options.map((option, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-secondary/5 cursor-pointer">
                      <RadioGroupItem
                        value={idx.toString()}
                        id={`option-${idx}`}
                        onClick={() => !showExplanation && handleAnswer(idx)}
                        disabled={showExplanation}
                      />
                      <Label
                        htmlFor={`option-${idx}`}
                        className="flex-grow cursor-pointer text-foreground"
                      >
                        {option}
                      </Label>
                      {showExplanation && idx === question.correctAnswer && (
                        <span className="text-green-600 font-bold">✓</span>
                      )}
                      {showExplanation && selectedAnswer === idx && idx !== question.correctAnswer && (
                        <span className="text-red-600 font-bold">✗</span>
                      )}
                    </div>
                  ))}
                </div>
              </RadioGroup>

              {/* Explanation */}
              {showExplanation && (
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <h4 className="font-bold text-primary mb-2">التوضيح:</h4>
                  <p className="text-foreground">{question.explanation}</p>
                </div>
              )}

              {/* Next Button */}
              {showExplanation && (
                <Button
                  onClick={handleNext}
                  className="w-full mt-6 bg-primary hover:bg-primary/90"
                >
                  {currentQuestion + 1 === questions.length ? 'انتهي الاختبار' : 'السؤال التالي'}
                </Button>
              )}
            </Card>

            {/* Score Display */}
            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                النقاط الحالية: <span className="font-bold text-primary">{score}</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
