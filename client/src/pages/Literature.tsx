import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BookOpen, Quote } from 'lucide-react';

interface LiteraryPeriod {
  id: string;
  name: string;
  period: string;
  description: string;
  characteristics: string[];
  poets: string[];
  quotes: { text: string; poet: string; explanation?: string }[];
  image: string;
}

export default function Literature() {
  const [selectedPeriod, setSelectedPeriod] = useState(0);

  const literaryPeriods: LiteraryPeriod[] = [
    {
      id: 'jahiliyyah',
      name: 'العصر الجاهلي',
      period: 'قبل الإسلام - 622 م',
      description: 'يعتبر العصر الجاهلي من أعظم العصور الأدبية في التاريخ العربي. في هذا العصر ازدهرت الشاعرة العربية وتطورت تطوراً كبيراً. كان الشعراء يتمتعون بمكانة عالية في المجتمع العربي، وكانوا يعتبرون حفظة التراث والثقافة. الشعر الجاهلي يتميز بقوة اللغة والصور البيانية الجميلة والتعبير عن المشاعر الإنسانية العميقة. كان الشعراء يعبرون عن الحب والحنين والفخر والشجاعة والحكمة. المعلقات السبع تعتبر من أعظم آثار الشعر الجاهلي، وكانت تعلق على جدران الكعبة لجودتها وأهميتها.',
      characteristics: [
        'قوة اللغة والفصاحة',
        'الصور البيانية الجميلة والمعقدة',
        'التعبير عن المشاعر الإنسانية العميقة',
        'الاهتمام بالقيم القبلية والشرف',
        'الحنين والشوق والفراق',
        'الفخر بالأنساب والأصول'
      ],
      poets: ['امرؤ القيس', 'عنترة العبسي', 'الفرزدق', 'جرير', 'الأعشى', 'طرفة بن العبد', 'علقمة الفحل'],
      quotes: [
        {
          text: 'قِفَا نَبْكِ مِن ذِكرَى حَبِيبٍ وَمَنزِلِ\nبِسِقْطِ اللِّوَى بَيْنَ الدَّهْلِ وَالْحُومَلِ',
          poet: 'امرؤ القيس (من معلّقته الشهيرة)',
          explanation: 'هذي الأبيات من المعلّقة التي تعكس الحنين للأطلال والارتباط بالبيئة الصحراوية الرحبة، والذكرى التي تركتها الطبيعة على نفس الشاعر.'
        }
      ],
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/YfhCup8J8TNAVTBxsWdySW/sandbox/KKzXi8lCJ3FUaXxFXp3gir-img-2_1770840104000_na1fn_YW5jaWVudC1wb2V0cnktc2Nyb2xs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWZoQ3VwOEo4VE5BVlRCeHNXZHlTVy9zYW5kYm94L0tLelhpOGxDSjNGVWFYeEZYcDNnaXItaW1nLTJfMTc3MDg0MDEwNDAwMF9uYTFmbl9ZVzVqYVdWdWRDMXdiMlYwY25rdGMyTnliMnhzLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dvHzTaUIogwBDD8wnsWsC9x4iy7J63oYCfNB6mCxyXxMn3StuVWZCS-fBIkLhVmMqA9XBxdj8M1rB8M9s1kYlQK96krP3oKUV2TmRZcjUaE66dO5RFwZMi6t~HCxyz6oGKi69bp6K2RcfLdbA9QHtnSV1J4rdohzcHfvUHGKX9EfvsJQ0Sp8zp2w7MTtgg771chahHpsdRDH8lIR3qnYezRgzU3ieHNf-xassqaLRlP5xcJaoWKWN5Q1YIvBiU3AZBWxWpAnyWZW0B5h8MoIGOXJtHcPG1FmEUd2xYcn~6ezfoAvmFgDegSmwp8FSbp5XnbbLQE3ffnnpsp4AEiwlg__'
    },
    {
      id: 'sadr-islam',
      name: 'عصر صدر الإسلام',
      period: '622 - 661 م',
      description: 'مع ظهور الإسلام، تغيرت مضامين الشعر العربي بشكل جذري. أصبح الشعراء يعبرون عن القيم الإسلامية والتوحيد والجهاد والزهد. برز شعراء مثل حسان بن ثابت الذي كان شاعر الرسول صلى الله عليه وسلم. الشعر في هذا العصر احتفظ بالخصائص الفنية للشعر الجاهلي لكن مع تحول في المضمون والقيم. كان الشعراء يدافعون عن الإسلام ويرد على هجمات المشركين. الشعر أصبح وسيلة لنشر الدعوة الإسلامية والتعبير عن الإيمان والتقوى.',
      characteristics: [
        'التركيز على القيم الإسلامية',
        'الدفاع عن الإسلام والرد على المشركين',
        'التعبير عن الجهاد والشجاعة',
        'الزهد والتقوى',
        'الحفاظ على الخصائص الفنية الجاهلية',
        'الدعوة إلى التوحيد'
      ],
      poets: ['حسان بن ثابت', 'كعب بن زهير', 'عمرو بن الإطنابة', 'الأسود بن يعفر'],
      quotes: [
        {
          text: 'وَأَحسَنُ مِنْكَ لَمْ تُرَ قَطُّ عَيْني\nوَأَجمَلُ مِنْكَ لَمْ تَلِدِ الـنِّسَاءُ\nخُلِقْتَ مُبرَّأً مِن كُلِّ عَيْبٍ\nكَأَنَّكَ قَدْ خُلِقْتَ كَمَا تَشاءُ',
          poet: 'حَسَّان بن ثَابِت رضي الله عنه - شاعر الرسول ﷺ',
          explanation: 'الشاعر يقول إن النبي ﷺ أفضل وأجمل من كل من رآته العين وأنه خلق خالياً من العيوب بشكل لا يشبه أي بشر آخر — وهو مدح شعري قوي يعبّر عن احترام وتقدير الشاعر للنبي ﷺ.'
        }
      ],
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/YfhCup8J8TNAVTBxsWdySW/sandbox/KKzXi8lCJ3FUaXxFXp3gir-img-1_1770840112000_na1fn_Y2xhc3NpY2FsLWxpYnJhcnk.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWZoQ3VwOEo4VE5BVlRCeHNXZHlTVy9zYW5kYm94L0tLelhpOGxDSjNGVWFYeEZYcDNnaXItaW1nLTFfMTc3MDg0MDExMjAwMF9uYTFmbl9ZMnhoYzNOcFkyRnNMV3hwWW5KaGNuay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nYxgyuLRXhDflfjRI9163vp6x6qxu9G0MnjVz3sxMN2bz~6elMLzDT61fZ~r0kyd2tWSNOQdMn~x4dFq1Pdat850OIK3KAx8eBlXHW4h95OhTERPuRcy0C5u0PRC4geeJxLDn~hbi7p~UaRy~P~qqGZW5Y88IOwndHaNl~qQcoSnHudFEzTLJei-zJR5S8BPT1IjrXArtCZmwKPyin7XVowW2SoXc3MpLtUI9gWVlwKALcbCRq4I~RDhdm1ASev3Q8lgC2UK9njzPat5FLvv~ZuXcYOVHN8vOFxWUrRem~A3azmqQSwQfMLKQCKGKye76iHoF4oRSMTYJTuz~LVm0w__'
    },
    {
      id: 'umayyad',
      name: 'العصر الأموي',
      period: '661 - 750 م',
      description: 'شهد العصر الأموي ازدهاراً ثقافياً كبيراً وتطوراً في الشعر العربي. برزت فنون شعرية جديدة مثل الشعر الغزلي والشعر السياسي. كان الشعراء يعبرون عن الحب بطرق رقيقة وجميلة. ظهرت مدرستان شعريتان: مدرسة الحجاز التي اهتمت بالغزل والرقة، ومدرسة الكوفة التي اهتمت بالشعر السياسي والفخر. برز شعراء مثل جميل بثينة وقيس ليلى وعمر بن أبي ربيعة. الشعر الأموي يعكس الحياة الاجتماعية والسياسية للعصر.',
      characteristics: [
        'ظهور الشعر الغزلي الرقيق',
        'الشعر السياسي والفخر',
        'التعبير عن الحب والشوق',
        'الاهتمام بالصنعة الشعرية',
        'تنوع الموضوعات والأغراض',
        'الاهتمام بالجمال اللغوي'
      ],
      poets: ['عمر بن أبي ربيعة', 'جميل بثينة', 'قيس ليلى', 'الأخطل', 'الفرزدق', 'جرير'],
      quotes: [
        {
          text: 'إَنَّ العُيونَ اللَاتي في طرفِها حَورٌ\nقَتَلْنَنا ثُمَّ لَم يُحيينَ قَتلانا\nيَصرَعنَ ذا اللُبّ حَتّى لا حِراكَ بِهِ\nوَهُنَّ أَضعَفَ خَلقِ اللَهِ أَركانا',
          poet: 'جرير بن عطية',
          explanation: 'هذا الشعر يعبر عن قوة الحب وتأثيره على النفس الإنسانية، ويعكس العلاقات الإنسانية في المجتمع الأموي.'
        }
      ],
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/YfhCup8J8TNAVTBxsWdySW/sandbox/KKzXi8lCJ3FUaXxFXp3gir-img-4_1770840110000_na1fn_Y2xhc3NpY2FsLXdyaXRpbmctZGVzaw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWZoQ3VwOEo4VE5BVlRCeHNXZHlTVy9zYW5kYm94L0tLelhpOGxDSjNGVWFYeEZYcDNnaXItaW1nLTRfMTc3MDg0MDExMDAwMF9uYTFmbl9ZMnhoYzNOcFkyRnNMWGR5YVhScGJtY3RaR1Z6YXcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qEv9adN4Rq8qBSz83ZObY5eqy26A2gUpsDJrf689DVpYiBmXUyNhkM50QJD3cJ4Oo123uNyOYRnSzRxK22A36kKd-lSlqnV-yNj5puwCiJwLp6onCpbK1w2zT7kuuQe0b4Y09xH1bdcHXguQQmhUFu~aThKx7idL~zFdSOX1velWCz-juygtiMyv7~v9WXEEJJk~LEh8I5IHBJJoaX07KjEe37k8KI2b-IUtCOUGC41q6ik5jcgkJdGxetrunniLSfi6iw5Dcg3f-9sLeC8GS0rpVlkOKO0StAbGRC-KR0GNiwgl4wt3hd1mt-c4xX3EED1PqMB7xjlmLovBxMHlIA__'
    },
    {
      id: 'abbasid',
      name: 'العصر العباسي',
      period: '750 - 1258 م',
      description: 'يعتبر العصر العباسي من أزهى عصور الحضارة الإسلامية والأدب العربي. شهد هذا العصر ازدهاراً ثقافياً وعلمياً لم يشهده أي عصر قبله. برزت مدارس شعرية متعددة وظهرت أسماء لامعة في عالم الأدب. الشعراء العباسيون اهتموا بالصنعة الشعرية والجودة الفنية. ظهر الشعر الفلسفي والشعر الاجتماعي والشعر الغزلي بأشكال جديدة. برز شعراء مثل أبي نواس والمتنبي وأبي الطيب المتنبي. الشعر العباسي يعكس تطوراً كبيراً في الفكر والعلم والفن.',
      characteristics: [
        'الاهتمام بالصنعة الشعرية والجودة الفنية',
        'ظهور الشعر الفلسفي والاجتماعي',
        'تطور الصور البيانية والتشبيهات',
        'الاهتمام بالموسيقى الشعرية',
        'تنوع الموضوعات والأغراض',
        'التأثر بالثقافات الأخرى'
      ],
      poets: ['أبو نواس', 'المتنبي', 'أبو الطيب المتنبي', 'البحتري', 'ابن الرومي', 'الشريف الرضي'],
      quotes: [
        {
          text: 'الخَيلُ وَاللَيلُ وَالبَيداءُ تَعرِفني\nوَالسَيفُ وَالرُمحُ وَالقِرطاسُ وَالقَلمُ\nأَنامُ مِلءَ جُفوني عَن شَوارِدها\nوَيَسهَرُ الخَلْقُ جَراها وَيخْتِصمُ',
          poet: 'أبو الطيب المتنبي',
          explanation: 'هذه الأبيات من أشهر قصائد المتنبي وتعبر عن الفخر والعزة والشجاعة والعلم والفن الذي برع في العصر العباسي.'
        }
      ],
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/YfhCup8J8TNAVTBxsWdySW/sandbox/KKzXi8lCJ3FUaXxFXp3gir-img-3_1770840101000_na1fn_cHN5Y2hvbG9naWNhbC13ZWxsbmVzcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWZoQ3VwOEo4VE5BVlRCeHNXZHlTVy9zYW5kYm94L0tLelhpOGxDSjNGVWFYeEZYcDNnaXItaW1nLTNfMTc3MDg0MDEwMTAwMF9uYTFmbl9jSE41WTJodmJHOW5hV05oYkMxM1pXeHNibVZ6Y3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fIlVt8BB-R5wzL0dgQdgMG28P1tE9eRKMyUZ3U7Q1s0JQ5PUfUIdK2ba4WeXZjouFI9l0Gw6ZzRgW9CX2hCyp6wWufUJPIb1FdPjcaSuXsj4nWBUcry9RNdnlqkwVMtEdhrdgd7DTlPTfhA9HPOtXoDYuB3l7uEC6jFpIYxoEMXHH39HYk-s-~EhlI9ffS1ZrlnZHHe0bBFvUtca-lxO9vLu2-a3G~d7dG4XH0MXwdNkgbxvBIChMVGnzS4gkt7fXRcIuMvy8vxuFIWO0wIalXexU0gLUT~w1Mfn1Sl5SYikH4~TKpIRfpVeaQ5HLQAJrwHKpzKmxUElAylIroY0tA__'
    },
    {
      id: 'modern',
      name: 'العصر الحديث',
      period: '1798 م - الآن',
      description: 'شهد العصر الحديث تطوراً كبيراً في الأدب العربي مع التأثر بالثقافات الغربية والحداثة. برزت حركات أدبية جديدة مثل الرومانسية والواقعية والحداثة. ظهرت أسماء لامعة مثل نزار قباني ومحمود درويش وسيد قطب. الشعراء المعاصرون يعبرون عن قضايا اجتماعية وسياسية وإنسانية عميقة. الشعر الحديث يجمع بين الأصالة والحداثة، وبين التراث والمعاصرة. ظهرت أشكال جديدة من الشعر مثل قصيدة النثر والشعر الحر.',
      characteristics: [
        'التأثر بالثقافات الغربية والحداثة',
        'التعبير عن القضايا الاجتماعية والسياسية',
        'الجمع بين الأصالة والحداثة',
        'ظهور قصيدة النثر والشعر الحر',
        'الاهتمام بالتجربة الشخصية والمشاعر الإنسانية',
        'التجديد في الأشكال والموضوعات'
      ],
      poets: ['نزار قباني', 'محمود درويش', 'أحمد شوقي', 'حافظ إبراهيم', 'سيد قطب', 'عز الدين إسماعيل'],
      quotes: [
        {
          text: 'اغضبي كما تشاءي.. واجرح أحاسيسي كما تشاءي\nحطّم أواني الزهر والمرايا\nهدّد بحب امرأة سوايا.. فكل ما تفعله سواء\nكل ما تقوله سواء',
          poet: 'نزار قباني',
          explanation: 'هذه الأبيات تعبر عن العمق العاطفي للتجربة الإنسانية الحديثة، والتعبير عن المشاعر بعفوية مباشرة، وهي سمة مميزة للأدب المعاصر.'
        }
      ],
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/YfhCup8J8TNAVTBxsWdySW/sandbox/KKzXi8lCJ3FUaXxFXp3gir-img-5_1770840104000_na1fn_bWluZC1jb250ZW1wbGF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWZoQ3VwOEo4VE5BVlRCeHNXZHlTVy9zYW5kYm94L0tLelhpOGxDSjNGVWFYeEZYcDNnaXItaW1nLTVfMTc3MDg0MDEwNDAwMF9uYTFmbl9iV2x1WkMxamIyNTBaVzF3YkdGMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cpswVzXFFSm9QaDbz7upvv3JvZakTLLtM1Ifd0uCyLBGYDo~~EyIrQIMM02jjXFewnMuXUmVEZqvx0SEQi7PjErMqXz8erZqJ2ONL~8XMf5-mJSZAGTKlzNKbSslsjdL7L6DUSBoMjTQ1mPyySVqXPoRSf1ikHvKxW47Nr3W76QhV07Oi454DF1Vh3NWP-MdQ-pYN0tLWOKqtzfENzjasy6136qZOhBvaAus5WhCVHNf7lAn4iR6yRS~l2DmIynO9hFux20zMSJP3duGTutFfh9xyADYvTWlMJ8xX3H-96i~Tx3zVTMyv3KjFwLRnSbigPx3QeypFLGpj0YcRXMNg__'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={literaryPeriods[selectedPeriod].image}
          alt={literaryPeriods[selectedPeriod].name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-3">
              <BookOpen className="w-12 h-12" />
              الدراسات الأدبية
            </h1>
            <p className="text-xl md:text-2xl">رحلة عبر عصور الأدب العربي</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16">
          {/* Period Tabs */}
          <Tabs defaultValue="jahiliyyah" className="w-full mb-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              {literaryPeriods.map((period, idx) => (
                <TabsTrigger
                  key={period.id}
                  value={period.id}
                  onClick={() => setSelectedPeriod(idx)}
                  className="text-xs md:text-sm"
                >
                  {period.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Period Content */}
            {literaryPeriods.map((period) => (
              <TabsContent key={period.id} value={period.id} className="space-y-8">
                {/* Description */}
                <Card className="p-6 bg-card border-border">
                  <h2 className="text-3xl font-bold mb-4 text-primary">{period.name}</h2>
                  <p className="text-foreground mb-4 leading-relaxed">{period.description}</p>
                  <p className="text-sm text-muted-foreground italic">{period.period}</p>
                </Card>

                {/* Characteristics */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">الخصائص الأدبية</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {period.characteristics.map((char, idx) => (
                      <Card key={idx} className="p-4 bg-secondary text-secondary-foreground">
                        <p className="font-semibold">{char}</p>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Poets */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">الشعراء البارزون</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {period.poets.map((poet, idx) => (
                      <Card key={idx} className="p-3 bg-accent text-accent-foreground text-center">
                        <p className="font-semibold text-sm">{poet}</p>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Quotes */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
                    <Quote className="w-6 h-6" />
                    اقتباسات شعرية
                  </h3>
                  <div className="space-y-6">
                    {period.quotes.map((quote, idx) => (
                      <Card key={idx} className="p-6 bg-card border-l-4 border-primary">
                        <div className="mb-4">
                          <p className="text-lg italic text-foreground leading-relaxed whitespace-pre-line font-serif">
                            {quote.text}
                          </p>
                          <p className="text-primary font-bold mt-3">— {quote.poet}</p>
                        </div>
                        {quote.explanation && (
                          <div className="mt-4 p-4 bg-secondary bg-opacity-50 rounded">
                            <p className="text-sm text-foreground leading-relaxed">{quote.explanation}</p>
                          </div>
                        )}
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  );
}
