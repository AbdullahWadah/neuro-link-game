import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
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
      <DialogContent className="w-[calc(100vw-2rem)] max-w-xs rounded-[1.75rem] border-white/10 bg-slate-950/95 p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.55)]">
        <DialogHeader className="space-y-2 text-left">
          <DialogTitle className="text-xl font-black tracking-tight text-white">
            Get more hints
          </DialogTitle>
          <DialogDescription className="text-sm leading-6 text-slate-300">
            Watch an ad to get <span className="font-black text-amber-300">{rewardAmount} hints</span>.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="ghost"
            disabled={isWatching}
            onClick={() => onOpenChange(false)}
            className="h-11 rounded-full border border-white/10 bg-white/5 font-black text-slate-200 hover:bg-white/10"
          >
            Cancel
          </Button>
          <Button
            type="button"
            disabled={isWatching}
            onClick={handleWatchAd}
            className="h-11 rounded-full bg-amber-400 font-black text-slate-950 hover:bg-amber-300"
          >
            {isWatching ? 'Loading…' : 'Watch'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RewardedAdDialog;
