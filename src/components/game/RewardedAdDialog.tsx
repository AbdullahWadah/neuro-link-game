import React, { useEffect, useState } from 'react';
import { Film, Play, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { showRewardedHintAd } from '@/lib/admob';

interface RewardedAdDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRewarded: () => void;
  rewardAmount?: number;
}

const RewardedAdDialog: React.FC<RewardedAdDialogProps> = ({
  open,
  onOpenChange,
  onRewarded,
  rewardAmount = 3,
}) => {
  const [isWatching, setIsWatching] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!open || !isWatching) {
      setProgress(0);
      return;
    }

    const startedAt = Date.now();
    const interval = window.setInterval(() => {
      const elapsed = Date.now() - startedAt;
      setProgress(Math.min(100, (elapsed / 3200) * 100));
    }, 120);

    return () => window.clearInterval(interval);
  }, [open, isWatching]);

  const handleWatchAd = async () => {
    setIsWatching(true);
    const result = await showRewardedHintAd();
    setIsWatching(false);

    if (result.rewarded) {
      onRewarded();
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={nextOpen => !isWatching && onOpenChange(nextOpen)}>
      <DialogContent className="w-[calc(100vw-2rem)] max-w-sm rounded-[2rem] border-white/10 bg-slate-950/95 p-0 text-white shadow-[0_24px_80px_rgba(15,23,42,0.55)]">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.16),_transparent_55%),linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))] p-5 sm:p-6">
          <DialogHeader className="space-y-3 text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-300 shadow-[0_0_30px_rgba(251,191,36,0.18)]">
              <Film size={22} />
            </div>
            <div>
              <DialogTitle className="text-xl font-black uppercase tracking-tight text-white">
                Need more hints?
              </DialogTitle>
              <DialogDescription className="mt-2 text-sm font-medium leading-6 text-slate-300">
                Watch a rewarded ad and receive <span className="font-black text-amber-300">{rewardAmount} extra hints</span> instantly.
              </DialogDescription>
            </div>
          </DialogHeader>

          <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
                <span>{isWatching ? 'Playing ad' : 'Ready for reward'}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Button
              type="button"
              variant="ghost"
              disabled={isWatching}
              onClick={() => onOpenChange(false)}
              className="h-12 rounded-full border border-white/10 bg-white/5 text-sm font-black uppercase tracking-[0.16em] text-slate-200 hover:bg-white/10"
            >
              Cancel
            </Button>
            <Button
              type="button"
              disabled={isWatching}
              onClick={handleWatchAd}
              className="h-12 rounded-full bg-amber-400 text-sm font-black uppercase tracking-[0.16em] text-slate-950 hover:bg-amber-300"
            >
              {isWatching ? (
                <span className="flex items-center gap-2">
                  <Sparkles size={16} />
                  Loading…
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Play size={16} />
                  Watch ad
                </span>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RewardedAdDialog;
