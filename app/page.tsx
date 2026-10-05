import { JudgingRubric } from "@/components/JudgingRubric";
import { OnboardingView } from "@/components/OnboardingView";
import { START } from "@/content/onboarding";

export default function HomePage() {
  return (
    <OnboardingView page={START}>
      <JudgingRubric />
    </OnboardingView>
  );
}
