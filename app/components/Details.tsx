import {
    Accordion,
    AccordionContent,
    AccordionHeader,
    AccordionItem,
} from "~/components/Accordion";
import { cn } from "~/lib/utils";

type CategoryTip = {
    type: 'good' | 'improve';
    tip: string;
    explanation: string;
};

const ScoreBadge = ({ score }: { score: number }) => {
    const isStrong = score > 69;
    const isAverage = score > 39;

    return (
        <div
            className={cn(
                'flex flex-row items-center gap-2 rounded-full px-3 py-1',
                isStrong
                    ? 'bg-green-100 text-green-700'
                    : isAverage
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
            )}
        >
            {isStrong && <img src="/icons/check.svg" alt="" className="w-4 h-4" />}
            <p className="text-sm font-semibold">{score}/100</p>
        </div>
    );
};

const CategoryHeader = ({ title, categoryScore }: { title: string; categoryScore: number }) => {
    return (
        <div className="flex flex-row items-center justify-between gap-4 w-full">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <ScoreBadge score={categoryScore} />
        </div>
    );
};

const CategoryContent = ({ tips }: { tips: CategoryTip[] }) => {
    return (
        <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3">
                {tips.map((item, index) => (
                    <div key={`${item.tip}-${index}`} className="flex flex-row items-start gap-3">
                        <img
                            src={item.type === 'good' ? '/icons/check.svg' : '/icons/warning.svg'}
                            alt=""
                            className="w-5 h-5 mt-0.5"
                        />
                        <p className="text-gray-700">{item.tip}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-3">
                {tips.map((item, index) => (
                    <div
                        key={`${item.explanation}-${index}`}
                        className={cn(
                            'rounded-xl border p-4',
                            item.type === 'good'
                                ? 'border-green-200 bg-green-50'
                                : 'border-yellow-200 bg-yellow-50'
                        )}
                    >
                        <p
                            className={cn(
                                'font-semibold',
                                item.type === 'good' ? 'text-green-700' : 'text-yellow-700'
                            )}
                        >
                            {item.tip}
                        </p>
                        <p className="mt-2 text-sm text-gray-600">{item.explanation}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Details = ({ feedback }: { feedback: Feedback }) => {
    const categories = [
        {
            id: 'tone-and-style',
            title: 'Tone & Style',
            score: feedback.toneAndStyle.score,
            tips: feedback.toneAndStyle.tips,
        },
        {
            id: 'content',
            title: 'Content',
            score: feedback.content.score,
            tips: feedback.content.tips,
        },
        {
            id: 'structure',
            title: 'Structure',
            score: feedback.structure.score,
            tips: feedback.structure.tips,
        },
        {
            id: 'skills',
            title: 'Skills',
            score: feedback.skills.score,
            tips: feedback.skills.tips,
        },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-md p-4">
            <Accordion defaultOpen="tone-and-style" allowMultiple className="space-y-0">
                {categories.map((category) => (
                    <AccordionItem key={category.id} id={category.id}>
                        <AccordionHeader itemId={category.id}>
                            <CategoryHeader title={category.title} categoryScore={category.score} />
                        </AccordionHeader>
                        <AccordionContent itemId={category.id}>
                            <CategoryContent tips={category.tips} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Details;
