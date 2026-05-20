import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { showRewardedHintAd } from '@/lib/admob';
import { toast } from 'sonner';

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
    const loadingToast = toast.loading('Loading Google test ad...', {
      description: 'Preparing the rewarded test ad for hints.',
    });

    const result = await showRewardedHintAd();

    toast.dismiss(loadingToast);
    setIsWatching(false);

    if (result.rewarded) {
      toast.success('Test ad completed', {
        description: result.message,
      });
      onRewarded();
      onOpenChange(false);
      return;
    }

    toast.error('Test ad did not complete', {
      description: result.message,
    });
  };

  return (
    <Dialog open={open} onOpenChange={nextOpen => !isWatching && onOpenChange(nextOpen)}>
      <DialogContent className="w-[calc(100vw-2rem)] max-w-[18rem] rounded-[1.5rem] border-white/10 bg-slate-950/95 p-5 text-white shadow-[0_24px_80px_rgba(15,23,42,0.55)]">
        <DialogHeader className="space-y-1 text-left">
          <DialogTitle className="text-lg font-black text-white">
            Watch ad for {rewardAmount} hints?
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-300">
            This uses a Google AdMob rewarded test ad. The app will show whether it loaded, failed, or rewarded correctly.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button
            type="button"
            variant="ghost"
            disabled={isWatching}
            onClick={() => onOpenChange(false)}
            className="h-10 rounded-full border border-white/10 bg-white/5 font-black text-slate-200 hover:bg-white/10"
          >
            No
          </Button>
          <Button
            type="button"
            disabled={isWatching}
            onClick={handleWatchAd}
            className="h-10 rounded-full bg-amber-400 font-black text-slate-950 hover:bg-amber-300"
          >
            {isWatching ? 'Loading…' : 'Yes'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RewardedAdDialog;
