type ATSSuggestion = {
    type: 'good' | 'improve';
    tip: string;
};

const ATS = ({ score, suggestions }: { score: number; suggestions: ATSSuggestion[] }) => {
    const gradientColor = score > 69
        ? 'from-green-100'
        : score > 49
            ? 'from-yellow-100'
            : 'from-red-100';

    const icon = score > 69
        ? '/icons/ats-good.svg'
        : score > 49
            ? '/icons/ats-warning.svg'
            : '/icons/ats-bad.svg';

    return (
        <div className={`bg-gradient-to-b ${gradientColor} to-white rounded-2xl shadow-md p-6 flex flex-col gap-6`}>
            <div className="flex flex-row items-center gap-4">
                <img src={icon} alt="" className="w-14 h-14" />
                <h2 className="text-2xl font-bold !text-black">ATS Score - {score}/100</h2>
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-gray-900">How your resume performs with ATS</h3>
                <p className="text-gray-500">
                    This score reflects how well your resume can be parsed by applicant tracking systems and matched against role requirements.
                </p>

                <div className="flex flex-col gap-3">
                    {suggestions.map((suggestion, index) => (
                        <div key={`${suggestion.tip}-${index}`} className="flex flex-row items-start gap-3">
                            <img
                                src={suggestion.type === 'good' ? '/icons/check.svg' : '/icons/warning.svg'}
                                alt=""
                                className="w-5 h-5 mt-0.5"
                            />
                            <p className="text-gray-700">{suggestion.tip}</p>
                        </div>
                    ))}
                </div>

                <p className="font-medium text-gray-900">
                    Keep refining your resume to improve your ATS match and increase your chances of getting noticed.
                </p>
            </div>
        </div>
    );
};

export default ATS
