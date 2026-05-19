const ScoreBadge = ({ score }: { score: number }) => {
    const badgeColor = score > 70
        ? 'bg-badge-green text-green-600'
        : score > 49
            ? 'bg-badge-yellow text-yellow-600'
            : 'bg-badge-red text-red-600';

    const label = score > 70 ? 'Strong' : score > 49 ? 'Good Start' : 'Next Work';

    return (
        <div className={`score-badge ${badgeColor}`}>
            <p className="text-sm font-medium">{label}</p>
        </div>
    );
};

export default ScoreBadge;
