type Talent = {
  rank: number;
  code: string;
  name: string;
  genre: string;
  popularity: number; // 0-100
  change: number; // +/- percent
  fee: string;
};

const TALENTS: Talent[] = [
  { rank: 1, code: "IU", name: "아이유 (IU)", genre: "솔로가수", popularity: 96, change: +2.3, fee: "5.2억원" },
  { rank: 2, code: "NJ", name: "뉴진스 (NewJeans)", genre: "걸그룹", popularity: 93, change: +5.1, fee: "6.5억원" },
  { rank: 3, code: "BTS", name: "방탄소년단 (BTS)", genre: "보이그룹", popularity: 91, change: -1.5, fee: "9.8억원" },
  { rank: 4, code: "AE", name: "에스파 (aespa)", genre: "걸그룹", popularity: 87, change: +3.8, fee: "4.7억원" },
  { rank: 5, code: "EH", name: "에픽하이 (Epik High)", genre: "힙합그룹", popularity: 82, change: -0.7, fee: "3.8억원" },
];

export default function TopTalents() {
  return (
    <div className="space-y-4">
      {TALENTS.map((t) => (
        <div key={t.rank} className="rounded-lg border bg-muted/40 p-4 flex items-center">
          <div className="w-8 text-sm font-bold text-primary mr-3 text-center">{t.rank}</div>
          <div className="mr-3 grid h-10 w-10 place-items-center rounded-full bg-primary/20 text-primary text-xs font-bold">
            {t.code}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <div className="font-medium">{t.name}</div>
              <span className="rounded-full border bg-background px-2 py-0.5 text-[11px] text-muted-foreground">
                {t.genre}
              </span>
            </div>
            <div className="mt-2 flex items-center gap-4">
              <div className="w-28">
                <div className="h-1.5 rounded bg-muted">
                  <div className="h-1.5 rounded bg-primary" style={{ width: `${t.popularity}%` }} />
                </div>
              </div>
              <span className="text-sm tabular-nums">{t.popularity}%</span>
              <span className={`text-xs ${t.change >= 0 ? 'text-[hsl(var(--success))]' : 'text-[hsl(var(--destructive))]'} font-medium`}>
                {t.change >= 0 ? '▲' : '▼'} {Math.abs(t.change)}%
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold">{t.fee}</div>
            <div className="text-xs text-muted-foreground">평균 출연료</div>
          </div>
        </div>
      ))}
    </div>
  );
}
